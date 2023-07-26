import os
import pytest
from testbook import testbook
import json
from pytest_dependency import depends  # import the depends function


def auth() -> tuple[str, str]:
    cred_file_path = f"{os.path.expanduser('~')}/.gcp/doc-test-creds.json"
    assert os.path.isfile(cred_file_path)
    with open(cred_file_path, "r") as f:
        creds_json = json.loads(f.read())
        project_id = creds_json["project_id"]
    return (
        f"!gcloud auth activate-service-account --key-file={cred_file_path} -q",
        f"!gcloud config set project {project_id} -q",
    )


@pytest.fixture(scope="module")
def tb_quickstart():
    with testbook("docs/quickstart.ipynb", execute=False, timeout=1800) as tb:
        yield tb


@pytest.fixture(scope="module")
def auth_tb_quickstart(tb_quickstart):
    sa_activate, set_project = auth()
    tb_quickstart.inject(sa_activate)
    tb_quickstart.inject(set_project)
    yield tb_quickstart


@pytest.fixture(scope="module")
def auth_tb_finetuning_models():
    with testbook(
        "docs/walkthrough/finetuning-models.ipynb",
        execute=False,
    ) as tb:
        sa_activate, set_project = auth()
        tb.inject(sa_activate)
        tb.inject(set_project)
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_datasets():
    with testbook(
        "docs/walkthrough/loading-datasets.ipynb",
        execute=False,
    ) as tb:
        sa_activate, set_project = auth()
        tb.inject(sa_activate)
        tb.inject(set_project)
        yield tb


@pytest.fixture(scope="module")
def auth_tb_loading_models():
    with testbook(
        "docs/walkthrough/loading-models.ipynb",
        execute=False,
    ) as tb:
        sa_activate, set_project = auth()
        tb.inject(sa_activate)
        tb.inject(set_project)
        yield tb


@pytest.fixture(scope="module")
def auth_tb_serving_models():
    with testbook(
        "docs/walkthrough/serving-models.ipynb",
        execute=False,
    ) as tb:
        sa_activate, set_project = auth()
        tb.inject(sa_activate)
        tb.inject(set_project)
        yield tb


@pytest.fixture(scope="session", autouse=True)
def gcp_setup(auth_tb_quickstart):
    auth_tb_quickstart.execute_cell("installer gcp-up")
    assert "Apply complete!" in auth_tb_quickstart.cell_output_text("installer gcp-up")
    yield  # teardown below the yield
    # NOTE(bjb): comment out the following lines to keep infra up and iterate more rapidly on tests
    auth_tb_quickstart.execute_cell("installer gcp-down")
    assert "Apply complete!" in auth_tb_quickstart.cell_output_text(
        "installer gcp-down"
    )
