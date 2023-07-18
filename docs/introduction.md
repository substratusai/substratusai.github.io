---
sidebar_position: 1
slug: "/"
---

# Introduction

Substratus is a cross-cloud substrate for training and serving ML models. Substratus extends the Kubernetes control plane to orchestrate ML operations through the addition of new API endpoints: Model, Server, Dataset, and Notebook.

## Why Substratus?

* Zero code needed to deploy and finetune OSS LLMs
* Ability to deploy and finetune state of the art large language models easily within an hour.
* Automatically provision all the required infrastructure (K8s cluster, buckets etc) in your cloud account using Terraform.
* Scale from 0 and spot VMs supported by default (GPUs $$$).
* Your data stays private and won't be used by the corporate overlords
* Leverage containers to avoid library lock-in and dependency wrangling.
* Adopt best practice conventions by default.
* Leverage GitOps out of the box.

## Intro Video (less than 2 mins)

<div class="video-container">
  <iframe class="video" src="https://www.youtube.com/embed/CLyXKJHIQ6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Next steps
- Go through the [Quickstart](./quickstart.md) to deploy a falcon-7b-instruct model
- [Install Substratus](./installation.md) and provision required cloud infrastructure
- Finetune a model by following the [walkthroughs](./walkthrough/finetuning-models.md)
- Learn more about the [Architecture](./architecture.md)
- Star the repo the [GitHub repo](https://github.com/substratusai/substratus) and file an
  issue to provide feedback

Note: Substratus might still introduce backward incompatible changes to the APIs. This
will change once Substratus reaches 1.0 milestone.