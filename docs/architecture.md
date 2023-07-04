---
sidebar_position: 4
---

# Architecture

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

Substratus extends the Kubernetes control plane to orchestrate the full lifecycle of machine learning models. It does this by introducing new custom resources into the Kubernetes API: Model, ModelServer, Dataset, Notebook. A set of controllers, bundled together into a single Deployment respond to these new resource types. Substratus can be described as a [Kubernetes Operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) as it automates the orchestration of common ML tasks: packaging model source code into containers, pulling and transforming datasets, running training jobs, managing dynamic notebook development environments.

<img src="/img/diagrams/high-level-architecture.excalidraw.png"></img>

## Models

The Model resource is at the center of Substratus. A Model object represents an instance of a ML model (source code bundled together with weights and biases). A Model object can describe various sources for a model: Git (Substratus will clone the repo and build a container containing the model), or another Model coupled with a training Dataset (Substratus will run a training Job on the base Model with the provided data, and build a new container image containing the trained model). All other Substratus resources exist to facilitate the progression of Model objects.

<img src="/img/diagrams/model-architecture.excalidraw.png"></img>



## ModelServers

The ModelServer resource is responsible for exposing the a Model with a HTTP API for inference.

:::note

Give [GitHub issue #66](https://github.com/substratusai/substratus/issues/66) a thumbs up if support for Embeddings is important to you.

:::

## Datasets

The Dataset resource facilitates the importing and transformation of public and private data sources. A Dataset object points to source code that will be used for data importing. Substratus will containerize this code and run it in the cluster, storing the resulting data in a bucket. When referenced from a Model object, Substratus will mount the data into the Model training Job.

<img src="/img/diagrams/dataset-architecture.excalidraw.png"></img>

## Notebooks

The Notebook resource facilitates the development of ML source code. Unlike regular applications which can typically be developed on modest laptops, developing a ML model typically requires high performance compute (i.e. GPUs with lots of memory). A Notebook object represents an instance of a Jupyter Notebook environment that is running on beefy hardware within a Kubernetes cluster. Substratus tooling, such as the `kubectl open notebook` plugin, allows developers to open these notebooks on their local machines.

<img src="/img/diagrams/notebook-architecture.excalidraw.png"></img>

Because Substratus relies on Kubernetes port-forwarding, administrators do not need to manage TLS certificates, networking ingress paths, and bespoke firewall rules. Substratus users just need access to the Kubernetes API server (they need to be able to download Kubernetes credentials). Most companies already have a method in place of distributing these kubeconfig files.


