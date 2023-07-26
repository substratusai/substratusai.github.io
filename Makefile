VENV_NAME=.venv
PYTHON=${VENV_NAME}/bin/python3
PIP=${VENV_NAME}/bin/pip

.PHONY: venv
venv:
	if [ ! -d "${VENV_NAME}" ]; then python3 -m venv ${VENV_NAME}; fi

.PHONY: install
install: venv
	${PIP} install -r requirements.txt && \
	${PYTHON} -m ipykernel install --user

.PHONY: test
test: install
	PYDEVD_DISABLE_FILE_VALIDATION=1 ${VENV_NAME}/bin/pytest -svvv

.PHONY: freeze
freeze: install
	${PYTHON} -m pip freeze > requirements.txt
