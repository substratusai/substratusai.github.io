"""
conftest - a conventional place to configure pytest and put fixtures
"""
import ctypes
import logging
import os
import subprocess

import pytest
from emit_ipyk_output_stream import start_watches
from google.cloud import storage
from testbook import testbook
from testbook.testbook import TestbookNotebookClient

logging.basicConfig(
    level=logging.INFO,
    format="%(message)s",
)
logger = logging.getLogger(__name__)


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
        logger.info(f"Attempt {attempt + 1} to execute installer gcp-up")
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

    try:
        for attempt in range(3):  # Retry up to 3 times
            logger.info(f"Attempt {attempt + 1} to execute installer gcp-down")
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
        try:
            stop_event.set()
            for thread in threads:
                thread.join(timeout=1)

            # Check for any threads that did not stop and forcefully terminate them
            force_terminate_threads(threads)
        except Exception as err:
            logger.error(f"An error occurred during thread termination: {err}")


def force_terminate_threads(threads):
    alive_threads = [thread for thread in threads if thread.is_alive()]
    if not alive_threads:
        return

    logger.warning(
        f"Forcefully terminating threads {', '.join(thread.name for thread in alive_threads)}"
    )
    for thread in alive_threads:
        res = ctypes.pythonapi.PyThreadState_SetAsyncExc(
            ctypes.c_long(thread.ident), ctypes.py_object(SystemExit)
        )
        if res == 0:
            logger.error("Invalid thread ID for thread %s", thread.name)
        elif res > 1:
            # If we accidentally hit the wrong thread, clean up the exception
            ctypes.pythonapi.PyThreadState_SetAsyncExc(thread.ident, 0)
            logger.error(
                "Failure to terminate thread %s, hit wrong thread", thread.name
            )


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
