---
sidebar_position: 2
---

# Deploying and Finetuning Falcon-7b-instruct

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

In this tutorial, you will learn how to deploy and finetune the Falcon-7b-instruct model
with a custom dataset. The tutorial will cover 3 main sections:

1. Loading the Falcon-7b-instruct base model
2. Creating a server to serve the model
3. Loading a dataset and finetuning the base model

Prereq:
- Install Substratus following the [installation guide](../installation.md)


## Loading the falcon-7b-instruct model into Substratus
Create a Model resource to load the model from HuggingFace into Substratus.

Create the model by running:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

Once you create the model, it will create a K8s job to load the HuggingFace model
into Substratus. This job will use the container image defined in the Model resource to
load the HuggingFace model into Cloud Storage. For example, if you're using GCP,
then it would load the model into a GCS bucket.

Let's take a look at the Model resource that you just applied:


```bash
 curl https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

    apiVersion: substratus.ai/v1
    kind: Model
    metadata:
      name: falcon-7b-instruct
    spec:
      image:
        name: substratusai/model-loader-huggingface
      params:
        name: tiiuae/falcon-7b-instruct


You can look at the logs of the loader job by running:


```bash
 kubectl logs jobs/falcon-7b-instruct-modeller | tail -n 10
```

    [NbConvertApp] content: {'execution_state': 'busy'}
    [NbConvertApp] msg_type: execute_input
    [NbConvertApp] content: {'code': '! ls -lash /model/saved', 'execution_count': 5}
    [NbConvertApp] msg_type: stream
    [NbConvertApp] content: {'name': 'stdout', 'text': 'total 14G\r\n1.5K -rw-r--r-- 1 root 3003 1.5K Jul 15 02:46 .gitattributes\r\n 10K -rw-r--r-- 1 root 3003 9.6K Jul 15 02:46 README.md\r\n1.0K -rw-r--r-- 1 root 3003  667 Jul 15 02:46 config.json\r\n3.0K -rw-r--r-- 1 root 3003 2.6K Jul 15 02:46 configuration_RW.py\r\n 512 -rw-r--r-- 1 root 3003  111 Jul 15 02:46 generation_config.json\r\n1.5K -rw-r--r-- 1 root 3003 1.2K Jul 15 02:46 handler.py\r\n 47K -rw-r--r-- 1 root 3003  47K Jul 15 02:46 modelling_RW.py\r\n9.3G -rw-r--r-- 1 root 3003 9.3G Jul 15 02:48 pytorch_model-00001-of-00002.bin\r\n4.2G -rw-r--r-- 1 root 3003 4.2G Jul 15 02:47 pytorch_model-00002-of-00002.bin\r\n 17K -rw-r--r-- 1 root 3003  17K Jul 15 02:46 pytorch_model.bin.index.json\r\n 512 -rw-r--r-- 1 root 3003  281 Jul 15 02:46 special_tokens_map.json\r\n2.7M -rw-r--r-- 1 root 3003 2.7M Jul 15 02:46 tokenizer.json\r\n 512 -rw-r--r-- 1 root 3003  220 Jul 15 02:46 tokenizer_config.json\r\n'}
    [NbConvertApp] msg_type: status
    [NbConvertApp] content: {'execution_state': 'idle'}
    [NbConvertApp] Destroying zmq context for <jupyter_client.asynchronous.client.AsyncKernelClient object at 0x7f101990c650>
    [NbConvertApp] Applying preprocessor: coalesce_streams
    [NbConvertApp] Writing 9098 bytes to /model/logs/load.ipynb


After about 5 minutes the job should finish and the Model resource should report the status
to be ready. Verify by running:


```bash
 kubectl describe model falcon-7b-instruct
```

    Name:         falcon-7b-instruct
    Namespace:    default
    Labels:       <none>
    Annotations:  <none>
    API Version:  substratus.ai/v1
    Kind:         Model
    Metadata:
      Creation Timestamp:  2023-07-15T02:46:05Z
      Generation:          1
      Resource Version:    14266797
      UID:                 077198a0-32ec-4f07-9bc3-ba3a1f1a3729
    Spec:
      Image:
        Name:  substratusai/model-loader-huggingface
      Params:
        Name:  tiiuae/falcon-7b-instruct
    Status:
      Conditions:
        Last Transition Time:  2023-07-15T02:51:18Z
        Message:               
        Observed Generation:   1
        Reason:                JobComplete
        Status:                True
        Type:                  Modelled
      Ready:                   true
      URL:                     gs://substratus-models/077198a0-32ec-4f07-9bc3-ba3a1f1a3729/
    Events:                    <none>


## Serving the loaded model

The Substratus Server resource lets you serve models that were loaded into Substratus.
Substratus provides a serving image that uses Basaran to provide an OpenAI
compatible API endpoint and also a Web UI which is compatible with most of the
Large Language Models on HuggingFace.

Create the Server resource by running:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml
```

The following Server resource is used:
```yaml
apiVersion: substratus.ai/v1
kind: Server
metadata:
  name: falcon-7b-instruct
spec:
  image:
    name: substratusai/model-server-basaran
  model:
    name: falcon-7b-instruct
  resources:
    gpu:
      type: nvidia-l4
      count: 1
```
In the Model resource spec the following things are configured:
1. image.name: This is the image published by Substratus that can serve models.
2. model.name: Refers to the name of the model that was loaded earlier in this tutorial
3. resources: These specify what kind of resources are needed to serve the model. The Falcon-7b model requires GPUs to perform decently. In this case, 1 NVidia L4 GPU is requested.

It takes about 5 minutes to pull the container, load the model into GPU memory and being ready to serve requests. You can check if the Server is ready by running:


```bash
 kubectl describe server falcon-7b-instruct
```

    Name:         falcon-7b-instruct
    Namespace:    default
    Labels:       <none>
    Annotations:  <none>
    API Version:  substratus.ai/v1
    Kind:         Server
    Metadata:
      Creation Timestamp:  2023-07-15T05:43:56Z
      Generation:          1
      Resource Version:    14364432
      UID:                 f130adc7-9243-4a19-b195-ef8b14c8b3ac
    Spec:
      Image:
        Name:  substratusai/model-server-basaran
      Model:
        Name:  falcon-7b-instruct
      Resources:
        Cpu:   2
        Disk:  10
        Gpu:
          Count:  1
          Type:   nvidia-l4
        Memory:   10
    Status:
      Conditions:
        Last Transition Time:  2023-07-15T05:48:32Z
        Message:               
        Observed Generation:   1
        Reason:                DeploymentReady
        Status:                True
        Type:                  Deployed
      Ready:                   true
    Events:                    <none>


By default Substratus creates a K8s Service to expose the Server, however this Service is of type ClusterIP, which means you can not directly access it over the internet. So let's use K8s Port Forwarding to access the server.

Run the following command to forward your local 8080 port to the Server port 8080:


```bash
 kubectl port-forward service/falcon-7b-instruct-server 8080:8080
```

You should now be able to access the web interface of the Server by going to
[http://localhost:8080](http://localhost:8080)

You have now deployed the falcon-7b-instruct model.

## Finetuning falcon-7b-instruct
The base model is pretty decent but it won't be so helpful on domain
specific instructions that it hasn't been trained on.
Finetuning with your own dataset can help to make the model work well 
for specific use cases.

In Substratus the Model resource and Dataset resource can be used
to fine tune a base model.

### Loading a custom dataset
For this tutorial, a K8s instruction dataset will be used. The dataset
contains prompts and completions. Example entry in the dataset:
```
prompt: Write YAML that defines a Pod named \"dnsutils\" in the \"default\" namespace
completion: <K8s valid YAML file that defines K8s resources>
```

The goal here is to train a model that is able to generate valid K8s YAML files based on the prompt given.

The dataset loader used is available here: https://github.com/substratusai/dataset-k8s-instructions

Create the Dataset resource to load the dataset into Substratus:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/datasets/k8s-instructions.yaml
```

It takes a few minutes to load the dataset. Verify the Dataset is ready:


```bash
 kubectl describe dataset k8s-instructions
```

    Name:         k8s-instructions
    Namespace:    default
    Labels:       <none>
    Annotations:  <none>
    API Version:  substratus.ai/v1
    Kind:         Dataset
    Metadata:
      Creation Timestamp:  2023-07-12T05:38:49Z
      Generation:          2
      Resource Version:    12005235
      UID:                 ced22d70-e7a3-4e1c-9d9e-09278c70681e
    Spec:
      Command:
        load.sh
      Filename:  k8s-instructions.jsonl
      Image:
        Git:
          URL:  https://github.com/substratusai/dataset-k8s-instructions
        Name:   us-central1-docker.pkg.dev/my-gcp-project/substratus/dataset-default-k8s-instructions
    Status:
      Conditions:
        Last Transition Time:  2023-07-12T05:39:18Z
        Message:               Builder Job completed: k8s-instructions-dataset-container-builder
        Observed Generation:   2
        Reason:                JobComplete
        Status:                True
        Type:                  Built
        Last Transition Time:  2023-07-12T05:40:05Z
        Message:               
        Observed Generation:   2
        Reason:                JobComplete
        Status:                True
        Type:                  Loaded
      Ready:                   true
      URL:                     gs://my-gcp-project-substratus-datasets/ced22d70-e7a3-4e1c-9d9e-09278c70681e/data/k8s-instructions.jsonl
    Events:                    <none>


### Creating the fine tuned model
Fine tuned model = base model + dataset. Substratus makes this very easy by creating
new Model resource where you specify the base model and the dataset, resulting in a
new fine tuned model.

Create the fined model by running:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-model.yaml
```

The following Model resource was used in the above command:
```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  name: falcon-7b-instruct-k8s
spec:
  image:
    name: substratusai/model-trainer-huggingface
  baseModel:
    name: falcon-7b-instruct
  trainingDataset:
    name: k8s-instructions
  params:
    epochs: 1
  resources:
    gpu:
      count: 4
      type: nvidia-l4
```

Here we can see baseModel referring to the previously loaded model and trainingDataset refers
to the dataset that was loaded in prior step. For training you generally need more GPUs, so that's
why 4 GPUs are being requested.

Another key difference from the Model resource that was used to load the base model is the image that's being used. In this Model the image used is a HuggingFace based trainer image. The image
is built and published by Substratus and the source is available here:
https://github.com/substratusai/model-trainer-huggingface

The training takes about 20 to 30 minutes. You can watch the progress by running:


```bash
 kubectl logs jobs/falcon-7b-instruct-k8s-modeller | tail -n 5
```

    [NbConvertApp] content: {'data': {'text/plain': 'Loading checkpoint shards:   0%|          | 0/2 [00:00<?, ?it/s]', 'application/vnd.jupyter.widget-view+json': {'version_major': 2, 'version_minor': 0, 'model_id': 'd32cd19e121147368d18bd6dee667365'}}, 'metadata': {}, 'transient': {}}
    [NbConvertApp] msg_type: comm_msg
    [NbConvertApp] content: {'data': {'method': 'update', 'state': {'value': 'Loading checkpoint shards:   0%'}, 'buffer_paths': []}, 'comm_id': '16a9b5f3e1584d6e952a78ab42350951'}
    [NbConvertApp] msg_type: comm_msg
    [NbConvertApp] content: {'data': {'method': 'update', 'state': {'value': ' 0/2 [00:00&lt;?, ?it/s]'}, 'buffer_paths': []}, 'comm_id': 'a2513eda3ca14e97844704daa51a3c97'}


Wait until the falcon-7b-instruct-k8s-modeller job has finished. Once finished you can create another Server but this time let's specify our fine tuned model in the server object.

Create a Server to serve the falcon-7b-instruct-k8s finetuned model:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-server.yaml
```

    server.substratus.ai/falcon-7b-instruct-k8s created


Verify that the Server is ready by running:


```bash
 kubectl describe server falcon-7b-instruct-k8s
```

    Name:         falcon-7b-instruct-k8s
    Namespace:    default
    Labels:       <none>
    Annotations:  <none>
    API Version:  substratus.ai/v1
    Kind:         Server
    Metadata:
      Creation Timestamp:  2023-07-15T21:13:17Z
      Generation:          1
      Resource Version:    14869700
      UID:                 53c5e9a6-7535-4051-b3dc-d205f1efe5f0
    Spec:
      Image:
        Name:  substratusai/model-server-basaran
      Model:
        Name:  falcon-7b-instruct-k8s
      Resources:
        Cpu:   2
        Disk:  10
        Gpu:
          Count:  1
          Type:   nvidia-l4
        Memory:   10
    Status:
      Conditions:
        Last Transition Time:  2023-07-15T21:17:47Z
        Message:               
        Observed Generation:   1
        Reason:                DeploymentReady
        Status:                True
        Type:                  Deployed
      Ready:                   true
    Events:                    <none>


Port forward your localhost port 8081 to the Server that's serving the fine tuned model. The Server always uses port 8080 and you can choose which local port you want to use.

Run the following command (8081 is local and 8080 is remote):


```bash
 kubectl port-forward services/falcon-7b-instruct-k8s-server 8081:8080
```

You should now be able to access the web interface of the Server by going to
[http://localhost:8081](http://localhost:8081)

You have now deployed the finetuned falcon-7b-instruct-k8s model that is better at generating K8s YAML manifests.

Next steps:
- Read more about [loading datasets](../walkthrough/loading-datasets.md)
- Read more about [finetuning models](../walkthrough/finetuning-models.md)
- Read more about [serving models](../walkthrough/serving-models.md)
