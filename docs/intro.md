---
sidebar_position: 1
---

# Quickstart

Let's discover **Substratus in less than 5 minutes**.
Substratus is a cross cloud substrate for training and serving AI models.
Substratus extends the Kubernetes control plane to orchestrate ML operations
through the addition of new API endpoints: Model, ModelServer, Dataset,
and Notebook.

At the end of this guide, you will have falcon-7b-instruct deployed
in your own GKE cluster.

## Initial Setup

Let's get started by creating the infrastructure and deploy the Substratus
controller.

### What you'll need

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker Desktop](https://docs.docker.com/engine/install/)
- A [Google Cloud Platform](https://console.cloud.google.com/) project with billing enabled.

### Cloning the substratus repo

```bash
git clone https://github.com/substratusai/substratus
cd substratus
```

### Creating the infrastructure in GCP

Use our infrastructure build image to create a cluster and dependent cloud
components:

```bash
docker build ./infra -t substratus-infra && docker run -it \
    -e REGION=us-central1 \
    -e ZONE=us-central1-a \
    -e PROJECT=$(gcloud config get project) \
    -e TOKEN=$(gcloud auth print-access-token) \
    substratus-infra gcp-up
```

### Deploying the controller

```bash
export GPU_TYPE=nvidia-l4
envsubst intall.yaml.template | kubectl apply -f -
```

## Deploying Falcon

Define the model CRD for falcon-7b-instruct

```bash
kubectl apply -f examples/falcon-7b-instruct/model.yaml
```

WIP, more to come
