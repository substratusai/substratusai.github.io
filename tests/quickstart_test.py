import os
import pytest
from testbook import testbook
import json


# Set up a shared notebook context to speed up tests.
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


def test_dependencies_stdout(tb) -> None:
    """
    test_dependencies_stdout asserts that we get some output indicating the
    dependencies are installed properly.
    """
    tb.execute_cell("docker-version")
    assert "Client:" in tb.cell_output_text("docker-version")
    tb.execute_cell("gcloud-version")
    assert "Google Cloud SDK" in tb.cell_output_text("gcloud-version")
    assert "gke-gcloud-auth-plugin" in tb.cell_output_text("gcloud-version")
    tb.execute_cell("kubectl-version")
    assert "Client Version" in tb.cell_output_text("kubectl-version")


def test_gcp_up(auth_tb) -> None:
    """
    verify the installer works
    """
    # TODO(bjb): time this and assert we're under 30 minutes
    auth_tb.execute_cell("installer gcp-up")
    assert "Apply complete!" in auth_tb.cell_output_text("installer gcp-up")


# def test_gcp_down(auth_tb) -> None:
#     """
#     verify the installer works
#     """
#     # TODO(bjb): time this and assert we're under 30 minutes
#     assert "Apply complete!" in auth_tb.cell_output_text("installer gcp-down")


# def test_yaml_apply(auth_tb) -> None:
#     """ """
#     pass
