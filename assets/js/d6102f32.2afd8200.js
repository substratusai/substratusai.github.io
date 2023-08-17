"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[8776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,d=c["".concat(u,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={slug:"tutorial-llama2-70b-serving-gke",title:"Tutorial: Llama2 70b serving on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},o=void 0,s={permalink:"/blog/tutorial-llama2-70b-serving-gke",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-06-llama2-70b.md",source:"@site/blog/2023-08-06-llama2-70b.md",title:"Tutorial: Llama2 70b serving on GKE",description:"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.",date:"2023-08-06T00:00:00.000Z",formattedDate:"August 6, 2023",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:2.77,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],frontMatter:{slug:"tutorial-llama2-70b-serving-gke",title:"Tutorial: Llama2 70b serving on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},nextItem:{title:"Introducing Substratus",permalink:"/blog/introducing-substratus"}},u={authorsImageUrls:[void 0]},i=[{value:"Install Substratus on GCP",id:"install-substratus-on-gcp",level:2},{value:"Load the Model into Substratus",id:"load-the-model-into-substratus",level:2},{value:"Serve the Loaded Model",id:"serve-the-loaded-model",level:2},{value:"Cleanup",id:"cleanup",level:2}],p={toc:i},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Llama 2 70b is the newest iteration of the Llama model published by Meta, sporting 7 Billion parameters.\nFollow along in this tutorial to get Llama 2 70b deployed on GKE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a GKE cluster with Substratus installed."),(0,r.kt)("li",{parentName:"ol"},"Load the Llama 2 70b model from HuggingFace."),(0,r.kt)("li",{parentName:"ol"},"Serve the model via an interactive inference server.")),(0,r.kt)("h2",{id:"install-substratus-on-gcp"},"Install Substratus on GCP"),(0,r.kt)("p",null,"Use the Substratus installer to create a new GKE cluster with supporting infrastructure (a GCS bucket\nand Artifact Registry):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v ${HOME}/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratusai/installer:v0.8.0 gcp-up.sh\n")),(0,r.kt)("h2",{id:"load-the-model-into-substratus"},"Load the Model into Substratus"),(0,r.kt)("p",null,"You will need to agree to HuggingFace's terms before you can use the Llama 2 model. This means you will need to pass your HuggingFace token to Substratus."),(0,r.kt)("p",null,"Let's tell Substratus how to import Llama 2 by defining a Model resource. Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"base-model.yaml")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-loader-huggingface\n  params:\n    name: meta-llama/Llama-2-70b-hf\n    hugging_face_hub_token: ${HUGGINGFACE_TOKEN}\n")),(0,r.kt)("p",null,"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"${HUGGINGFACE_TOKEN}")," placeholder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"base-model.yaml")," file."),(0,r.kt)("p",null,"Get your HuggingFace token by going to ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/settings/tokens"},"HuggingFace Settings > Access Tokens"),".\nCreate an environment variable that holds your HuggingFace token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export HUGGINGFACE_TOKEN=replace_me\n")),(0,r.kt)("p",null,"Let's use ",(0,r.kt)("inlineCode",{parentName:"p"},"envsubst")," to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"${HUGGINGFACE_TOKEN}")," variable when we apply the Model."),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat base-model.yaml | envsubst | kubectl apply -f -\n")),(0,r.kt)("p",null,"Watch Substratus kick off your importing Job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get jobs -w\n")),(0,r.kt)("p",null,"You can view the Job logs by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f jobs/llama-2-70b-modeller\n")),(0,r.kt)("h2",{id:"serve-the-loaded-model"},"Serve the Loaded Model"),(0,r.kt)("p",null,"While the Model is loading, we can define our inference server. Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"server.yaml")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Server\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-server-basaran\n  model:\n    name: llama-2-70b\n  resources:\n    gpu:\n      type: nvidia-a100\n      count: 2\n")),(0,r.kt)("p",null,"Create the Server by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f server.yaml\n")),(0,r.kt)("p",null,"Once the Model is loaded (marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"ready"),"), Substratus will automatically launch the server. View the state of both resources using kubectl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get models,servers\n")),(0,r.kt)("p",null,"To view more information about either the Model or Server, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe -f base-model.yaml\n# OR\nkubectl describe -f server.yaml\n")),(0,r.kt)("p",null,"Once the model is loaded, the initial server startup time is about 20 minutes.\nThis is because the model is 100GB+ in size and takes a while to load\ninto GPU memory."),(0,r.kt)("p",null,"Look for a log message that the container\nis serving at port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),". You can check the logs\nby running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs deployment/llama-2-70b-server\n")),(0,r.kt)("p",null,"For demo purposes, you can use port forwarding once the Server is ready on port 8080. Run the following command to forward the container port 8080 to your localhost port 8080:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/llama-2-70b-server 8080:8080\n")),(0,r.kt)("p",null,"Interact with Llama 2 in your browser:\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You have now deployed Llama 2 70b!")),(0,r.kt)("p",null,'You can repeat these steps for other models. For example, you\ncould instead deploy the "Instruct" variation of Llama.'),(0,r.kt)("p",null,"Stay tuned for another blog post on how to fine-tune Llama 2 70b on your own data."),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"Run the following command to delete all resources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v ${HOME}/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratusai/installer:v0.8.0 gcp-down.sh\n")))}m.isMDXComponent=!0}}]);