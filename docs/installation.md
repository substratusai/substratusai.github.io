---
sidebar_position: 4
---

# Installation

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

## Basic Installation

A basic installer is packaged as a container image and can be run directly. This installation method is only intended to work in a basic cloud project free of any significant constraints (i.e. GCP Organizational Policies, etc). This path has been tested on brand new cloud projects.


```bash
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer gcp-up.sh
```

## Advanced Installation

Most enterprises will need to modify the base configuration files to comply with constraints specific to their environment. The Terraform and Kubernetes configurations do not attempt to export every option as a variable. In order to keep the configurations simple, most options are set directly in the `.tf` and `.yaml` files.

To set advanced installation options, first clone the substratus repo.


```bash
git clone https://github.com/substratusai/substratus
```


```bash
cd ./substratus
```

The `install/` directory contains the cluster and infrastructure configuration needed to get Substratus up and running. All configuration is documented in declarative formats (`.yaml`, `.tf`, `Dockerfile`).

```
install/
  Dockerfile  # Packages all installation dependencies.
  scripts/    # Helper scripts for streamlining the install process.
  terraform/  # Provisions a cluster and supporting infrastructure (buckets, image registries, etc.).
  kubernetes/ # Installs custom resources, controllers, etc. into a running cluster.
```

Edit the configuration files and build a custom installer image.


```bash
docker build ./install -t substratus-installer
```

Run the custom installer image.


```bash
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratus-installer gcp-up.sh
```
