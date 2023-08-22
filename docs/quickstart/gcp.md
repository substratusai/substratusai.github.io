---
sidebar_position: 2
---

# GCP - Google Cloud

In this quickstart guide, you will create a Kubernetes Cluster on Google Cloud and install Substratus. By the end you will have the Open Source Falcon 7B model deployed and ready to interact with.

:::note

Support for AWS ([GitHub Issue #12](https://github.com/substratusai/substratus/issues/12)) and Azure ([GitHub Issue #63](https://github.com/substratusai/substratus/issues/63)) is planned. Give those issues a thumbs up if you would like to see them prioritized.

:::

## Required Tools

Make sure you have the following tools installed and up to date.

* [gcloud](https://cloud.google.com/sdk/docs/install)
* [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## Setup

You will need a [Google Cloud Platform](https://console.cloud.google.com/) project with billing enabled.

Set your current project to the project you want to use for Substratus:
```bash
gcloud config set project <your-project-id>
export PROJECT_ID=$(gcloud config get project)
```

Create a GKE cluster along with supporting infrastructure (buckets, service accounts, image registries) and install Substratus operator by using the convenience script:

```bash
export INSTALL_OPERATOR=yes
bash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/gcp/up.sh)
```

After creating the GKE cluster in the last step, `kubectl` should now be pointing at the Substratus cluster. The substratus operator has been installed into the `substratus` namespace.

## Deploy LLM

The following Model object will import the medium-sized Falcon 7B Instruct model (7 billion parameters) from HuggingFace.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  name: falcon-7b-instruct
spec:
  image: substratusai/model-loader-huggingface
  params:
    name: tiiuae/falcon-7b-instruct
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

The model is now being downloaded from HuggingFace into the Substratus GCS bucket. This takes about 5 minutes. You can apply the following Server object to start serving the Model once it is loaded.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Server
metadata:
  name: falcon-7b-instruct
spec:
  image: substratusai/model-server-basaran
  model:
    name: falcon-7b-instruct
  resources:
    gpu:
      type: nvidia-l4
      count: 1
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml
```

You can check on the progress of both processes using the following command.


```bash
kubectl get ai
```

When the Server reports a `Ready` status, proceed to the next section to test it out.

## Talk to your LLM!

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


The process that is serving the model can be stopped by simply deleting the same Server object that was applied before.

```bash
kubectl delete server falcon-7b-instruct
```

## Cleanup

Delete all GCP infrastructure.

```bash
bash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/gcp/down.sh)
```

If you are interested in continuing your journey through Substratus, take a look at the [guides](./category/guides) to learn how to finetune models with your own dataset and much more!

To learn more about how Substratus works, check out the [Overview](../overview.md) page.

