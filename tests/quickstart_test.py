import json
import socket
import time
from contextlib import closing

import pytest
import requests
from conftest import auth_tb_quickstart, tb_quickstart
from flaky import flaky
from pytest_dependency import depends  # import the depends function


def test_software_dependencies_stdout(tb_quickstart) -> None:
    tb_quickstart.execute_cell("docker-version")
    assert "Client:" in tb_quickstart.cell_output_text("docker-version")
    tb_quickstart.execute_cell("gcloud-version")
    assert "Google Cloud SDK" in tb_quickstart.cell_output_text("gcloud-version")
    assert "gke-gcloud-auth-plugin" in tb_quickstart.cell_output_text("gcloud-version")
    tb_quickstart.execute_cell("kubectl-version")
    assert "Client Version" in tb_quickstart.cell_output_text("kubectl-version")


@pytest.mark.dependency()
def test_model_apply(auth_tb_quickstart) -> None:
    auth_tb_quickstart.execute_cell("k apply model")
    assert (
        "model.substratus.ai/falcon-7b-instruct created"
        in auth_tb_quickstart.cell_output_text("k apply model")
        or "model.substratus.ai/falcon-7b-instruct unchanged"
        in auth_tb_quickstart.cell_output_text("k apply model")
    )


@pytest.mark.dependency()
def test_server_apply(auth_tb_quickstart) -> None:
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
def test_ai_resources_ready(auth_tb_quickstart) -> None:
    # NOTE(bjb): this can be incredibly slow and sometimes not work at all as it
    # depends on creating a new GPU node. Currently this project hits quota
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


@flaky(max_runs=3)
@pytest.mark.dependency(depends=["test_ai_resources_ready"])
def test_pf_and_curl(auth_tb_quickstart) -> None:
    time.sleep(5)
    for _ in range(3):  # Try 3 times
        port = find_free_port()
        port = 8080
        try:
            # Using a random port to avoid collisions
            auth_tb_quickstart.inject(f"port = {port}")
            auth_tb_quickstart.execute_cell("k port-forward server")
            time.sleep(10)
            response = requests.post(
                f"http://localhost:{port}/v1/completions",
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
            break
        except AssertionError:
            # If the assertions fail, cleanup and retry
            auth_tb_quickstart.execute_cell("port_forward_process.kill()")
            continue
        finally:
            # Always cleanup even if no exception
            auth_tb_quickstart.execute_cell("port_forward_process.kill()")


def find_free_port():
    with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as s:
        s.bind(("", 0))
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        return s.getsockname()[1]


@pytest.mark.dependency(depends=["test_pf_and_curl"])
def test_server_delete(auth_tb_quickstart) -> None:
    auth_tb_quickstart.execute_cell("k delete server")
    assert (
        'server.substratus.ai "falcon-7b-instruct" deleted'
        in auth_tb_quickstart.cell_output_text("k delete server")
    )
