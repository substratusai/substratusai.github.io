---
sidebar_position: 6
---

# Installation Guide

Looking to install Substratus on a specific Cloud/Environment?

- [GCP Install Guide](./gcp.md)
- Kind/Local Install Guide (coming soon)
- AWS Install Guide (Coming soon)

Each environment comes with a basic automated installer and step by step customizable install process.
The basic install is a great way to get started in a new cloud project. The customizable
install is better suited for users that need to have more control over how Substratus
gets installed.

## Automated install
The basic automatic installer creates a new K8s cluster, new bucket, new principal and automatically
sets up everything that's needed for Substratus to work.

## Customizable install
The advanced install lets you use your existing K8s cluster and other resources instead
of having Substratus automatically do everything for you. Users in restricted environments
or who need to re-use existing resources are encouraged to use the advanced install.

In general for clouds the following steps would be done during advanced install:
1. Create or reuse a K8s cluster and configure it according to needs of Substratus
2. Create or reuse an existing Cloud Bucket
3. Create or reuse an existing Container Image Registry
4. Create or reuse an existing IAM Principal (e.g. AWS Role/GCP Service Account)
5. Assign the permissions needed to the IAM Principal
6. Deploy and configure the Substratus operator
