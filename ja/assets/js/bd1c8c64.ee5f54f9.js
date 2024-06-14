"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8120],{7143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var o=n(4848),i=n(8453);const c={sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},s=void 0,a={id:"cache/develop/authentication/index",title:"Authentication and access control with Momento",description:"Discover how to authenticate with Momento and control access to resources.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/authentication/index.mdx",sourceDirName:"cache/develop/authentication",slug:"/cache/develop/authentication/",permalink:"/ja/cache/develop/authentication/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/authentication/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication and access control with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Discover how to authenticate with Momento and control access to resources."},sidebar:"tutorialSidebar",next:{title:"API Keys",permalink:"/ja/cache/develop/authentication/api-keys"}},r={},d=[];function l(e){const t={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Momento\u3092\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u306d\uff01\u6700\u521d\u306e\u901a\u8a71\u3068\u3001\u305d\u306e\u5f8c\u306e\u30a2\u30d7\u30ea\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u901a\u8a71\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u79c1\u305f\u3061\u306f\u3001\u3042\u306a\u305f\u304c\u79c1\u305f\u3061\u306e\u30b5\u30fc\u30d3\u30b9\u3068\u4ea4\u6d41\u3067\u304d\u308b\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3092\u4f7f\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/ja/cache/develop/authentication/api-keys",children:"API\u30ad\u30fc"}),"\u3092\u4f7f\u3063\u3066\u9577\u671f\u7684\u306b\u4fdd\u5b58\u3055\u308c\u305f\u4f7f\u7528\u6cd5\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/ja/cache/develop/authentication/tokens",children:"\u30c8\u30fc\u30af\u30f3"})," \u3092\u4f7f\u3063\u3066\u3001\u77ed\u671f\u7684\u304b\u3064\u9650\u5b9a\u7684\u306a\u7bc4\u56f2\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u65b9\u6cd5\u306b\u306f\u305d\u308c\u305e\u308c\u3001\u69d8\u3005\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3068\u69d8\u3005\u306a\u5b9f\u88c5\u304c\u3042\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u304c\u69cb\u7bc9\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bf\u30a4\u30d7\u306b\u57fa\u3065\u3044\u3066\u3001\u3042\u306a\u305f\u306f\u3001\u77ed\u547d\u3067\u30b9\u30b3\u30fc\u30d7\u304c\u9650\u5b9a\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u306e\u675f\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u767a\u884c\u3059\u308b\u3053\u3068\u3092\u9078\u629e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3082\u3057\u305d\u3046\u306a\u3089\u3001",(0,o.jsx)(t.a,{href:"/ja/cache/develop/authentication/tokens",children:"tokens"}),"\u306e\u30da\u30fc\u30b8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3082\u3057\u304b\u3057\u305f\u3089\u3001\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u30661\u5e74\u9593\u5fd8\u308c\u308b\u3053\u3068\u306b\u8208\u5473\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002API\u30ad\u30fc](./api-keys.md)\u306e\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u3069\u308c\u304c\u81ea\u5206\u306b\u5408\u3046\u304b\u6c7a\u3081\u308b\u306e\u306b\u304a\u56f0\u308a\u3067\u3059\u304b\uff1f\u304a\u4efb\u305b\u304f\u3060\u3055\u3044\ud83d\udc47\u3002"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"API\u30ad\u30fc\u3068\u30c8\u30fc\u30af\u30f3\u306e\u9055\u3044\u8868",src:n(2755).A+"",width:"1600",height:"1391"})}),"\n",(0,o.jsxs)(t.p,{children:["\u307e\u3060\u6df7\u4e71\u3057\u3066\u3044\u307e\u3059\u304b\uff1f\u6b21\u306e\u30da\u30fc\u30b8\u306b\u3042\u308b\u8a73\u7d30\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u89a7\u306b\u306a\u308b\u304b\u3001",(0,o.jsx)(t.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),"\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u304a\u9001\u308a\u304f\u3060\u3055\u3044\uff01"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2755:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/api-keys-vs-tokens-32246185f7f1d832ffc0f3d006caaa9a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},c=o.createContext(i);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);