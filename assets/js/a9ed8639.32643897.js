"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[3658],{264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(5893),s=n(1151);const l={slug:"tutorial-llama2-70b-serving-gke",title:"Tutorial: Llama2 70b serving on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},r=void 0,o={permalink:"/blog/tutorial-llama2-70b-serving-gke",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-06-llama2-70b.md",source:"@site/blog/2023-08-06-llama2-70b.md",title:"Tutorial: Llama2 70b serving on GKE",description:"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.",date:"2023-08-06T00:00:00.000Z",formattedDate:"August 6, 2023",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],frontMatter:{slug:"tutorial-llama2-70b-serving-gke",title:"Tutorial: Llama2 70b serving on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},unlisted:!1,prevItem:{title:"Introducing: kubectl notebook",permalink:"/blog/introducing-kubectl-notebook"},nextItem:{title:"Introducing Substratus",permalink:"/blog/introducing-substratus"}},i={authorsImageUrls:[void 0]},c=[{value:"Install Substratus on GCP",id:"install-substratus-on-gcp",level:2},{value:"Load the Model into Substratus",id:"load-the-model-into-substratus",level:2},{value:"Serve the Loaded Model",id:"serve-the-loaded-model",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.\nFollow along in this tutorial to get Llama 2 70b deployed on GKE:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Create a GKE cluster with Substratus installed."}),"\n",(0,a.jsx)(t.li,{children:"Load the Llama 2 70b model from HuggingFace."}),"\n",(0,a.jsx)(t.li,{children:"Serve the model via an interactive inference server."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"install-substratus-on-gcp",children:"Install Substratus on GCP"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"/docs/installation/gcp",children:"Installation Guide for GCP"})," to install Substratus."]}),"\n",(0,a.jsx)(t.h2,{id:"load-the-model-into-substratus",children:"Load the Model into Substratus"}),"\n",(0,a.jsx)(t.p,{children:"You will need to agree to HuggingFace's terms before you can use the Llama 2 model. This means you will need to pass your HuggingFace token to Substratus."}),"\n",(0,a.jsxs)(t.p,{children:["Let's tell Substratus how to import Llama 2 by defining a Model resource. Create a file named ",(0,a.jsx)(t.code,{children:"base-model.yaml"})," with the following content:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-loader-huggingface\n  env:\n    # You would first have to create a secret named `ai` that\n    # has the key `HUGGING_FACE_HUB_TOKEN` set to your token.\n    # E.g. create the secret by running:\n    # kubectl create secret generic ai --from-literal="HUGGING_FACE_HUB_TOKEN=<my-token>\n    HUGGING_FACE_HUB_TOKEN: ${{ secrets.ai.HUGGING_FACE_HUB_TOKEN }}\n  params:\n    name: meta-llama/Llama-2-70b-hf\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Get your HuggingFace token by going to ",(0,a.jsx)(t.a,{href:"https://huggingface.co/settings/tokens",children:"HuggingFace Settings > Access Tokens"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Create a secret with your HuggingFace token:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'kubectl create secret generic ai --from-literal="HUGGING_FACE_HUB_TOKEN=<my-token>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Make sure to replace ",(0,a.jsx)(t.code,{children:"<my-token>"})," with your actual token."]}),"\n",(0,a.jsx)(t.p,{children:"Run the following command to load the base model:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f base-model.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:"Watch Substratus kick off your importing Job."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl get jobs -w\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can view the Job logs by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl logs -f jobs/llama-2-70b-modeller\n"})}),"\n",(0,a.jsx)(t.h2,{id:"serve-the-loaded-model",children:"Serve the Loaded Model"}),"\n",(0,a.jsxs)(t.p,{children:["While the Model is loading, we can define our inference server. Create a file named ",(0,a.jsx)(t.code,{children:"server.yaml"})," with the following content:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'apiVersion: substratus.ai/v1\nkind: Server\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-server-basaran\n  model:\n    name: llama-2-70b\n  env:\n    MODEL_LOAD_IN_4BIT: "true"\n  resources:\n    gpu:\n      type: nvidia-a100\n      count: 1\n'})}),"\n",(0,a.jsx)(t.p,{children:"Create the Server by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f server.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once the Model is loaded (marked as ",(0,a.jsx)(t.code,{children:"ready"}),"), Substratus will automatically launch the server. View the state of both resources using kubectl:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl get models,servers\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To view more information about either the Model or Server, you can use ",(0,a.jsx)(t.code,{children:"kubectl describe"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl describe -f base-model.yaml\n# OR\nkubectl describe -f server.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:"Once the model is loaded, the initial server startup time is about 20 minutes.\nThis is because the model is 100GB+ in size and takes a while to load\ninto GPU memory."}),"\n",(0,a.jsxs)(t.p,{children:["Look for a log message that the container\nis serving at port ",(0,a.jsx)(t.code,{children:"8080"}),". You can check the logs\nby running:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl logs deployment/llama-2-70b-server\n"})}),"\n",(0,a.jsx)(t.p,{children:"For demo purposes, you can use port forwarding once the Server is ready on port 8080. Run the following command to forward the container port 8080 to your localhost port 8080:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl port-forward service/llama-2-70b-server 8080:8080\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Interact with Llama 2 in your browser:\n",(0,a.jsx)(t.a,{href:"http://localhost:8080",children:"http://localhost:8080"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"You have now deployed Llama 2 70b!"})}),"\n",(0,a.jsx)(t.p,{children:'You can repeat these steps for other models. For example, you\ncould instead deploy the "Instruct" variation of Llama.'}),"\n",(0,a.jsx)(t.p,{children:"Stay tuned for another blog post on how to fine-tune Llama 2 70b on your own data."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);const s={},l=a.createContext(s);function r(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);