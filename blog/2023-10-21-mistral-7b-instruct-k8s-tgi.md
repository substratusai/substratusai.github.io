---
slug: mistral-7b-instruct-k8s-helm-tgi
title: "Deploying Mistral 7B Instruct on K8s using TGI"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
tags: [k8s, mistral-7b, helm]
image: /img/mistral-7b-helm-k8s-tgi.png
---

<img src="/img/mistral-7b-helm-k8s-tgi.png" alt="mistral 7b k8s helm" width="100%" />

Learn how to use the text-generation-inference (TGI) Helm Chart to quickly
deploy Mistral 7B Instruct on your K8s cluster.

Add the Substratus.ai Helm repo:
```bash
helm repo add substratusai https://substratusai.github.io/helm
```

Create a file named `values.yaml` with the following content:
```
model: mistralai/Mistral-7B-Instruct-v0.1
# resources: # optional, override if you need more than 1 GPU
#   limits:
#     nvidia.com/gpu: 1
# nodeSelector: # optional, can be used to target specific GPUs
#   cloud.google.com/gke-accelerator: nvidia-l4
```

Deploy Mistral 7B using Helm:
```
helm install mistral-7b-instruct substratusai/text-generation-inference \
    -f values.yaml
```

There will be a Kubernetes Deployment and Service that's created. Let's
verify everything is working as expected:
```bash
kubectl describe pod -l app.kubernetes.io/instance=mistral-7b-instruct
```
You should see that a pod has been created. Depending on your environment,
you might need to wait fo the cluster autoscaler to scale up a new node

Once the pod is running, verify that it has started serving on 0.0.0.0:
```bash
kubectl logs -f -l app.kubernetes.io/instance=mistral-7b-instruct
```

The model first downloads the model and after a few minutes, you should
see a message that looks like this:
```text
Invalid hostname, defaulting to 0.0.0.0
```
This is expected and means it's now serving on host 0.0.0.0.

The model is currently only accessible within the K8s Cluster, so let's
setup a K8s port forward so the model is accessible on our local host.
```bash
kubectl port-forward deployments/mistral-7b-instruct-text-generation-inference 8080:8080
```

Now you can run inference by calling http://localhost:8080/. Checkout the API
doc of TGI by going to [http://localhost:8080/docs](http://localhost:8080/docs).

Example using curl to run inference the model:
```bash
curl 127.0.0.1:8080/generate -X POST \
    -H 'Content-Type: application/json' \
    --data-binary @- << 'EOF' | jq -r '.generated_text'
{
    "inputs": "<s>[INST] Write a K8s YAML file to create a pod that deploys nginx[/INST]",
    "parameters": {"max_new_tokens": 400}
}
EOF
```

The response is quite impressive, it did return a valid K8s YAML manifest
and also instructions on how to apply it. 

Need help? Want to see other models? other serving frameworks?  
Join our Discord and ask me directly:  
<a href="https://discord.gg/JeXhcmjZVm">
<img alt="discord-invite" src="https://dcbadge.vercel.app/api/server/JeXhcmjZVm?style=flat" />
</a>