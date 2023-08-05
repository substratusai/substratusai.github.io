VENV_NAME=.venv
PYTHON=${VENV_NAME}/bin/python3
PIP=${VENV_NAME}/bin/pip
COMMON_VARS ?= PYDEVD_DISABLE_FILE_VALIDATION=1 JUPYTER_PLATFORM_DIRS=1
SUBSTRATUS_BRANCH ?= main

.PHONY: venv
venv:
	if [ ! -d "${VENV_NAME}" ]; then python3 -m venv ${VENV_NAME}; fi

.PHONY: install
install: venv
	$(COMMON_VARS) ${PIP} install -q -r requirements.txt && \
	$(COMMON_VARS) ${PYTHON} -m ipykernel install --user

.PHONY: test
test: install
	@logfile="tail_ipyk_output_stream_$$PPID.log"; \
	pidfile="tail_ipyk_output_stream_$$PPID.pid"; \
	trap 'kill `cat $$pidfile` || true; kill $$tail_pid || true; rm $$pidfile; rm $$logfile;' EXIT; \
	${PYTHON} ./tests/utils/tail_ipyk_output_stream.py > $$logfile 2>&1 & \
	echo $$! > $$pidfile; \
	tail -f $$logfile & \
	tail_pid=$$!; \
	$(COMMON_VARS) ${VENV_NAME}/bin/pytest -s --branch=$(SUBSTRATUS_BRANCH)


.PHONY: freeze
freeze:
	${PYTHON} -m pip freeze > requirements.txt

.PHONY: lint
lint:
	${VENV_NAME}/bin/isort ./**/*.py
	${VENV_NAME}/bin/black .

.PHONY: dev-run
dev-run:
	npm start

.PHONY: dev-nb
dev-nb:
	jupyter lab --allow-root --ip=0.0.0.0 --NotebookApp.token= --notebook-dir=.

.PHONY: clear-notebooks
clear-notebooks:
	./nbconvert/clear-all.sh

.PHONY: convert-notebooks
convert-notebooks:
	./nbconvert/convert-all.sh

.PHONY: prepare-release
prepare-release: convert-notebooks
	# TODO: More stuff