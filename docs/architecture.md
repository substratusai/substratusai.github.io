---
sidebar_position: 5
---

# Architecture

Substratus is architected as an extension of the Kubernetes control plane. Substratus orchestrates Machine Learning workloads (data loader jobs, model training jobs, inference servers) using the [Operator Pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/). The Substratus operator is a standalone system that can be installed into existing Kubernetes clusters.


<img src="/img/diagrams/architecture.excalidraw.png"></img>

### Networking

Substratus only requires that users have access to the Kubernetes API server.

Substratus relies on built-in Kubernetes port-forwarding (simplified via a Substratus kubectl plugin) to serve Jupyter Notebooks. This means that administrators do not need to manage application TLS certificates, networking ingress paths, or application-specific firewall rules.

### Storage

Substratus depends on a single cloud bucket for storage (S3 on AWS or GCS on GCP).

### Access Control

Substratus resources are Kubernetes resources. This means that multi-tenancy is supported out of the box via Kubernetes [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) and granular access rules can be defined using standard Kubernetes [Roles and RoleBindings](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).

## Requirements for Advanced Features

While not required, Substratus can provide the following advanced features when the following access is granted to the Substratus system:

**Write Access to Container Registry:**

* Unlocks deployments directly from Git (removing the need for external CI/CD pipelines).

**In Conjunction with Signed URL Access on Buckets:**

* Unlocks client-triggered directory uploads for remote building and deployment.
* Unlocks the on-demand launching of remote containerized notebooks from local directories.

For more info on signed URLs see the [GCS](https://cloud.google.com/storage/docs/access-control/signed-urls) or [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) docs.

:::note

If your company does not permit signed URLs give [GitHub Issue #195](https://github.com/substratusai/substratus/issues/195) an upvote to have a workaround developed.

:::