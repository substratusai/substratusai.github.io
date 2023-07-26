import os
import time
import pytest
from testbook import testbook
import json
from pytest_dependency import depends  # import the depends function
from common_test import gcp_setup


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


def test_software_dependencies_stdout(tb) -> None:
    tb.execute_cell("docker-version")
    assert "Client:" in tb.cell_output_text("docker-version")
    tb.execute_cell("gcloud-version")
    assert "Google Cloud SDK" in tb.cell_output_text("gcloud-version")
    assert "gke-gcloud-auth-plugin" in tb.cell_output_text("gcloud-version")
    tb.execute_cell("kubectl-version")
    assert "Client Version" in tb.cell_output_text("kubectl-version")


def test_yaml_apply(gcp_setup, auth_tb) -> None:
    auth_tb.execute_cell("k apply model")
    assert "model.substratus.ai/falcon-7b-instruct created" in auth_tb.cell_output_text(
        "k apply model"
    ) or "model.substratus.ai/falcon-7b-instruct unchanged" in auth_tb.cell_output_text(
        "k apply model"
    )
    auth_tb.execute_cell("k apply server")
    assert (
        "server.substratus.ai/falcon-7b-instruct created"
        in auth_tb.cell_output_text("k apply server")
        or "server.substratus.ai/falcon-7b-instruct unchanged"
        in auth_tb.cell_output_text("k apply server")
    )


@pytest.mark.dependency(depends=["test_yaml_apply"])
def test_ai_resources_ready(gcp_setup, auth_tb) -> None:
    timeout = (
        time.time() + 60 * 15
    )  # 15 minutes from now since this requires a new node
    while True:
        auth_tb.execute_cell("k get ai")
        output_json = json.loads(auth_tb.cell_output_text("k get ai"))
        all_ready = all(
            item["status"]["ready"] is True for item in output_json["items"]
        )
        if all_ready:
            break
        elif time.time() > timeout:
            assert False, "Timeout waiting for resources to be ready"
        time.sleep(30)


@pytest.mark.dependency(depends=["test_ai_resources_ready"])
def test_pf_and_curl(gcp_setup, auth_tb) -> None:
    auth_tb.execute_cell("k port-forward server")
    time.sleep(5)
    curl_ouptut = auth_tb.execute_cell("curl local completion api")
    assert "falcon-7b-instruct" in auth_tb.cell_output_text("curl local completion api")
    curl_output = auth_tb.execute_cell("curl_cell")

    # Parse output as JSON
    response = json.loads(curl_output[0]["data"]["text/plain"])
    assert "choices" in response and len(response["choices"]) > 0
    assert "text" in response["choices"][0]
    auth_tb.execute_cell("port_forward_process.kill()")
