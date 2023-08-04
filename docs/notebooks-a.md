# Notebooks

Jupyter notebooks are at the heart of ML workflows within Substratus. They integrate into all other Substratus resources.

## Key Features

**1. Notebooks can mimic the environments that you will run your ML jobs in.**

This is useful for developing code for training models or importing datasets. Your development environment will match the environment that the jobs will execute in: same exact version of python, same python packages, and same installed tools.

**2. Notebooks can mount models and datasets that exist within Substratus.**

Models and datasets can be very large. Notebooks run remotely with these artifacts mounted as read-only filesystems. This makes it very easy to inspect and experiment with large models and datasets without waiting for them to download to your local machine.

**3. Remote notebooks are launched from and synced back to your local directories.**

With a single command, you can upload a local directory to the cluster, Substratus will build your containerized notebook environment, launch, and open your notebook in your browser.

## Typical Workflow

A typical development workflow on Substratus that leverages notebooks might look like:

1. Local: Clone a git repo with ML code.

2. Local: Launch a notebook from the local repo.

3. Remote: Develop ML code on high performance GPUs.

    (files are continously synced back to your local directory)

4. Local: Commit and push your changes to git OR launch a background job directly from your local directory.


## Related Guides

To get hands-on experience with notebooks, checkout one of the following guides:

* [Basic Notebooks](./walkthrough/basic-notebooks.ipynb)
* [Customizing Training Code](./walkthrough/customizing-training-code.ipynb)
* [Importing a Custom Dataset](./walkthrough/importing-custom-dataset.ipynb)

