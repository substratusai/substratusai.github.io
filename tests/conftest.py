"""
conftest - a conventional place to configure pytest and put fixtures
"""
import logging
import os
import re
import subprocess
import time

import pytest
from google.cloud import artifactregistry_v1, container_v1, storage
from google.cloud.container_v1.types import DeleteClusterRequest
from googleapiclient.discovery import build
from testbook import testbook
from testbook.testbook import TestbookNotebookClient

logging.basicConfig(
    level=logging.INFO,
    format="%(message)s",
)
logger = logging.getLogger(__name__)
PROJECT_ID = None


def pytest_addoption(parser):
    parser.addoption("--branch", action="store", default="main")


def verify_auth():
    """
    verify_auth checks that your credentials are valid and not expired. This is
    less necessary in a CI context but useful for local testing since you'd
    otherwise be prompted for a password within the notebook under test.
    """
    try:
        result = subprocess.run(
            ["gcloud", "auth", "list"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        if "No credentialed accounts." in result.stdout:
            raise ValueError("No credentialed accounts")
        elif "Credentialed Accounts" in result.stdout:
            return
        else:
            raise Exception(f"Unexpected output: {result.stdout}")
    except Exception as err:
        Exception(f"An error occurred while checking gcloud authentication: {str(err)}")


@pytest.fixture(scope="session")
def branch(pytestconfig):
    return pytestconfig.getoption("branch")


def ensure_gcp_project() -> str:
    global PROJECT_ID
    project_id = subprocess.run(
        ["gcloud", "config", "get-value", "project"],
        capture_output=True,
        text=True,
    ).stdout.strip()

    if not project_id or project_id == "(unset)":
        project_id = os.environ.get("PROJECT_ID")

    if not project_id:
        raise ValueError(
            "Project ID is not set. Please set the PROJECT_ID environment variable."
        )
    PROJECT_ID = project_id
    return f"!gcloud config set project {project_id} -q"


@pytest.fixture(scope="session")
def tb_quickstart(branch):
    with testbook("docs/quickstart.ipynb", execute=False, timeout=1800) as tb:
        change_branch(tb, branch)
        yield tb


@pytest.fixture(scope="session")
def auth_tb_quickstart(tb_quickstart, branch):
    verify_auth()
    change_branch(tb_quickstart, branch)
    tb_quickstart.inject(ensure_gcp_project())
    yield tb_quickstart


@pytest.fixture(scope="module")
def auth_tb_finetuning_models(branch):
    with testbook(
        "docs/guides/finetuning-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_datasets(branch):
    with testbook(
        "docs/guides/loading-datasets.ipynb",
        # TODO(bjb): next iteration, try to execute=True against this nb
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_models(branch):
    with testbook(
        "docs/guides/loading-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_serving_models(branch):
    with testbook(
        "docs/guides/serving-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="session", autouse=True)
def gcp_setup(auth_tb_quickstart):
    for attempt in range(3):  # Retry up to 3 times
        logger.info(f"Attempt {attempt + 1} to execute installer gcp-up")
        try:
            auth_tb_quickstart.execute_cell("installer gcp-up")
            up_output = auth_tb_quickstart.cell_output_text("installer gcp-up")
            if "Apply complete!" in up_output:
                break
            if "Error 409" in up_output:
                delete_conflicts(up_output)
                continue
            if "Error acquiring the state lock" in up_output:
                delete_state_lock()
        except Exception as err:
            logger.warning(f"gcp-up encountered an error: {err}")
            continue

    yield  # teardown below the yield

    for attempt in range(3):  # Retry up to 3 times
        logger.info(f"Attempt {attempt + 1} to execute installer gcp-down")
        try:
            auth_tb_quickstart.execute_cell("installer gcp-down")
            down_output = auth_tb_quickstart.cell_output_text("installer gcp-down")
            if "Destroy complete!" in down_output:
                break
            elif "Error acquiring the state lock" in down_output:
                delete_state_lock()
        except Exception as err:
            logger.warning(f"gcp-down encountered an error: {err}")
            continue
    logger.info("gcp-down completed successfully")


def delete_conflicts(up_output: str, location: str = "us-central1"):
    """Delete any resources that are causing conflicts during gcp-up"""
    conflict_lines = re.findall(r"Error 409: (.*?)\n", up_output)
    location_pattern = re.compile(r"locations/(\w+-\w+\d)")
    location_match = location_pattern.search(up_output)
    location = location_match.group(1) if location_match else "us-central1"

    for line in conflict_lines:
        logger.info(f"Deleting conflicting resource in line: {line}")

        if "Service account" in line:
            # Extract and delete the service account
            service_account_name_part = line.split(" ")[2].strip().rstrip(".")
            service_account_email = (
                f"{service_account_name_part}@{PROJECT_ID}.iam.gserviceaccount.com"
            )
            delete_service_account(service_account_email)
        elif "bucket succeeded and you already own it." in line:
            # Extract and delete the bucket
            bucket_name = f"{PROJECT_ID}-substratus-artifacts"
            delete_bucket(bucket_name)
        elif "the repository already exists" in line:
            # Delete the artifact registry repository
            repository_name = "substratus"
            delete_repository(repository_name, location)
        elif "Already exists: projects" in line and "clusters" in line:
            # Extract and delete the cluster
            cluster_name = line.split("/")[-1].rstrip(".").rstrip().rstrip(".")
            delete_cluster(cluster_name, location)


def delete_service_account(
    service_account_email: str,
):
    service = build("iam", "v1")
    full_name = f"projects/{PROJECT_ID}/serviceAccounts/{service_account_email}"
    logger.info(f"deleting SA: {full_name}")
    service.projects().serviceAccounts().delete(name=full_name).execute()


def delete_cluster(cluster_name: str, location: str):
    container_client = container_v1.ClusterManagerClient()
    logger.info(
        f"cluster is projects/{PROJECT_ID}/locations/{location}/clusters/{cluster_name}"
    )
    req = DeleteClusterRequest(
        name=f"projects/{PROJECT_ID}/locations/{location}/clusters/{cluster_name}"
    )
    container_client.delete_cluster(req)
    logger.info("waiting 5 minutes for cluster deletion")
    time.sleep(300)  # Wait for cluster deletion to complete


def delete_bucket(bucket_name: str):
    storage_client = storage.Client()
    logger.info(f"deleting bucket {bucket_name}")
    bucket = storage_client.get_bucket(bucket_name)
    bucket.delete(force=True)


def delete_repository(repository_name: str, location: str):
    artifact_client = artifactregistry_v1.ArtifactRegistryClient()
    artifact_client.delete_repository(
        name=f"projects/{PROJECT_ID}/locations/{location}/repositories/{repository_name}"
    )


def delete_state_lock(bucket_name=None, blob_name="primary/default.tflock"):
    """Deletes the state file from the bucket."""
    global PROJECT_ID
    ensure_gcp_project()
    if bucket_name is None:
        if PROJECT_ID is None:
            raise ValueError("PROJECT_ID must be set before calling this function")
        bucket_name = f"{PROJECT_ID}-substratus-terraform"

    logger.info(f"deleting state lock file from bucket: {bucket_name}")
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    if blob.exists():
        blob.delete()
        print(f"Blob {blob_name} deleted.")
    else:
        print("lock file does not exist")


def change_branch(tb: TestbookNotebookClient, branch: str) -> None:
    for c in tb.cells:
        if "https://raw.githubusercontent.com/substratusai/substratus/main" in c.source:
            c.source = c.source.replace(
                "https://raw.githubusercontent.com/substratusai/substratus/main",
                f"https://raw.githubusercontent.com/substratusai/substratus/{branch}",
            )
