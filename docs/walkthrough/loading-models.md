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

You can see the Model `status.url` field reports the location of where the model is saved.

You have now successfully loaded a HuggingFace model in Substratus and can use that
model in other Substratus resources such as the Server resource.


## Loading models from other sources
If needed you can provide your own container image as long as it meets
the container contract defined by Substratus. For
now please file an [Issue on GitHub](
  https://github.com/substratusai/substratus/issues
) to request other images.

## Next steps
- Follow the [Serving Models walkthrough](./serving-models.md) to expose the falcon-7b-instruct model
and sent it some prompts.
- Follow the [Loading Datasets walkthrough](./loading-datasets.md) so you can finetune
  model that you loaded with your own dataset
- Follow the [Finetuning walkthrough](./finetuning-models.md) to finetune a model that you loaded from HuggingFace

