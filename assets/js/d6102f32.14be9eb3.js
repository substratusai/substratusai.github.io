"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(a),g=l,d=p["".concat(u,".").concat(g)]||p[g]||c[g]||r;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(7462),l=(a(7294),a(3905));const r={slug:"llama2-70b",title:"Tutorial: Llama2 70b on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},o=void 0,s={permalink:"/blog/llama2-70b",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-06-llama2-70b.md",source:"@site/blog/2023-08-06-llama2-70b.md",title:"Tutorial: Llama2 70b on GKE",description:"Llama 2 70b, is the newest iteration of the Llama model published by Meta.",date:"2023-08-06T00:00:00.000Z",formattedDate:"August 6, 2023",tags:[{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:2.555,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],frontMatter:{slug:"llama2-70b",title:"Tutorial: Llama2 70b on GKE",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123",image_url:"https://avatars.githubusercontent.com/u/388784?v=4",imageURL:"https://avatars.githubusercontent.com/u/388784?v=4"}],tags:["tutorial"]},nextItem:{title:"Introducing Substratus",permalink:"/blog/introducing-substratus"}},u={authorsImageUrls:[void 0]},i=[{value:"Install Substratus on GCP",id:"install-substratus-on-gcp",level:2},{value:"Load the Llama 2 70b model",id:"load-the-llama-2-70b-model",level:2},{value:"Serve the loaded Llama 2 70b model",id:"serve-the-loaded-llama-2-70b-model",level:2},{value:"Cleanup",id:"cleanup",level:2}],m={toc:i},p="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Llama 2 70b, is the newest iteration of the Llama model published by Meta.\nFollow along in this tutorial to get Llama 2 70b deployed on GKE:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Substratus on GKE"),(0,l.kt)("li",{parentName:"ol"},"Load the Llama 2 70b model"),(0,l.kt)("li",{parentName:"ol"},"Serve Llama 2 70b ")),(0,l.kt)("h2",{id:"install-substratus-on-gcp"},"Install Substratus on GCP"),(0,l.kt)("p",null,"Use the Substratus installer to create a new GKE cluster, GCS bucket\nand Artifact Registry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v ${HOME}/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratusai/installer:latest gcp-up.sh\n")),(0,l.kt)("h2",{id:"load-the-llama-2-70b-model"},"Load the Llama 2 70b model"),(0,l.kt)("p",null,"You need to agree to HuggingFace's terms before you can use the Llama 2 model. This means you can't simply download the model without logging into HuggingFace. But don't worry, the Substratus model-loader-huggingface can use your HuggingFace token."),(0,l.kt)("p",null,"Let's get started with creating the Substrats ",(0,l.kt)("inlineCode",{parentName:"p"},"Model")," resource. Create a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"base-model.yaml")," with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-loader-huggingface\n  params:\n    name: meta-llama/Llama-2-70b-hf\n    hugging_face_hub_token: ${HUGGINGFACE_TOKEN}\n")),(0,l.kt)("p",null,"Notice this part ",(0,l.kt)("inlineCode",{parentName:"p"},"${HUGGINGFACE_TOKEN}")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"base-model.yaml")," file."),(0,l.kt)("p",null,"Get your HuggingFace token by going to ",(0,l.kt)("a",{parentName:"p",href:"https://huggingface.co/settings/tokens"},"HuggingFace Settings > Access Tokens"),".\nCreate an environment variable that holds your HuggingFace token:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export HUGGINGFACE_TOKEN=replace_me\n")),(0,l.kt)("p",null,"Let's use ",(0,l.kt)("inlineCode",{parentName:"p"},"envsubst")," to substitute the ",(0,l.kt)("inlineCode",{parentName:"p"},"${HUGGINGFACE_TOKEN}")," part in in the ",(0,l.kt)("inlineCode",{parentName:"p"},"base-model.yaml")," file with your valid HuggingFace token that you set as environment variable in the previous step."),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat base-model.yaml | envsubst | kubectl apply -f -\n")),(0,l.kt)("p",null,"You can watch the progress by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f jobs/llama-2-70b-modeller\n")),(0,l.kt)("p",null,"Wait till the model reports being ready:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe model llama-2-70b\n")),(0,l.kt)("h2",{id:"serve-the-loaded-llama-2-70b-model"},"Serve the loaded Llama 2 70b model"),(0,l.kt)("p",null,"Once the model is loaded you can create a Substratus Server\nresource to serve the model."),(0,l.kt)("p",null,"Create a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"server.yaml")," with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Server\nmetadata:\n  name: llama-2-70b\nspec:\n  image: substratusai/model-server-basaran\n  model:\n    name: llama-2-70b\n  resources:\n    gpu:\n      type: nvidia-a100\n      count: 2\n")),(0,l.kt)("p",null,"Create the server by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f server.yaml\n")),(0,l.kt)("p",null,"The initial startup time is about 20 minutes.\nThis is because the model is 100GB+ in size and it\nneeds to load the data from GCS into GPU memory."),(0,l.kt)("p",null,"Wait until you see a log message that the container\nis serving at port ",(0,l.kt)("inlineCode",{parentName:"p"},"8080"),". You can check the logs\nby running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs deployment/llama-2-70b-server\n")),(0,l.kt)("p",null,"You can then use port forwarding once the Server is ready on port 8080. Run the following command to forward the container port 8080 to your localhost port 8080:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/llama-2-70b-server 8080:8080\n")),(0,l.kt)("p",null,"In your browser you can now open the following URL:\n",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")),(0,l.kt)("p",null,"You have now deployed the Llama 2 70b base model. You\ncan repeat the steps for other models, for example, you\ncould instead deploy llama-2-70b-instruct-v2."),(0,l.kt)("p",null,"Stay tuned for another blog post on how to fine tune Llama 2 70B."),(0,l.kt)("h2",{id:"cleanup"},"Cleanup"),(0,l.kt)("p",null,"Run the following command to delete all the Substratus created resources:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v ${HOME}/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratusai/installer:latest gcp-down.sh\n")))}c.isMDXComponent=!0}}]);