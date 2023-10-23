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
This command adds a new Helm repository, making the `text-generation-inference`
Helm chart available for installation.

Create a configuration file named `values.yaml`. This file will contain the necessary settings for your deployment. Here’s an example of what the content should look like:
```
model: mistralai/Mistral-7B-Instruct-v0.1
# resources: # optional, override if you need more than 1 GPU
#   limits:
#     nvidia.com/gpu: 1
# nodeSelector: # optional, can be used to target specific GPUs
#   cloud.google.com/gke-accelerator: nvidia-l4
```
In this configuration file, you are specifying the model to be deployed and optionally setting resource limits or targeting specific nodes based on your requirements.

With your configuration file ready, you can now deploy Mistral 7B Instruct using Helm:
```
helm install mistral-7b-instruct substratusai/text-generation-inference \
    -f values.yaml
```
This command initiates the deployment, creating a Kubernetes Deployment and Service based on the settings defined in your `values.yaml` file.

After initiating the deployment, it's important to ensure that everything is running as expected. Run the following command to get detailed information about the newly created pod:
```bash
kubectl describe pod -l app.kubernetes.io/instance=mistral-7b-instruct
```
This will display various details about the pod, helping you to confirm that it has been successfully created and is in the right state. Note that depending on your cluster's setup, you might need to wait for the cluster autoscaler to provision additional resources if necessary.

Once the pod is running, check the logs to ensure that the model is initializing properly:
```bash
kubectl logs -f -l app.kubernetes.io/instance=mistral-7b-instruct
```

The model first downloads the model and after a few minutes, you should
see a message that looks like this:
```text
Invalid hostname, defaulting to 0.0.0.0
```
This is expected and means it's now serving on host 0.0.0.0.

By default, the model is only accessible within the Kubernetes cluster. To access it from your local machine, set up a port forward:
```bash
kubectl port-forward deployments/mistral-7b-instruct-text-generation-inference 8080:8080
```
This command maps port 8080 on your local machine to port 8080 on the deployed pod, allowing you to interact with the model directly.

With the service exposed, you can now run inference tasks. To explore the available API endpoints and their usage, visit the TGI API documentation at [http://localhost:8080/docs](http://localhost:8080/docs).


Here’s an example of how to use curl to run an inference task:
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
In this example, we are instructing the model to generate a Kubernetes YAML file for deploying an Nginx pod. The prompt includes specific tokens that the Mistral 7B Instruct model recognizes, ensuring accurate and context-aware responses.

The prompt we are using starts with `<s>` token which indicates beginning of a sequence.
The `[INST]` token tells Mistral-7b Instruct what follows is an instruction. The Mistral 7B
Instruct model was finetuned with this prompt template, so it's important to re-use that
same prompt template.

The response is quite impressive, it did return a valid K8s YAML manifest
and also instructions on how to apply it.

Need help? Want to see other models? other serving frameworks?  
Join our Discord and ask me directly:  
<a href="https://discord.gg/JeXhcmjZVm">
<img alt="discord-invite" src="https://dcbadge.vercel.app/api/server/JeXhcmjZVm?style=flat" />
</a>