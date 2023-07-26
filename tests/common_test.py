import os
import pytest
from testbook import testbook
import json
from pytest_dependency import depends  # import the depends function


@pytest.fixture(scope="module")
def tb():
    with testbook("docs/quickstart.ipynb", execute=False, timeout=1800) as tb:
        yield tb


@pytest.fixture(scope="module")
def auth_tb(tb):
    cred_file_path = f"{os.path.expanduser('~')}/.gcp/doc-test-creds.json"
    assert os.path.isfile(cred_file_path)
    with open(cred_file_path, "r") as f:
        creds_json = json.loads(f.read())
        project_id = creds_json["project_id"]
    tb.inject(
        code=f"!gcloud auth activate-service-account --key-file={cred_file_path} -q"
    )
    tb.inject(code=f"!gcloud config set project {project_id} -q")
    yield tb


@pytest.fixture(scope="module")
def gcp_setup(auth_tb):
    auth_tb.execute_cell("installer gcp-up")
    assert "Apply complete!" in auth_tb.cell_output_text("installer gcp-up")
    yield  # teardown below the yield
    # auth_tb.execute_cell("installer gcp-down")
    # assert "Apply complete!" in auth_tb.cell_output_text("installer gcp-down")
