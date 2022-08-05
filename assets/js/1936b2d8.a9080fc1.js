"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[8579],{581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"junopi",title:"Running Juno from your Raspberry Pi",authors:["depablos","maceo"],tags:["juno","rpi","raspberry","pi","deploy"]},l=void 0,i={permalink:"/blog/junopi",editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/blog/2022-06-24-junopi/index.mdx",source:"@site/blog/2022-06-24-junopi/index.mdx",title:"Running Juno from your Raspberry Pi",description:"Juno is a node which aims to help decentralise StarkNet, a prominent Ethereum Layer 2.",date:"2022-06-24T00:00:00.000Z",formattedDate:"June 24, 2022",tags:[{label:"juno",permalink:"/blog/tags/juno"},{label:"rpi",permalink:"/blog/tags/rpi"},{label:"raspberry",permalink:"/blog/tags/raspberry"},{label:"pi",permalink:"/blog/tags/pi"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:2.76,hasTruncateMarker:!1,authors:[{name:"Diego de Pablos",title:"Intern at Juno",url:"https://github.com/D-DePablos",imageURL:"https://github.com/D-DePablos.png",key:"depablos"},{name:"Marcos Maceo",title:"Tech Lead of Juno",url:"https://github.com/stdevMac",imageURL:"https://github.com/stdevMac.png",key:"maceo"}],frontMatter:{slug:"junopi",title:"Running Juno from your Raspberry Pi",authors:["depablos","maceo"],tags:["juno","rpi","raspberry","pi","deploy"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Disclaimer",id:"disclaimer",level:3},{value:"Main Features",id:"main-features",level:2},{value:"Installation",id:"installation",level:2},{value:"Specification \ud83e\udd16",id:"specification-",level:3},{value:"Get Golang \ud83e\uddab",id:"get-golang-",level:3},{value:"Install Juno \u2699\ufe0f",id:"install-juno-\ufe0f",level:3},{value:"Configuring juno",id:"configuring-juno",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Juno is a node which aims to help ",(0,r.kt)("strong",{parentName:"p"},"decentralise StarkNet, a prominent Ethereum Layer 2"),"."),(0,r.kt)("p",null,"For its mission to be achieved, it needs people to ",(0,r.kt)("strong",{parentName:"p"},"start running their own node"),"."),(0,r.kt)("p",null,"To become one of the early few making StarkNet better, read below."),(0,r.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"In this short article we lay out the steps to get a Raspberry PI with a working ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspbian.org/"},"Raspbian"),"\ninstallation to run the Juno StarkNet node. We assume that you have access as a root user to the Pi."),(0,r.kt)("p",null,"At time of writing, ",(0,r.kt)("strong",{parentName:"p"},"both StarkNet and Juno are still in an early release"),". Expect this guide and required steps to change often!"),(0,r.kt)("p",null,"For the latest on the project, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/juno"},"Github repo"),", and refer to our\n",(0,r.kt)("a",{parentName:"p",href:"https://gojuno.xyz/"},"Documentation"),"."),(0,r.kt)("p",null,"The disk space issues are currently work in progress, and will be addressed in an upcoming new release."),(0,r.kt)("h2",{id:"main-features"},"Main Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/sync"},"Get and Sync state from Layer 1")," (Ethereum)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/sync"},"Get and Sync state from API")," (Feeder Gateway)."),(0,r.kt)("li",{parentName:"ul"},"Store ",(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/sync"},"StarkNet State")," locally."),(0,r.kt)("li",{parentName:"ul"},"Store StarkNet Transactions."),(0,r.kt)("li",{parentName:"ul"},"Store StarkNet Blocks."),(0,r.kt)("li",{parentName:"ul"},"Store the ABI of StarkNet contracts."),(0,r.kt)("li",{parentName:"ul"},"Ethereum-like ",(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/rpc"},"Json RPC Server")," following\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json"},"this spec"),".\nin the same way you would call the feeder gateway, where using the same params will return the same response."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/cli"},"CLI")," for general StarkNet tools."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gojuno.xyz/docs/features/metrics"},"Metrics")," using Prometheus.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"specification-"},"Specification \ud83e\udd16"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Raspberry 4 (model B) - 4GB\n- MicroSD card - 16GB+ (Class 10 Minimum)\n- Power supply\n- Internet connection (ethernet preferrable)\n- USB keyboard, a monitor, and an HDMI cable to interact with the computer or .\n\n- [Install Raspbian](https://www.raspbian.org/)\n- [Install Golang (see below)](https://golang.org/doc/install)\n- [Have make installed](https://golang.org/doc/install#make)\n")),(0,r.kt)("h3",{id:"get-golang-"},"Get Golang \ud83e\uddab"),(0,r.kt)("p",null,"Ensure that your Raspberry Pi is up-to-date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt full-upgrade\n")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"Golang download website")," for the latest armv6l version. At time of writing, we would download go 1.18.3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://go.dev/dl/go1.18.3.linux-armv6l.tar.gz -O go.tar.gz\n")),(0,r.kt)("p",null,"Now extract the tarball into your /usr/local/ directory (root access required)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tar -C /usr/local -xzf go.tar.gz\n")),(0,r.kt)("p",null,"Add the following to your shell config (usually ~/.bashrc).\nIf you have no preferred text editor, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"nano ~/.bashrc")," to edit your bash config from the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.bashrc\nexport GOPATH=$HOME/go\nexport PATH=/usr/local/go/bin:$PATH:$GOPATH/bin\n")),(0,r.kt)("p",null,"Afterwards press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," to exit the nano text editor and save the file."),(0,r.kt)("p",null,"Finally, as your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," is only initialised when the shell is started, you need to source the new ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," to update available commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,r.kt)("p",null,"You should now have a working Golang installation in your Raspberry Pi. You can check it typing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go version\n")),(0,r.kt)("h3",{id:"install-juno-\ufe0f"},"Install Juno \u2699\ufe0f"),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"juno"),", the StarkNet node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/NethermindEth/juno/cmd/juno@latest\n")),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"juno-cli"),", the separate tool for interacting with StarkNet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/NethermindEth/juno/cmd/juno-cli@latest\n")),(0,r.kt)("p",null,"For details about the configuration you can look at\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://gojuno.xyz/docs/running/config"},"config file description"),"."),(0,r.kt)("h2",{id:"configuring-juno"},"Configuring juno"),(0,r.kt)("p",null,"Usually, when you first run Juno, a ",(0,r.kt)("a",{parentName:"p",href:"https://gojuno.xyz/docs/running/config"},"config file")," will be created in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/home/pi/.config/juno/juno.yaml")," in your home directory."),(0,r.kt)("p",null,"When syncing the StarkNet state from a Raspberry Pi, we expect you to have at least 64GB. In case of you don't have\nthis space, you can run it using an SSD, ensuring that the property ",(0,r.kt)("inlineCode",{parentName:"p"},"db_path")," points to the external SSD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# juno.yaml\ndb_path: /path/to/ssd/database/here\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);