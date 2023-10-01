"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[6169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:4},i="Finetuning Models",l={unversionedId:"guides/finetuning-models",id:"guides/finetuning-models",title:"Finetuning Models",description:"The large pretrained base models are already very helpful, but",source:"@site/docs/guides/finetuning-models.md",sourceDirName:"guides",slug:"/guides/finetuning-models",permalink:"/docs/guides/finetuning-models",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/guides/finetuning-models.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Loading Datasets",permalink:"/docs/guides/loading-datasets"},next:{title:"Intro to Notebooks",permalink:"/docs/guides/intro-to-notebooks"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Finetuning falcon-7b-instruct",id:"finetuning-falcon-7b-instruct",level:2},{value:"Serving the finetuned model",id:"serving-the-finetuned-model",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"finetuning-models"},"Finetuning Models"),(0,r.kt)("p",null,"The large pretrained base models are already very helpful, but\nwith finetuning small and large language models can be made even more helpful."),(0,r.kt)("p",null,"Finetuning is especially helpful for use cases that require private internal\ndata or for use cases that require domain specific knowledge that wasn't\navailable on the internet."),(0,r.kt)("p",null,"In Substratus the Model resource allows you to specify an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," and\na ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," to create new finetuned models."),(0,r.kt)("p",null,"To summarize:\n",(0,r.kt)("inlineCode",{parentName:"p"},"finetunedModel = training_image(model, dataset)"),"."),(0,r.kt)("p",null,"The following Model resource would create a finetuned model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: falcon-7b-instruct-k8s\nspec:\n  image:\n    name: substratusai/model-trainer-huggingface\n  model:\n    name: falcon-7b-instruct\n  dataset:\n    name: k8s-instructions\n  params:\n    epochs: 1\n  resources:\n    gpu:\n      count: 4\n      type: nvidia-l4\n")),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"image.name")," you see model-trainer-huggingface`, which is provided\nby Substratus  and can be used to finetune language models that were loaded from HuggingFace.\nThe image uses the HuggingFace transformers library for training.\nThe source for the trainer is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/substratusai/model-trainer-huggingface"},"https://github.com/substratusai/model-trainer-huggingface")),(0,r.kt)("p",null,"The trainer image will load the base model from a predefined path and use PEFT method for finetuning. Once training is done, the training image saves the model to a predefined path.\nBy using a predefined paths the model automatically loads and stores from cloud storage buckets."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installed Substratus following the ",(0,r.kt)("a",{parentName:"li",href:"/docs/installation/"},"installation guide")),(0,r.kt)("li",{parentName:"ul"},"You have loaded the falcon-7b-instruct model by following ",(0,r.kt)("a",{parentName:"li",href:"/docs/quickstart/gcp"},"quickstart guide")),(0,r.kt)("li",{parentName:"ul"},"You have loaded the k8s-instruction Dataset by following the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/loading-datasets"},"loading datasets guide"))),(0,r.kt)("p",null,"Run the commands below to ensure the you satisfy all the prerequisites:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml\n kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/datasets/k8s-instructions.yaml\n")),(0,r.kt)("p",null,"Verify that the falcon-7b-instruct model and k8s-instruct Dataset are ready (this should take ~5 minutes):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe dataset k8s-instruct\n")),(0,r.kt)("h2",{id:"finetuning-falcon-7b-instruct"},"Finetuning falcon-7b-instruct"),(0,r.kt)("p",null,"Create the fine tuned model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-model.yaml\n")),(0,r.kt)("p",null,"The training takes about 20 to 30 minutes. You can watch the progress by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs jobs/falcon-7b-instruct-k8s-modeller\n")),(0,r.kt)("p",null,"Wait until the falcon-7b-instruct-k8s-modeller job has finished. Once finished you can create\na Server resource."),(0,r.kt)("h2",{id:"serving-the-finetuned-model"},"Serving the finetuned model"),(0,r.kt)("p",null,"Create a Server to serve the falcon-7b-instruct-k8s finetuned model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/finetuned-server.yaml\n")),(0,r.kt)("p",null,"Verify that the Server is ready by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe server falcon-7b-instruct-k8s\n")),(0,r.kt)("p",null,"By default Substratus creates a K8s Service to expose the Server, however this Service is of type ClusterIP, which means you can not directly access it over the internet. So let's use K8s Port Forwarding to access the server."),(0,r.kt)("p",null,"Run the following command to forward your local 8080 port to the Server port 8080:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/falcon-7b-instruct-server 8080:8080\n")),(0,r.kt)("p",null,"You should now be able to access the web interface of the Server by going to\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")),(0,r.kt)("p",null,"You have now deployed falcon-7b-instruct model that was fine tuned to write K8s YAML files. Try it out by sending the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Below is an instruction that describes a task. Write a response that appropriately completes the request.\n\n### Instruction:\nWrite YAML that defines a Kubernetes Deployment named "iis" with 3 replicas \n\n### Response:\n')))}p.isMDXComponent=!0}}]);