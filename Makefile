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

# A branch specified in the arg below will replace main across all cells of a nb
# referencing https://raw.githubusercontent.com/substratusai/substratus/main
# with the branch you specify. Helpful for testing against a substratus feature
# branch.
.PHONY: test
test: install
	PYDEVD_DISABLE_FILE_VALIDATION=1 JUPYTER_PLATFORM_DIRS=1 \
	${VENV_NAME}/bin/pytest -s --branch=main


.PHONY: freeze
freeze: install
	${PYTHON} -m pip freeze > requirements.txt
