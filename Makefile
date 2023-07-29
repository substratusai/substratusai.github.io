VENV_NAME=.venv
PYTHON=${VENV_NAME}/bin/python3
PIP=${VENV_NAME}/bin/pip
COMMON_VARS ?= PYDEVD_DISABLE_FILE_VALIDATION=1 JUPYTER_PLATFORM_DIRS=1

SUBSTRATUS_BRANCH ?= main
PROJECT_ID ?= substratus-integration-tests

.PHONY: venv
venv:
	if [ ! -d "${VENV_NAME}" ]; then python3 -m venv ${VENV_NAME}; fi

.PHONY: install
install: venv
	$(COMMON_VARS) ${PIP} install -q -r requirements.txt && \
	$(COMMON_VARS) ${PYTHON} -m ipykernel install --user

.PHONY: test
test: install
	$(COMMON_VARS) PROJECT_ID=$(PROJECT_ID) ${VENV_NAME}/bin/pytest -svvv --branch=$(SUBSTRATUS_BRANCH)


.PHONY: freeze
freeze: install
	${PYTHON} -m pip freeze > requirements.txt
