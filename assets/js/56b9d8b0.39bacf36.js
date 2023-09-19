"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[5588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={slug:"kind-with-gpus",title:"Tutorial: K8s Kind with GPUs",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["kind","gpu"]},o=void 0,s={permalink:"/blog/kind-with-gpus",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-09-07-kind-with-gpus.md",source:"@site/blog/2023-09-07-kind-with-gpus.md",title:"Tutorial: K8s Kind with GPUs",description:"Don't you just love it when you submit a PR and it turns out that no code is",date:"2023-09-07T00:00:00.000Z",formattedDate:"September 7, 2023",tags:[{label:"kind",permalink:"/blog/tags/kind"},{label:"gpu",permalink:"/blog/tags/gpu"}],readingTime:1.33,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],frontMatter:{slug:"kind-with-gpus",title:"Tutorial: K8s Kind with GPUs",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["kind","gpu"]},nextItem:{title:"Converting HuggingFace Models to GGUF/GGML",permalink:"/blog/converting-hf-model-gguf-model"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"video-container"},(0,r.kt)("iframe",{class:"video",src:"https://www.youtube-nocookie.com/embed/O1683vzaJVE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,r.kt)("p",null,"Don't you just love it when you submit a PR and it turns out that no code is\nneeded? That's exactly what happened when I tried add GPU support to Kind."),(0,r.kt)("p",null,"In this blog post you will learn how to configure Kind such\nthat it can use the GPUs on your device. Credit to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/pull/3257#issuecomment-1607287275"},"@klueska"),"\nfor the solution."),(0,r.kt)("p",null,"Install the NVIDIA container toolkit by following the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/user-guide.html#adding-the-nvidia-runtime"},"official install docs"),"."),(0,r.kt)("p",null,"Configure NVIDIA to be the default runtime for docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nvidia-ctk runtime configure --runtime=docker --set-as-default\nsudo systemctl restart docker\n")),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"accept-nvidia-visible-devices-as-volume-mounts = true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nvidia-container-runtime/config.toml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sed -i '/accept-nvidia-visible-devices-as-volume-mounts/c\\accept-nvidia-visible-devices-as-volume-mounts = true' /etc/nvidia-container-runtime/config.toml\n")),(0,r.kt)("p",null,"Create a Kind Cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name substratus --config - <<EOF\napiVersion: kind.x-k8s.io/v1alpha4\nkind: Cluster\nnodes:\n- role: control-plane\n  image: kindest/node:v1.27.3@sha256:3966ac761ae0136263ffdb6cfd4db23ef8a83cba8a463690e98317add2c9ba72\n  # required for GPU workaround\n  extraMounts:\n    - hostPath: /dev/null\n      containerPath: /var/run/nvidia-container-devices/all\nEOF\n")),(0,r.kt)("p",null,"Workaround for issue with missing required file ",(0,r.kt)("inlineCode",{parentName:"p"},"/sbin/ldconfig.real"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/NVIDIA/nvidia-docker/issues/614#issuecomment-423991632\ndocker exec -ti substratus-control-plane ln -s /sbin/ldconfig /sbin/ldconfig.real\n")),(0,r.kt)("p",null,"Install the K8s NVIDIA GPU operator so K8s is aware of your NVIDIA device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add nvidia https://helm.ngc.nvidia.com/nvidia || true\nhelm repo update\nhelm install --wait --generate-name \\\n     -n gpu-operator --create-namespace \\\n     nvidia/gpu-operator --set driver.enabled=false\n")),(0,r.kt)("p",null,"You should now have a working Kind cluster that can access your GPU.\nVerify it by running a simple pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: cuda-vectoradd\nspec:\n  restartPolicy: OnFailure\n  containers:\n  - name: cuda-vectoradd\n    image: "nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1-ubuntu20.04"\n    resources:\n      limits:\n        nvidia.com/gpu: 1\nEOF\n')))}p.isMDXComponent=!0}}]);