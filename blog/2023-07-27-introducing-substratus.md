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

Open Source machine learning models are exploding in popularity and it's nearly
impossible for any individual or organization to keep up. We felt this exact
pain earlier in 2023: how can we experiment with these models? Can I inference
using my workstation's hardware? What about fine-tuning, is that also possible
locally? Do I really need to download this whole dataset?! It's not unreasonable
to walk away from a couple hours of yak shaving, resigned to using Colab. Your
strategy for bringing an ML workflow to your day job is effectively 🤷🏾‍♀️ I
hope you and your engineering team like Sagemaker's opinions (and pricing).

But under the hood, ML workloads can all sit on undifferentiated primitives,
abundant across cloud platforms (compute, storage, networks). GPUs may be
less-available but are no-less commodity than the rest of the ML hardware stack.
Furthermore, multi-cloud footprints are increasingly common across medium and
large enterprises. Data security matters a great deal to these firms. Workflow
standardization matters just as much to ML practitioners. As the problem-space
clarified and solvable, Substratus was born.

## Why Substratus?

**Easy to Experiment**: Substratus makes it easy for developers to experiment
with and fine-tune open-source machine learning models, fostering innovation and
rapid development.

**Security**: With the option to deploy Substratus internally, keep your
sensitive data close and your deployment story portable, mitigating risks and
ensuring data privacy.

**Multi-Cloud, Multi-Cluster Awareness**: Substratus is designed to be aware of
multiple clouds and clusters, providing flexibility and the power to choose the
best resources for your needs.

While there are other open-source projects in this space, we've taken careful
notes on how we want to differentiate. Substratus is not just a tool; it's a
comprehensive solution, built with a deep understanding of the needs and
challenges of ML development, cluster management, and security. We're excited to
see how you will use Substratus to innovate and build new solutions. Stay tuned
for more updates!

We're laser-focused on getting infrastructure orchestration right while offering key extension points to plug
into the wider ML ecosystem. Through chaining Substratus primitives, both
creativity and organizational opinion can truly be unleashed.

## What are our opinions as we blast off?

1. A small API
2. Limited integration to our supported platforms
3. Operational simplicity
4. Actually Open AI

As of now, we support Google Cloud Platform, with AWS and Azure support coming
soon.

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
   substratus open source API through a managed platform. Forget the quotas of
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
