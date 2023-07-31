import logging
import os
import subprocess

import google.auth
import pytest
from capture_output_stream import start_watches
from google.auth.transport.requests import Request
from google.cloud import storage
from testbook import testbook
from testbook.testbook import TestbookNotebookClient

logging.basicConfig(level=logging.INFO, format="%(levelname)s:%(name)s: %(message)s")
logger = logging.getLogger(__name__)


def pytest_addoption(parser):
    parser.addoption("--branch", action="store", default="main")


def verify_auth():
    """
    verify_auth checks that your credentials are valid and not expired. This is
    less necessary in a CI context but useful for local testing since you'd
    otherwise be prompted for a password within the notebook under test.
    """
    credentials, _ = google.auth.default()
    if not credentials.valid and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
        return

    if credentials.token:
        os.environ["GOOGLE_CREDENTIALS"] = credentials.token
        return
    if os.environ.get("GOOGLE_CREDENTIALS"):
        credentials.token = os.environ.get("GOOGLE_CREDENTIALS")
        return
    raise ValueError("Failed to authenticate with GCP")


@pytest.fixture(scope="session")
def branch(pytestconfig):
    return pytestconfig.getoption("branch")


def ensure_gcp_project() -> str:
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
        "docs/walkthrough/finetuning-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_datasets(branch):
    with testbook(
        "docs/walkthrough/loading-datasets.ipynb",
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
        "docs/walkthrough/loading-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_serving_models(branch):
    with testbook(
        "docs/walkthrough/serving-models.ipynb",
        execute=False,
    ) as tb:
        verify_auth()
        change_branch(tb, branch)
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="session", autouse=True)
def gcp_setup(auth_tb_quickstart):
    threads, stop_event = start_watches()  # start watches in threads
    for attempt in range(3):  # Retry up to 3 times
        logger.debug(f"Attempt {attempt} to execute installer gcp-up")
        try:
            auth_tb_quickstart.execute_cell("installer gcp-up")
            assert "Apply complete!" in auth_tb_quickstart.cell_output_text(
                "installer gcp-up"
            )
            break
        except Exception as err:
            logger.warning(f"gcp-up encountered an error: {err}")
            if attempt == 1:
                delete_state_lock()
            continue

    yield  # teardown below the yield

    logger.debug("Tearing down gcp_setup")
    try:
        for attempt in range(3):  # Retry up to 3 times
            try:
                auth_tb_quickstart.execute_cell("installer gcp-down")
                assert "Destroy complete!" in auth_tb_quickstart.cell_output_text(
                    "installer gcp-down"
                )
                break
            except Exception as err:
                logger.warning(f"gcp-down encountered an error: {err}")
                if attempt == 1:
                    delete_state_lock()
                continue
    finally:
        stop_event.set()
        for thread in threads:
            thread.join(timeout=1)
            if thread.is_alive():
                logger.warning(f"Thread {thread.name} did not stop as expected")


def delete_state_lock(
    bucket_name="substratus-integration-tests-substratus-terraform",
    blob_name="primary/default.tflock",
):
    """Deletes the state file from the bucket."""
    print("deleting state lock file from bucket")
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    if blob.exists():
        blob.delete()
        print("Blob {} deleted.".format(blob_name))
    print("lock file does not exist")


def change_branch(tb: TestbookNotebookClient, branch: str) -> None:
    for c in tb.cells:
        if "https://raw.githubusercontent.com/substratusai/substratus/main" in c.source:
            c.source = c.source.replace(
                "https://raw.githubusercontent.com/substratusai/substratus/main",
                f"https://raw.githubusercontent.com/substratusai/substratus/{branch}",
            )
