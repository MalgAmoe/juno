"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[1538],{6074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={title:"Config File",position:2},o="Change config once created:",l={unversionedId:"running/config",id:"running/config",title:"Config File",description:"To quickly edit the configuration file, you can use the following command:",source:"@site/docs/running/config.mdx",sourceDirName:"running",slug:"/running/config",permalink:"/docs/running/config",draft:!1,editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/running/config.mdx",tags:[],version:"current",frontMatter:{title:"Config File",position:2},sidebar:"tutorialSidebar",previous:{title:"Running",permalink:"/docs/category/running"},next:{title:"Docker Execution",permalink:"/docs/running/docker"}},u={},d=[{value:"Params",id:"params",level:2},{value:"logger",id:"logger",level:3},{value:"ethereum",id:"ethereum",level:3},{value:"rpc",id:"rpc",level:3},{value:"rest",id:"rest",level:3},{value:"metrics",id:"metrics",level:3},{value:"db_path",id:"db_path",level:3},{value:"starknet",id:"starknet",level:3}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"change-config-once-created"},"Change config once created:"),(0,a.kt)("p",null,"To quickly edit the configuration file, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./build/juno configure\n")),(0,a.kt)("p",null,"Which will open a Terminal User Interface displaying your current configuration values and allowing you to change them."),(0,a.kt)("h1",{id:"about-junoyaml"},"About juno.yaml"),(0,a.kt)("p",null,"The config file for ",(0,a.kt)("inlineCode",{parentName:"p"},"Juno")," represents all settings needed to handle all supported functionalities for\nnode execution."),(0,a.kt)("p",null,"The basic structure is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'logger:\n  verbosity_level: "debug"\n  enable_json_output: true\nethereum:\n  node: "you_node_here"\nrpc:\n  enabled: false\n  port: 8080\nrest:\n  enabled: false\n  port: 8100\n  prefix: /feeder_gateway\nmetrics:\n  enabled: true\n  port: 8100\ndb_path: /path/to/database\nstarknet:\n  enabled: true\n  feeder_gateway: https://alpha-mainnet.starknet.io\n  api_sync: true\n  network: mainnet\n')),(0,a.kt)("h2",{id:"params"},"Params"),(0,a.kt)("h3",{id:"logger"},"logger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verbosity_level"),": set the verbosity level of the node. Accepted values are an extension of zapcore.Level (debug, info, warn, error, dpanic, panic, fatal)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enable_json_output"),": enable the log output to be in JSON format.")),(0,a.kt)("h3",{id:"ethereum"},"ethereum"),(0,a.kt)("p",null,"Configuration of the Ethereum node."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node"),": put the address to an archive node, for example, an Infura archive node.")),(0,a.kt)("h3",{id:"rpc"},"rpc"),(0,a.kt)("p",null,"Configuration of the RPC server."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": Whether the RPC server is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port"),": The node in which the RPC server is going to be served.")),(0,a.kt)("h3",{id:"rest"},"rest"),(0,a.kt)("p",null,"Configuration for the REST server that handles all the feeder_gateway methods like http requests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": Whether the REST server is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port"),": Node in which the REST server is going to be served."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix"),": Prefix fot the service, it should be: ",(0,a.kt)("inlineCode",{parentName:"li"},"node_ip:port/feeder_gateway"),".")),(0,a.kt)("h3",{id:"metrics"},"metrics"),(0,a.kt)("p",null,"Configuration for Prometheus metrics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": Whether metrics are enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port"),": The node in which metrics are going to be served.")),(0,a.kt)("h3",{id:"db_path"},"db_path"),(0,a.kt)("p",null,"Represents the path in which the data of the node is going to be saved."),(0,a.kt)("h3",{id:"starknet"},"starknet"),(0,a.kt)("p",null,"Represent the configuration for the StarkNet network and sync details."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enabled"),": Represent if the REST server is enabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feeder_gateway"),": Represent the StarkNet endpoint that we are going to connect, should be from another ",(0,a.kt)("inlineCode",{parentName:"li"},"Juno")," node or\nfrom the feeder gateway, that defines mainnet or goerli, if ",(0,a.kt)("inlineCode",{parentName:"li"},"enabled")," starknet, always needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_sync"),": To declare if synchronization is with the Feeder Gateway, or we are syncing against Layer 1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network"),": Used in case you don't have an ethereum node and want to do an API sync. By default, ",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet")," is the\nvalue, anything else will be considered as goerli. Not needed if you aren't running an API sync.")))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);