---
slug: introducing-substratus
title: Introducing Substratus
authors:
  name: Brandon Bjelland
  title: Co-founding Engineer, CXO
  url: https://github.com/brandonjbjelland
  image_url: https://avatars.githubusercontent.com/u/2502520?v=4
tags: [hello world, introduction, oss launch]
---
# Announcing Substratus: A Multi-cloud Substrate for AI

We're beyond excited to announce Substratus, an open-source infrastructure
framework to manage machine learning primitives in Kubernetes.

Open source machine learning models are exploding in popularity and it's nearly
impossible for any individual or organization to keep up. We felt this exact
pain in early 2023:

* How can we easily experiment with these LLMs? 👩‍🔬
* Can I inference using my workstation's hardware and OS? 💻
* What about fine-tuning, is that also possible locally? 📏
* Can I stream or do I really need to download this whole dataset?! I hope I
  don't need to uninstall Flight Simulator...✈️
* Is any part of this workflow portable or repeatable? ♻️

It wouldn't be unreasonable to walk away from a couple hours of yak-shaving,
resigned to using Colab. But your strategy to deliver a secure, consistent, and
portable ML workflow to your day job is still effectively 🤷🏾‍♀️. At this
point, you hope your engineering team is satisfied with Sagemaker's opinions and pricing because
it's looking like the de-facto option. 💸

There's got to be a better way.

## Why Substratus?

ML workloads operate on undifferentiated compute primitives,
abundant across cloud platforms (CPU, GPU, storage, networks). GPUs may be
less-available but are no-less commodity than the rest of the ML hardware stack.
It takes some work to orchestrate these components to be useful in an ML
context, but that shouldn't come at the cost of vendor lock-in.

It's also increasingly common to find multi-cloud footprints in medium and
large enterprises. Data security matters a great deal to these firms -
making proprietary APIs a non-starter. Workflow repeatability and interface
consistency will increasingly matter to ML practitioners.

As this problem-space clarified and we understood it to be solvable, Substratus
was born. Here's what it aims to deliver:

**Rapid experimentation with the latest ML models**: Substratus makes it easy for
developers - particularly those comfortable with Kubernetes - to experiment
with and fine-tune open-source machine learning models.

**Security of internal ownership**: Deploy internally on your chosen cloud
providers and keep your sensitive training data where it lives today. Serve
models internally as you would any other enterprise-facing tool.

**Open-core**: Substratus will always be open-core. Period. If your team can
support it - and we believe many can - deploy the platform where ever it best
suits the business.

While there are other open-source projects in this space, we've taken careful
notes on how we want to differentiate.

## What are our opinions as we launch?

1. A small and consistent API - we have CRDs for `Models`, `Datasets`, `Servers`, and `Notebooks`.
   That's it!
2. Few integration points with our supported cloud providers - we want to avoid

3. Operational simplicity
4. Actually Open AI

As of now, we support Google Cloud Platform, with AWS and Azure support coming
soon.

We're laser-focused on getting infrastructure orchestration right while offering key extension points to plug
into the wider ML ecosystem. Through chaining Substratus primitives, both
creativity and organizational opinion can truly be unleashed.

## Our Product Roadmap

There's no shortage of features we plan to build. We hope to make the days
of ML engineers, cluster operators, and security teams better and easier at
every step in our journey.

1. **VSCode Integration**: We're working on a VSCode extension to bring an
   exceptional notebook experience into your favorite editor. The Jupyter
   Extension for VSCode is a great foundation for that experience today, but
   we see room for another level of excellence by knitting our infrastructure
   stack into a higher-level, integrated developer experience.
2. **Substratus Cloud**: Soon, you'll be able get an API key and unlock the same
   substratus open-source API through a managed platform. Forget the quotas of
   your personal cloud account. Our SaaS is the perfect way to get started and
   share your work with a wider community without deploying infrastructure.
3. **Partner Integrations**: We're teaming up with our friends at LangChain and
   Weaviate to provide integrations and demos showing how and where Substratus
   fits in the larger ML ecosystem.
4. **Cost and Capacity Conscious Workload Scheduling**: Cloud GPUs are
   notoriously expensive. Substratus can soften the blow by efficiently managing
   workloads with cost-effective and capacity-conscious scheduling.
5. **Multi-cluster**: Manage your clusters with ease with our upcoming
   cluster federation feature.
6. **RBAC for Teams**: Role-based access control for teams, ensuring security
   and privacy for your projects.
   **Multi-Cloud, Multi-Cluster Awareness**: Substratus is designed to be aware of
multiple clouds and clusters, providing flexibility and the power to choose the
best resources for your needs.

Substratus is not just a tool; it's a
comprehensive solution, built with a deep understanding of the needs and
challenges of ML development, cluster management, and security. We're excited to
see how you will use Substratus to innovate and build new solutions. Stay tuned
for more updates!
