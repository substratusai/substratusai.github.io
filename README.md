# Substratus Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
You can view live website here: [https://substratus.ai](https://substratus.ai)

## Installation

```bash
yarn
```

## Local Development

```bash
make dev-run
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Notebooks

A lot of the documents on this website are generated from Jupyter Notebooks. This allows for testing documentation.

To edit the notebook files, you can either start a notebook (see below) or use VSCode which can edit notebooks directly.

```bash
make dev-nb
```

Convert the notebook files to markdown.

```bash
make convert-notebooks
```

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Releasing

```bash
make prepare-release
```

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Assets

### Main Icon

Source: <https://favicon.io/favicon-generator/>

See: `./scratch/favicon_io/`

Settings:

* Letter: "S" (capital)
* Font: Saira Stencil One

### General Icons

Source: <https://fonts.google.com/icons>

Settings:

* Weight: 100 (min)
* Grade: 0 (middle)
* Optical Size: 48 (max)

### Testing

We test the contents of our docs via [`testbook`](https://github.com/nteract/testbook)
and pytest. These tests stand up live cloud infrastructure in our integration
test project or `PROJECT_ID` if specified instead. The test suite relies on an
active set of GCP credentials in your shell session so
`gcloud auth login --update-adc` prior to running. The currently set `PROJECT_ID`
or `gcloud`-configured project will be used as the target for creating infra.

Tests can be run via:

```bash
make test
```

Optionally, you can specify a remote branch of the `substratusai/substratus`
repo to test against for all manifests referencing examples in that repo.

```bash
make test SUBSTRATUS_BRANCH=feat/foobar
```

Within GitHub Actions, you should see all the output of the notebooks as they're
executed but running locally (Mac), we don't have this working. If you want to
run locally, launch the helper utility in a separate shell or as a background
process first:

```bash
./tests/utils/tail_ipyk_output_stream.py
```
