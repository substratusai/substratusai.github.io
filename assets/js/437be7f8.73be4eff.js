"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[5081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,d=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?a.createElement(d,r(r({ref:t},g),{},{components:n})):a.createElement(d,r({ref:t},g))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>g});var a=n(7462),l=(n(7294),n(3905)),o=n(2719);const r={slug:"converting-hf-model-gguf-model",title:"Converting HuggingFace Models to GGUF/GGML",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["llama.cpp","gguf"]},i=void 0,u={permalink:"/blog/converting-hf-model-gguf-model",editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/blog/2023-08-31-converting-hf-model-to-gguf-model.md",source:"@site/blog/2023-08-31-converting-hf-model-to-gguf-model.md",title:"Converting HuggingFace Models to GGUF/GGML",description:"Llama.cpp is a great way to run LLMs efficiently on CPUs and GPUs. The downside",date:"2023-08-31T00:00:00.000Z",formattedDate:"August 31, 2023",tags:[{label:"llama.cpp",permalink:"/blog/tags/llama-cpp"},{label:"gguf",permalink:"/blog/tags/gguf"}],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],frontMatter:{slug:"converting-hf-model-gguf-model",title:"Converting HuggingFace Models to GGUF/GGML",authors:[{name:"Sam Stoelinga",title:"Engineer",url:"https://github.com/samos123"}],tags:["llama.cpp","gguf"]},nextItem:{title:"A Kind Local Llama on K8s",permalink:"/blog/kind-local-llama-on-rtx-2060"}},p={authorsImageUrls:[void 0]},g=[{value:"Downloading a HuggingFace model",id:"downloading-a-huggingface-model",level:3},{value:"Converting the model",id:"converting-the-model",level:3},{value:"Pushing the GGUF model to HuggingFace",id:"pushing-the-gguf-model-to-huggingface",level:3}],s={toc:g},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Llama.cpp is a great way to run LLMs efficiently on CPUs and GPUs. The downside\nhowever is that you need to convert models to a format that's supported by Llama.cpp,\nwhich is now the GGUF file format.  In this blog post you will learn how to convert\na HuggingFace model (Vicuna 13b v1.5) to GGUF model."),(0,l.kt)("p",null,"At the time of writing, Llama.cpp supports\nthe following models:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LLaMA \ud83e\udd99"),(0,l.kt)("li",{parentName:"ul"},"LLaMA 2 \ud83e\udd99\ud83e\udd99"),(0,l.kt)("li",{parentName:"ul"},"Falcon"),(0,l.kt)("li",{parentName:"ul"},"Alpaca"),(0,l.kt)("li",{parentName:"ul"},"GPT4All"),(0,l.kt)("li",{parentName:"ul"},"Chinese LLaMA / Alpaca and Chinese LLaMA-2 / Alpaca-2"),(0,l.kt)("li",{parentName:"ul"},"Vigogne (French)"),(0,l.kt)("li",{parentName:"ul"},"Vicuna"),(0,l.kt)("li",{parentName:"ul"},"Koala"),(0,l.kt)("li",{parentName:"ul"},"OpenBuddy \ud83d\udc36 (Multilingual)"),(0,l.kt)("li",{parentName:"ul"},"Pygmalion 7B / Metharme 7B"),(0,l.kt)("li",{parentName:"ul"},"WizardLM"),(0,l.kt)("li",{parentName:"ul"},"Baichuan-7B and its derivations (such as baichuan-7b-sft)"),(0,l.kt)("li",{parentName:"ul"},"Aquila-7B / AquilaChat-7B")),(0,l.kt)("p",null,"At a high-level you will be going through the following steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Downloading a HuggingFace model"),(0,l.kt)("li",{parentName:"ul"},"Running llama.cpp ",(0,l.kt)("inlineCode",{parentName:"li"},"convert.py")," on the HuggingFace model"),(0,l.kt)("li",{parentName:"ul"},"(Optionally) Uploading the model back to HuggingFace")),(0,l.kt)("h3",{id:"downloading-a-huggingface-model"},"Downloading a HuggingFace model"),(0,l.kt)("p",null,"There are various ways to download models, but in my experience the ",(0,l.kt)("inlineCode",{parentName:"p"},"huggingface_hub"),"\nlibrary has been the most reliable. The ",(0,l.kt)("inlineCode",{parentName:"p"},"git clone")," method occasionally results in\nOOM errors for large models."),(0,l.kt)("p",null,"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"huggingface_hub")," library:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install huggingface_hub\n")),(0,l.kt)("p",null,"Create a Python script named ",(0,l.kt)("inlineCode",{parentName:"p"},"download.py")," with the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from huggingface_hub import snapshot_download\nmodel_id="lmsys/vicuna-13b-v1.5"\nsnapshot_download(repo_id=model_id, local_dir="vicuna-hf",\n                  local_dir_use_symlinks=False, revision="main")\n')),(0,l.kt)("p",null,"Run the Python script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python download.py\n")),(0,l.kt)("p",null,"You should now have the model downloaded to a directory called\n",(0,l.kt)("inlineCode",{parentName:"p"},"vicuna-hf"),". Verify by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lash vicuna-hf\n")),(0,l.kt)("h3",{id:"converting-the-model"},"Converting the model"),(0,l.kt)("p",null,"Now it's time to convert the downloaded HuggingFace model to a GGUF model.\nLlama.cpp comes with a converter script to do this."),(0,l.kt)("p",null,"Get the script by cloning the llama.cpp repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ggerganov/llama.cpp.git\n")),(0,l.kt)("p",null,"Install the required python libraries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r llama.cpp/requirements.txt\n")),(0,l.kt)("p",null,"Verify the script is there and understand the various options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python llama.cpp/convert.py -h\n")),(0,l.kt)("p",null,"Convert the HF model to GGUF model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python llama.cpp/convert.py vicuna-hf \\\n  --outfile vicuna-13b-v1.5.gguf \\\n  --outtype q8_0\n")),(0,l.kt)("p",null,"Verify the GGUF model was created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lash vicuna-13b-v1.5.gguf\n")),(0,l.kt)("h3",{id:"pushing-the-gguf-model-to-huggingface"},"Pushing the GGUF model to HuggingFace"),(0,l.kt)("p",null,"You can optionally push back the GGUF model to HuggingFace."),(0,l.kt)("p",null,"Create a Python script with the filename ",(0,l.kt)("inlineCode",{parentName:"p"},"upload.py")," that\nhas the following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from huggingface_hub import HfApi\napi = HfApi()\n\nmodel_id = "substratusai/vicuna-13b-v1.5-gguf"\napi.create_repo(model_id, exist_ok=True, repo_type=model_id)\napi.upload_file(\n    path_or_fileobj="vicuna-13b-v1.5.gguf",\n    path_in_repo="vicuna-13b-v1.5.gguf",\n    repo_id=model_id,\n)\n')),(0,l.kt)("p",null,"Get a HuggingFace Token that has write permission from here:\n",(0,l.kt)("a",{parentName:"p",href:"https://huggingface.co/settings/tokens"},"https://huggingface.co/settings/tokens")),(0,l.kt)("p",null,"Set your HuggingFace token:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export HUGGING_FACE_HUB_TOKEN=<paste-your-own-token>\n")),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"upload.py")," script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python upload.py\n")),(0,l.kt)("p",null,"Interested in learning how to automate flows like this? Checkout our\nopen source project:"),(0,l.kt)(o.Z,{href:"https://github.com/substratusai/substratus","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star substratusai/substratus on GitHub",mdxType:"GitHubButton"},"Star"))}m.isMDXComponent=!0}}]);