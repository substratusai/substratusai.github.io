---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Local - Kind

In this quickstart guide, you will install Substratus into a Kubernetes cluster running on your local machine and deploy an Open Source LLM.

## Required Tools

Make sure you have the following tools installed and up to date.

* [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)
* [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## Setup
Larger models require a GPU and Kind can work with GPUs.
It's recommended to choose GPU if you have a GPU available on your machine.

<Tabs groupId="kind-gpu" queryString>
  <TabItem value="cpu" label="CPU" default>

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

  </TabItem>
  <TabItem value="gpu" label="GPU">

Install the NVIDIA container toolkit for Docker: [Install Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)

The steps below are all required as part of a workaround for Kind to
support GPUs. You can read more about the workaround on the [Kind PR
for GPU support](https://github.com/kubernetes-sigs/kind/pull/3257#issuecomment-1607287275)

Configure nvidia as the default runtime for Docker:
```bash
sudo nvidia-ctk runtime configure --runtime=docker --set-as-default
```

Restart docker daemon:
```
sudo systemctl restart docker
```

Change `accept-nvidia-visible-devices-as-volume-mounts` to `true` in `/etc/nvidia-container-runtime/config.toml`:
```bash
sudo sed -i '/accept-nvidia-visible-devices-as-volume-mounts/c\accept-nvidia-visible-devices-as-volume-mounts = true' \
  /etc/nvidia-container-runtime/config.toml
```

Create the kind cluster:
[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh bash /kind create cluster.*/ /^EOF$/)
```bash
kind create cluster --name substratus --config - <<EOF
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
nodes:
- role: control-plane
  image: kindest/node:v1.27.3@sha256:3966ac761ae0136263ffdb6cfd4db23ef8a83cba8a463690e98317add2c9ba72
  extraPortMappings:
  - containerPort: 30080
    hostPort: 30080
  # required for GPU workaround
  extraMounts:
    - hostPath: /dev/null
      containerPath: /var/run/nvidia-container-devices/all
EOF
```

Create required symlink inside kind container ([workaround](https://github.com/NVIDIA/nvidia-docker/issues/614#issuecomment-423991632) for issue with nvidia operator):
[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh bash /docker exec -ti .*/ /.*ldconfig.real/)
```bash
docker exec -ti substratus-control-plane ln -s /sbin/ldconfig /sbin/ldconfig.real
```

Install the NVIDIA GPU operator:
[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh bash /helm repo add .*/ /.*driver.enabled=false/)
```bash
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia || true
helm repo update
helm install --wait --generate-name \
     -n gpu-operator --create-namespace \
     nvidia/gpu-operator --set driver.enabled=false
```


  </TabItem>

</Tabs>

Install Substratus.

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/manifests.yaml
```

## Deploy LLM
Now that Substratus is running let's deploy an Open Source LLM.

<Tabs groupId="kind-gpu" queryString>
  <TabItem value="cpu" label="CPU" default>

Running CPU mode only supports smaller models. Rou can use the (relatively-tiny) Facebook OPT 125M model (125 million parameters) from HuggingFace.

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

  </TabItem>
  <TabItem value="gpu" label="GPU">

Running Kind with GPU allows you to use bigger models such as the Falcon 7B model, which
has 7 billion parameters. The falcon-7b-instruct model requires about 3.5 GB of
GPU memory when serving in 4 bit mode.

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

The model is now being downloaded from HuggingFace into local storage.
You can apply the following Server manifest to deploy the Model once it is imported.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server-4bit-any-gpu.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Server
metadata:
  name: falcon-7b-instruct
spec:
  image: substratusai/model-server-basaran
  model:
    name: falcon-7b-instruct
  params:
    load_in_4bit: "true"
  resources:
    gpu:
      count: 1
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server-4bit-any-gpu.yaml
```

  </TabItem>
</Tabs>

You can check on the progress of both processes using the following command.


```bash
kubectl get ai
```

When the Server reports a `Ready` status, proceed to the next section to test it out.

## Talk to your LLM!

<Tabs groupId="kind-gpu" queryString>
  <TabItem value="cpu" label="CPU" default>

:::note

The 125 million parameters used in the CPU example is not much in the world of LLMs. Expect some whacky answers to your prompts!

:::

In order to access the model for exploratory purposes, forward ports from within the cluster to your local machine.

```bash
kubectl port-forward service/facebook-opt-125m-server 8080:8080
```

  </TabItem>
  <TabItem value="gpu" label="GPU">

In order to access the model for exploratory purposes, forward ports from within the cluster to your local machine.

```bash
kubectl port-forward service/falcon-7b-instruct-server 8080:8080
```
  </TabItem>

</Tabs>

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

If you are interested in continuing your journey through Substratus, take a look at the [guides](../category/guides) to learn how to finetune models with your own dataset and much more!

To learn more about how Substratus works, check out the [Overview](../overview.md) page.

