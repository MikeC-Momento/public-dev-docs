"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4984],{3133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(4848),o=n(8453);const s={sidebar_position:2,title:"Authentication with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"},c=void 0,a={id:"topics/develop/authentication/index",title:"Authentication with Momento",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/authentication/index.mdx",sourceDirName:"topics/develop/authentication",slug:"/topics/develop/authentication/",permalink:"/ja/topics/develop/authentication/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/authentication/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication with Momento",pagination_prev:null,sidebar_label:"Authentication",description:"Momento\u3067\u306e\u8a8d\u8a3c\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"},sidebar:"topicsSidebar",next:{title:"API Keys",permalink:"/ja/topics/develop/authentication/api-keys"}},r={},d=[];function l(e){const t={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Momento\u3092\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u306d\uff01\u6700\u521d\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3068\u3001\u305d\u306e\u5f8c\u3001\u30a2\u30d7\u30ea\u304b\u3089\u547c\u3073\u51fa\u3057\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:"Momento\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://console.gomomento.com",children:"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3092\u4f7f\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u5229\u7528\u3059\u308b\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/ja/topics/develop/authentication/api-keys",children:"API\u30ad\u30fc"}),"\u3092\u4f7f\u3063\u3066\u3001\u9577\u671f\u7684\u306bAPI\u30ad\u30fc\u3092\u4fdd\u5b58\u3057\u3066\u5229\u7528\u3059\u308b\u3002"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/ja/topics/develop/authentication/tokens",children:"\u30c8\u30fc\u30af\u30f3"}),"\u3092\u4f7f\u7528\u3057\u305f\u77ed\u671f\u7684\u304b\u3064\u9650\u5b9a\u7684\u306a\u7bc4\u56f2\u3067\u5229\u7528\u3059\u308b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u65b9\u6cd5\u306b\u306f\u69d8\u3005\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3068\u5b9f\u88c5\u304c\u3042\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u304c\u69cb\u7bc9\u3057\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u306b\u3088\u3063\u3066\u306f\u3001\u77ed\u671f\u9593\u3067\u304b\u3064\u30b9\u30b3\u30fc\u30d7\u304c\u9650\u5b9a\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u3092\u5927\u91cf\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u767a\u884c\u3059\u308b\u3053\u3068\u3092\u9078\u629e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u3001",(0,i.jsx)(t.a,{href:"/ja/topics/develop/authentication/tokens",children:"tokens"}),"\u306e\u30da\u30fc\u30b8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3082\u3057\u304b\u3057\u305f\u3089\u3001API\u30ad\u30fc\u3092\u4f5c\u6210\u3057\u30661\u5e74\u9593\u5229\u7528\u3059\u308b\u3002\u305d\u3093\u306a\u6642\u306f\u3001",(0,i.jsx)(t.a,{href:"/ja/topics/develop/authentication/api-keys",children:"API\u30ad\u30fc"}),"\u306e\u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u3069\u308c\u304c\u81ea\u5206\u306b\u5411\u3044\u3066\u3044\u308b\u304b\u6c7a\u3081\u308b\u306e\u306b\u304a\u56f0\u308a\u3067\u3059\u304b\uff1f\u304a\u4efb\u305b\u304f\u3060\u3055\u3044\ud83d\udc47"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Table of differences between API keys and tokens",src:n(2755).A+"",width:"1600",height:"1391"})}),"\n",(0,i.jsxs)(t.p,{children:["\u307e\u3060\u3069\u306e\u9078\u629e\u3092\u53d6\u308c\u3070\u826f\u3044\u304b\u56f0\u3063\u3066\u3044\u307e\u3059\u304b\uff1f\u6b21\u306e\u30da\u30fc\u30b8\u306b\u3042\u308b\u8a73\u7d30\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u89a7\u306b\u306a\u308b\u304b\u3001",(0,i.jsx)(t.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),"\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u304a\u6c17\u8efd\u306b\u6295\u3052\u3066\u304f\u3060\u3055\u3044\uff01"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2755:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/api-keys-vs-tokens-32246185f7f1d832ffc0f3d006caaa9a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);