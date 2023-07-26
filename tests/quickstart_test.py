import time
import pytest
import requests
import json
from pytest_dependency import depends  # import the depends function
from common_test import gcp_setup
from common_test import auth_tb_quickstart, tb_quickstart


def test_software_dependencies_stdout(tb_quickstart) -> None:
    tb_quickstart.execute_cell("docker-version")
    assert "Client:" in tb_quickstart.cell_output_text("docker-version")
    tb_quickstart.execute_cell("gcloud-version")
    assert "Google Cloud SDK" in tb_quickstart.cell_output_text("gcloud-version")
    assert "gke-gcloud-auth-plugin" in tb_quickstart.cell_output_text("gcloud-version")
    tb_quickstart.execute_cell("kubectl-version")
    assert "Client Version" in tb_quickstart.cell_output_text("kubectl-version")


@pytest.mark.dependency()
def test_model_apply(gcp_setup, auth_tb_quickstart) -> None:
    auth_tb_quickstart.execute_cell("k apply model")
    assert (
        "model.substratus.ai/falcon-7b-instruct created"
        in auth_tb_quickstart.cell_output_text("k apply model")
        or "model.substratus.ai/falcon-7b-instruct unchanged"
        in auth_tb_quickstart.cell_output_text("k apply model")
    )


@pytest.mark.dependency()
def test_server_apply(gcp_setup, auth_tb_quickstart) -> None:
    auth_tb_quickstart.execute_cell("k apply server")
    assert (
        "server.substratus.ai/falcon-7b-instruct created"
        in auth_tb_quickstart.cell_output_text("k apply server")
        or "server.substratus.ai/falcon-7b-instruct unchanged"
        in auth_tb_quickstart.cell_output_text("k apply server")
    )


@pytest.mark.dependency(
    depends=[
        "test_model_apply",
        "test_server_apply",
    ]
)
def test_ai_resources_ready(gcp_setup, auth_tb_quickstart) -> None:
    timeout = (
        time.time() + 60 * 15
    )  # 15 minutes from now since this requires a new node
    while True:
        auth_tb_quickstart.execute_cell("k get ai")
        output_json = json.loads(auth_tb_quickstart.cell_output_text("k get ai"))
        all_ready = all(
            item["status"]["ready"] is True for item in output_json["items"]
        )
        if all_ready:
            break
        elif time.time() > timeout:
            assert False, "Timeout waiting for resources to be ready"
        time.sleep(30)


@pytest.mark.dependency(depends=["test_ai_resources_ready"])
def test_pf_and_curl(gcp_setup, auth_tb_quickstart) -> None:
    auth_tb_quickstart.execute_cell("k port-forward server")
    time.sleep(5)
    # just easier to do this using requests
    response = requests.post(
        "http://localhost:8080/v1/completions",
        headers={"Content-Type": "application/json"},
        data=json.dumps(
            {
                "model": "falcon-7b-instruct",
                "prompt": "Who was the first president of the United States? ",
                "max_tokens": 10,
            }
        ),
    )
    assert response.status_code == 200
    assert len(response.json()["choices"][0]["text"]) > 0
    auth_tb_quickstart.execute_cell("port_forward_process.kill()")
