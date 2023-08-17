---
sidebar_position: 6
---

# Installation Guide

Looking to install Substratus on a specific Cloud/Environment?
- [GCP Install Guide](./gcp.md)
- AWS Install Guide (Coming soon)
- Kind/Local Install Guide (coming soon)
Each environment comes with a basic automagic installer and an advanced install. 

## Basic install
The basic automagic installer creates a new K8s cluster, new bucket, new principal and automatically
sets up everything that's needed for Substratus to work. The automagic installer is packaged
as a container and contains all the tools required. It's intended to work on a new cloud
project/account free of any significant constraints (i.e. GCP Org Policies).

## Advanced install
The advanced install lets you use your existing K8s cluster and other resources instead
of having Substratus automatically do everything for you. Users in restricted environments
or who need to re-use existing resources are encouraged to use the advanced install.

In general for clouds the following steps would be done during advanced install:
1. Create or reuse a K8s cluster and configure it according to needs of Substratus
2. Create or reuse an existing Cloud Bucket
3. Create or reuse an existing Container Image Registry
4. Create or reuse an existing IAM Principal (e.g. AWS Role/GCP Service Account)
5. Assign the permissions needed to the IAM Principal
6. Create a ConfigMap for Substratus that references resources from steps 2 to 5
7. Deploy Substratus operator
