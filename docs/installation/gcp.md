---
sidebar_position: 4
---

# GCP Install Guide


## Auto Install

A basic installer is packaged as a container image and can be run directly. This installation method is only intended to work in a basic cloud project free of any significant constraints (i.e. GCP Organizational Policies, etc). This path has been tested on brand new cloud projects.


```bash
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer gcp-up.sh
```

## Advanced Installation
