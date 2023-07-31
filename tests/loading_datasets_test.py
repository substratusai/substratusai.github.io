import json
import time

import pytest
from conftest import auth_tb_loading_datasets, gcp_setup
from pytest_dependency import depends


@pytest.mark.dependency()
def test_dataset_apply(auth_tb_loading_datasets) -> None:
    auth_tb_loading_datasets.execute_cell("k apply dataset")
    assert (
        "dataset.substratus.ai/k8s-instructions created"
        in auth_tb_loading_datasets.cell_output_text("k apply dataset")
        or "dataset.substratus.ai/k8s-instructions unchanged"
        in auth_tb_loading_datasets.cell_output_text("k apply dataset")
    )


@pytest.mark.dependency(depends=["test_dataset_apply"])
def test_dataset_ready(auth_tb_loading_datasets) -> None:
    timeout = time.time() + 60 * 5
    while True:
        auth_tb_loading_datasets.execute_cell("k get dataset")
        output_json = json.loads(
            auth_tb_loading_datasets.cell_output_text("k get dataset")
        )
        if (
            "status" in output_json.keys()
            and "ready" in output_json["status"].keys()
            and output_json["status"]["ready"]
        ):
            assert True
            break
        elif time.time() > timeout:
            assert False, "Timeout waiting for dataset to be ready"
        time.sleep(30)
