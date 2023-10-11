---
slug: k8s-yaml-dataset
title: "The K8s YAML dataset"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
tags: [k8s, yaml, dataset]
---
import GitHubButton from 'react-github-btn'

Excited to announce the K8s YAML dataset containing
276,520 valid K8s YAML files.

HuggingFace Dataset: https://huggingface.co/datasets/substratusai/the-stack-yaml-k8s  
Source code: https://github.com/substratusai/the-stack-yaml-k8s

## Why?
* This dataset can be used to fine-tune an LLM directly
* New datasets can be created from his dataset such as an K8s instruct dataset (coming soon!)
* What's your use case?

## How?
Getting a lot of K8s YAML manifests wasn't easy. My initial approach
was to use the Kubernetes website and scrape the YAML example files,
however the issue was the quantity since I could only scrape
about ~250 YAML examples that way.

Luckily, I came across [the-stack](https://huggingface.co/datasets/bigcode/the-stack) dataset
which is a cleaned dataset of code on GitHub. The dataset is nicely structured by language
and I noticed that `yaml` was one of the languages in the dataset.

Install libraries used in this blog post:
```bash
pip3 install datasets kubernetes-validate
```

Let's load the `the-stack` dataset but only the YAML files (takes about 200GB of disk space):
```python
from datasets import load_dataset
ds = load_dataset("bigcode/the-stack", data_dir="data/yaml", split="train")
```
Once loaded there are 13,439,939 YAML files in `ds`.

You can check the content of one of the files:
```python
print(ds[0]["content"])
```

You probably notice that this ain't a K8s YAML file, so next we need to filter
these 13 million YAML files and only keep the one that have valid K8 YAML.

The approach I took was to use the [kubernetes-validate](https://github.com/willthames/kubernetes-validate) OSS library. It turned out
that YAML parsing was too slow so I added a 10x speed improvement
by eagerly checking if "Kind or "kind" is not a substring in the YAML file.

Here is the validate function that takes the yaml_content as a string and
returns if the content was valid K8s YAML or not:
```python
import kubernetes_validate
import yaml

def validate(yaml_content: str):
    try:
        # Speed optimization to return early without having to load YAML
        if "kind" not in yaml_content and "Kind" not in yaml_content:
            return False
        data = yaml.safe_load(yaml_content)
        kubernetes_validate.validate(data, '1.22', strict=True)
        return True
    except Exception as e:
        return False

validate(ds[0]["content"])
```

Now all that's needed is to filter out all YAML files that aren't valid:
```python
import os
os.cpu_count()
valid_k8s = ds.filter(lambda batch: [validate(x) for x in batch["content"]],
                      num_proc=os.cpu_count(), batched=True)
```
There were 276,520 YAML files left in `valid_k8s`. You can print one again to see:
```python
print(valid_k8s[0]["content"])
```

You can upload the dataset back to HuggingFace by running:
```python
valid_k8s.push_to_hub("substratusai/the-stack-yaml-k8s")
```

## What's next?
Creating a new dataset called K8s Instruct that also provides a prompt for each YAML file.

Support the project by adding a star on GitHub! ❤️
<GitHubButton href="https://github.com/substratusai/substratus" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star substratusai/substratus on GitHub">Star</GitHubButton>
