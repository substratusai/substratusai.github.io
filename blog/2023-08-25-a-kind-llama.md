---
slug: a-kind-k8s-llama-13b-on-rtx-2060
title: "A Kind K8s Llama 13b on my RTX 2060 laptop"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
image: /img/kind-llama-on-laptop-gpu.png
tags: [llama, kind]
---

<img src="/img/kind-llama-on-laptop-gpu.png" alt="kubectl notebook" width="100%" />

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

Use the convenience script to create a Kind cluster and configure GPU support:
```bash
bash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh)
```
Or inspect the script and run the steps one by one.


### Install Substratus
Install the Substratus K8s operator to make it easy to load and serve GGML models.
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

Once the model is ready it will start serving an OpenAI compatible
API endpoint.

Let's throw some prompts at it:
```bash
curl http://localhost:8080/v1/completions \
  -H "Content-Type: application/json" \
  -d '{ \
    "model": "falcon-7b-instruct", \
    "prompt": "Who was the first president of the United States?", \
    "max_tokens": 10\
  }'
```

You can play around with other models. For example, if you have a 24 GB GPU card you should
be run Llama 2 70b in 2 bit mode by using llama.cpp.

Want to show your support? Give a star:
<GitHubButton href="https://github.com/substratusai/substratus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star substratusai/substratus on GitHub">Star</GitHubButton>

