"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[9154],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,r=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(a),h=s,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[p]="string"==typeof t?t:s,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6412:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905)),r=a(2719);const l={slug:"k8s-yaml-dataset",title:"The K8s YAML dataset",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["k8s","yaml","dataset"]},o=void 0,i={permalink:"/blog/k8s-yaml-dataset",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-10-09-k8s-yaml-dataset.md",source:"@site/blog/2023-10-09-k8s-yaml-dataset.md",title:"The K8s YAML dataset",description:"Excited to announce the K8s YAML dataset containing",date:"2023-10-09T00:00:00.000Z",formattedDate:"October 9, 2023",tags:[{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"yaml",permalink:"/blog/tags/yaml"},{label:"dataset",permalink:"/blog/tags/dataset"}],readingTime:2.205,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],frontMatter:{slug:"k8s-yaml-dataset",title:"The K8s YAML dataset",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["k8s","yaml","dataset"]},nextItem:{title:"Tutorial: K8s Kind with GPUs",permalink:"/blog/kind-with-gpus"}},u={authorsImageUrls:[void 0]},c=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:c},d="wrapper";function h(t){let{components:e,...a}=t;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Excited to announce the K8s YAML dataset containing\n276,520 valid K8s YAML files."),(0,s.kt)("p",null,"HuggingFace Dataset: ",(0,s.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets/substratusai/the-stack-yaml-k8s"},"https://huggingface.co/datasets/substratusai/the-stack-yaml-k8s"),(0,s.kt)("br",{parentName:"p"}),"\n","Source code: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/substratusai/the-stack-yaml-k8s"},"https://github.com/substratusai/the-stack-yaml-k8s")),(0,s.kt)("h2",{id:"why"},"Why?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This dataset can be used to fine-tune an LLM directly"),(0,s.kt)("li",{parentName:"ul"},"New datasets can be created from his dataset such as an K8s instruct dataset (coming soon!)"),(0,s.kt)("li",{parentName:"ul"},"What's your use case?")),(0,s.kt)("h2",{id:"how"},"How?"),(0,s.kt)("p",null,"Getting a lot of K8s YAML manifests wasn't easy. My initial approach\nwas to use the Kubernetes website and scrape the YAML example files,\nhowever the issue was the quantity since I could only scrape\nabout ~250 YAML examples that way."),(0,s.kt)("p",null,"Luckily, I came across ",(0,s.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets/bigcode/the-stack"},"the-stack")," dataset\nwhich is a cleaned dataset of code on GitHub. The dataset is nicely structured by language\nand I noticed that ",(0,s.kt)("inlineCode",{parentName:"p"},"yaml")," was one of the languages in the dataset."),(0,s.kt)("p",null,"Install libraries used in this blog post:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install datasets kubernetes-validate\n")),(0,s.kt)("p",null,"Let's load the ",(0,s.kt)("inlineCode",{parentName:"p"},"the-stack")," dataset but only the YAML files (takes about 200GB of disk space):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from datasets import load_dataset\nds = load_dataset("bigcode/the-stack", data_dir="data/yaml", split="train")\n')),(0,s.kt)("p",null,"Once loaded there are 13,439,939 YAML files in ",(0,s.kt)("inlineCode",{parentName:"p"},"ds"),"."),(0,s.kt)("p",null,"You can check the content of one of the files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'print(ds[0]["content"])\n')),(0,s.kt)("p",null,"You probably notice that this ain't a K8s YAML file, so next we need to filter\nthese 13 million YAML files and only keep the one that have valid K8 YAML."),(0,s.kt)("p",null,'The approach I took was to use the kubernetes-validate OSS library. It turned out\nthat YAML parsing was extremely slow so I added a 10x speed improvement\nby eagerly checking if "Kind or "kind" is not a substring in the YAML file.'),(0,s.kt)("p",null,"Here is the validate function that takes the yaml_content as a string and\nreturns if the content was valid K8s YAML or not:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import kubernetes_validate\nimport yaml\n\ndef validate(yaml_content: str):\n    try:\n        # Speed optimization to return early without having to load YAML\n        if "kind" not in yaml_content and "Kind" not in yaml_content:\n            return False\n        data = yaml.safe_load(yaml_content)\n        kubernetes_validate.validate(data, \'1.22\', strict=True)\n        return True\n    except Exception as e:\n        return False\n\nvalidate(ds[0]["content"])\n')),(0,s.kt)("p",null,"Now all that's needed is to filter out all YAML files that aren't valid:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os\nos.cpu_count()\nvalid_k8s = ds.filter(lambda batch: [validate(x) for x in batch["content"]],\n                      num_proc=os.cpu_count(), batched=True)\n')),(0,s.kt)("p",null,"There were 276,520 YAML files left in ",(0,s.kt)("inlineCode",{parentName:"p"},"valid_k8s"),". You can print one again to see:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'print(valid_k8s[0]["content"])\n')),(0,s.kt)("p",null,"You can upload the dataset back to HuggingFace by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'valid_k8s.push_to_hub("substratusai/the-stack-yaml-k8s")\n')),(0,s.kt)("h2",{id:"whats-next"},"What's next?"),(0,s.kt)("p",null,"Creating a new dataset called K8s Instruct that also provides a prompt for each YAML file."),(0,s.kt)("p",null,"Support the project by adding a star on GitHub! \u2764\ufe0f"),(0,s.kt)(r.Z,{href:"https://github.com/substratusai/substratus","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star substratusai/substratus on GitHub",mdxType:"GitHubButton"},"Star"))}h.isMDXComponent=!0}}]);