"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[21],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7,title:"Momento Dart SDK",pagination_prev:null,sidebar_label:"Dart",description:"Information about the Momento Dart SDK"},i="Momento Swift SDK",l={unversionedId:"cache/develop/sdks/dart/index",id:"cache/develop/sdks/dart/index",title:"Momento Dart SDK",description:"Information about the Momento Dart SDK",source:"@site/docs/cache/develop/sdks/dart/index.md",sourceDirName:"cache/develop/sdks/dart",slug:"/cache/develop/sdks/dart/",permalink:"/ja/cache/develop/sdks/dart/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/dart/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Momento Dart SDK",pagination_prev:null,sidebar_label:"Dart",description:"Information about the Momento Dart SDK"},sidebar:"tutorialSidebar",next:{title:"Cheat Sheet",permalink:"/ja/cache/develop/sdks/dart/cheat-sheet"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"momento-swift-sdk"},"Momento Swift SDK"),(0,o.kt)("p",null,"Welcome to the Momento Dart SDK documentation!"),(0,o.kt)("p",null,"The Momento Dart SDK and source code are available via GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-dart"},"momentohq/client-sdk-dart"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dart.dev/get-dart"},"Dart version 3")," or higher is required."),(0,o.kt)("li",{parentName:"ul"},"A Momento API key is required; you can get one from the ",(0,o.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),".")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ja/cache/develop/sdks/dart/cheat-sheet"},"Dart SDK cheat sheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dart/tree/main/example"},"Dart SDK examples"),": working example projects that illustrate how to use the Dart SDK"),(0,o.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and client-side metrics with the Dart SDK"),(0,o.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: configuration and error handling in the Dart SDK")),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"COMING SOON"))}u.isMDXComponent=!0}}]);