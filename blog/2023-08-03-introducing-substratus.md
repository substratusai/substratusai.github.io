---
slug: introducing-substratus
title: Introducing Substratus
authors:
- name: Brandon Bjelland
  title: Co-founding Engineer
  url: https://github.com/brandonjbjelland
  image_url: https://avatars.githubusercontent.com/u/2502520?v=4
- name: Nick Stogner
  title: Co-founding Engineer
  url: https://github.com/nstogner
  image_url: https://avatars.githubusercontent.com/u/10274189?v=4
- name: Sam Stoelinga
  title: Co-founding Engineer
  url: https://github.com/samos123
  image_url: https://avatars.githubusercontent.com/u/388784?v=4

tags: [hello world, introduction, oss launch]
---
# Announcing Substratus: A Multi-cloud Substrate for AI

We are excited to introduce Substratus, the open-source cross-cloud substrate
for training and serving ML models with an initial focus on Large Language
Models. Fine-tune and serve LLMs on your Kubernetes clusters in your cloud.

Can’t wait? - Get started with our [quick start
docs](https://www.substratus.ai/docs/quickstart) or hop over to our [GitHub
repo](https://github.com/substratusai/substratus).

## **Why Substratus?**

**Press the fast-button for ML**: Leverage out of the box container images to
load a base model, optionally fine-tune with your own dataset and spin up a
model server, all without writing any code.

**Notebook-integrated workflows:** Launch a remote, containerized, GPU-enabled
notebook from a local directory with a single command. Develop in the exact same
environment as your long running training jobs.

**No vendor lock-in**: Substratus is open-source and can run anywhere Kubernetes
runs.

**Keep company data internal**: Deploy in your cloud account. Training data and
inference APIs stay within your company’s network.

**Best practices by default:** Substratus models are immutable and contain
information about their lineage. Datasets are imported and snapshotted using
off-the-shelf manifests. Training executes in containerized environments, using
immutable base artifacts. Inference servers are pre-configured to leverage
quantization on supported models. GitOps is built-in, not bolted-on.

## **Guiding Principles**

As we continue to develop Substratus, we’re grounded in the following guiding
principles:

### **1. Prioritize Simplicity**

 We believe the importance of minimizing complexity in software cannot be
 understated. In Substratus, we will work hard to keep complexity to a minimum
 as the project grows. The Substratus API currently consists of 4 resource
 types: Datasets, Models, Servers, and Notebooks. The project currently depends
 on two cloud services outside of the cluster: a bucket and a container registry
 (we are working on making these optional too). The project does not (and will
 never) depend on a web of complex components like Istio.

### **2. Prioritize UX**

We believe a company’s most precious resource is their engineer’s time.
Substratus seeks to maximize the productivity of data scientists and engineers
through providing a best-in-class user experience. We strive to build a set of
well-designed primitives that allow ML practitioners to enter a flow state as
they move between importing data, training, and serving models.

## **Roadmap**

We are fast at work adding new functionality, focused on creating the most
productive and enjoyable platform for ML practitioners. Coming soon:

1. Support for AWS and Azure
2. VS Code Notebook Integration
3. Large-scale distributed training
4. ML ecosystem integrations

Try Substratus today in your GCP project by following the [quick start
docs](https://www.substratus.ai/docs/quickstart). Let us know what features you
would like to see on our [GitHub
repo](https://github.com/substratusai/substratus) and don’t forget to add a
star!
