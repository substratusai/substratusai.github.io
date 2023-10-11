"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"k8s-yaml-dataset","metadata":{"permalink":"/blog/k8s-yaml-dataset","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-10-09-k8s-yaml-dataset.md","source":"@site/blog/2023-10-09-k8s-yaml-dataset.md","title":"The K8s YAML dataset","description":"Excited to announce the K8s YAML dataset containing","date":"2023-10-09T00:00:00.000Z","formattedDate":"October 9, 2023","tags":[{"label":"k8s","permalink":"/blog/tags/k-8-s"},{"label":"yaml","permalink":"/blog/tags/yaml"},{"label":"dataset","permalink":"/blog/tags/dataset"}],"readingTime":2.205,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"frontMatter":{"slug":"k8s-yaml-dataset","title":"The K8s YAML dataset","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"tags":["k8s","yaml","dataset"]},"nextItem":{"title":"Tutorial: K8s Kind with GPUs","permalink":"/blog/kind-with-gpus"}},"content":"import GitHubButton from \'react-github-btn\'\\n\\nExcited to announce the K8s YAML dataset containing\\n276,520 valid K8s YAML files.\\n\\nHuggingFace Dataset: https://huggingface.co/datasets/substratusai/the-stack-yaml-k8s  \\nSource code: https://github.com/substratusai/the-stack-yaml-k8s\\n\\n## Why?\\n* This dataset can be used to fine-tune an LLM directly\\n* New datasets can be created from his dataset such as an K8s instruct dataset (coming soon!)\\n* What\'s your use case?\\n\\n## How?\\nGetting a lot of K8s YAML manifests wasn\'t easy. My initial approach\\nwas to use the Kubernetes website and scrape the YAML example files,\\nhowever the issue was the quantity since I could only scrape\\nabout ~250 YAML examples that way.\\n\\nLuckily, I came across [the-stack](https://huggingface.co/datasets/bigcode/the-stack) dataset\\nwhich is a cleaned dataset of code on GitHub. The dataset is nicely structured by language\\nand I noticed that `yaml` was one of the languages in the dataset.\\n\\nInstall libraries used in this blog post:\\n```bash\\npip3 install datasets kubernetes-validate\\n```\\n\\nLet\'s load the `the-stack` dataset but only the YAML files (takes about 200GB of disk space):\\n```python\\nfrom datasets import load_dataset\\nds = load_dataset(\\"bigcode/the-stack\\", data_dir=\\"data/yaml\\", split=\\"train\\")\\n```\\nOnce loaded there are 13,439,939 YAML files in `ds`.\\n\\nYou can check the content of one of the files:\\n```python\\nprint(ds[0][\\"content\\"])\\n```\\n\\nYou probably notice that this ain\'t a K8s YAML file, so next we need to filter\\nthese 13 million YAML files and only keep the one that have valid K8 YAML.\\n\\nThe approach I took was to use the kubernetes-validate OSS library. It turned out\\nthat YAML parsing was extremely slow so I added a 10x speed improvement\\nby eagerly checking if \\"Kind or \\"kind\\" is not a substring in the YAML file.\\n\\nHere is the validate function that takes the yaml_content as a string and\\nreturns if the content was valid K8s YAML or not:\\n```python\\nimport kubernetes_validate\\nimport yaml\\n\\ndef validate(yaml_content: str):\\n    try:\\n        # Speed optimization to return early without having to load YAML\\n        if \\"kind\\" not in yaml_content and \\"Kind\\" not in yaml_content:\\n            return False\\n        data = yaml.safe_load(yaml_content)\\n        kubernetes_validate.validate(data, \'1.22\', strict=True)\\n        return True\\n    except Exception as e:\\n        return False\\n\\nvalidate(ds[0][\\"content\\"])\\n```\\n\\nNow all that\'s needed is to filter out all YAML files that aren\'t valid:\\n```python\\nimport os\\nos.cpu_count()\\nvalid_k8s = ds.filter(lambda batch: [validate(x) for x in batch[\\"content\\"]],\\n                      num_proc=os.cpu_count(), batched=True)\\n```\\nThere were 276,520 YAML files left in `valid_k8s`. You can print one again to see:\\n```python\\nprint(valid_k8s[0][\\"content\\"])\\n```\\n\\nYou can upload the dataset back to HuggingFace by running:\\n```python\\nvalid_k8s.push_to_hub(\\"substratusai/the-stack-yaml-k8s\\")\\n```\\n\\n## What\'s next?\\nCreating a new dataset called K8s Instruct that also provides a prompt for each YAML file.\\n\\nSupport the project by adding a star on GitHub! \u2764\ufe0f\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"kind-with-gpus","metadata":{"permalink":"/blog/kind-with-gpus","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-09-07-kind-with-gpus.md","source":"@site/blog/2023-09-07-kind-with-gpus.md","title":"Tutorial: K8s Kind with GPUs","description":"Don\'t you just love it when you submit a PR and it turns out that no code is","date":"2023-09-07T00:00:00.000Z","formattedDate":"September 7, 2023","tags":[{"label":"kind","permalink":"/blog/tags/kind"},{"label":"gpu","permalink":"/blog/tags/gpu"}],"readingTime":1.33,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"frontMatter":{"slug":"kind-with-gpus","title":"Tutorial: K8s Kind with GPUs","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"tags":["kind","gpu"]},"prevItem":{"title":"The K8s YAML dataset","permalink":"/blog/k8s-yaml-dataset"},"nextItem":{"title":"Converting HuggingFace Models to GGUF/GGML","permalink":"/blog/converting-hf-model-gguf-model"}},"content":"<div class=\\"video-container\\">\\n  <iframe class=\\"video\\" src=\\"https://www.youtube-nocookie.com/embed/O1683vzaJVE\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\nDon\'t you just love it when you submit a PR and it turns out that no code is\\nneeded? That\'s exactly what happened when I tried add GPU support to Kind.\\n\\nIn this blog post you will learn how to configure Kind such\\nthat it can use the GPUs on your device. Credit to \\n[@klueska](https://github.com/kubernetes-sigs/kind/pull/3257#issuecomment-1607287275)\\nfor the solution.\\n\\nInstall the NVIDIA container toolkit by following the [official install docs](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/user-guide.html#adding-the-nvidia-runtime).\\n\\nConfigure NVIDIA to be the default runtime for docker:\\n```bash\\nsudo nvidia-ctk runtime configure --runtime=docker --set-as-default\\nsudo systemctl restart docker\\n```\\n\\nSet `accept-nvidia-visible-devices-as-volume-mounts = true` in `/etc/nvidia-container-runtime/config.toml`:\\n```bash\\nsudo sed -i \'/accept-nvidia-visible-devices-as-volume-mounts/c\\\\accept-nvidia-visible-devices-as-volume-mounts = true\' /etc/nvidia-container-runtime/config.toml\\n```\\n\\nCreate a Kind Cluster:\\n```bash\\nkind create cluster --name substratus --config - <<EOF\\napiVersion: kind.x-k8s.io/v1alpha4\\nkind: Cluster\\nnodes:\\n- role: control-plane\\n  image: kindest/node:v1.27.3@sha256:3966ac761ae0136263ffdb6cfd4db23ef8a83cba8a463690e98317add2c9ba72\\n  # required for GPU workaround\\n  extraMounts:\\n    - hostPath: /dev/null\\n      containerPath: /var/run/nvidia-container-devices/all\\nEOF\\n```\\n\\nWorkaround for issue with missing required file `/sbin/ldconfig.real`:\\n```bash\\n# https://github.com/NVIDIA/nvidia-docker/issues/614#issuecomment-423991632\\ndocker exec -ti substratus-control-plane ln -s /sbin/ldconfig /sbin/ldconfig.real\\n```\\n\\nInstall the K8s NVIDIA GPU operator so K8s is aware of your NVIDIA device:\\n```bash\\nhelm repo add nvidia https://helm.ngc.nvidia.com/nvidia || true\\nhelm repo update\\nhelm install --wait --generate-name \\\\\\n     -n gpu-operator --create-namespace \\\\\\n     nvidia/gpu-operator --set driver.enabled=false\\n```\\n\\nYou should now have a working Kind cluster that can access your GPU.\\nVerify it by running a simple pod:\\n```bash\\nkubectl apply -f - << EOF\\napiVersion: v1\\nkind: Pod\\nmetadata:\\n  name: cuda-vectoradd\\nspec:\\n  restartPolicy: OnFailure\\n  containers:\\n  - name: cuda-vectoradd\\n    image: \\"nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1-ubuntu20.04\\"\\n    resources:\\n      limits:\\n        nvidia.com/gpu: 1\\nEOF\\n```"},{"id":"converting-hf-model-gguf-model","metadata":{"permalink":"/blog/converting-hf-model-gguf-model","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-31-converting-hf-model-to-gguf-model.md","source":"@site/blog/2023-08-31-converting-hf-model-to-gguf-model.md","title":"Converting HuggingFace Models to GGUF/GGML","description":"Llama.cpp is a great way to run LLMs efficiently on CPUs and GPUs. The downside","date":"2023-08-31T00:00:00.000Z","formattedDate":"August 31, 2023","tags":[{"label":"llama.cpp","permalink":"/blog/tags/llama-cpp"},{"label":"gguf","permalink":"/blog/tags/gguf"}],"readingTime":2.43,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"frontMatter":{"slug":"converting-hf-model-gguf-model","title":"Converting HuggingFace Models to GGUF/GGML","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"tags":["llama.cpp","gguf"]},"prevItem":{"title":"Tutorial: K8s Kind with GPUs","permalink":"/blog/kind-with-gpus"},"nextItem":{"title":"A Kind Local Llama on K8s","permalink":"/blog/kind-local-llama-on-rtx-2060"}},"content":"import GitHubButton from \'react-github-btn\';\\n\\nLlama.cpp is a great way to run LLMs efficiently on CPUs and GPUs. The downside\\nhowever is that you need to convert models to a format that\'s supported by Llama.cpp,\\nwhich is now the GGUF file format.  In this blog post you will learn how to convert\\na HuggingFace model (Vicuna 13b v1.5) to GGUF model.\\n\\nAt the time of writing, Llama.cpp supports\\nthe following models:\\n\\n* LLaMA \ud83e\udd99\\n* LLaMA 2 \ud83e\udd99\ud83e\udd99\\n* Falcon\\n* Alpaca\\n* GPT4All\\n* Chinese LLaMA / Alpaca and Chinese LLaMA-2 / Alpaca-2\\n* Vigogne (French)\\n* Vicuna\\n* Koala\\n* OpenBuddy \ud83d\udc36 (Multilingual)\\n* Pygmalion 7B / Metharme 7B\\n* WizardLM\\n* Baichuan-7B and its derivations (such as baichuan-7b-sft)\\n* Aquila-7B / AquilaChat-7B\\n\\nAt a high-level you will be going through the following steps:\\n* Downloading a HuggingFace model\\n* Running llama.cpp `convert.py` on the HuggingFace model\\n* (Optionally) Uploading the model back to HuggingFace\\n\\n### Downloading a HuggingFace model\\nThere are various ways to download models, but in my experience the `huggingface_hub`\\nlibrary has been the most reliable. The `git clone` method occasionally results in \\nOOM errors for large models.\\n\\nInstall the `huggingface_hub` library:\\n```bash\\npip install huggingface_hub\\n```\\n\\nCreate a Python script named `download.py` with the following content:\\n```python\\nfrom huggingface_hub import snapshot_download\\nmodel_id=\\"lmsys/vicuna-13b-v1.5\\"\\nsnapshot_download(repo_id=model_id, local_dir=\\"vicuna-hf\\",\\n                  local_dir_use_symlinks=False, revision=\\"main\\")\\n```\\n\\nRun the Python script:\\n```bash\\npython download.py\\n```\\n\\nYou should now have the model downloaded to a directory called\\n`vicuna-hf`. Verify by running:\\n```bash\\nls -lash vicuna-hf\\n```\\n\\n### Converting the model\\nNow it\'s time to convert the downloaded HuggingFace model to a GGUF model.\\nLlama.cpp comes with a converter script to do this.\\n\\nGet the script by cloning the llama.cpp repo:\\n```bash\\ngit clone https://github.com/ggerganov/llama.cpp.git\\n```\\n\\nInstall the required python libraries:\\n```bash\\npip install -r llama.cpp/requirements.txt\\n```\\n\\nVerify the script is there and understand the various options:\\n```bash\\npython llama.cpp/convert.py -h\\n```\\n\\nConvert the HF model to GGUF model:\\n```bash\\npython llama.cpp/convert.py vicuna-hf \\\\\\n  --outfile vicuna-13b-v1.5.gguf \\\\\\n  --outtype q8_0\\n```\\nIn this case we\'re also quantizing the model to 8 bit by setting\\n`--outtype q8_0`. Quantizing helps improve inference speed, but it can\\nnegatively impact quality.\\nYou can use `--outtype f16` (16 bit) or `--outtype f32` (32 bit) to preserve original\\nquality.\\n\\nVerify the GGUF model was created:\\n```bash\\nls -lash vicuna-13b-v1.5.gguf\\n```\\n\\n### Pushing the GGUF model to HuggingFace\\nYou can optionally push back the GGUF model to HuggingFace.\\n\\nCreate a Python script with the filename `upload.py` that\\nhas the following content:\\n```python\\nfrom huggingface_hub import HfApi\\napi = HfApi()\\n\\nmodel_id = \\"substratusai/vicuna-13b-v1.5-gguf\\"\\napi.create_repo(model_id, exist_ok=True, repo_type=\\"model\\")\\napi.upload_file(\\n    path_or_fileobj=\\"vicuna-13b-v1.5.gguf\\",\\n    path_in_repo=\\"vicuna-13b-v1.5.gguf\\",\\n    repo_id=model_id,\\n)\\n```\\n\\nGet a HuggingFace Token that has write permission from here:\\n[https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)\\n\\nSet your HuggingFace token:\\n```bash\\nexport HUGGING_FACE_HUB_TOKEN=<paste-your-own-token>\\n```\\n\\nRun the `upload.py` script:\\n```bash\\npython upload.py\\n```\\n\\nInterested in learning how to automate flows like this? Checkout our\\nopen source project:\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"kind-local-llama-on-rtx-2060","metadata":{"permalink":"/blog/kind-local-llama-on-rtx-2060","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-25-a-kind-llama.md","source":"@site/blog/2023-08-25-a-kind-llama.md","title":"A Kind Local Llama on K8s","description":"A Llama 13B parameter model running on a laptop with a mere RTX 2060?!","date":"2023-08-25T00:00:00.000Z","formattedDate":"August 25, 2023","tags":[{"label":"llama","permalink":"/blog/tags/llama"},{"label":"kind","permalink":"/blog/tags/kind"}],"readingTime":2.49,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"frontMatter":{"slug":"kind-local-llama-on-rtx-2060","title":"A Kind Local Llama on K8s","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"image":"/img/kind-llama-on-laptop-gpu.png","tags":["llama","kind"]},"prevItem":{"title":"Converting HuggingFace Models to GGUF/GGML","permalink":"/blog/converting-hf-model-gguf-model"},"nextItem":{"title":"Introducing: kubectl notebook","permalink":"/blog/introducing-kubectl-notebook"}},"content":"<img src=\\"/img/kind-llama-on-laptop-gpu.png\\" alt=\\"kubectl notebook\\" width=\\"100%\\" />\\n\\nimport GitHubButton from \'react-github-btn\'\\n\\nA Llama 13B parameter model running on a laptop with a mere RTX 2060?!\\nYes, it all ran surprisingly well at around 7 tokens / sec.\\nFollow along and learn how to do this on your environment.\\n\\nMy laptop setup looks like this:\\n* Kind for deploying a single node K8s cluster\\n* AMD Ryzen 7 (8 threads), 16 GB system memory, RTX 2060 (6GB GPU memory)\\n* Llama.cpp/GGML for fast serving and loading larger models on consumer hardware\\n\\nYou might be wondering: How can a model with 13 billion parameters fit into a 6GB GPU? You\'d expect it to need about 13GB, especially if it\'s running in 4-bit mode, right?\\nYes it should because 13 billion * 4 bytes / (32 bits / 4 bits) = 13 GB.\\nBut thanks to [Llama.cpp](https://github.com/ggerganov/llama.cpp), we can load only parts of the model into the GPU. Plus, Llama.cpp can run efficiently just using the CPU.\\n\\nWant to try this out yourself? Follow a long for a fun ride.\\n\\n### Create Kind K8s cluster with GPU support\\nInstall the NVIDIA container toolkit for Docker: [Install Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)\\n\\nUse the convenience script to create a Kind cluster and configure GPU support:\\n```bash\\nbash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh)\\n```\\nOr inspect the [script](https://github.com/substratusai/substratus/blob/main/install/kind/up-gpu.sh) and run the steps one by one.\\n\\n\\n### Install Substratus\\nInstall the Substratus K8s operator which will orchestrate model loading and serving:\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/manifests.yaml\\n```\\n\\n### Load the Llama 2 13b chat GGUF model\\nCreate a Model resource to load the [Llama 2 13b chat GGUF model](https://huggingface.co/substratusai/Llama-2-13B-chat-GGUF)\\n\\n[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/base-model.yaml yaml)\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Model\\nmetadata:\\n  name: llama2-13b-chat-gguf\\nspec:\\n  image: substratusai/model-loader-huggingface\\n  params:\\n    name: substratusai/Llama-2-13B-chat-GGUF\\n    files: \\"model.bin\\"\\n```\\n\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/base-model.yaml\\n```\\nThe model is being downloaded from HuggingFace into your Kind cluster.\\n\\n### Serve the model\\nCreate a Server resource to serve the model:\\n[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/server-gpu.yaml yaml)\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Server\\nmetadata:\\n  name: llama2-13b-chat-gguf\\nspec:\\n  image: substratusai/model-server-llama-cpp:latest-gpu\\n  model:\\n    name: llama2-13b-chat-gguf\\n  params:\\n    n_gpu_layers: 30\\n  resources:\\n    gpu:\\n      count: 1\\n```\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/server-gpu.yaml\\n```\\nNote in my case 30 out of 42 layers loaded into GPU is the max, but you might be able\\nto load all 42 layers into the GPU if you have more GPU memory.\\n\\nOnce the model is ready it will start serving an OpenAI compatible\\nAPI endpoint.\\n\\nExpose the Server to a local port by using port forwarding:\\n```bash\\nkubectl port-forward service/llama2-13b-chat-gguf-server 8080:8080\\n```\\n\\nLet\'s throw some prompts at it:\\n```bash\\ncurl http://localhost:8080/v1/completions \\\\\\n  -H \\"Content-Type: application/json\\" \\\\\\n  -d \'{ \\"prompt\\": \\"Who was the first president of the United States?\\", \\"stop\\": [\\".\\"]}\'\\n```\\n\\nCheckout the full API docs here: [http://localhost:8080/docs](http://localhost:8080/docs)\\n\\nYou can play around with other models. For example, if you have a 24 GB GPU card you should\\nbe able to run Llama 2 70B in 4 bit mode by using llama.cpp.\\n\\nSupport the project by adding a star on GitHub! \u2764\ufe0f\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"introducing-kubectl-notebook","metadata":{"permalink":"/blog/introducing-kubectl-notebook","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-22-introducing-kubectl-notebook.md","source":"@site/blog/2023-08-22-introducing-kubectl-notebook.md","title":"Introducing: kubectl notebook","description":"Substratus has added the kubectl notebook command!","date":"2023-08-22T00:00:00.000Z","formattedDate":"August 22, 2023","tags":[{"label":"introduction","permalink":"/blog/tags/introduction"},{"label":"feature","permalink":"/blog/tags/feature"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Nick Stogner","title":"Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"}],"frontMatter":{"slug":"introducing-kubectl-notebook","title":"Introducing: kubectl notebook","authors":[{"name":"Nick Stogner","title":"Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"}],"image":"/img/kubectl-notebook-cmd.small.png","tags":["introduction","feature"]},"prevItem":{"title":"A Kind Local Llama on K8s","permalink":"/blog/kind-local-llama-on-rtx-2060"},"nextItem":{"title":"Tutorial: Llama2 70b serving on GKE","permalink":"/blog/tutorial-llama2-70b-serving-gke"}},"content":"<img src=\\"/img/kubectl-notebook-cmd.png\\" alt=\\"kubectl notebook\\" width=\\"100%\\" />\\n\\nimport GitHubButton from \'react-github-btn\'\\n\\n[Substratus](https://github.com/substratusai/substratus) has added the `kubectl notebook` command!\\n\\n<blockquote>\\n\\"Wouldn\'t it be nice to have a single command that containerized your local directory and served it as a Jupyter Notebook running on a machine with a bunch of GPUs attached?\\"\\n</blockquote>\\n\\nThe conversation went something like that while we daydreamed about our preferred workflow. At that point in time we were hopping back-n-forth between Google Colab and our containers while developing a LLM training job.\\n\\n<blockquote>\\n\\"Annnddd it should automatically sync file-changes back to your local directory so that you can commit your changes to git and kick off a long-running ML training job - containerized with the exact same python version and packages!\\"\\n</blockquote>\\n\\nSo we built it!\\n\\n```bash\\nkubectl notebook -d .\\n```\\n\\nAnd now it has become an integral part of our workflow as we build out the [Substratus ML platform](https://github.com/substratusai/substratus).\\n\\nCheck out the 50 second screenshare:\\n\\n<div class=\\"video-container\\">\\n  <iframe class=\\"video\\" src=\\"https://www.youtube-nocookie.com/embed/0_PWl6vjqdE\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\n## Design Goals\\n\\n1. One command should build, launch, and sync the Notebook.\\n2. Users should only need a Kubeconfig - no other credentials.\\n3. Admins should not need to setup networking, TLS, etc.\\n\\n## Implementation\\n\\nWe tackled our design goals using the following techniques:\\n\\n1. Implemented as a single Go binary, executed as a [kubectl plugin](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/).\\n2. [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls) allow for users to upload their local directory to a bucket without requiring cloud credentials (Similar to how popular consumer clouds function).\\n3. Kubernetes [port-forwarding](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/) allows for serving remote notebooks without requiring admins to deal with networking / TLS concerns. It also leans on existing Kubernetes RBAC for access control.\\n\\nSome interesting details:\\n\\n* Builds are executed remotely for two reasons:\\n  * Users don\'t need to install docker.\\n  * It avoids pushing massive container images from one\'s local machine (pip installs often inflate the final docker image to be much larger than the build context itself).\\n* The client requests an upload URL by specifying the MD5 hash it wishes to upload - allowing for server-side signature verification.\\n* Builds are skipped entirely if the MD5 hash of the build context already exists in the bucket.\\n\\nThe system underneath the `notebook` command:\\n\\n![diagram](/img/diagrams/kubectl-notebook.excalidraw.png)\\n\\n## More to come!\\n\\nLazy-loading large models from disk...\\nIncremental dataset loading...\\nStay tuned to learn more about how Notebooks on Substratus can speed up your ML workflows.\\n\\nDon\'t forget to star and follow the repo!\\n\\n[https://github.com/substratusai/substratus](https://github.com/substratusai/substratus)\\n\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"tutorial-llama2-70b-serving-gke","metadata":{"permalink":"/blog/tutorial-llama2-70b-serving-gke","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-06-llama2-70b.md","source":"@site/blog/2023-08-06-llama2-70b.md","title":"Tutorial: Llama2 70b serving on GKE","description":"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.","date":"2023-08-06T00:00:00.000Z","formattedDate":"August 6, 2023","tags":[{"label":"tutorial","permalink":"/blog/tags/tutorial"}],"readingTime":2.605,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"frontMatter":{"slug":"tutorial-llama2-70b-serving-gke","title":"Tutorial: Llama2 70b serving on GKE","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"tags":["tutorial"]},"prevItem":{"title":"Introducing: kubectl notebook","permalink":"/blog/introducing-kubectl-notebook"},"nextItem":{"title":"Introducing Substratus","permalink":"/blog/introducing-substratus"}},"content":"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.\\nFollow along in this tutorial to get Llama 2 70b deployed on GKE:\\n\\n1. Create a GKE cluster with Substratus installed.\\n2. Load the Llama 2 70b model from HuggingFace.\\n3. Serve the model via an interactive inference server.\\n\\n## Install Substratus on GCP\\nUse the [Installation Guide for GCP](/docs/installation/gcp) to install Substratus.\\n\\n## Load the Model into Substratus\\nYou will need to agree to HuggingFace\'s terms before you can use the Llama 2 model. This means you will need to pass your HuggingFace token to Substratus.\\n\\nLet\'s tell Substratus how to import Llama 2 by defining a Model resource. Create a file named `base-model.yaml` with the following content:\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Model\\nmetadata:\\n  name: llama-2-70b\\nspec:\\n  image: substratusai/model-loader-huggingface\\n  env:\\n    # You would first have to create a secret named `ai` that\\n    # has the key `HUGGING_FACE_HUB_TOKEN` set to your token.\\n    # E.g. create the secret by running:\\n    # kubectl create secret generic ai --from-literal=\\"HUGGING_FACE_HUB_TOKEN=<my-token>\\n    HUGGING_FACE_HUB_TOKEN: ${{ secrets.ai.HUGGING_FACE_HUB_TOKEN }}\\n  params:\\n    name: meta-llama/Llama-2-70b-hf\\n```\\n\\nGet your HuggingFace token by going to [HuggingFace Settings > Access Tokens](\\n    https://huggingface.co/settings/tokens\\n).\\n\\nCreate a secret with your HuggingFace token:\\n```bash\\nkubectl create secret generic ai --from-literal=\\"HUGGING_FACE_HUB_TOKEN=<my-token>\\n```\\nMake sure to replace `<my-token>` with your actual token.\\n\\n\\nRun the following command to load the base model:\\n```bash\\nkubectl apply -f base-model.yaml\\n```\\n\\nWatch Substratus kick off your importing Job.\\n\\n```bash\\nkubectl get jobs -w\\n```\\n\\nYou can view the Job logs by running:\\n```bash\\nkubectl logs -f jobs/llama-2-70b-modeller\\n```\\n\\n## Serve the Loaded Model\\nWhile the Model is loading, we can define our inference server. Create a file named `server.yaml` with the following content:\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Server\\nmetadata:\\n  name: llama-2-70b\\nspec:\\n  image: substratusai/model-server-basaran\\n  model:\\n    name: llama-2-70b\\n  env:\\n    MODEL_LOAD_IN_4BIT: \\"true\\"\\n  resources:\\n    gpu:\\n      type: nvidia-a100\\n      count: 1\\n```\\n\\nCreate the Server by running:\\n```bash\\nkubectl apply -f server.yaml\\n```\\n\\nOnce the Model is loaded (marked as `ready`), Substratus will automatically launch the server. View the state of both resources using kubectl:\\n\\n```bash\\nkubectl get models,servers\\n```\\n\\nTo view more information about either the Model or Server, you can use `kubectl describe`:\\n\\n```bash\\nkubectl describe -f base-model.yaml\\n# OR\\nkubectl describe -f server.yaml\\n```\\n\\nOnce the model is loaded, the initial server startup time is about 20 minutes.\\nThis is because the model is 100GB+ in size and takes a while to load\\ninto GPU memory.\\n\\nLook for a log message that the container\\nis serving at port `8080`. You can check the logs\\nby running:\\n```bash\\nkubectl logs deployment/llama-2-70b-server\\n```\\n\\nFor demo purposes, you can use port forwarding once the Server is ready on port 8080. Run the following command to forward the container port 8080 to your localhost port 8080:\\n```bash\\nkubectl port-forward service/llama-2-70b-server 8080:8080\\n```\\n\\nInteract with Llama 2 in your browser:\\n[http://localhost:8080](http://localhost:8080)\\n\\n*You have now deployed Llama 2 70b!*\\n\\nYou can repeat these steps for other models. For example, you\\ncould instead deploy the \\"Instruct\\" variation of Llama.\\n\\nStay tuned for another blog post on how to fine-tune Llama 2 70b on your own data."},{"id":"introducing-substratus","metadata":{"permalink":"/blog/introducing-substratus","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-03-introducing-substratus.md","source":"@site/blog/2023-08-03-introducing-substratus.md","title":"Introducing Substratus","description":"We are excited to introduce Substratus, the open-source cross-cloud substrate","date":"2023-08-03T00:00:00.000Z","formattedDate":"August 3, 2023","tags":[{"label":"hello world","permalink":"/blog/tags/hello-world"},{"label":"introduction","permalink":"/blog/tags/introduction"},{"label":"oss launch","permalink":"/blog/tags/oss-launch"}],"readingTime":2.175,"hasTruncateMarker":false,"authors":[{"name":"Brandon Bjelland","title":"Co-founding Engineer","url":"https://github.com/brandonjbjelland","image_url":"https://avatars.githubusercontent.com/u/2502520?v=4","imageURL":"https://avatars.githubusercontent.com/u/2502520?v=4"},{"name":"Nick Stogner","title":"Co-founding Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"},{"name":"Sam Stoelinga","title":"Co-founding Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"frontMatter":{"slug":"introducing-substratus","title":"Introducing Substratus","authors":[{"name":"Brandon Bjelland","title":"Co-founding Engineer","url":"https://github.com/brandonjbjelland","image_url":"https://avatars.githubusercontent.com/u/2502520?v=4","imageURL":"https://avatars.githubusercontent.com/u/2502520?v=4"},{"name":"Nick Stogner","title":"Co-founding Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"},{"name":"Sam Stoelinga","title":"Co-founding Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"tags":["hello world","introduction","oss launch"]},"prevItem":{"title":"Tutorial: Llama2 70b serving on GKE","permalink":"/blog/tutorial-llama2-70b-serving-gke"}},"content":"We are excited to introduce Substratus, the open-source cross-cloud substrate\\nfor training and serving ML models with an initial focus on Large Language\\nModels. Fine-tune and serve LLMs on your Kubernetes clusters in your cloud.\\n\\nCan\u2019t wait? - Get started with our [quick start\\ndocs](/docs/category/quickstart) or jump over to the [GitHub\\nrepo](https://github.com/substratusai/substratus).\\n\\n## **Why Substratus?**\\n\\n**Press the fast-button for ML**: Leverage out of the box container images to\\nload a base model, optionally fine-tune with your own dataset and spin up a\\nmodel server, all without writing any code.\\n\\n**Notebook-integrated workflows:** Launch a remote, containerized, GPU-enabled\\nnotebook from a local directory with a single command. Develop in the exact same\\nenvironment as your long running training jobs.\\n\\n**No vendor lock-in**: Substratus is open-source and can run anywhere Kubernetes\\nruns.\\n\\n**Keep company data internal**: Deploy in your cloud account. Training data and\\ninference APIs stay within your company\u2019s network.\\n\\n**Best practices by default:** Substratus models are immutable and contain\\ninformation about their lineage. Datasets are imported and snapshotted using\\noff-the-shelf manifests. Training executes in containerized environments, using\\nimmutable base artifacts. Inference servers are pre-configured to leverage\\nquantization on supported models. GitOps is built-in, not bolted-on.\\n\\n## **Guiding Principles**\\n\\nAs we continue to develop Substratus, we\u2019re grounded in the following guiding\\nprinciples:\\n\\n### **1. Prioritize Simplicity**\\n\\n We believe the importance of minimizing complexity in software cannot be\\n understated. In Substratus, we will work hard to keep complexity to a minimum\\n as the project grows. The Substratus API currently consists of 4 resource\\n types: Datasets, Models, Servers, and Notebooks. The project currently depends\\n on two cloud services outside of the cluster: a bucket and a container registry\\n (we are working on making these optional too). The project does not (and will\\n never) depend on a web of complex components like Istio.\\n\\n### **2. Prioritize UX**\\n\\nWe believe a company\u2019s most precious resource is their engineer\u2019s time.\\nSubstratus seeks to maximize the productivity of data scientists and engineers\\nthrough providing a best-in-class user experience. We strive to build a set of\\nwell-designed primitives that allow ML practitioners to enter a flow state as\\nthey move between importing data, training, and serving models.\\n\\n## **Roadmap**\\n\\nWe are fast at work adding new functionality, focused on creating the most\\nproductive and enjoyable platform for ML practitioners. Coming soon:\\n\\n1. Support for AWS and Azure\\n2. VS Code Notebook Integration\\n3. Large-scale distributed training\\n4. ML ecosystem integrations\\n\\nTry Substratus today in your GCP project by following the [quick start\\ndocs](/docs/category/quickstart). Let us know what features you\\nwould like to see on our [GitHub\\nrepo](https://github.com/substratusai/substratus) and don\u2019t forget to add a\\nstar!"}]}')}}]);