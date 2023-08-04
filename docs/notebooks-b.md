# Notebooks

Jupyter notebooks sit at the core of machine learning expeditions at Substratus, the driver seat on your journey of refining raw data into a finely-tuned, deployed model.

## Key Features

**1. Emulated Environments.**

Imagine meeting your doppelganger, a perfect replica of yourself who thinks, acts, and even makes the same errors just as you would. Those are exactly the traits Substratus notebooks possess. They replicate the ML environments where your tasks come alive using the consistency provided by containers.

Whether it's model-training code you're refining or a dataset you're importing, your development space matches your final execution platform - identical Python version, Python packages, and the version of tools. It's like perfecting your symphony in the same auditorium where you're set to perform.

**2. Data Integrated.**

Often, datasets and models are massive behemoths. Substratus notebooks run remotely, with these titans mounted as read-only filesystems. The outcome? You can scrutinize and toy with bulky models and datasets without the patience-testing process of downloading them to your local machine.

**3. Remote-Local Syncing.**

With just one command, teleport your local directory to the cluster. Substratus sets to work, building your containerized notebook environment. You are presented with a notebook in your browser, all of your files and packages ready to go, with any changes you make showing up almost immediately back on your machine.

## Typical Workflow

A typical development workflow on Substratus that leverages notebooks might resemble a tango of intuitive steps:

1. Clone a git repo with ML code.

2. Propel a remote notebook into existance your local directory using a single Substratus command.

3. Develop your ML code, riding on high performance GPUs.

    (files are continously synced back to your local directory)

4. Commit and send your innovations to git OR release a background task straight from your local directory.

## Related Guides

Ready to get hands-on? Choose your training ground from one of these guides:

* [Basic Notebooks](./walkthrough/basic-notebooks.ipynb)
* [Customizing Training Code](./walkthrough/customizing-training-code.ipynb)
* [Importing a Custom Dataset](./walkthrough/importing-custom-dataset.ipynb)

