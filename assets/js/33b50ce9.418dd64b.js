"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[6498],{8525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=r(7462),a=(r(7294),r(3905));const o={title:"Getting Started - Go"},i=void 0,l={unversionedId:"getting_started/getting-started-go",id:"getting_started/getting-started-go",title:"Getting Started - Go",description:"Here you will find various links to help you start with Go programming language.",source:"@site/docs/getting_started/getting-started-go.mdx",sourceDirName:"getting_started",slug:"/getting_started/getting-started-go",permalink:"/docs/getting_started/getting-started-go",draft:!1,editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/getting_started/getting-started-go.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started - Go"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Getting Started - Juno",permalink:"/docs/getting_started/getting-started-juno"}},s={},g=[{value:"Topics",id:"topics",level:2}],p={toc:g};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here you will find various links to help you start with Go programming language."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"http://tour.golang.org/"},"Go Tour")," is the best place to start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/doc/effective_go"},"Effective Go")," will help you learn how to write idiomatic Go code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CodeReviewComments"},"Common comments made during reviews of Go code"),"."),(0,a.kt)("li",{parentName:"ul"},"If you have the time, the following books are also good ways to learn:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.gopl.io"},"The Go Programming Language - Alan Donovan and Brian Kernighan"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lets-go.alexedwards.net"},"Let\u2019s Go - Alex Edwards"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lets-go-further.alexedwards.net"},"Let\u2019s Go Further - Alex Edwards"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/CommonMistakes"},"Common mistakes"))),(0,a.kt)("h2",{id:"topics"},"Topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Errors.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/doc/faq#exceptions"},"Why doesn\u2019t Go have exceptions?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/error-handling-and-go"},"Error Handling and Go"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/go1.13-errors"},"Working with Errors in Go 1.13"),"."))),(0,a.kt)("li",{parentName:"ul"},"Naming.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/talks/2014/organizeio.slide#19"},"Organising Go code - David Crawshaw")," (A bit dated but the section on naming is still relevant)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/package-names"},"Package names"),".")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);