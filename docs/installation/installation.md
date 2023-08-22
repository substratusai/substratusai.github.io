---
sidebar_position: 6
---

# Installation

:::note

If you are just looking to quickly evaluate Substratus, consider deploying it on your local machine by following the [Quickstart with Kind](../quickstart.md).

:::

When you are ready to operate at scale, follow one of the cloud-installation guides:

- [GCP - Google Cloud Platform](./gcp.md)
- AWS - Planned (Upvote [GitHub Issue #12](https://github.com/substratusai/substratus/issues/12))
- Azure - Planned (Upvote [GitHub Issue #63](https://github.com/substratusai/substratus/issues/63))

## What to Expect

The installation guides include two paths:

**1. A Basic Installer Script**

* Intended for cloud accounts with few restrictions.
* Provisions all infrastructure and installs Substratus into a cluster.

**2. A Step-by-Step Walkthrough**

* Intended to be a reference for complicated cloud environments.
* Optionally deploy on existing Kubernetes clusters or reuse existing buckets/registries.

## Dependencies

To operate at scale, Substratus depends on the following cloud services:

* A Kubernetes Cluster (i.e. EKS / GKE / AKS)
* A Bucket (i.e. AWS S3 / Google Cloud Storage / Azure Blob)
* A Container Registry (i.e. AWS ECR / GCP Artifact Registry / Azure Container Registry)

The Substratus system will need the following access:

* R/W Access to Bucket
* R/W Access to Container Registry
* Access to Assign Namespace Bindings (i.e. GCP Workload Idenitity, AWS IRSA)

