---
sidebar_position: 5
---

# Intro to Notebooks

<!-- THE MARKDOWN (.md) FILE IS GENERATED FROM THE NOTEBOOK (.ipynb) FILE -->

Substratus notebooks allow you to access high-performance GPUs while developing machine learning code. In this guide you will explore how to launch a containerized notebook from your local machine.

## Prerequisites

This guide assumes you already have a Substratus cluster [installed](../installation).

Also make sure to install up-to-date Substratus kubectl plugins:


```bash
source <(curl -s https://raw.githubusercontent.com/substratusai/substratus/main/install/scripts/install-kubectl-plugins.sh)
```



## Clone the Example Notebook

Clone the example notebook repo.


```bash
git clone https://github.com/substratusai/example-minimal-notebook
cd example-minimal-notebook
```



By convention in Substratus source code is stored in `src/`. A Dockerfile is used to describe the environment the notebook will run in. When launching a notebook, Substratus will look for a `notebook.yaml` file. This file can be used to configure things like the compute resources allocated to the notebook.


```bash
ls
```


```bash
#  Dockerfile    README.md     notebook.yaml src
```


## Launch a Remote Notebook

With the following command Substratus will upload, build, and serve your notebook. The `-d` flag instructs the command to launch from the current directory. Once launched, try making a change to a file in the notebook and saving it.


```bash
kubectl notebook -d .
```



Substratus continuously syncs any changes you made in your remote notebook back to your local directory.


```bash
git status --short
```


```bash
#   M src/hello.ipynb
```


Once you are done, press `Ctrl-C` to terminate the notebook session. This will suspend the remote notebook (you will see the browser session end).

## Cleanup

Your remote notebook will continue to exist in the cluster in a suspended state (not consuming any compute resources). You can completely remove the Notebook object if you are done with it.


```bash
kubectl delete -f ./notebook.yaml
```




:::note

Notebooks will eventually support scratch space (see [GitHub issue #66](https://github.com/substratusai/substratus/issues/5)). Deleting the notebook will free the attached disks once this is supported.

:::
