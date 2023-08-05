---
sidebar_position: 2
---

# Quickstart

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

In this quickstart guide, you will install Substratus into a Google Cloud Platform project. Then you'll explore how Substratus can be used to load and deploy Open Source LLMs.

NOTE: Support for AWS ([GitHub Issue #12](https://github.com/substratusai/substratus/issues/12)) and Azure ([GitHub Issue #63](https://github.com/substratusai/substratus/issues/63)) is planned. Give those issues a thumbs up if you would like to see them prioritized.


## Prerequisites

You will need a [Google Cloud Platform](https://console.cloud.google.com/) project with billing enabled.

Run the commands below to make sure you have the required tools.



```bash
docker version || open 'https://docs.docker.com/get-docker/'
```


```bash
gcloud version || open 'https://cloud.google.com/sdk/docs/install'
```


```bash
gke-gcloud-auth-plugin --version || gcloud components install gke-gcloud-auth-plugin
```


```bash
kubectl version --client || open 'https://kubernetes.io/docs/tasks/tools/#kubectl'
```

## Install Substratus in GCP

Create a substratus GKE cluster along with supporting infrastructure (buckets, service accounts, image registries).



```bash
docker run -it \
  -v ${HOME}/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer:main gcp-up.sh
```

`kubectl` should now be pointing at the substratus cluster.


## Deploy an Open Source Model

To keep this quick, we'll use a smallish model, the falcon-7b-instruct model (just 7 billion parameters).



```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

The model is now being downloaded from HuggingFace into a GCS bucket. This takes about 5 minutes.
Let's also deploy the built model by applying a Server manifest. Server should start serving shortly after the Model build finishes (~10 minutes total).



```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml
```

You can check on the progress of both processes using a single command.



```bash
kubectl get ai
```

When the Server reports a `Ready` status, proceed to the next section to test it out.


## Testing out the Server

The way every company chooses to expose a model will be different. In most cases models are integrated into other business applications and are rarely exposed directly to the Internet. By default, substratus will only serve the model within the Kubernetes cluster (with a Kubernetes [Service](https://kubernetes.io/docs/concepts/services-networking/service/) object). From here, it's up to you to expose the model to a wider network (e.g., the internal VPC network or the Internet) via annotated Service or Ingress objects.

In order to access the model for exploratory purposes, forward ports from within the cluster to your local machine.



```bash
kubectl port-forward service/falcon-7b-instruct-server 8080:8080
```

All substratus Servers ship with an API and interactive frontend. Open up your browser to [http://localhost:8080/](http://localhost:8080/) and talk to your model! Alternatively, request text generation via the OpenAI compatible HTTP API:



```bash
curl http://localhost:8080/v1/completions \
  -H "Content-Type: application/json" \
  -d '{ \
    "model": "falcon-7b-instruct", \
    "prompt": "Who was the first president of the United States? ", \
    "max_tokens": 10\
  }'
```

```json
{
  "id": "cmpl-e42772faf58cd46c18a955f1",
  "object": "text_completion",
  "created": 1689485483,
  "model": "falcon-7b-instruct",
  "choices": [
    {
      "text": "\nGeorge Washington was the first president of the United States.",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 11,
    "completion_tokens": 12,
    "total_tokens": 23
  }
}
```


If you are interested in continuing your journey through Substratus, take a look at the [guides](./category/guides) to learn how to finetune models with your own dataset and much more!


## Cleanup

The process that is serving the model can be stopped by simply deleting the same Server object that was applied before.



```bash
kubectl delete -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml
```

If you want to uninstall the entire Substratus system and all infrastructure, you can run the `gcp-down.sh` script from the installation container.



```bash
docker run -it \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer:main gcp-down.sh
```

To learn more about how Substratus works, check out the [Overview](./overview.md) page.

