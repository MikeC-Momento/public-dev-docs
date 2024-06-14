"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3981],{1186:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(4848),i=n(8453);const o={sidebar_label:"Quotas and Limits",sidebar_position:7,title:"Momento Topics service quotas",pagination_next:null,description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",hide_title:!0,slug:"/topics/limits"},r="Momento Topics service quotas",c={id:"topics/limits",title:"Momento Topics service quotas",description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/limits.mdx",sourceDirName:"topics",slug:"/topics/limits",permalink:"/ja/topics/limits",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/limits.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Quotas and Limits",sidebar_position:7,title:"Momento Topics service quotas",pagination_next:null,description:"Examine the namespace, webhook, and message-level quotas in place with Momento Topics and discover the default and tunable values for your workload based on your support plan.",hide_title:!0,slug:"/topics/limits"},sidebar:"topicsSidebar",previous:{title:"Pricing and Free Tier",permalink:"/ja/topics/manage/pricing"}},d={},l=[{value:"Limits",id:"limits",level:2},{value:"Operations",id:"operations",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"momento-topics-service-quotas",children:"Momento Topics service quotas"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["\u30b5\u30fc\u30d3\u30b9\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u30d7\u30e9\u30f3\u306b\u76f4\u63a5\u5f71\u97ff\u3055\u308c\u307e\u3059\u3002",(0,t.jsx)("ins",{children:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30cf\u30fc\u30c9\u30ea\u30df\u30c3\u30c8"}),"\u306e\u4e21\u65b9\u306f\u3001\u30d7\u30ed\u30c6\u30a3\u30a2\u30d7\u30e9\u30f3\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30d7\u30e9\u30f3\u3067\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e0a\u9650\u7de9\u548c\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001",(0,t.jsx)(s.a,{href:"https://www.gomomento.com/contact-us",children:"\u55b6\u696d\u62c5\u5f53\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)("table",{className:"customTable",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Resource"}),(0,t.jsx)("th",{children:"Entity"}),(0,t.jsx)("th",{children:"Default"}),(0,t.jsx)("th",{children:"Basic support"}),(0,t.jsx)("th",{children:"Pro support"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsx)("tr",{className:"highlightRow",children:(0,t.jsx)("td",{colspan:"5",children:(0,t.jsx)("strong",{children:"Soft limits"})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Operations per second"}),(0,t.jsx)("td",{children:"namespace"}),(0,t.jsx)("td",{children:"100"}),(0,t.jsx)("td",{children:"1,000"}),(0,t.jsx)("td",{children:"10,000"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Concurrent connections"}),(0,t.jsx)("td",{children:"namespace"}),(0,t.jsx)("td",{children:"100"}),(0,t.jsx)("td",{children:"1,000"}),(0,t.jsx)("td",{children:"10,000"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Number of webhooks"}),(0,t.jsx)("td",{children:"namespace"}),(0,t.jsx)("td",{children:"10"}),(0,t.jsx)("td",{children:"100"}),(0,t.jsx)("td",{children:"1,000"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Message delivery per second"}),(0,t.jsx)("td",{children:"webhook"}),(0,t.jsx)("td",{children:"50"}),(0,t.jsx)("td",{children:"500"}),(0,t.jsx)("td",{children:"5,000"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Namespace count"}),(0,t.jsx)("td",{children:"region"}),(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"30"}),(0,t.jsx)("td",{children:"300"})]}),(0,t.jsx)("tr",{className:"highlightRow",children:(0,t.jsx)("td",{colspan:"5",children:(0,t.jsx)("strong",{children:"Hard limits"})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Payload size"}),(0,t.jsx)("td",{children:"message"}),(0,t.jsx)("td",{colspan:"3",children:"4 KB"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Delivery timeout"}),(0,t.jsx)("td",{children:"webhook"}),(0,t.jsx)("td",{colspan:"3",children:"5 seconds"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Operations per second"}),(0,t.jsx)("td",{children:"account"}),(0,t.jsx)("td",{colspan:"3",children:"5"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"operations",children:"Operations"}),"\n",(0,t.jsx)(s.p,{children:"Momento Topics\u306b\u516c\u958b\u3055\u308c\u305f\u5404\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30011\u3064\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u914d\u4fe1\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u3059\u3079\u3066\u8ffd\u52a0\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u8cfc\u8aad\u8005\u304c 9 \u4eba\u3044\u308b\u30c8\u30d4\u30c3\u30af\u3067\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u305f\u3073\u306b 10 \u56de\u306e\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306f1KB\u5358\u4f4d\u3067\u8ab2\u91d1\u3055\u308c\u307e\u3059\u30020.5KB\u306e\u516c\u958b\u30e1\u30c3\u30bb\u30fc\u30b8\u306f1\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u305f\u3060\u3057\u30011.4 KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306f2\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Message broadcast"})}),"\n",(0,t.jsx)(s.p,{children:"9\u4eba\u306e\u8cfc\u8aad\u8005\u304c\u3044\u308b\u30c8\u30d4\u30c3\u30af\u306b\u30011KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"1\u30e1\u30c3\u30bb\u30fc\u30b8\u516c\u958b\uff0b9\u8cfc\u8aad\u8005\uff1d10\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Large direct message"})}),"\n",(0,t.jsx)(s.p,{children:"4 KB\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u304c1\u4eba\u306e\u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3055\u308c\u308b\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"(4KB\xf71KB\u30c1\u30e3\u30f3\u30af\uff09\xd71\u52a0\u5165\u8005\uff1d4\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"}),"\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);