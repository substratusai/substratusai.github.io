import json
import os

import pytest
from pytest_dependency import depends  # import the depends function
from testbook import testbook
from google.cloud import storage
import google.auth
from google.auth.transport.requests import Request


def authenticate_to_gcp():
    credentials, project = google.auth.default()
    if not credentials.valid:
        if credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())

    if credentials.token:
        os.environ["GOOGLE_CREDENTIALS"] = credentials.token
    else:
        raise ValueError("credentials.token is empty")


def ensure_gcp_project():
    project_id = os.environ.get("PROJECT_ID", "substratus-integration-tests")
    return f"!gcloud config set project {project_id} -q"


@pytest.fixture(scope="session")
def tb_quickstart():
    with testbook("docs/quickstart.ipynb", execute=False, timeout=1800) as tb:
        yield tb


@pytest.fixture(scope="session")
def auth_tb_quickstart(tb_quickstart):
    authenticate_to_gcp()
    tb_quickstart.inject(ensure_gcp_project())
    yield tb_quickstart


@pytest.fixture(scope="module")
def auth_tb_finetuning_models():
    with testbook(
        "docs/walkthrough/finetuning-models.ipynb",
        execute=False,
    ) as tb:
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_datasets():
    with testbook(
        "docs/walkthrough/loading-datasets.ipynb",
        # TODO(bjb): try to execute=True against this nb
        execute=False,
    ) as tb:
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_models():
    with testbook(
        "docs/walkthrough/loading-models.ipynb",
        execute=False,
    ) as tb:
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="module")
def auth_tb_serving_models():
    with testbook(
        "docs/walkthrough/serving-models.ipynb",
        execute=False,
    ) as tb:
        authenticate_to_gcp()
        tb.inject(ensure_gcp_project())
        yield tb


@pytest.fixture(scope="session", autouse=True)
def gcp_setup(auth_tb_quickstart):
    for attempt in range(3):  # Retry up to 3 times
        try:
            auth_tb_quickstart.execute_cell("installer gcp-up")
            # TODO(bjb): ideally we could namespace all the infra components so more than one user could be running tests at once
            assert "Apply complete!" in auth_tb_quickstart.cell_output_text(
                "installer gcp-up"
            )
            break
        except Exception as err:
            print(f"gcp-up encountered an error: {err}")
            if attempt == 1:
                delete_state_lock()
            continue

    yield  # teardown below the yield
    # NOTE(bjb): comment out the following lines to keep infra up and iterate more rapidly on tests
    for attempt in range(3):  # Retry up to 3 times
        try:
            auth_tb_quickstart.execute_cell("installer gcp-down")
            assert "Apply complete!" in auth_tb_quickstart.cell_output_text(
                "installer gcp-down"
            )
            break
        except Exception as err:
            print(f"gcp-down encountered an error: {err}")
            if attempt == 1:
                delete_state_lock()
            continue


def delete_state_lock(
    bucket_name="substratus-integration-tests-substratus-terraform",
    blob_name="primary/default.tflock",
):
    """Deletes the state file from the bucket."""
    print("deleting state lock file from bucket")
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    blob.delete()

    print("Blob {} deleted.".format(blob_name))
