"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[5927],{2589:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=s(5893),n=s(1151);const i={sidebar_position:5},o="Architecture",a={id:"architecture",title:"Architecture",description:"Substratus is architected as an extension of the Kubernetes control plane. Substratus orchestrates Machine Learning workloads (data loader jobs, model training jobs, inference servers) using the Operator Pattern. The Substratus operator is a standalone system that can be installed into existing Kubernetes clusters.",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/architecture.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Guides",permalink:"/docs/category/guides"}},c={},u=[{value:"Networking",id:"networking",level:3},{value:"Storage",id:"storage",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Requirements for Advanced Features",id:"requirements-for-advanced-features",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsxs)(t.p,{children:["Substratus is architected as an extension of the Kubernetes control plane. Substratus orchestrates Machine Learning workloads (data loader jobs, model training jobs, inference servers) using the ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"Operator Pattern"}),". The Substratus operator is a standalone system that can be installed into existing Kubernetes clusters."]}),"\n",(0,r.jsx)("img",{src:"/img/diagrams/architecture.excalidraw.png"}),"\n",(0,r.jsx)(t.h3,{id:"networking",children:"Networking"}),"\n",(0,r.jsx)(t.p,{children:"Substratus only requires that users have access to the Kubernetes API server."}),"\n",(0,r.jsx)(t.p,{children:"Substratus relies on built-in Kubernetes port-forwarding (simplified via a Substratus kubectl plugin) to serve Jupyter Notebooks. This means that administrators do not need to manage application TLS certificates, networking ingress paths, or application-specific firewall rules."}),"\n",(0,r.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,r.jsx)(t.p,{children:"Substratus depends on a single cloud bucket for storage (S3 on AWS or GCS on GCP)."}),"\n",(0,r.jsx)(t.h3,{id:"access-control",children:"Access Control"}),"\n",(0,r.jsxs)(t.p,{children:["Substratus resources are Kubernetes resources. This means that multi-tenancy is supported out of the box via Kubernetes ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"Namespaces"})," and granular access rules can be defined using standard Kubernetes ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"Roles and RoleBindings"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"requirements-for-advanced-features",children:"Requirements for Advanced Features"}),"\n",(0,r.jsx)(t.p,{children:"While not required, Substratus can provide a more advanced set features when the following access is granted to the Substratus system:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Write Access to Container Registry:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Unlocks deployments directly from Git (removing the need for external CI/CD pipelines)."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"In Conjunction with Signed URL Access on Buckets:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Unlocks client-triggered directory uploads for remote building and deployment."}),"\n",(0,r.jsx)(t.li,{children:"Unlocks the on-demand launching of remote containerized notebooks from local directories."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more info on signed URLs see the ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/access-control/signed-urls",children:"GCS"})," or ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",children:"S3"})," docs."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If your company does not permit signed URLs give ",(0,r.jsx)(t.a,{href:"https://github.com/substratusai/substratus/issues/195",children:"GitHub Issue #195"})," an upvote to have a workaround developed."]})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var r=s(7294);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);