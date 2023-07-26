---
sidebar_position: 2
---

# Serving Models

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

The Substratus Server resource lets you serve models that were loaded into Substratus.
Substratus provides a serving image that uses Basaran to provide an OpenAI
compatible API endpoint and also a Web UI which is compatible with most of the
Large Language Models on HuggingFace.

## Creating a server for falcon-7b-instruct
Prerequisites:
- The falcon-7b-instruct model was loaded by following the [loading models walkthrough](./loading-datasets.md)

Run the following command to satisfy the prerequisites:


```bash
 kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

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

By default Substratus creates a K8s Service to expose the Server, however this Service is of type ClusterIP, which means you can not directly access it over the internet. So let's use K8s Port Forwarding to access the server.

Run the following command to forward your local 8080 port to the Server port 8080:


```bash
 kubectl port-forward service/falcon-7b-instruct-server 8080:8080
```

You should now be able to access the web interface of the Server by going to
[http://localhost:8080](http://localhost:8080)

