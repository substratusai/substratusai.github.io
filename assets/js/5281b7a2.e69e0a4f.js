"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},s="Architecture",i={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle of machine learning models. It does this by introducing new custom resources into the Kubernetes API packaging model source code into containers, pulling and transforming datasets, running training jobs, managing dynamic notebook development environments.",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Serving Models",permalink:"/docs/walkthrough/serving-models"},next:{title:"Installation",permalink:"/docs/installation"}},c={},l=[{value:"Models",id:"models",level:2},{value:"ModelServers",id:"modelservers",level:2},{value:"Datasets",id:"datasets",level:2},{value:"Notebooks",id:"notebooks",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Substratus extends the Kubernetes control plane to orchestrate the full lifecycle of machine learning models. It does this by introducing new custom resources into the Kubernetes API: Model, ModelServer, Dataset, Notebook. A set of controllers, bundled together into a single Deployment respond to these new resource types. Substratus can be described as a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"Kubernetes Operator")," as it automates the orchestration of common ML tasks: packaging model source code into containers, pulling and transforming datasets, running training jobs, managing dynamic notebook development environments."),(0,n.kt)("img",{src:"/img/diagrams/high-level-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"models"},"Models"),(0,n.kt)("p",null,"The Model resource is at the center of Substratus. A Model object represents an instance of a ML model (source code bundled together with weights and biases). A Model object can describe various sources for a model: Git (Substratus will clone the repo and build a container containing the model), or another Model coupled with a training Dataset (Substratus will run a training Job on the base Model with the provided data, and build a new container image containing the trained model). All other Substratus resources exist to facilitate the progression of Model objects."),(0,n.kt)("img",{src:"/img/diagrams/model-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"modelservers"},"ModelServers"),(0,n.kt)("p",null,"The ModelServer resource is responsible for exposing the a Model with a HTTP API for inference."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Give ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus/issues/66"},"GitHub issue #66")," a thumbs up if support for Embeddings is important to you.")),(0,n.kt)("h2",{id:"datasets"},"Datasets"),(0,n.kt)("p",null,"The Dataset resource facilitates the importing and transformation of public and private data sources. A Dataset object points to source code that will be used for data importing. Substratus will containerize this code and run it in the cluster, storing the resulting data in a bucket. When referenced from a Model object, Substratus will mount the data into the Model training Job."),(0,n.kt)("img",{src:"/img/diagrams/dataset-architecture.excalidraw.png"}),(0,n.kt)("h2",{id:"notebooks"},"Notebooks"),(0,n.kt)("p",null,"The Notebook resource facilitates the development of ML source code. Unlike regular applications which can typically be developed on modest laptops, developing a ML model typically requires high performance compute (i.e. GPUs with lots of memory). A Notebook object represents an instance of a Jupyter Notebook environment that is running on beefy hardware within a Kubernetes cluster. Substratus tooling, such as the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl open notebook")," plugin, allows developers to open these notebooks on their local machines."),(0,n.kt)("img",{src:"/img/diagrams/notebook-architecture.excalidraw.png"}),(0,n.kt)("p",null,"Because Substratus relies on Kubernetes port-forwarding, administrators do not need to manage TLS certificates, networking ingress paths, and bespoke firewall rules. Substratus users just need access to the Kubernetes API server (they need to be able to download Kubernetes credentials). Most companies already have a method in place of distributing these kubeconfig files."))}p.isMDXComponent=!0}}]);