---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Local - Kind

In this quickstart guide, you will install Substratus into a Kubernetes cluster running on your local machine and deploy a small (125 million parameter) Open Source LLM.

## Required Tools

Make sure you have the following tools installed and up to date.

* [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
* [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## Setup

Create a local Kubernetes cluster using Kind.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up.sh bash /kind.*/ $)
```bash
kind create cluster --name substratus --config - <<EOF
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30080
    hostPort: 30080
EOF
```

Install Substratus.

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/manifests.yaml
```

## Deploy LLM

Because Substratus is deployed on your local machine, you can use the (relatively-tiny) Facebook OPT 125M model (125 million parameters) from HuggingFace.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/base-model.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  namespace: default
  name: facebook-opt-125m
spec:
  image: substratusai/model-loader-huggingface
  params:
    name: facebook/opt-125m
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/base-model.yaml
```

The model is now being downloaded from HuggingFace into local storage.
You can apply the following Server manifest to deploy the Model once it is imported.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/base-server.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Server
metadata:
  name: facebook-opt-125m
spec:
  image: substratusai/model-server-basaran
  model:
    name: facebook-opt-125m
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/facebook-opt-125m/base-server.yaml
```

You can check on the progress of both processes using the following command.


```bash
kubectl get ai
```

When the Server reports a `Ready` status, proceed to the next section to test it out.

## Talk to your LLM!

:::note

125 million parameters is not much in the world of LLMs. Expect some whacky answers to your prompts!

:::

In order to access the model for exploratory purposes, forward ports from within the cluster to your local machine.

```bash
kubectl port-forward service/facebook-opt-125m-server 8080:8080
```

All substratus Servers ship with an API and interactive frontend. Open up your browser to [http://localhost:8080/](http://localhost:8080/) and talk to your model! Alternatively, request text generation via the OpenAI compatible HTTP API:


```bash
curl http://localhost:8080/v1/completions \
  -H "Content-Type: application/json" \
  -d '{ \
    "model": "facebook-opt-125m", \
    "prompt": "Who was the first president of the United States? ", \
    "max_tokens": 10\
  }'
```


The process that is serving the model can be stopped by simply deleting the same Server object that was applied before.

```bash
kubectl delete server facebook-opt-125m
```

## Cleanup

Delete the local cluster.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/down.sh bash /kind.*/ $)
```bash
kind delete cluster --name substratus
```

If you are interested in continuing your journey through Substratus, take a look at the [guides](./category/guides) to learn how to finetune models with your own dataset and much more!

To learn more about how Substratus works, check out the [Overview](../overview.md) page.

