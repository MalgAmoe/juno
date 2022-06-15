"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[7810],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9836:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Synchronization"},c=void 0,l={unversionedId:"features/sync",id:"features/sync",title:"Synchronization",description:"There are currently two methods to synchronize with the StarkNet chain (i.e., download, hold, and update the StarkNet state):",source:"@site/docs/features/sync.mdx",sourceDirName:"features",slug:"/features/sync",permalink:"/docs/features/sync",editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/features/sync.mdx",tags:[],version:"current",frontMatter:{title:"Synchronization"},sidebar:"tutorialSidebar",previous:{title:"RPC Server",permalink:"/docs/features/rpc"},next:{title:"Testing",permalink:"/docs/category/testing"}},h=[{value:"API syncing",id:"api-syncing",children:[],level:2},{value:"Layer 1 Syncing",id:"layer-1-syncing",children:[],level:2}],p={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are currently two methods to synchronize with the StarkNet chain (i.e., download, hold, and update the StarkNet state):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The StarkWare feeder gateway (a centralized API provided by StarkWare) or"),(0,o.kt)("li",{parentName:"ol"},"The Layer 1 StarkNet contracts on the Ethereum chain (these contracts hold the StarkNet data on-chain,\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.starknet.io/docs/Data%20Availabilty/on-chain-data"},"providing data availability"),").")),(0,o.kt)("h2",{id:"api-syncing"},"API syncing"),(0,o.kt)("p",null,"The syncing process with the feeder gateway is relatively simple: request a state update from the API ",(0,o.kt)("a",{parentName:"p",href:"https://alpha-mainnet.starknet.io/feeder_gateway/get_state_update?blockNumber=0"},"like this"),"\nand apply that state update to the local database."),(0,o.kt)("h2",{id:"layer-1-syncing"},"Layer 1 Syncing"),(0,o.kt)("p",null,"Syncing with the L1 contracts is more complicated. To do this, we listen for events emitted by the contracts to reconstruct the StarkNet state update."),(0,o.kt)("p",null,"The three key StarkNet contracts on L1 that we are interested in are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"MemoryPageFactRegistry: stores a mapping between a fact (a hash of some data) and a memory page hash.\nThis contract has an external function ",(0,o.kt)("inlineCode",{parentName:"li"},"registerMemoryPageContinuous")," that accepts memory pages as input (data structure that contains L2 transaction data).\nWhen it receives a new valid memory page, the ",(0,o.kt)("inlineCode",{parentName:"li"},"LogMemoryPageFactContinuous")," event is emitted with the hash of the registered memory page."),(0,o.kt)("li",{parentName:"ol"},"GpsStatementVerifier: verifies proofs from layer 2.\nWhen this contract verifies a proof, it emits a ",(0,o.kt)("inlineCode",{parentName:"li"},"LogMemoryPagesHashes")," event, which contains a fact (hash of data used in the verification process) and an array of memory page hashes."),(0,o.kt)("li",{parentName:"ol"},"Starknet: transitions the StarkNet state.\nEmits a ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateTransitionFact")," event with a fact corresponding to the state transition being processed.\nOnce it completes additional safety checks, it will officially transition the state and emit a ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateUpdate")," event with the new state root and Starknet block number (sequence number).")),(0,o.kt)("p",null,"When syncing against L1, we need to work backwards through the above steps to reconstruct the original state update."),(0,o.kt)("p",null,"Since we cannot rely on receiving the events in chronological order, we hold three mappings to keep the information straight (one for each contract):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"memoryPage: memoryPageHash -> hash of the Ethereum transaction where the ",(0,o.kt)("inlineCode",{parentName:"li"},"LogMemoryPageFactContinuous")," event was emitted."),(0,o.kt)("li",{parentName:"ol"},"gpsVerifier: fact1 -> list of memory page hashes"),(0,o.kt)("li",{parentName:"ol"},"facts: sequence number -> fact (this fact is from ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateTransitionFact"),", sequence number is from ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateUpdate"),")")),(0,o.kt)("p",null,"To sync, we follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once we see a ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateTransitionFact")," event, we look for a ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateUpdate")," in the same Ethereum block. If found, we add it to the third mapping above.\nIf the sequence number (StarkNet block number) is one greater than the latest sequence number of the last block we synced, we begin processing the state update."),(0,o.kt)("li",{parentName:"ol"},"Use the fact from the ",(0,o.kt)("inlineCode",{parentName:"li"},"LogStateTransitionFact")," event to get the list of corresponding memory page hashes from the gpsVerifier mapping."),(0,o.kt)("li",{parentName:"ol"},"For each memory page hash, use the memoryPage mapping to find the hash of the transaction where the memory page data was sent."),(0,o.kt)("li",{parentName:"ol"},"Query an Ethereum node for the actual transaction using the transaction hash."),(0,o.kt)("li",{parentName:"ol"},"Parse the Ethereum transaction calldata to reconstruct the StarkNet state update.")),(0,o.kt)("p",null,"Further exploration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.starknet.io/docs/State/starknet-state"},"StarkNet State")," - layout of the StarkNet state trie"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/batching-proofs-for-several-dapps-into-a-single-succinct-proof/5694"},"Fact registry design")," - the reasoning behind the StarkNet L1 contract architecture"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/starkware-libs/starkex-contracts/tree/master/evm-verifier"},"StarkEx contracts on GitHub")," - contain initial implementations of the MemoryPageFactRegistry and GpsStatementVerifier contracts for StarkEx"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://goerli.etherscan.io/address/0x5e6229F2D4d977d20A50219E521dE6Dd694d45cc#code"},"StarkNet contract on Goerli")," (may be out of date by the time you're reading this)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2021/1063"},"Cairo white paper")," - useful background knowledge to have while reading the above contracts")))}u.isMDXComponent=!0}}]);