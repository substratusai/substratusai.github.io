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

## One Minute Intro Video

<!-- TODO: 1 minute intro video -->

<div class="video-container">
  <iframe class="video" src="https://www.youtube.com/embed/RVeXSjTTMgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Next steps
- Go through the [Quickstart](./quickstart.md) to deploy a small CPU only only model
- [Install Substratus](./installation.md) and provision required cloud infrastructure
- Go through end-to-end Tutorial
- Learn more about the [Architecture](./architecture.md)