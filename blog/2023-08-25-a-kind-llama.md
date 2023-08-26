---
slug: kind-local-llama-on-rtx-2060
title: "A Kind Local Llama on K8s"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
image: /img/kind-llama-on-laptop-gpu.png
tags: [llama, kind]
---

<img src="/img/kind-llama-on-laptop-gpu.png" alt="kubectl notebook" width="100%" />

import GitHubButton from 'react-github-btn'

I've always wanted to have a 🦙 all for myself. So I went ahead and tried
to deploy the Llama 13B Chat model on a local K8s cluster on my laptop.
The model ran surprisingly well on a mere RTX 2060.

My laptop setup looks like this:
* Kind for deploying a single node K8s cluster
* AMD Ryzen 7 (8 threads), 16 GB system memory, RTX 2060 (6GB GPU memory)
* Llama.cpp/GGML for fast serving and loading larger models on consumer hardware

Now you might be thinking how did a 13 billion parameter model fit on just 6GB GPU memory?
Shouldn't that require ~13 GB of GPU memory when serving the model in 4 bit mode?
Yes it should because 13 billion * 4 bytes / (32 bits / 4 bits) = 13 GB.
Luckily, [Llama.cpp](https://github.com/ggerganov/llama.cpp) allows us to load models in 2 bit mode and supports running on CPU only at low speeds.

Want to try this out yourself? Follow a long for a fun ride.

### Create Kind K8s cluster with GPU support
Install the NVIDIA container toolkit for Docker: [Install Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)

Use the convenience script to create a Kind cluster and configure GPU support:
```bash
bash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh)
```
Or inspect the [script](https://github.com/substratusai/substratus/blob/main/install/kind/up-gpu.sh) and run the steps one by one.


### Install Substratus
Install the Substratus K8s operator which will orchestrate model loading and serving:
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
Create a Server resource to serve the model:
[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-ggml/server.yaml yaml)
```yaml
apiVersion: substratus.ai/v1
kind: Server
metadata:
  name: llama2-13b-chat-ggml
spec:
  image: substratusai/model-server-llama-cpp
  model:
    name: llama2-13b-chat-ggml
  resources:
    gpu:
      count: 1
```
```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-ggml/server.yaml
```

Once the model is ready it will start serving an OpenAI compatible
API endpoint.

Expose the Server to a local port by using port forwarding:
```bash
kubectl port-forward service/llama2-13b-chat-ggml-server 8080:8080
```

Let's throw some prompts at it:
```bash
curl http://localhost:8080/v1/completions \
  -H "Content-Type: application/json" \
  -d '{ "prompt": "Who was the first president of the United States?", "stop": ["."]}'
```

You can play around with other models. For example, if you have a 24 GB GPU card you should
be able to run Llama 2 70B in 2 bit mode by using llama.cpp.

Support the project by adding a star on GitHub! ❤️
<GitHubButton href="https://github.com/substratusai/substratus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star substratusai/substratus on GitHub">Star</GitHubButton>
