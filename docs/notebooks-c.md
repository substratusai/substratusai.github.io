# Jupyter Notebooks in Substratus

Jupyter notebooks form the core of Machine Learning (ML) workflows in Substratus. They offer seamless integration with all other resources within the Substratus environment.

## Key Features of Substratus Jupyter Notebooks

### 1. Mimicking Execution Environments

Substratus Jupyter notebooks have the unique ability to replicate the exact environment where your ML jobs will run. This feature is particularly beneficial when you're developing code for training models or importing datasets. 

With Substratus, your development environment will perfectly mirror your execution environment — be it the same Python version, identical Python packages, or similar tools installed.

---

### 2. Mounting Models and Datasets

Another key feature of Substratus Jupyter notebooks is their ability to mount models and datasets available within Substratus. Given that these models and datasets can be sizeable, notebooks are designed to run remotely with these artifacts mounted as read-only filesystems. 

This setup makes it considerably easy to inspect and experiment with large models and datasets without downloading them to your local machine.

---

### 3. Remote Notebook Sync

Substratus enables remote notebooks to be launched from and synced back to your local directories. In one simple command, you can upload a local directory to the cluster. Substratus will then take over, build your containerized notebook environment, launch it, and open your notebook in your browser.

## Typical Workflow with Substratus

A typical development workflow leveraging notebooks on Substratus might look like this:

1. Locally clone a git repo with ML code.
2. Launch a notebook from the local repo.
3. Develop ML code remotely using high-performance GPUs. (Note: files are continuously synced back to your local directory.)
4. Commit and push your changes to git OR launch a background job directly from your local directory.

## Further Learning

To gain hands-on experience with Substratus Jupyter notebooks, consider checking out one of the following guides:

- [Basic Notebooks Walkthrough](./walkthrough/basic-notebooks.ipynb)
- [Customizing Training Code Guide](./walkthrough/customizing-training-code.ipynb)
- [Guide on Importing a Custom Dataset](./walkthrough/importing-custom-dataset.ipynb)