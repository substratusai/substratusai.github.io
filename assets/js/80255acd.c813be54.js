"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[279],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5765:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905)),r=o(2719);const i={slug:"introducing-kubectl-notebook",title:"Introducing: kubectl notebook",authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4"}],image:"/img/kubectl-notebook-cmd.small.png",tags:["introduction","feature"]},l=void 0,s={permalink:"/blog/introducing-kubectl-notebook",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-22-introducing-kubectl-notebook.md",source:"@site/blog/2023-08-22-introducing-kubectl-notebook.md",title:"Introducing: kubectl notebook",description:"Substratus has added the kubectl notebook command!",date:"2023-08-22T00:00:00.000Z",formattedDate:"August 22, 2023",tags:[{label:"introduction",permalink:"/blog/tags/introduction"},{label:"feature",permalink:"/blog/tags/feature"}],readingTime:2.13,hasTruncateMarker:!1,authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4",imageURL:"https://avatars.githubusercontent.com/u/10274189?v=4"}],frontMatter:{slug:"introducing-kubectl-notebook",title:"Introducing: kubectl notebook",authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4",imageURL:"https://avatars.githubusercontent.com/u/10274189?v=4"}],image:"/img/kubectl-notebook-cmd.small.png",tags:["introduction","feature"]},prevItem:{title:"A Kind Local Llama on K8s",permalink:"/blog/kind-local-llama-on-rtx-2060"},nextItem:{title:"Tutorial: Llama2 70b serving on GKE",permalink:"/blog/tutorial-llama2-70b-serving-gke"}},u={authorsImageUrls:[void 0]},c=[{value:"Design Goals",id:"design-goals",level:2},{value:"Implementation",id:"implementation",level:2},{value:"More to come!",id:"more-to-come",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/kubectl-notebook-cmd.png",alt:"kubectl notebook",width:"100%"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus"},"Substratus")," has added the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl notebook")," command!"),(0,a.kt)("blockquote",null,'"Wouldn\'t it be nice to have a single command that containerized your local directory and served it as a Jupyter Notebook running on a machine with a bunch of GPUs attached?"'),(0,a.kt)("p",null,"The conversation went something like that while we daydreamed about our preferred workflow. At that point in time we were hopping back-n-forth between Google Colab and our containers while developing a LLM training job."),(0,a.kt)("blockquote",null,'"Annnddd it should automatically sync file-changes back to your local directory so that you can commit your changes to git and kick off a long-running ML training job - containerized with the exact same python version and packages!"'),(0,a.kt)("p",null,"So we built it!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl notebook -d .\n")),(0,a.kt)("p",null,"And now it has become an integral part of our workflow as we build out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus"},"Substratus ML platform"),"."),(0,a.kt)("p",null,"Check out the 50 second screenshare:"),(0,a.kt)("div",{class:"video-container"},(0,a.kt)("iframe",{class:"video",src:"https://www.youtube-nocookie.com/embed/0_PWl6vjqdE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,a.kt)("h2",{id:"design-goals"},"Design Goals"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"One command should build, launch, and sync the Notebook."),(0,a.kt)("li",{parentName:"ol"},"Users should only need a Kubeconfig - no other credentials."),(0,a.kt)("li",{parentName:"ol"},"Admins should not need to setup networking, TLS, etc.")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"We tackled our design goals using the following techniques:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Implemented as a single Go binary, executed as a ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/"},"kubectl plugin"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/signed-urls"},"Signed URLs")," allow for users to upload their local directory to a bucket without requiring cloud credentials (Similar to how popular consumer clouds function)."),(0,a.kt)("li",{parentName:"ol"},"Kubernetes ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/"},"port-forwarding")," allows for serving remote notebooks without requiring admins to deal with networking / TLS concerns. It also leans on existing Kubernetes RBAC for access control.")),(0,a.kt)("p",null,"Some interesting details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Builds are executed remotely for two reasons:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users don't need to install docker."),(0,a.kt)("li",{parentName:"ul"},"It avoids pushing massive container images from one's local machine (pip installs often inflate the final docker image to be much larger than the build context itself)."))),(0,a.kt)("li",{parentName:"ul"},"The client requests an upload URL by specifying the MD5 hash it wishes to upload - allowing for server-side signature verification."),(0,a.kt)("li",{parentName:"ul"},"Builds are skipped entirely if the MD5 hash of the build context already exists in the bucket.")),(0,a.kt)("p",null,"The system underneath the ",(0,a.kt)("inlineCode",{parentName:"p"},"notebook")," command:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"diagram",src:o(9734).Z,width:"773",height:"1536"})),(0,a.kt)("h2",{id:"more-to-come"},"More to come!"),(0,a.kt)("p",null,"Lazy-loading large models from disk...\nIncremental dataset loading...\nStay tuned to learn more about how Notebooks on Substratus can speed up your ML workflows."),(0,a.kt)("p",null,"Don't forget to star and follow the repo!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus"},"https://github.com/substratusai/substratus")),(0,a.kt)(r.Z,{href:"https://github.com/substratusai/substratus","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star substratusai/substratus on GitHub",mdxType:"GitHubButton"},"Star"))}m.isMDXComponent=!0},9734:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/kubectl-notebook.excalidraw-c10c014aec5fc834c0c9f5c2d4ee10d0.png"}}]);