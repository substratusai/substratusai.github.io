---
sidebar_position: 1
---

# Quickstart

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
- [Docker](https://docs.docker.com/engine/install/)
- A [Google Cloud Platform](https://console.cloud.google.com/) project with billing enabled.

### Cloning the substratus repo

```bash
git clone https://github.com/substratusai/substratus
cd substratus
```

### Creating the infra and and and and deploying the controller

Use our infrastructure build image to create a cluster and dependent cloud
components:

```bash
docker build ./install -t substratus-installer && \
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  -e GPU_TYPE=nvidia-l4 \
  substratus-installer gcp-up.sh
```
This will create the following infrastructure:
* GKE cluster with nodepools to be able to run L4 GPUs
* Artifact Registry Container Repository to store the models
* GCS Bucket to store fine tuned models
* GCS Bucket to store terraform state

The Substratus Operator will automatically be installed on the GKE cluster.

### Deploy falcon-7b-instruct model
Let's build the container image by creating a Model 
```bash
kubectl apply -f examples/falcon-7b-instruct/model.yaml
```

You can inspect the logs of the container image being built by running:
```bash
kubectl logs -f jobs/falcon-7b-instruct-model-builder
```
Press Ctrl + C to exit watching the logs.

The job should eventually complete after about 11 minutes.

You can now deploy an inferencing server by creating a ModelServer:
```bash
kubectl apply -f examples/falcon-7b-instruct/server.yaml
```

It takes about 3-4 mintues to load the model into memory.

Check the logs
and wait till you see a line that says `listening on 0.0.0.0:8080`:
```bash
kubectl logs -f deployment/falcon-7b-instruct-server
```

Now you can use port forwarding to access the Web UI:
```bash
kubectl port-forward deployment/falcon-7b-instruct-server 8080:8080
```

Try some prompts by visting [http://localhost:8080](http://localhost:8080).

Side bonus, the inference server provides an OpenAI compatible API endpoint.
Basaran is the component that provides this. Read more about
[Basaran here](https://github.com/hyperonym/basaran).

## Conclusion and next steps
You were able to deploy a large language model on GKE and can now use it to
create private LLM applications.

Next steps:
* Fine tuning a Model with the Dataset API (TODO write doc)
* Using a notebook to create a new model (TODO write doc)
