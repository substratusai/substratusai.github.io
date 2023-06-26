"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Quickstart",s={unversionedId:"intro",id:"intro",title:"Quickstart",description:"Substratus is a cross cloud substrate for training and serving AI models.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},i={},u=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Cloning the substratus repo",id:"cloning-the-substratus-repo",level:3},{value:"Creating the infra and and and and deploying the controller",id:"creating-the-infra-and-and-and-and-deploying-the-controller",level:3},{value:"Deploy falcon-7b-instruct model",id:"deploy-falcon-7b-instruct-model",level:3},{value:"Conclusion and next steps",id:"conclusion-and-next-steps",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Substratus is a cross cloud substrate for training and serving AI models.\nSubstratus extends the Kubernetes control plane to orchestrate ML operations\nthrough the addition of new API endpoints: Model, ModelServer, Dataset,\nand Notebook."),(0,a.kt)("p",null,"At the end of this guide, you will have falcon-7b-instruct deployed\nin your own GKE cluster."),(0,a.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,a.kt)("p",null,"Let's get started by creating the infrastructure and deploy the Substratus\ncontroller."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google Cloud Platform")," project with billing enabled.")),(0,a.kt)("h3",{id:"cloning-the-substratus-repo"},"Cloning the substratus repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/substratusai/substratus\ncd substratus\n")),(0,a.kt)("h3",{id:"creating-the-infra-and-and-and-and-deploying-the-controller"},"Creating the infra and and and and deploying the controller"),(0,a.kt)("p",null,"Use our infrastructure build image to create a cluster and dependent cloud\ncomponents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build ./install -t substratus-installer && \\\ndocker run -it \\\n  -v $HOME/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  -e GPU_TYPE=nvidia-l4 \\\n  substratus-installer gcp-up.sh\n")),(0,a.kt)("p",null,"This will create the following infrastructure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GKE cluster with nodepools to be able to run L4 GPUs"),(0,a.kt)("li",{parentName:"ul"},"Artifact Registry Container Repository to store the models"),(0,a.kt)("li",{parentName:"ul"},"GCS Bucket to store fine tuned models"),(0,a.kt)("li",{parentName:"ul"},"GCS Bucket to store terraform state")),(0,a.kt)("p",null,"The Substratus Operator will automatically be installed on the GKE cluster."),(0,a.kt)("h3",{id:"deploy-falcon-7b-instruct-model"},"Deploy falcon-7b-instruct model"),(0,a.kt)("p",null,"Let's build the container image by creating a Model "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f examples/falcon-7b-instruct/model.yaml\n")),(0,a.kt)("p",null,"You can inspect the logs of the container image being built by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f jobs/falcon-7b-instruct-model-builder\n")),(0,a.kt)("p",null,"Press Ctrl + C to exit watching the logs."),(0,a.kt)("p",null,"The job should eventually complete after about 11 minutes."),(0,a.kt)("p",null,"You can now deploy an inferencing server by creating a ModelServer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f examples/falcon-7b-instruct/server.yaml\n")),(0,a.kt)("p",null,"It takes about 3-4 mintues to load the model into memory."),(0,a.kt)("p",null,"Check the logs\nand wait till you see a line that says ",(0,a.kt)("inlineCode",{parentName:"p"},"listening on 0.0.0.0:8080"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f deployment/falcon-7b-instruct-server\n")),(0,a.kt)("p",null,"Now you can use port forwarding to access the Web UI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward deployment/falcon-7b-instruct-server 8080:8080\n")),(0,a.kt)("p",null,"Try some prompts by visting ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"."),(0,a.kt)("p",null,"Side bonus, the inference server provides an OpenAI compatible API endpoint.\nBasaran is the component that provides this. Read more about\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hyperonym/basaran"},"Basaran here"),"."),(0,a.kt)("h2",{id:"conclusion-and-next-steps"},"Conclusion and next steps"),(0,a.kt)("p",null,"You were able to deploy a large language model on GKE and can now use it to\ncreate private LLM applications."),(0,a.kt)("p",null,"Next steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fine tuning a Model with the Dataset API (TODO write doc)"),(0,a.kt)("li",{parentName:"ul"},"Using a notebook to create a new model (TODO write doc)")))}d.isMDXComponent=!0}}]);