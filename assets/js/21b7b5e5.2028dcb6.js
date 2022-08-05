"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[3594],{8569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"REST API",description:"Supported REST calls"},i=void 0,l={unversionedId:"features/rest",id:"features/rest",title:"REST API",description:"Supported REST calls",source:"@site/docs/features/rest.mdx",sourceDirName:"features",slug:"/features/rest",permalink:"/docs/features/rest",draft:!1,editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/features/rest.mdx",tags:[],version:"current",frontMatter:{title:"REST API",description:"Supported REST calls"},sidebar:"tutorialSidebar",previous:{title:"Juno Metrics",permalink:"/docs/features/metrics"},next:{title:"RPC Server",permalink:"/docs/features/rpc"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At time of writing our REST API makes calls to the feeder_gateway using the feeder package."),(0,a.kt)("p",null,"The REST Api Getaway can be queried against these endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Goerli: ",(0,a.kt)("a",{parentName:"li",href:"http://alpha4.starknet.io"},"http://alpha4.starknet.io")),(0,a.kt)("li",{parentName:"ul"},"MainNet: ",(0,a.kt)("a",{parentName:"li",href:"https://alpha-mainnet.starknet.io"},"https://alpha-mainnet.starknet.io"))),(0,a.kt)("p",null,"At time of writing, we support the following REST functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get_contract_addresses"),(0,a.kt)("li",{parentName:"ul"},"get_block"),(0,a.kt)("li",{parentName:"ul"},"get_state_update"),(0,a.kt)("li",{parentName:"ul"},"get_code"),(0,a.kt)("li",{parentName:"ul"},"get_full_contract"),(0,a.kt)("li",{parentName:"ul"},"get_storage_at"),(0,a.kt)("li",{parentName:"ul"},"get_transaction_status"),(0,a.kt)("li",{parentName:"ul"},"get_transaction"),(0,a.kt)("li",{parentName:"ul"},"get_transaction_receipt"),(0,a.kt)("li",{parentName:"ul"},"get_block_hash_by_id"),(0,a.kt)("li",{parentName:"ul"},"get_block_id_by_hash"),(0,a.kt)("li",{parentName:"ul"},"get_transaction_hash_by_id"),(0,a.kt)("li",{parentName:"ul"},"get_transaction_id_by_hash")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);