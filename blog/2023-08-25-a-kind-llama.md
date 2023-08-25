---
slug: a-kind-k8s-llama-13b-on-rtx-2060
title: "A Kind K8s Llama 13b on my RTX 2060 laptop"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
image: /img/kubectl-notebook-cmd.small.png
tags: [llama, kind]
---

<img src="/img/kubectl-notebook-cmd.png" alt="kubectl notebook" width="100%" />

import GitHubButton from 'react-github-btn'

I was pleasantly surprised by how well the Llama 13b chat model was able to
run on my laptop that has a RTX 2060. Because the RTX 2060 has just 6GB of GPU memory.
Another cool fact, this all ran on a local K8s cluster on my laptop
by using Kind.

Now you might be thinking how did a 13 billion parameter model fit on just 6GB
GPU memory? Shouldn't that require ~13 GB of GPU memory when serving the model in 4 bit mode? Yes it should, unless you use [llama.cpp](https://github.com/ggerganov/llama.cpp) which is a C++ port of Llama and allows us to run larger models with less GPU memory or with no GPU at all.

Want to try this out yourself? Follow a long for a fun ride.

### Install Kind with GPU support
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

### Install Substratus
Install the Substratus K8s operator to make it easy to load and server GGML models.
```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/manifests.yaml
```

### Load the Llama 2 13b chat GGML model
Create a Model resource to load the [Llama 2 13b chat GGML model](https://huggingface.co/TheBloke/Llama-2-13B-chat-GGML) from The Bloke.

[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-ggml/base-model.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  name: llama2-13b-chat-ggml
spec:
  image: substratusai/model-loader-huggingface
  params:
    name: TheBloke/Llama-2-13B-chat-GGML
    files: "config.json,llama-2-13b-chat.ggmlv3.q2_K.bin"
```

```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-ggml/base-model.yaml
```
The model is being downloaded from HuggingFace into your Kind cluster.

### Serve the model
[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-ggml/base-model.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  name: llama2-13b-chat-ggml
spec:
  image: substratusai/model-loader-huggingface
  params:
    name: TheBloke/Llama-2-13B-chat-GGML
    files: "config.json,llama-2-13b-chat.ggmlv3.q2_K.bin"
```

<GitHubButton href="https://github.com/substratusai/substratus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star substratusai/substratus on GitHub">Star</GitHubButton>

Don't forget to star and follow the repo!

