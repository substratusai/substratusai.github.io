---
sidebar_position: 1
---

# Loading Models

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

Import your existing ML models into Substratus.
You can for example use the Substratus provided `substratusai/model-loader-huggingface`
container image to load models into Substratus.

The below Model resource shows an example on how to load the falcon-7b-instruct
model into substratus:

```yaml
apiVersion: substratus.ai/v1
kind: Model
metadata:
  name: falcon-7b-instruct
spec:
  image:
    name: substratusai/model-loader-huggingface
  params:
    name: tiiuae/falcon-7b-instruct
```

In the model spec, you provide the container image location and the name
of the HuggingFace model. The model-loader-huggingface downloads the model
and stores it in a predefined location such that the model gets stored
in a cloud storage bucket (e.g. a GCS bucket).

The Model `status.url` will provide you with the cloud storage location
where the model is stored.

## Loading a Model from HuggingFace

Run the following command to load the falcon-7b-instruct model:



```bash
kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml
```

Once you create the Model, it will create a K8s job to load the HuggingFace model
into Substratus. This job will use the container image defined in the Model resource.

You can take a look at the logs of the job by running:



```bash
kubectl logs jobs/falcon-7b-instruct-modeller | tail -n 10
```

After about 5 minutes the job should finish and the Model resource should report the status
to be ready. Verify by running:



```bash
kubectl describe model falcon-7b-instruct
```


```bash
#  Name:         falcon-7b-instruct
#  Namespace:    default
#  Labels:       <none>
#  Annotations:  <none>
#  API Version:  substratus.ai/v1
#  Kind:         Model
#  Metadata:
#    Creation Timestamp:  2023-07-15T02:46:05Z
#    Generation:          1
#    Resource Version:    14266797
#    UID:                 077198a0-32ec-4f07-9bc3-ba3a1f1a3729
#  Spec:
#    Image:
#      Name:  substratusai/model-loader-huggingface
#    Params:
#      Name:  tiiuae/falcon-7b-instruct
#  Status:
#    Conditions:
#      Last Transition Time:  2023-07-15T02:51:18Z
#      Message:               
#      Observed Generation:   1
#      Reason:                JobComplete
#      Status:                True
#      Type:                  Modelled
#    Ready:                   true
#    URL:                     gs://my-gcs-bucket-name/077198a0-32ec-4f07-9bc3-ba3a1f1a3729/
#  Events:                    <none>
```


You can see the Model `status.url` field reports the location of where the model is saved.

You have now successfully loaded a HuggingFace model in Substratus and can use that
model in other Substratus resources such as the Server resource.

## Loading models from other sources

If needed you can provide your own container image as long as it meets
the container contract defined by Substratus. For
now please file an [Issue on GitHub](https://github.com/substratusai/substratus/issues) to request other images.

## Next steps

- Follow the [serving models walkthrough](./serving-models.md) to launch a model inference server.
- Follow the [loading datasets walkthrough](./loading-datasets.md) to prepare a dataset for fine-tuning.
- Follow the [fine-tuning models walkthrough](./finetuning-models.md) to produce a customized model.

