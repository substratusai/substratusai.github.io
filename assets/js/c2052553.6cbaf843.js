"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:2},o="Serving Models",i={unversionedId:"guides/serving-models",id:"guides/serving-models",title:"Serving Models",description:"The Substratus Server resource lets you serve models that were loaded into Substratus.",source:"@site/docs/guides/serving-models.md",sourceDirName:"guides",slug:"/guides/serving-models",permalink:"/docs/guides/serving-models",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/guides/serving-models.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Loading Models",permalink:"/docs/guides/loading-models"},next:{title:"Loading Datasets",permalink:"/docs/guides/loading-datasets"}},l={},u=[{value:"Creating a server for falcon-7b-instruct",id:"creating-a-server-for-falcon-7b-instruct",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serving-models"},"Serving Models"),(0,a.kt)("p",null,"The Substratus Server resource lets you serve models that were loaded into Substratus.\nSubstratus provides a serving image that uses Basaran to provide an OpenAI\ncompatible API endpoint and also a Web UI which is compatible with most of the\nLarge Language Models on HuggingFace."),(0,a.kt)("h2",{id:"creating-a-server-for-falcon-7b-instruct"},"Creating a server for falcon-7b-instruct"),(0,a.kt)("p",null,"Prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The falcon-7b-instruct model was loaded by following the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/loading-datasets"},"loading models walkthrough"))),(0,a.kt)("p",null,"Run the following command to satisfy the prerequisites:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml\n")),(0,a.kt)("p",null,"Create the Server resource by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/server.yaml\n")),(0,a.kt)("p",null,"The following Server resource is used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Server\nmetadata:\n  name: falcon-7b-instruct\nspec:\n  image:\n    name: substratusai/model-server-basaran\n  model:\n    name: falcon-7b-instruct\n  resources:\n    gpu:\n      type: nvidia-l4\n      count: 1\n")),(0,a.kt)("p",null,"In the Model resource spec the following things are configured:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"image.name: This is the image published by Substratus that can serve models."),(0,a.kt)("li",{parentName:"ol"},"model.name: Refers to the name of the model that was loaded earlier in this tutorial"),(0,a.kt)("li",{parentName:"ol"},"resources: These specify what kind of resources are needed to serve the model. The Falcon-7b model requires GPUs to perform decently. In this case, 1 NVidia L4 GPU is requested.")),(0,a.kt)("p",null,"It takes about 5 minutes to pull the container, load the model into GPU memory and being ready to serve requests. You can check if the Server is ready by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe server falcon-7b-instruct\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#  Name:         falcon-7b-instruct\n#  Namespace:    default\n#  Labels:       <none>\n#  Annotations:  <none>\n#  API Version:  substratus.ai/v1\n#  Kind:         Server\n#  Metadata:\n#    Creation Timestamp:  2023-07-17T06:37:26Z\n#    Generation:          1\n#    Resource Version:    15962533\n#    UID:                 a25eae87-c17b-40df-9e1e-7ccaff0f8a2e\n#  Spec:\n#    Image:\n#      Name:  substratusai/model-server-basaran\n#    Model:\n#      Name:  falcon-7b-instruct\n#    Resources:\n#      Cpu:   2\n#      Disk:  10\n#      Gpu:\n#        Count:  1\n#        Type:   nvidia-l4\n#      Memory:   10\n#  Status:\n#    Conditions:\n#      Last Transition Time:  2023-07-17T06:42:01Z\n#      Message:               \n#      Observed Generation:   1\n#      Reason:                DeploymentReady\n#      Status:                True\n#      Type:                  Deployed\n#    Ready:                   true\n#  Events:                    <none>\n")),(0,a.kt)("p",null,"By default Substratus creates a K8s Service to expose the Server, however this Service is of type ClusterIP, which means you can not directly access it over the internet. So let's use K8s Port Forwarding to access the server."),(0,a.kt)("p",null,"Run the following command to forward your local 8080 port to the Server port 8080:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward service/falcon-7b-instruct-server 8080:8080\n")),(0,a.kt)("p",null,"You should now be able to access the web interface of the Server by going to\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")))}p.isMDXComponent=!0}}]);