import pytest
import asyncio
import os
import subprocess

from pytest_dependency import depends
from testbook import testbook
from google.cloud import storage
import google.auth
from google.auth.transport.requests import Request
from testbook.testbook import TestbookNotebookClient
import logging
from capture_output_stream import main

logging.basicConfig(level=logging.INFO)
# TODO(bjb): remove
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


def pytest_addoption(parser):
    parser.addoption("--branch", action="store", default="main")


@pytest.fixture(scope="session")
def branch(pytestconfig):
    return pytestconfig.getoption("branch")


def authenticate_to_gcp():
    credentials, project = google.auth.default()
    if not credentials.valid:
        if credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())

    if credentials.token:
        os.environ["GOOGLE_CREDENTIALS"] = credentials.token
    if os.environ.get("GOOGLE_CREDENTIALS"):
        credentials.token = os.environ.get("GOOGLE_CREDENTIALS")
    else:
        raise ValueError("credentials.token is empty")


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
    change_branch(tb_quickstart, branch)
    authenticate_to_gcp()
    tb_quickstart.inject(ensure_gcp_project())
    yield tb_quickstart


@pytest.fixture(scope="module")
def auth_tb_finetuning_models(branch):
    with testbook(
        "docs/walkthrough/finetuning-models.ipynb",
        execute=False,
    ) as tb:
        change_branch(tb, branch)
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_datasets(branch):
    with testbook(
        "docs/walkthrough/loading-datasets.ipynb",
        # TODO(bjb): next iteration, try to execute=True against this nb
        execute=False,
    ) as tb:
        change_branch(tb, branch)
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_models(branch):
    with testbook(
        "docs/walkthrough/loading-models.ipynb",
        execute=False,
    ) as tb:
        change_branch(tb, branch)
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_serving_models(branch):
    with testbook(
        "docs/walkthrough/serving-models.ipynb",
        execute=False,
    ) as tb:
        change_branch(tb, branch)
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="session", autouse=True)
def gcp_setup(auth_tb_quickstart):
    logger.debug("Starting gcp_setup")

    # Create a new event loop for this fixture
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    logger.info("before capturing stream")
    main_task = loop.create_task(main())  # Create task using the created loop
    logger.info("output should stream")
    # ... rest of the code ...

    # Close the event loop when done
    loop.close()


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
