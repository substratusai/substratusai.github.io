---
sidebar_position: 4
---

# GCP Install Guide


## Automatic Install

A basic automatic installer is packaged as a container image and can be run directly. This installation method is only intended to work in a basic GCP project free of any significant constraints (i.e. GCP Organizational Policies, etc). This path has been tested on brand new cloud projects.


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
4. Create or reuse an existing GCP Service Account
5. Assign the permissions needed to the GCP Service Account
6. Deploy and configure the Substratus operator

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
export CLUSTER_NAME=substratus
gcloud container clusters create ${CLUSTER_NAME} --location $REGION \
  --machine-type n2d-standard-8 --num-nodes 1 --min-nodes 1 --max-nodes 5 \
  --node-locations $ZONE --workload-pool $PROJECT_ID.svc.id.goog \
  --enable-image-streaming --enable-shielded-nodes --shielded-secure-boot \
  --shielded-integrity-monitoring --enable-autoprovisioning \
  --max-cpu 960 --max-memory 9600 --ephemeral-storage-local-ssd=count=2 \
  --autoprovisioning-scopes=logging.write,monitoring,devstorage.read_only,compute
```

Configure a maintenance exclusion so GKE doesn't randomly start upgrading your nodes:
```sh
START=$(date -I --date="-1 day")
END=$(date -I --date="+160 days")
gcloud container clusters update ${CLUSTER_NAME} --region ${REGION} \
    --add-maintenance-exclusion-name notouchy \
    --add-maintenance-exclusion-start ${START} \
    --add-maintenance-exclusion-end ${END} \
    --add-maintenance-exclusion-scope no_minor_or_node_upgrades
```

Create new GPU nodepools (e.g. L4 GPU nodepools):
```sh
nodepool_args=(--spot --enable-autoscaling --enable-image-streaming
  --num-nodes=0 --min-nodes=0 --max-nodes=3 --cluster ${CLUSTER_NAME}
  --node-locations ${REGION}-a,${REGION}-b --region ${REGION} --async)
  
gcloud container node-pools create g2-standard-8 \
  --accelerator type=nvidia-l4,count=1,gpu-driver-version=latest \
  --machine-type g2-standard-8 --ephemeral-storage-local-ssd=count=1 \
  "${nodepool_args[@]}"

gcloud container node-pools create g2-standard-24 \
  --accelerator type=nvidia-l4,count=2,gpu-driver-version=latest \
  --machine-type g2-standard-24 --ephemeral-storage-local-ssd=count=2 \
  "${nodepool_args[@]}"

gcloud container node-pools create g2-standard-48 \
  --accelerator type=nvidia-l4,count=4,gpu-driver-version=latest \
  --machine-type g2-standard-48 --ephemeral-storage-local-ssd=count=4 \
  "${nodepool_args[@]}"
```


### 2. Create or reuse existing GCS bucket
Substratus recommends using a GCS bucket in the same region
as the GKE cluster. This GCS bucket will be used for storing
ML models and datasets.

Specify the URL of the bucket you wish to use:
```sh
export BUCKET=gs://$PROJECT_ID-substratus-artifacts
```

Create the bucket if needed
```sh
gcloud storage buckets create ${BUCKET} --location ${REGION}
```

### 3. Create or reuse existing Google Artifact Registry
Substratus uses the Google Artifact Registry to push new images
and pull images. You can reuse an existing one or create a new one.

Specify the repository you wish to use:
```sh
export GAR_REPO_NAME=substratus
export REGISTRY_URL=${REGION}-docker.pkg.dev/${PROJECT_ID}/${GAR_REPO_NAME}
```

Create a new GAR repo:
```sh
gcloud artifacts repositories create ${GAR_REPO_NAME} \
  --repository-format=docker --location=${REGION}
```

### 4. Create or reuse an existing GCP Service Account
Substratus uses a GCP Service Account to authenticate to the GCS Bucket
that hosts the Model and Datasets data.

Specify the service account you wish to use:
```sh
export SERVICE_ACCOUNT_NAME=substratus
export SERVICE_ACCOUNT="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
```

Create a new service account:
```sh
gcloud iam service-accounts create ${SERVICE_ACCOUNT_NAME}
```

### 5. Assign the permissions needed to the GCP Service Account
```sh
gcloud storage buckets add-iam-policy-binding ${BUCKET} \
  --member="serviceAccount:${SERVICE_ACCOUNT}" --role=roles/storage.admin

gcloud artifacts repositories add-iam-policy-binding ${GAR_REPO_NAME} \
  --location us-central1 --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role=roles/artifactregistry.admin

gcloud iam service-accounts add-iam-policy-binding ${SERVICE_ACCOUNT} \
   --role roles/iam.serviceAccountAdmin --member "serviceAccount:${SERVICE_ACCOUNT}"

gcloud iam service-accounts add-iam-policy-binding ${SERVICE_ACCOUNT} \
   --role roles/iam.serviceAccountTokenCreator  --member "serviceAccount:${SERVICE_ACCOUNT}"

gcloud iam service-accounts add-iam-policy-binding ${SERVICE_ACCOUNT} \
   --role roles/iam.workloadIdentityUser \
   --member "serviceAccount:${PROJECT_ID}.svc.id.goog[substratus/sci]"
```

### 6. Deploy and configure Substratus operator
Create the namespace for the operator (needs to be substratus):
```sh
kubectl create ns substratus
```

Create a ConfigMap that references the resources from step 2 to 5 by using
the environment variables that you set.

Verify the environment variables have been set correctly:
```sh
echo "BUCKET: ${BUCKET}"
echo "REGISTRY_URL: ${REGISTRY_URL}"
echo "PRINCIPAL: ${SERVICE_ACCOUNT}"
```

Run the following to create the ConfigMap:
```sh
kubectl apply -f - << EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: system
  namespace: substratus
data:
  CLOUD: gcp
  ARTIFACT_BUCKET_URL: ${BUCKET}
  REGISTRY_URL: ${REGISTRY_URL}
  PRINCIPAL: ${SERVICE_ACCOUNT}
EOF
```

Deploy the Substratus operator:
```sh
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kubernetes/gcp/system.yaml
```