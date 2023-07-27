import pytest


def pytest_addoption(parser):
    parser.addoption("--branch", action="store", default="main")


@pytest.fixture(scope="session")
def branch(pytestconfig):
    return pytestconfig.getoption("branch")
