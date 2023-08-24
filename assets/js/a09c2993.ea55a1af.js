"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[4128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1,slug:"/"},i="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Substratus is a cross-cloud substrate for training and serving ML models. Substratus extends the Kubernetes control plane to orchestrate ML operations through the addition of new API endpoints: Model, Server, Dataset, and Notebook.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/docs/category/quickstart"}},u={},l=[{value:"Why Substratus?",id:"why-substratus",level:2},{value:"Intro Video (under 2 minutes)",id:"intro-video-under-2-minutes",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Substratus is a cross-cloud substrate for training and serving ML models. Substratus extends the Kubernetes control plane to orchestrate ML operations through the addition of new API endpoints: Model, Server, Dataset, and Notebook."),(0,o.kt)("h2",{id:"why-substratus"},"Why Substratus?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fine-tune and deploy OSS LLMs with no code required and built-in optimizations."),(0,o.kt)("li",{parentName:"ul"},"Launch remote Jupyter notebooks with a single command."),(0,o.kt)("li",{parentName:"ul"},"Run anywhere Kubernetes runs."),(0,o.kt)("li",{parentName:"ul"},"Install with minimal dependencies (a bucket and container registry)."),(0,o.kt)("li",{parentName:"ul"},"Keep your data inside your network."),(0,o.kt)("li",{parentName:"ul"},"Scale to zero (save on GPU costs)."),(0,o.kt)("li",{parentName:"ul"},"Create reproducible environments using containers."),(0,o.kt)("li",{parentName:"ul"},"Leverage GitOps out of the box.")),(0,o.kt)("h2",{id:"intro-video-under-2-minutes"},"Intro Video (under 2 minutes)"),(0,o.kt)("div",{class:"video-container"},(0,o.kt)("iframe",{class:"video",src:"https://www.youtube-nocookie.com/embed/CLyXKJHIQ6A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview"},"Overview section")," or jump straight into the ",(0,o.kt)("a",{parentName:"p",href:"./category/quickstart/"},"Quickstart guide"),"."),(0,o.kt)("p",null,"Don't forget to star the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus"},"GitHub repo")," and request the features you would like to see!"),(0,o.kt)("p",null,"Note: Substratus might still introduce backward incompatible changes to the APIs until v1.0 is released."))}d.isMDXComponent=!0}}]);