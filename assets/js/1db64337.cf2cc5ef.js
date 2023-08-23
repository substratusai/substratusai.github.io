"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[1372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GCP - Google Cloud",permalink:"/docs/quickstart/gcp"},next:{title:"Architecture",permalink:"/docs/architecture"}},l={},c=[{value:"Models",id:"models",level:2},{value:"Servers",id:"servers",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Notebooks",id:"notebooks",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle\nof machine learning models. It does this by introducing new custom resources\ninto the Kubernetes API: Model, Server, Dataset, Notebook. A set of controllers,\nbundled together into a single Deployment respond to these new resource types.\nSubstratus can be described as a\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"Kubernetes Operator"),"\nas it automates the orchestration of common ML tasks: packaging models local to\nthe infrastructure, packaging ML jobs into containers, pulling and transforming\ndatasets, running training jobs, managing dynamic notebook development environments."),(0,o.kt)("img",{src:"/img/diagrams/high-level-architecture.excalidraw.png"}),(0,o.kt)("h2",{id:"models"},"Models"),(0,o.kt)("p",null,"The Model resource is at the center of Substratus. A Model object represents an instance of a ML model (source code bundled together with weights and biases). A Model object can describe various sources for a model: Git (Substratus will clone the repo and build a container containing the model), or another Model coupled with a training Dataset (Substratus will run a training Job on the base Model with the provided data, and build a new container image containing the trained model). All other Substratus resources exist to facilitate the progression of Model objects."),(0,o.kt)("img",{src:"/img/diagrams/model-architecture.excalidraw.png"}),(0,o.kt)("p",null,"Example of a Model used to import Falcon 40B from HuggingFace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: falcon-40b\nspec:\n  image: substratusai/model-loader-huggingface\n  params:\n    name: tiiuae/falcon-40b\n")),(0,o.kt)("h2",{id:"servers"},"Servers"),(0,o.kt)("p",null,"The Server resource is responsible for exposing the a Model with a HTTP API for inference."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Give ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus/issues/66"},"GitHub issue #66")," a thumbs up if support for Embeddings is important to you.")),(0,o.kt)("p",null,"Example of a Server that will serve Falcon 40B:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Server\nmetadata:\n  name: falcon-40b\nspec:\n  image: substratusai/model-server-basaran\n  model:\n    name: falcon-40b\n  resources:\n    gpu:\n      type: nvidia-l4\n      count: 4\n")),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("p",null,"The Dataset resource facilitates the importing and transformation of public and private data sources. A Dataset object points to source code that will be used for data importing. Substratus will containerize this code and run it in the cluster, storing the resulting data in a bucket. When referenced from a Model object, Substratus will mount the data into the Model training Job."),(0,o.kt)("img",{src:"/img/diagrams/dataset-architecture.excalidraw.png"}),(0,o.kt)("h2",{id:"notebooks"},"Notebooks"),(0,o.kt)("p",null,"The Notebook resource facilitates the development of ML source code. Unlike regular applications which can typically be developed on modest laptops, developing a ML model typically requires high performance compute (i.e. GPUs with lots of memory). A Notebook object represents an instance of a Jupyter Notebook environment that is running on beefy hardware within a Kubernetes cluster. Substratus tooling, such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl open notebook")," plugin, allows developers to open these notebooks on their local machines."),(0,o.kt)("img",{src:"/img/diagrams/notebook-architecture.excalidraw.png"}),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"./notebooks"},"what makes Substratus Notebooks unique"),"."))}p.isMDXComponent=!0}}]);