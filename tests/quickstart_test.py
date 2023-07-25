import os
import pytest
from testbook import testbook
import json


# Set up a shared notebook context to speed up tests.
@pytest.fixture(scope="module")
def tb():
    with testbook("docs/quickstart.ipynb", execute=True) as tb:
        yield tb


def test_dependencies_stdout(tb) -> None:
    """
    test_dependencies_stdout asserts that we get some output indicating the
    dependencies are installed properly.
    """
    assert "Client:" in tb.cell_output_text("docker-version")
    assert "Google Cloud SDK" in tb.cell_output_text("gcloud-version")
    assert "gke-gcloud-auth-plugin" in tb.cell_output_text("gcloud-version")
    assert "Client Version" in tb.cell_output_text("kubectl-version")


def test_gcp_up(tb) -> None:
    """
    verify the installer works
    """
    cred_file_path = f"{os.path.expanduser('~')}/.gcp/test_creds.json"
    assert os.path.isfile(cred_file_path)
    with open(cred_file_path, "r") as f:
        creds_json = json.loads(f.read())
        # project_id = creds_json['project_id']
    tb.inject(code=f"!gcloud auth activate-service-account --key-file={cred_file_path}")
    # TODO(bjb): need to publish an linux/arm64/v8 image of the installer
    assert "Apply complete!" in tb.cell_output_text("installer-gcp-up")
