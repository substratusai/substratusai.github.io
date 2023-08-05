"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},s="Overview",i={unversionedId:"overview",id:"overview",title:"Overview",description:"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Installation",permalink:"/docs/installation"}},l={},c=[{value:"Models",id:"models",level:2},{value:"Servers",id:"servers",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Notebooks",id:"notebooks",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle\nof machine learning models. It does this by introducing new custom resources\ninto the Kubernetes API: Model, Server, Dataset, Notebook. A set of controllers,\nbundled together into a single Deployment respond to these new resource types.\nSubstratus can be described as a\n",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"Kubernetes Operator"),"\nas it automates the orchestration of common ML tasks: packaging models local to\nthe infrastructure, packaging ML jobs into containers, pulling and transforming\ndatasets, running training jobs, managing dynamic notebook development environments."),(0,n.kt)("img",{src:"/img/diagrams/high-level-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"models"},"Models"),(0,n.kt)("p",null,"The Model resource is at the center of Substratus. A Model object represents an instance of a ML model (source code bundled together with weights and biases). A Model object can describe various sources for a model: Git (Substratus will clone the repo and build a container containing the model), or another Model coupled with a training Dataset (Substratus will run a training Job on the base Model with the provided data, and build a new container image containing the trained model). All other Substratus resources exist to facilitate the progression of Model objects."),(0,n.kt)("img",{src:"/img/diagrams/model-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"servers"},"Servers"),(0,n.kt)("p",null,"The Server resource is responsible for exposing the a Model with a HTTP API for inference."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Give ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus/issues/66"},"GitHub issue #66")," a thumbs up if support for Embeddings is important to you.")),(0,n.kt)("h2",{id:"datasets"},"Datasets"),(0,n.kt)("p",null,"The Dataset resource facilitates the importing and transformation of public and private data sources. A Dataset object points to source code that will be used for data importing. Substratus will containerize this code and run it in the cluster, storing the resulting data in a bucket. When referenced from a Model object, Substratus will mount the data into the Model training Job."),(0,n.kt)("img",{src:"/img/diagrams/dataset-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"notebooks"},"Notebooks"),(0,n.kt)("p",null,"The Notebook resource facilitates the development of ML source code. Unlike regular applications which can typically be developed on modest laptops, developing a ML model typically requires high performance compute (i.e. GPUs with lots of memory). A Notebook object represents an instance of a Jupyter Notebook environment that is running on beefy hardware within a Kubernetes cluster. Substratus tooling, such as the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl open notebook")," plugin, allows developers to open these notebooks on their local machines."),(0,n.kt)("img",{src:"/img/diagrams/notebook-architecture.excalidraw.png"}),(0,n.kt)("p",null,"Because Substratus relies on Kubernetes port-forwarding, administrators do not need to manage TLS certificates, networking ingress paths, and bespoke firewall rules. Substratus users just need access to the Kubernetes API server (they need to be able to download Kubernetes credentials). Most companies already have a method in place of distributing these kubeconfig files."),(0,n.kt)("p",null,"Read more about ",(0,n.kt)("a",{parentName:"p",href:"./components/notebooks"},"what makes Substratus Notebooks unique"),"."))}p.isMDXComponent=!0}}]);