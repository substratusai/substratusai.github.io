"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"Basic Installation",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/installation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"API Reference",permalink:"/docs/api"}},l={},c=[{value:"Basic Installation",id:"basic-installation",level:2},{value:"Advanced Installation",id:"advanced-installation",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"basic-installation"},"Basic Installation"),(0,r.kt)("p",null,"A basic installer is packaged as a container image and can be run directly. This installation method is only intended to work in a basic cloud project free of any significant constraints (i.e. GCP Organizational Policies, etc). This path has been tested on brand new cloud projects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v $HOME/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratusai/installer gcp-up.sh\n")),(0,r.kt)("h2",{id:"advanced-installation"},"Advanced Installation"),(0,r.kt)("p",null,"Most enterprises will need to modify the base configuration files to comply with constraints specific to their environment. The Terraform and Kubernetes configurations do not attempt to export every option as a variable. In order to keep the configurations simple, most options are set directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},".tf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml")," files."),(0,r.kt)("p",null,"To set advanced installation options, first clone the substratus repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/substratusai/substratus\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./substratus\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"install/")," directory contains the cluster and infrastructure configuration needed to get Substratus up and running. All configuration is documented in declarative formats (",(0,r.kt)("inlineCode",{parentName:"p"},".yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".tf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"install/\n  Dockerfile  # Packages all installation dependencies.\n  scripts/    # Helper scripts for streamlining the install process.\n  terraform/  # Provisions a cluster and supporting infrastructure (buckets, image registries, etc.).\n  kubernetes/ # Installs custom resources, controllers, etc. into a running cluster.\n")),(0,r.kt)("p",null,"Edit the configuration files and build a custom installer image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build ./install -t substratus-installer\n")),(0,r.kt)("p",null,"Run the custom installer image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  -v $HOME/.kube:/root/.kube \\\n  -e PROJECT=$(gcloud config get project) \\\n  -e TOKEN=$(gcloud auth print-access-token) \\\n  substratus-installer gcp-up.sh\n")))}d.isMDXComponent=!0}}]);