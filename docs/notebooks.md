# Notebooks

Jupyter notebooks are at the heart of machine learning workflows in Substratus. They offer seamless integration with all other resources within the Substratus environment.

## Key Features of Substratus Notebooks

**1. Emulate Execution Environments.**

Substratus notebooks are designed to replicate the exact environment where your ML jobs will run. This feature is particularly beneficial when you're developing code for training models or importing datasets. 

With Substratus, your development environment will perfectly mirror your execution environment — be it the same Python version, identical Python packages, or similar tools installed.

**2. Mount Models and Datasets.**

Models and datasets can be very large. Notebooks run remotely with these artifacts mounted as read-only filesystems. You can inspect and experiment with large models and datasets without waiting for them to download to your local machine.

**3. Sync Remote Notebooks.**

Substratus enables remote notebooks to be launched from and synced back to your local directories. With a single command: your directory is uploaded to Substratus, a remote build of your containerized notebook environment is triggered, immediately followed by your notebook being launched. The first go-around may take a few minutes, but Substratus will cache build layers to speed things up next time.

## Typical Workflow

A typical development workflow leveraging notebooks on Substratus might look like:

1. Locally clone a git repo with ML code.
2. Launch a notebook from the local repo.
3. Develop ML code remotely using high-performance GPUs. (NOTE: files are continously synced back to your local directory)
4. Commit and push your changes to git OR launch a longrunning background job directly from your local machine.

## Next Steps

To gain hands-on experience with Substratus notebooks, consider exploring one of the following guides:

* [Guided Introduction to Substratus Notebooks](./walkthrough/intro-to-notebooks)
