"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),u=r,N=k["".concat(o,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="API Reference",p={unversionedId:"api",id:"api",title:"API Reference",description:"API Version: substratus.ai/v1",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/api",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Notebooks",permalink:"/docs/notebooks"}},o={},d=[{value:"Resources",id:"resources",level:2},{value:"Types",id:"types",level:2},{value:"Dataset",id:"dataset",level:3},{value:"DatasetSpec",id:"datasetspec",level:3},{value:"DatasetStatus",id:"datasetstatus",level:3},{value:"GPUResources",id:"gpuresources",level:3},{value:"GPUType",id:"gputype",level:3},{value:"GitSource",id:"gitsource",level:3},{value:"Image",id:"image",level:3},{value:"Model",id:"model",level:3},{value:"ModelSpec",id:"modelspec",level:3},{value:"ModelStatus",id:"modelstatus",level:3},{value:"Notebook",id:"notebook",level:3},{value:"NotebookSpec",id:"notebookspec",level:3},{value:"NotebookStatus",id:"notebookstatus",level:3},{value:"ObjectRef",id:"objectref",level:3},{value:"Resources",id:"resources-1",level:3},{value:"Server",id:"server",level:3},{value:"ServerSpec",id:"serverspec",level:3},{value:"ServerStatus",id:"serverstatus",level:3}],m={toc:d},k="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API Version: substratus.ai/v1")),(0,r.kt)("p",null,"Package v1 contains API Schema definitions for Substratus."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dataset"},"Dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model"},"Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebook"},"Notebook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#server"},"Server"))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("h3",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"The Dataset API is used to describe data that can be referenced for training Models. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datasets pull in remote data sources using containerized data loaders. "),(0,r.kt)("li",{parentName:"ul"},"Users can specify their own ETL logic by referencing a repository from a Dataset. "),(0,r.kt)("li",{parentName:"ul"},"Users can leverage pre-built data loader integrations with various sources. "),(0,r.kt)("li",{parentName:"ul"},"Training typically requires a large dataset. The Dataset API pulls a dataset once and stores it in a bucket, which is mounted directly into training Jobs. "),(0,r.kt)("li",{parentName:"ul"},"The Dataset API allows users to query ready-to-use datasets (",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get datasets"),"). "),(0,r.kt)("li",{parentName:"ul"},"The Dataset API allows Kubernetes RBAC to be applied as a mechanism for controlling access to data.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"substratus.ai/v1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kind")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dataset"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta"},"ObjectMeta"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to Kubernetes API documentation for fields of ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#datasetspec"},"DatasetSpec"))),(0,r.kt)("td",{parentName:"tr",align:null},"Spec is the desired state of the Dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#datasetstatus"},"DatasetStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"Status is the observed state of the Dataset.")))),(0,r.kt)("h3",{id:"datasetspec"},"DatasetSpec"),(0,r.kt)("p",null,"DatasetSpec defines the desired state of Dataset."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dataset"},"Dataset"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")," ",(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:null},"Command to run in the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Filename is the name of the file when it is downloaded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#image"},"Image"))),(0,r.kt)("td",{parentName:"tr",align:null},"Image that contains dataset loading code and dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resources"},"Resources"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resources are the compute resources required by the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:IntOrString)")),(0,r.kt)("td",{parentName:"tr",align:null},"Params will be passed into the loading process as environment variables.")))),(0,r.kt)("h3",{id:"datasetstatus"},"DatasetStatus"),(0,r.kt)("p",null,"DatasetStatus defines the observed state of Dataset."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dataset"},"Dataset"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ready")," ",(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Ready indicates that the Dataset is ready to use. See Conditions for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conditions")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#condition-v1-meta"},"Condition")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions is the list of conditions that describe the current state of the Dataset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the loaded data.")))),(0,r.kt)("h3",{id:"gpuresources"},"GPUResources"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#gputype"},"GPUType"))),(0,r.kt)("td",{parentName:"tr",align:null},"Type of GPU.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"count")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Count is the number of GPUs.")))),(0,r.kt)("h3",{id:"gputype"},"GPUType"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Underlying type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gpuresources"},"GPUResources"))),(0,r.kt)("h3",{id:"gitsource"},"GitSource"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#image"},"Image"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the git repository. Example: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/my-username/my-repo"},"https://github.com/my-username/my-repo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path within the git repository referenced by url.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"branch")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Branch is the git branch to use.")))),(0,r.kt)("h3",{id:"image"},"Image"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#datasetspec"},"DatasetSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modelspec"},"ModelSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebookspec"},"NotebookSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serverspec"},"ServerSpec"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"git")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#gitsource"},"GitSource"))),(0,r.kt)("td",{parentName:"tr",align:null},"Git is a reference to a git repository that will be built within the cluster. Built image will be set in the Image field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Name of container image (example: "docker.io/your-username/your-image").')))),(0,r.kt)("h3",{id:"model"},"Model"),(0,r.kt)("p",null,"The Model API is used to build and train machine learning models. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base models can be built from a Git repository. "),(0,r.kt)("li",{parentName:"ul"},"Models can be trained by combining a base Model with a Dataset. "),(0,r.kt)("li",{parentName:"ul"},"Model artifacts are persisted in cloud buckets.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"substratus.ai/v1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kind")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Model"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta"},"ObjectMeta"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to Kubernetes API documentation for fields of ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#modelspec"},"ModelSpec"))),(0,r.kt)("td",{parentName:"tr",align:null},"Spec is the desired state of the Model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#modelstatus"},"ModelStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"Status is the observed state of the Model.")))),(0,r.kt)("h3",{id:"modelspec"},"ModelSpec"),(0,r.kt)("p",null,"ModelSpec defines the desired state of Model"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model"},"Model"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")," ",(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:null},"Command to run in the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#image"},"Image"))),(0,r.kt)("td",{parentName:"tr",align:null},"Image that contains model code and dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resources"},"Resources"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resources are the compute resources required by the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"baseModel")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#objectref"},"ObjectRef"))),(0,r.kt)("td",{parentName:"tr",align:null},"BaseModel should be set in order to mount another model to be used for transfer learning.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trainingDataset")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#objectref"},"ObjectRef"))),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset to mount for training.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:IntOrString)")),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters are passing into the model training/loading container as environment variables. Environment variable name will be ",(0,r.kt)("inlineCode",{parentName:"td"},'"PARAM_" + uppercase(key)'),".")))),(0,r.kt)("h3",{id:"modelstatus"},"ModelStatus"),(0,r.kt)("p",null,"ModelStatus defines the observed state of Model"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model"},"Model"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ready")," ",(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Ready indicates that the Model is ready to use. See Conditions for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conditions")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#condition-v1-meta"},"Condition")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions is the list of conditions that describe the current state of the Model.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"URL of model artifacts.")))),(0,r.kt)("h3",{id:"notebook"},"Notebook"),(0,r.kt)("p",null,"The Notebook API can be used to quickly spin up a development environment backed by high performance compute. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notebooks integrate with the Model and Dataset APIs allow for quick iteration. "),(0,r.kt)("li",{parentName:"ul"},"Notebooks can be synced to local directories to streamline developer experiences using Substratus kubectl plugins.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"substratus.ai/v1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kind")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Notebook"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta"},"ObjectMeta"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to Kubernetes API documentation for fields of ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#notebookspec"},"NotebookSpec"))),(0,r.kt)("td",{parentName:"tr",align:null},"Spec is the observed state of the Notebook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#notebookstatus"},"NotebookStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"Status is the observed state of the Notebook.")))),(0,r.kt)("h3",{id:"notebookspec"},"NotebookSpec"),(0,r.kt)("p",null,"NotebookSpec defines the desired state of Notebook"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebook"},"Notebook"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")," ",(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:null},"Command to run in the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suspend")," ",(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Suspend should be set to true to stop the notebook (Pod) from running.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#image"},"Image"))),(0,r.kt)("td",{parentName:"tr",align:null},"Image that contains notebook and dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resources"},"Resources"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resources are the compute resources required by the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#objectref"},"ObjectRef"))),(0,r.kt)("td",{parentName:"tr",align:null},"Model to load into the notebook container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataset")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#objectref"},"ObjectRef"))),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset to load into the notebook container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:IntOrString)")),(0,r.kt)("td",{parentName:"tr",align:null},"Params will be passed into the notebook container as environment variables.")))),(0,r.kt)("h3",{id:"notebookstatus"},"NotebookStatus"),(0,r.kt)("p",null,"NotebookStatus defines the observed state of Notebook"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebook"},"Notebook"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ready")," ",(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Ready indicates that the Notebook is ready to serve. See Conditions for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conditions")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#condition-v1-meta"},"Condition")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions is the list of conditions that describe the current state of the Notebook.")))),(0,r.kt)("h3",{id:"objectref"},"ObjectRef"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modelspec"},"ModelSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebookspec"},"NotebookSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serverspec"},"ServerSpec"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of Kubernetes object.")))),(0,r.kt)("h3",{id:"resources-1"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#datasetspec"},"DatasetSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modelspec"},"ModelSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#notebookspec"},"NotebookSpec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serverspec"},"ServerSpec"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpu")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disk")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Disk size in Gigabytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memory")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory is the amount of RAM in Gigabytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpu")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#gpuresources"},"GPUResources"))),(0,r.kt)("td",{parentName:"tr",align:null},"GPU resources.")))),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("p",null,"The Server API is used to deploy a server that exposes the capabilities of a Model via a HTTP interface."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"substratus.ai/v1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kind")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Server"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta"},"ObjectMeta"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to Kubernetes API documentation for fields of ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#serverspec"},"ServerSpec"))),(0,r.kt)("td",{parentName:"tr",align:null},"Spec is the desired state of the Server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#serverstatus"},"ServerStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"Status is the observed state of the Server.")))),(0,r.kt)("h3",{id:"serverspec"},"ServerSpec"),(0,r.kt)("p",null,"ServerSpec defines the desired state of Server"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#server"},"Server"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")," ",(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:null},"Command to run in the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#image"},"Image"))),(0,r.kt)("td",{parentName:"tr",align:null},"Image that contains model serving application and dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resources"},"Resources"))),(0,r.kt)("td",{parentName:"tr",align:null},"Resources are the compute resources required by the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#objectref"},"ObjectRef"))),(0,r.kt)("td",{parentName:"tr",align:null},"Model references the Model object to be served.")))),(0,r.kt)("h3",{id:"serverstatus"},"ServerStatus"),(0,r.kt)("p",null,"ServerStatus defines the observed state of Server"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#server"},"Server"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ready")," ",(0,r.kt)("em",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Ready indicates whether the Server is ready to serve traffic. See Conditions for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"conditions")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#condition-v1-meta"},"Condition")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions is the list of conditions that describe the current state of the Server.")))))}s.isMDXComponent=!0}}]);