---
sidebar_position: 3
---

# Loading Datasets

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

Datasets can be used by Model resources to finetune an existing model
with your own data. You can load your own datasets by using one of the
existing dataset loaders published by Substratus or by creating your
own dataset loader container image.

## Dataset format

Substratus currently expects all datasets to use jsonl file format.
Each json line should have 2 attributes: "prompt" and "completion".
This follows the same standard that is used by OpenAI for finetuning.

## Using a Dataset loader

For this guide, a K8s instruction dataset will be used. The dataset
contains prompts and completions. Example entry in the dataset:

```
prompt: Write YAML that defines a Pod named \"dnsutils\" in the \"default\" namespace
completion: <K8s valid YAML file that defines K8s resources>
```

The goal here is to train a model that is able to generate valid K8s YAML files based on the prompt given.

The dataset loader used is available here: https://github.com/substratusai/dataset-k8s-instructions

Create the Dataset resource to load the dataset into Substratus:



```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/datasets/k8s-instructions.yaml
```

Verify the dataset became ready by running:



```bash
kubectl describe dataset k8s-instructions
```

## Creating your own Dataset loader

TODO

