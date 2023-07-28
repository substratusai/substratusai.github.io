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

* How can we easily experiment with LLMs? 👩‍🔬
* Can I inference using my workstation's hardware and OS? 💻
* What about fine-tuning, can I do that locally? Why do I run out of GPU
  memory?! 📏
* Can I stream or do I really need to download this whole dataset?! I didn't
  plan on uninstalling Flight Simulator tonight...✈️
* Is any part of this workflow portable or repeatable? ♻️

It would be reasonable to walk away from a night of yak-shaving with a Colab
subscription and a handful of small wins. But your plan to deliver a secure,
consistent, and portable ML workflow to your day job is still effectively
🤷🏾‍♀️. Even through great effort and ample research, your ultimate strategy
is: **hope**, that your engineering team is satisfied with Sagemaker's opinions
and pricing. 💸

There's got to be a better way.

## Why Substratus?

**Avoid vendor lock-in**: Machine learning workloads operate on undifferentiated
compute primitives, abundant across all cloud platforms (CPU, GPU, storage,
networks). GPUs may be less-available but are no-less commodity than the rest of
the ML hardware stack. It takes *some* work to orchestrate these components to
be useful in an ML context, but adopting a platform shouldn't come at the cost
of lock-in.

**Keep company data internal**: There's a tension playing out in real-time
across organizations today. AI-assisted workers report both greater satisfaction
in their work and non-trivial productivity gains. This should be a win-win for
companies and employees alike, but there's a rub - the best models are hosted by
another company - potentially that company is a direct competitor but even if
they aren't, your company secrets are absolutely in jeopardy. Operating your own
internal inferencing services is the most secure path to realizing the
opportunity AI presents.

**Rapid experimentation with the latest ML models**: Substratus makes it easy
for developers to fine-tune, serve, and experiment with open-source ML models in
notebooks. This can be done in minutes not hours using our off-the-shelf
loaders, trainers, and servers. This is possible without writing any code.

**Best practices baked-into your ML artifacts**: While Substratus is
less-opinionated than other platforms about your team's exact workflow, we
**are** rather opinionated about keeping the development process on rails. Once
created, Models, Datasets, and Servers are all immutable. They can spawn new
objects of the same kind (think: fine-tuning a model), but they can't be
changed. Similarly, our notebook environments are containerized and deployable
to prod. Finally, we're working on canned model optimizations like
auto-quanitization for efficient serving.

**Open-core**: Substratus will always be open-core. Period. If your team can
support it - and we believe many can - deploy the platform in as many places as
you need and at whatever scale suits the business.

While there are other open-source projects in this space, we've taken careful
notes on how we want to differentiate.

## What are our opinions as we launch?

1. **A small and consistent API**: We have custom resource definitions for
   `Models`, `Datasets`, `Servers`, and `Notebooks`. That's it!
2. **Few integration points with our supported cloud providers**: We are as
   incentivized as you to avoid unnecessary cloud spend. To this end, we use
   strictly commodity services with open source on-prem equivalents or analogs
   (e.g., S3, GCS, ABS, and ceph).
3. **Infrastructure-primitives serve the ends of first-class devX**: Rock-solid
   infrastructure isn't negotiable but also rarely sufficient to delight users.
   The ability to chain Substratus primitives through high-level clients is
   where the s8s starts to feel like magic.

## Our Product Roadmap

There's no shortage of features we plan to build and we have no intention of
keeping our cards close. We hope to make the days of ML engineers, cluster
operators, and security teams just a little better at every step in our journey.
Here's what we have on-deck:

1. **Supporting each of the big-3 cloud platforms**: As of now, we support
  Google Cloud Platform, with AWS and Azure support coming soon.
2. **VSCode Integration**: We're designing and developing a VSCode extension to
  bring a first class notebook experience into your favorite editor. The Jupyter
   Extension for VSCode is a great foundation for that experience today, but we
   see room for another level of excellence by knitting infrastructure
   operations into a higher-level, developer experience and workflow.
3. **Large-scale distributed training**: We aim to support the largest of
  training workloads. Currently we're able to utilize 8 GPUs for a single model
  but we've heard this isn't enough for every use-case. We intend to make wider
  horizontal GPU distribution a paved path on Substratus.
4. **Partner Integrations**: We're teaming up with our friends at LangChain and
   Weaviate to provide integrations and demos showcasing how and where
   Substratus fits in the larger ML ecosystem.

The roadmap above is all high priority for our open source project but we think
there's great value in getting started at low or no cost without standing up
infrastructure of your own. These upcoming features form the foundation of our
fledgling SaaS product:

1. **Substratus Cloud**: Soon, you'll be able get an API key and unlock the same
   Substratus open-source API through a managed platform! Forget the quotas of
   your personal cloud account, our SaaS is the perfect way to get started and
   share your work without deploying infrastructure.
2. **RBAC for Teams**: Role-based access control for teams, ensuring security
   and privacy for your projects.
3. **Multi-cloud, multi-cluster operations**: Manage your hybrid-SaaS clusters
  easily without needing to switch kubecontexts. Our enterprise CLI is
  fully-aware of everywhere your org has deployed Substratus.
4. **Cost and Capacity Conscious Workload Scheduling**: Cloud GPUs are
   notoriously expensive and sometimes unavailable in certain locations.
   Substratus can soften the blow by efficiently managing workloads with
   cost-aware and capacity-conscious scheduling.

What's next? Say hi on discord, file an issue on github if you hit a snag, and
sign-up for our monthly newsletter to keep track of the project. We're excited
to see how you'll use Substratus to innovate. Stay tuned!
