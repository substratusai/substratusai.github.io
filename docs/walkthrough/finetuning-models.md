---
sidebar_position: 4
---

# Finetuning Models

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->
The large pretrained base models are already very helpful, but
with finetuning small and large language models can be made even more helpful.

Finetuning is especially helpful for use cases that require private internal
data or for use cases that require domain specific knowledge that wasn't
available on the internet.

In Substratus the Model resource allows you to specify a `baseModel` and
a `trainingDataset` to create new finetuned models.

To summarize: 
`finetunedModel = training_image(baseModel, trainingDataset)`. 


The following Model resource would create a finetuned model:
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

Under `image.name` you see model-trainer-huggingface`, which is provided
by Substratus  and can be used to finetune language models that were loaded from HuggingFace.
The image uses the HuggingFace transformers library for training.
The source for the trainer is available here:
https://github.com/substratusai/model-trainer-huggingface

The trainer image will load the base model from a predefined path and use PEFT method for finetuning. Once training is done, the training image saves the model to a predefined path.
By using a predefined paths the model automatically loads and stores from cloud storage buckets.


### Prerequisites
- Installed Substratus following the [installation guide](../installation.md)
- You have loaded the falcon-7b-instruct model by following [quickstart guide](../quickstart.md)
- You have loaded the k8s-instruction Dataset by following the [loading datasets guide](./loading-datasets.md)

Run the commands below to ensure the you satisfy all the prerequisites:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
! kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/datasets/k8s-instructions.yaml
```

Verify that the falcon-7b-instruct model and k8s-instruct Dataset are ready (this should take ~5 minutes):


```bash
 kubectl describe dataset k8s-instruct
```

## Finetuning falcon-7b-instruct

Create the fine tuned model:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-model.yaml
```

The training takes about 20 to 30 minutes. You can watch the progress by running:


```bash
 kubectl logs jobs/falcon-7b-instruct-k8s-modeller
```

Wait until the falcon-7b-instruct-k8s-modeller job has finished. Once finished you can create
a Server resource.

## Serving the finetuned model

Create a Server to serve the falcon-7b-instruct-k8s finetuned model:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-server.yaml
```

Verify that the Server is ready by running:


```bash
 kubectl describe server falcon-7b-instruct-k8s
```

By default Substratus creates a K8s Service to expose the Server, however this Service is of type ClusterIP, which means you can not directly access it over the internet. So let's use K8s Port Forwarding to access the server.

Run the following command to forward your local 8080 port to the Server port 8080:


```bash
 kubectl port-forward service/falcon-7b-instruct-server 8080:8080
```

You should now be able to access the web interface of the Server by going to
[http://localhost:8080](http://localhost:8080)

You have now deployed falcon-7b-instruct model that was fine tuned to write K8s YAML files. Try it out by sending the following prompt:
```
Below is an instruction that describes a task. Write a response that appropriately completes the request.

### Instruction:
Write YAML that defines a Kubernetes Deployment named "iis" with 3 replicas 

### Response:
```
