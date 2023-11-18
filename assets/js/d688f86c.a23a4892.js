"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[2266],{6961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(5893),s=n(1151),i=n(2719);const a={slug:"introducing-kubectl-notebook",title:"Introducing: kubectl notebook",authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4"}],image:"/img/kubectl-notebook-cmd.small.png",tags:["introduction","feature"]},r=void 0,l={permalink:"/blog/introducing-kubectl-notebook",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-22-introducing-kubectl-notebook.md",source:"@site/blog/2023-08-22-introducing-kubectl-notebook.md",title:"Introducing: kubectl notebook",description:"Substratus has added the kubectl notebook command!",date:"2023-08-22T00:00:00.000Z",formattedDate:"August 22, 2023",tags:[{label:"introduction",permalink:"/blog/tags/introduction"},{label:"feature",permalink:"/blog/tags/feature"}],readingTime:2.13,hasTruncateMarker:!1,authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4",imageURL:"https://avatars.githubusercontent.com/u/10274189?v=4"}],frontMatter:{slug:"introducing-kubectl-notebook",title:"Introducing: kubectl notebook",authors:[{name:"Nick Stogner",title:"Engineer",url:"https://github.com/nstogner",image_url:"https://avatars.githubusercontent.com/u/10274189?v=4",imageURL:"https://avatars.githubusercontent.com/u/10274189?v=4"}],image:"/img/kubectl-notebook-cmd.small.png",tags:["introduction","feature"]},unlisted:!1,prevItem:{title:"A Kind Local Llama on K8s",permalink:"/blog/kind-local-llama-on-rtx-2060"},nextItem:{title:"Tutorial: Llama2 70b serving on GKE",permalink:"/blog/tutorial-llama2-70b-serving-gke"}},c={authorsImageUrls:[void 0]},u=[{value:"Design Goals",id:"design-goals",level:2},{value:"Implementation",id:"implementation",level:2},{value:"More to come!",id:"more-to-come",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/kubectl-notebook-cmd.png",alt:"kubectl notebook",width:"100%"}),"\n","\n","\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/substratusai/substratus",children:"Substratus"})," has added the ",(0,o.jsx)(t.code,{children:"kubectl notebook"})," command!"]}),"\n",(0,o.jsx)("blockquote",{children:(0,o.jsx)(t.p,{children:'"Wouldn\'t it be nice to have a single command that containerized your local directory and served it as a Jupyter Notebook running on a machine with a bunch of GPUs attached?"'})}),"\n",(0,o.jsx)(t.p,{children:"The conversation went something like that while we daydreamed about our preferred workflow. At that point in time we were hopping back-n-forth between Google Colab and our containers while developing a LLM training job."}),"\n",(0,o.jsx)("blockquote",{children:(0,o.jsx)(t.p,{children:'"Annnddd it should automatically sync file-changes back to your local directory so that you can commit your changes to git and kick off a long-running ML training job - containerized with the exact same python version and packages!"'})}),"\n",(0,o.jsx)(t.p,{children:"So we built it!"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"kubectl notebook -d .\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And now it has become an integral part of our workflow as we build out the ",(0,o.jsx)(t.a,{href:"https://github.com/substratusai/substratus",children:"Substratus ML platform"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Check out the 50 second screenshare:"}),"\n",(0,o.jsx)("div",{class:"video-container",children:(0,o.jsx)("iframe",{class:"video",src:"https://www.youtube-nocookie.com/embed/0_PWl6vjqdE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,o.jsx)(t.h2,{id:"design-goals",children:"Design Goals"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"One command should build, launch, and sync the Notebook."}),"\n",(0,o.jsx)(t.li,{children:"Users should only need a Kubeconfig - no other credentials."}),"\n",(0,o.jsx)(t.li,{children:"Admins should not need to setup networking, TLS, etc."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.p,{children:"We tackled our design goals using the following techniques:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Implemented as a single Go binary, executed as a ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/",children:"kubectl plugin"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/access-control/signed-urls",children:"Signed URLs"})," allow for users to upload their local directory to a bucket without requiring cloud credentials (Similar to how popular consumer clouds function)."]}),"\n",(0,o.jsxs)(t.li,{children:["Kubernetes ",(0,o.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/",children:"port-forwarding"})," allows for serving remote notebooks without requiring admins to deal with networking / TLS concerns. It also leans on existing Kubernetes RBAC for access control."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Some interesting details:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Builds are executed remotely for two reasons:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Users don't need to install docker."}),"\n",(0,o.jsx)(t.li,{children:"It avoids pushing massive container images from one's local machine (pip installs often inflate the final docker image to be much larger than the build context itself)."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"The client requests an upload URL by specifying the MD5 hash it wishes to upload - allowing for server-side signature verification."}),"\n",(0,o.jsx)(t.li,{children:"Builds are skipped entirely if the MD5 hash of the build context already exists in the bucket."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The system underneath the ",(0,o.jsx)(t.code,{children:"notebook"})," command:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"diagram",src:n(9734).Z+"",width:"773",height:"1536"})}),"\n",(0,o.jsx)(t.h2,{id:"more-to-come",children:"More to come!"}),"\n",(0,o.jsx)(t.p,{children:"Lazy-loading large models from disk...\nIncremental dataset loading...\nStay tuned to learn more about how Notebooks on Substratus can speed up your ML workflows."}),"\n",(0,o.jsx)(t.p,{children:"Don't forget to star and follow the repo!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/substratusai/substratus",children:"https://github.com/substratusai/substratus"})}),"\n",(0,o.jsx)(i.Z,{href:"https://github.com/substratusai/substratus","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star substratusai/substratus on GitHub",children:"Star"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9734:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubectl-notebook.excalidraw-c10c014aec5fc834c0c9f5c2d4ee10d0.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);