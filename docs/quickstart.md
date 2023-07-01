---
sidebar_position: 2
---

# Quickstart

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

In this quickstart guide, you will install Substratus into a Google Cloud project. You will then explore how Substratus can be used to build and deploy Open Source LLMs.

NOTE: Support for AWS ([GitHub Issue #12](https://github.com/substratusai/substratus/issues/12)) and Azure ([GitHub Issue #63](https://github.com/substratusai/substratus/issues/63)) is planned. Give those issues a thumbs up if you would like to see them prioritized.

<!-- TODO: quickstart video -->

<div class="video-container">
  <iframe class="video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Prerequisites

You with need a [Google Cloud Platform](https://console.cloud.google.com/) project with billing enabled.

Make sure you have the required tools.


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

## Install Substratus

Create a substratus GKE cluster along with supporting infrastructure (buckets, service accounts, image registries).


```bash
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer gcp-up.sh
```

Your kubectl command should now be pointing at the substratus cluster.

## Build and Deploy an Open Source Model

To keep things quick, a small model (125 million parameters) will be used.


```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/model.yaml
```

A container build process is now running in the Substratus cluster. You can declare that you would like the built model to be deployed by applying a ModelServer manifest.


```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/server.yaml
```

You can check on the progress of both processes using a single command.


```bash
kubectl get ai
```

When the ModelServer is reporting a `Ready` status, proceed to the next section to test it out.

## Testing out the Model Server

The way every company chooses to expose a model will be different. In most cases models are integrated into other business applications and are rarely exposed directly to the internet. Substratus will only serve the model within the Kubernetes cluster (with a Kubernetes [Service](https://kubernetes.io/docs/concepts/services-networking/service/) object). The choice of how to expose the model to your users is up to you.

In order to access the model for exploratory purposes, forward ports from within the cluster to your local machine.


```bash
kubectl port-forward service/facebook-opt-125m-modelserver 8080:8080
```

The packaged model server ships with an API (for application integration) and a GUI interface (for debugging). You can now open up your browser at [http://localhost:8080](http://localhost:8080) and talk to your model!

If you are interested in continuing your journey through Substratus, take a look at the [Guided Walkthrough](./category/walkthrough).

## Cleanup

The process that is serving the model can be stopped by simply deleting the same ModelServer object that was applied before.


```bash
kubectl delete -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/server.yaml
```

If you want to uninstall the entire Substratus system and all infrastructure, you can run the `gcp-down.sh` script from the installation container.


```bash
docker run -it \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer gcp-down.sh
```

To learn more about how Substratus works, check out the [Architecture](./architecture) page.
