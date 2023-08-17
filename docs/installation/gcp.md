---
sidebar_position: 4
---

# GCP Install Guide


## Auto Install

A basic installer is packaged as a container image and can be run directly. This installation method is only intended to work in a basic cloud project free of any significant constraints (i.e. GCP Organizational Policies, etc). This path has been tested on brand new cloud projects.


```bash
docker run -it \
  -v $HOME/.kube:/root/.kube \
  -e PROJECT=$(gcloud config get project) \
  -e TOKEN=$(gcloud auth print-access-token) \
  substratusai/installer gcp-up.sh
```

## Advanced Installation
The advanced install lets you use your existing GKE cluster and other resources instead
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

### Configure environment variables
Lets configure a few basic environment variables that will be used throughout
the various steps:
```sh
export PROJECT_ID=$(gcloud config get project)
export REGION=us-central1
export ZONE=us-central1-a
```

### 1. (Optional) Create GKE cluster
Substratus has the following requirements for a GKE cluster:
* Workload Identity is enabled
* Ability to utilize GPU nodes. Static nodepools and cluster autoscaling are both supported

You can skip this step if you already have a cluster that meets those requirements.

Create a new GKE cluster using gcloud:
```sh
gcloud container clusters create substratus --location $REGION \
  --machine-type n2d-standard-8 --num-nodes 1 --min-nodes 1 --max-nodes 5 \
  --node-locations $ZONE --workload-pool $PROJECT_ID.svc.id.goog \
  --enable-image-streaming --enable-shielded-nodes --shielded-secure-boot \
  --shielded-integrity-monitoring --enable-autoprovisioning
```

### 2. Create or reuse a GCS bucket
Substratus recommends using a GCS bucket in the same region
as the GKE cluster. This GCS bucket will be used for storing
ML models and datasets.

