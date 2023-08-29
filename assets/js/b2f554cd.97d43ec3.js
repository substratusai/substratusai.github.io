"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"kind-local-llama-on-rtx-2060","metadata":{"permalink":"/blog/kind-local-llama-on-rtx-2060","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-25-a-kind-llama.md","source":"@site/blog/2023-08-25-a-kind-llama.md","title":"A Kind Local Llama on K8s","description":"A Llama 13B parameter model running on a laptop with a mere RTX 2060?!","date":"2023-08-25T00:00:00.000Z","formattedDate":"August 25, 2023","tags":[{"label":"llama","permalink":"/blog/tags/llama"},{"label":"kind","permalink":"/blog/tags/kind"}],"readingTime":2.49,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"frontMatter":{"slug":"kind-local-llama-on-rtx-2060","title":"A Kind Local Llama on K8s","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123"}],"image":"/img/kind-llama-on-laptop-gpu.png","tags":["llama","kind"]},"nextItem":{"title":"Introducing: kubectl notebook","permalink":"/blog/introducing-kubectl-notebook"}},"content":"<img src=\\"/img/kind-llama-on-laptop-gpu.png\\" alt=\\"kubectl notebook\\" width=\\"100%\\" />\\n\\nimport GitHubButton from \'react-github-btn\'\\n\\nA Llama 13B parameter model running on a laptop with a mere RTX 2060?!\\nYes, it all ran surprisingly well at around 7 tokens / sec.\\nFollow along and learn how to do this on your environment.\\n\\nMy laptop setup looks like this:\\n* Kind for deploying a single node K8s cluster\\n* AMD Ryzen 7 (8 threads), 16 GB system memory, RTX 2060 (6GB GPU memory)\\n* Llama.cpp/GGML for fast serving and loading larger models on consumer hardware\\n\\nYou might be wondering: How can a model with 13 billion parameters fit into a 6GB GPU? You\'d expect it to need about 13GB, especially if it\'s running in 4-bit mode, right?\\nYes it should because 13 billion * 4 bytes / (32 bits / 4 bits) = 13 GB.\\nBut thanks to [Llama.cpp](https://github.com/ggerganov/llama.cpp), we can load only parts of the model into the GPU. Plus, Llama.cpp can run efficiently just using the CPU.\\n\\nWant to try this out yourself? Follow a long for a fun ride.\\n\\n### Create Kind K8s cluster with GPU support\\nInstall the NVIDIA container toolkit for Docker: [Install Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)\\n\\nUse the convenience script to create a Kind cluster and configure GPU support:\\n```bash\\nbash <(curl https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/up-gpu.sh)\\n```\\nOr inspect the [script](https://github.com/substratusai/substratus/blob/main/install/kind/up-gpu.sh) and run the steps one by one.\\n\\n\\n### Install Substratus\\nInstall the Substratus K8s operator which will orchestrate model loading and serving:\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/install/kind/manifests.yaml\\n```\\n\\n### Load the Llama 2 13b chat GGUF model\\nCreate a Model resource to load the [Llama 2 13b chat GGUF model](https://huggingface.co/substratusai/Llama-2-13B-chat-GGUF)\\n\\n[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/base-model.yaml yaml)\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Model\\nmetadata:\\n  name: llama2-13b-chat-gguf\\nspec:\\n  image: substratusai/model-loader-huggingface\\n  params:\\n    name: substratusai/Llama-2-13B-chat-GGUF\\n    files: \\"model.bin\\"\\n```\\n\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/base-model.yaml\\n```\\nThe model is being downloaded from HuggingFace into your Kind cluster.\\n\\n### Serve the model\\nCreate a Server resource to serve the model:\\n[embedmd]:# (https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/server-gpu.yaml yaml)\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Server\\nmetadata:\\n  name: llama2-13b-chat-gguf\\nspec:\\n  image: substratusai/model-server-llama-cpp:latest-gpu\\n  model:\\n    name: llama2-13b-chat-gguf\\n  params:\\n    n_gpu_layers: 30\\n  resources:\\n    gpu:\\n      count: 1\\n```\\n```bash\\nkubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/llama2-13b-chat-gguf/server-gpu.yaml\\n```\\nNote in my case 30 out of 42 layers loaded into GPU is the max, but you might be able\\nto load all 42 layers into the GPU if you have more GPU memory.\\n\\nOnce the model is ready it will start serving an OpenAI compatible\\nAPI endpoint.\\n\\nExpose the Server to a local port by using port forwarding:\\n```bash\\nkubectl port-forward service/llama2-13b-chat-gguf-server 8080:8080\\n```\\n\\nLet\'s throw some prompts at it:\\n```bash\\ncurl http://localhost:8080/v1/completions \\\\\\n  -H \\"Content-Type: application/json\\" \\\\\\n  -d \'{ \\"prompt\\": \\"Who was the first president of the United States?\\", \\"stop\\": [\\".\\"]}\'\\n```\\n\\nCheckout the full API docs here: [http://localhost:8080/docs](http://localhost:8080/docs)\\n\\nYou can play around with other models. For example, if you have a 24 GB GPU card you should\\nbe able to run Llama 2 70B in 4 bit mode by using llama.cpp.\\n\\nSupport the project by adding a star on GitHub! \u2764\ufe0f\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"introducing-kubectl-notebook","metadata":{"permalink":"/blog/introducing-kubectl-notebook","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-22-introducing-kubectl-notebook.md","source":"@site/blog/2023-08-22-introducing-kubectl-notebook.md","title":"Introducing: kubectl notebook","description":"Substratus has added the kubectl notebook command!","date":"2023-08-22T00:00:00.000Z","formattedDate":"August 22, 2023","tags":[{"label":"introduction","permalink":"/blog/tags/introduction"},{"label":"feature","permalink":"/blog/tags/feature"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Nick Stogner","title":"Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"}],"frontMatter":{"slug":"introducing-kubectl-notebook","title":"Introducing: kubectl notebook","authors":[{"name":"Nick Stogner","title":"Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"}],"image":"/img/kubectl-notebook-cmd.small.png","tags":["introduction","feature"]},"prevItem":{"title":"A Kind Local Llama on K8s","permalink":"/blog/kind-local-llama-on-rtx-2060"},"nextItem":{"title":"Tutorial: Llama2 70b serving on GKE","permalink":"/blog/tutorial-llama2-70b-serving-gke"}},"content":"<img src=\\"/img/kubectl-notebook-cmd.png\\" alt=\\"kubectl notebook\\" width=\\"100%\\" />\\n\\nimport GitHubButton from \'react-github-btn\'\\n\\n[Substratus](https://github.com/substratusai/substratus) has added the `kubectl notebook` command!\\n\\n<blockquote>\\n\\"Wouldn\'t it be nice to have a single command that containerized your local directory and served it as a Jupyter Notebook running on a machine with a bunch of GPUs attached?\\"\\n</blockquote>\\n\\nThe conversation went something like that while we daydreamed about our preferred workflow. At that point in time we were hopping back-n-forth between Google Colab and our containers while developing a LLM training job.\\n\\n<blockquote>\\n\\"Annnddd it should automatically sync file-changes back to your local directory so that you can commit your changes to git and kick off a long-running ML training job - containerized with the exact same python version and packages!\\"\\n</blockquote>\\n\\nSo we built it!\\n\\n```bash\\nkubectl notebook -d .\\n```\\n\\nAnd now it has become an integral part of our workflow as we build out the [Substratus ML platform](https://github.com/substratusai/substratus).\\n\\nCheck out the 50 second screenshare:\\n\\n<div class=\\"video-container\\">\\n  <iframe class=\\"video\\" src=\\"https://www.youtube-nocookie.com/embed/0_PWl6vjqdE\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\n## Design Goals\\n\\n1. One command should build, launch, and sync the Notebook.\\n2. Users should only need a Kubeconfig - no other credentials.\\n3. Admins should not need to setup networking, TLS, etc.\\n\\n## Implementation\\n\\nWe tackled our design goals using the following techniques:\\n\\n1. Implemented as a single Go binary, executed as a [kubectl plugin](https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/).\\n2. [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls) allow for users to upload their local directory to a bucket without requiring cloud credentials (Similar to how popular consumer clouds function).\\n3. Kubernetes [port-forwarding](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/) allows for serving remote notebooks without requiring admins to deal with networking / TLS concerns. It also leans on existing Kubernetes RBAC for access control.\\n\\nSome interesting details:\\n\\n* Builds are executed remotely for two reasons:\\n  * Users don\'t need to install docker.\\n  * It avoids pushing massive container images from one\'s local machine (pip installs often inflate the final docker image to be much larger than the build context itself).\\n* The client requests an upload URL by specifying the MD5 hash it wishes to upload - allowing for server-side signature verification.\\n* Builds are skipped entirely if the MD5 hash of the build context already exists in the bucket.\\n\\nThe system underneath the `notebook` command:\\n\\n![diagram](/img/diagrams/kubectl-notebook.excalidraw.png)\\n\\n## More to come!\\n\\nLazy-loading large models from disk...\\nIncremental dataset loading...\\nStay tuned to learn more about how Notebooks on Substratus can speed up your ML workflows.\\n\\nDon\'t forget to star and follow the repo!\\n\\n[https://github.com/substratusai/substratus](https://github.com/substratusai/substratus)\\n\\n<GitHubButton href=\\"https://github.com/substratusai/substratus\\" data-icon=\\"octicon-star\\" data-size=\\"large\\" data-show-count=\\"true\\" aria-label=\\"Star substratusai/substratus on GitHub\\">Star</GitHubButton>"},{"id":"tutorial-llama2-70b-serving-gke","metadata":{"permalink":"/blog/tutorial-llama2-70b-serving-gke","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-06-llama2-70b.md","source":"@site/blog/2023-08-06-llama2-70b.md","title":"Tutorial: Llama2 70b serving on GKE","description":"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.","date":"2023-08-06T00:00:00.000Z","formattedDate":"August 6, 2023","tags":[{"label":"tutorial","permalink":"/blog/tags/tutorial"}],"readingTime":2.45,"hasTruncateMarker":false,"authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"frontMatter":{"slug":"tutorial-llama2-70b-serving-gke","title":"Tutorial: Llama2 70b serving on GKE","authors":[{"name":"Sam Stoelinga","title":"Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"tags":["tutorial"]},"prevItem":{"title":"Introducing: kubectl notebook","permalink":"/blog/introducing-kubectl-notebook"},"nextItem":{"title":"Introducing Substratus","permalink":"/blog/introducing-substratus"}},"content":"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.\\nFollow along in this tutorial to get Llama 2 70b deployed on GKE:\\n\\n1. Create a GKE cluster with Substratus installed.\\n2. Load the Llama 2 70b model from HuggingFace.\\n3. Serve the model via an interactive inference server.\\n\\n## Install Substratus on GCP\\nUse the [Installation Guide for GCP](/docs/installation/gcp) to install Substratus.\\n\\n## Load the Model into Substratus\\nYou will need to agree to HuggingFace\'s terms before you can use the Llama 2 model. This means you will need to pass your HuggingFace token to Substratus.\\n\\nLet\'s tell Substratus how to import Llama 2 by defining a Model resource. Create a file named `base-model.yaml` with the following content:\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Model\\nmetadata:\\n  name: llama-2-70b\\nspec:\\n  image: substratusai/model-loader-huggingface\\n  params:\\n    name: meta-llama/Llama-2-70b-hf\\n    hugging_face_hub_token: ${HUGGINGFACE_TOKEN}\\n```\\nNotice the `${HUGGINGFACE_TOKEN}` placeholder in the `base-model.yaml` file.\\n\\nGet your HuggingFace token by going to [HuggingFace Settings > Access Tokens](\\n    https://huggingface.co/settings/tokens\\n).\\nCreate an environment variable that holds your HuggingFace token:\\n```bash\\nexport HUGGINGFACE_TOKEN=replace_me\\n```\\n\\nLet\'s use `envsubst` to set the `${HUGGINGFACE_TOKEN}` variable when we apply the Model.\\n\\nRun the following command:\\n```bash\\ncat base-model.yaml | envsubst | kubectl apply -f -\\n```\\n\\nWatch Substratus kick off your importing Job.\\n\\n```bash\\nkubectl get jobs -w\\n```\\n\\nYou can view the Job logs by running:\\n```bash\\nkubectl logs -f jobs/llama-2-70b-modeller\\n```\\n\\n## Serve the Loaded Model\\nWhile the Model is loading, we can define our inference server. Create a file named `server.yaml` with the following content:\\n```yaml\\napiVersion: substratus.ai/v1\\nkind: Server\\nmetadata:\\n  name: llama-2-70b\\nspec:\\n  image: substratusai/model-server-basaran\\n  model:\\n    name: llama-2-70b\\n  resources:\\n    gpu:\\n      type: nvidia-a100\\n      count: 2\\n```\\n\\nCreate the Server by running:\\n```bash\\nkubectl apply -f server.yaml\\n```\\n\\nOnce the Model is loaded (marked as `ready`), Substratus will automatically launch the server. View the state of both resources using kubectl:\\n\\n```bash\\nkubectl get models,servers\\n```\\n\\nTo view more information about either the Model or Server, you can use `kubectl describe`:\\n\\n```bash\\nkubectl describe -f base-model.yaml\\n# OR\\nkubectl describe -f server.yaml\\n```\\n\\nOnce the model is loaded, the initial server startup time is about 20 minutes.\\nThis is because the model is 100GB+ in size and takes a while to load\\ninto GPU memory.\\n\\nLook for a log message that the container\\nis serving at port `8080`. You can check the logs\\nby running:\\n```bash\\nkubectl logs deployment/llama-2-70b-server\\n```\\n\\nFor demo purposes, you can use port forwarding once the Server is ready on port 8080. Run the following command to forward the container port 8080 to your localhost port 8080:\\n```bash\\nkubectl port-forward service/llama-2-70b-server 8080:8080\\n```\\n\\nInteract with Llama 2 in your browser:\\n[http://localhost:8080](http://localhost:8080)\\n\\n*You have now deployed Llama 2 70b!*\\n\\nYou can repeat these steps for other models. For example, you\\ncould instead deploy the \\"Instruct\\" variation of Llama.\\n\\nStay tuned for another blog post on how to fine-tune Llama 2 70b on your own data."},{"id":"introducing-substratus","metadata":{"permalink":"/blog/introducing-substratus","editUrl":"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-03-introducing-substratus.md","source":"@site/blog/2023-08-03-introducing-substratus.md","title":"Introducing Substratus","description":"We are excited to introduce Substratus, the open-source cross-cloud substrate","date":"2023-08-03T00:00:00.000Z","formattedDate":"August 3, 2023","tags":[{"label":"hello world","permalink":"/blog/tags/hello-world"},{"label":"introduction","permalink":"/blog/tags/introduction"},{"label":"oss launch","permalink":"/blog/tags/oss-launch"}],"readingTime":2.175,"hasTruncateMarker":false,"authors":[{"name":"Brandon Bjelland","title":"Co-founding Engineer","url":"https://github.com/brandonjbjelland","image_url":"https://avatars.githubusercontent.com/u/2502520?v=4","imageURL":"https://avatars.githubusercontent.com/u/2502520?v=4"},{"name":"Nick Stogner","title":"Co-founding Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"},{"name":"Sam Stoelinga","title":"Co-founding Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"frontMatter":{"slug":"introducing-substratus","title":"Introducing Substratus","authors":[{"name":"Brandon Bjelland","title":"Co-founding Engineer","url":"https://github.com/brandonjbjelland","image_url":"https://avatars.githubusercontent.com/u/2502520?v=4","imageURL":"https://avatars.githubusercontent.com/u/2502520?v=4"},{"name":"Nick Stogner","title":"Co-founding Engineer","url":"https://github.com/nstogner","image_url":"https://avatars.githubusercontent.com/u/10274189?v=4","imageURL":"https://avatars.githubusercontent.com/u/10274189?v=4"},{"name":"Sam Stoelinga","title":"Co-founding Engineer","url":"https://github.com/samos123","image_url":"https://avatars.githubusercontent.com/u/388784?v=4","imageURL":"https://avatars.githubusercontent.com/u/388784?v=4"}],"tags":["hello world","introduction","oss launch"]},"prevItem":{"title":"Tutorial: Llama2 70b serving on GKE","permalink":"/blog/tutorial-llama2-70b-serving-gke"}},"content":"We are excited to introduce Substratus, the open-source cross-cloud substrate\\nfor training and serving ML models with an initial focus on Large Language\\nModels. Fine-tune and serve LLMs on your Kubernetes clusters in your cloud.\\n\\nCan\u2019t wait? - Get started with our [quick start\\ndocs](/docs/category/quickstart) or jump over to the [GitHub\\nrepo](https://github.com/substratusai/substratus).\\n\\n## **Why Substratus?**\\n\\n**Press the fast-button for ML**: Leverage out of the box container images to\\nload a base model, optionally fine-tune with your own dataset and spin up a\\nmodel server, all without writing any code.\\n\\n**Notebook-integrated workflows:** Launch a remote, containerized, GPU-enabled\\nnotebook from a local directory with a single command. Develop in the exact same\\nenvironment as your long running training jobs.\\n\\n**No vendor lock-in**: Substratus is open-source and can run anywhere Kubernetes\\nruns.\\n\\n**Keep company data internal**: Deploy in your cloud account. Training data and\\ninference APIs stay within your company\u2019s network.\\n\\n**Best practices by default:** Substratus models are immutable and contain\\ninformation about their lineage. Datasets are imported and snapshotted using\\noff-the-shelf manifests. Training executes in containerized environments, using\\nimmutable base artifacts. Inference servers are pre-configured to leverage\\nquantization on supported models. GitOps is built-in, not bolted-on.\\n\\n## **Guiding Principles**\\n\\nAs we continue to develop Substratus, we\u2019re grounded in the following guiding\\nprinciples:\\n\\n### **1. Prioritize Simplicity**\\n\\n We believe the importance of minimizing complexity in software cannot be\\n understated. In Substratus, we will work hard to keep complexity to a minimum\\n as the project grows. The Substratus API currently consists of 4 resource\\n types: Datasets, Models, Servers, and Notebooks. The project currently depends\\n on two cloud services outside of the cluster: a bucket and a container registry\\n (we are working on making these optional too). The project does not (and will\\n never) depend on a web of complex components like Istio.\\n\\n### **2. Prioritize UX**\\n\\nWe believe a company\u2019s most precious resource is their engineer\u2019s time.\\nSubstratus seeks to maximize the productivity of data scientists and engineers\\nthrough providing a best-in-class user experience. We strive to build a set of\\nwell-designed primitives that allow ML practitioners to enter a flow state as\\nthey move between importing data, training, and serving models.\\n\\n## **Roadmap**\\n\\nWe are fast at work adding new functionality, focused on creating the most\\nproductive and enjoyable platform for ML practitioners. Coming soon:\\n\\n1. Support for AWS and Azure\\n2. VS Code Notebook Integration\\n3. Large-scale distributed training\\n4. ML ecosystem integrations\\n\\nTry Substratus today in your GCP project by following the [quick start\\ndocs](/docs/category/quickstart). Let us know what features you\\nwould like to see on our [GitHub\\nrepo](https://github.com/substratusai/substratus) and don\u2019t forget to add a\\nstar!"}]}')}}]);