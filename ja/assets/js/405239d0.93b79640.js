"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8958],{6722:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var n=t(4848),r=t(8453);const d={sidebar_label:"Quotas and Limits",sidebar_position:5,title:"Momento Leaderboards service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},i="Momento Leaderboards service quotas",o={id:"leaderboards/limits",title:"Momento Leaderboards service quotas",description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/leaderboards/limits.mdx",sourceDirName:"leaderboards",slug:"/leaderboards/limits",permalink:"/ja/leaderboards/limits",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/leaderboards/limits.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Quotas and Limits",sidebar_position:5,title:"Momento Leaderboards service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Leaderboards and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},sidebar:"leaderboardSidebar",previous:{title:"Mapping leaderboard IDs to strings",permalink:"/ja/leaderboards/patterns/map-id-to-string"}},l={},a=[{value:"Limits",id:"limits",level:2},{value:"Operations",id:"operations",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"momento-leaderboards-service-quotas",children:"Momento Leaderboards service quotas"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["\u30b5\u30fc\u30d3\u30b9\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u30d7\u30e9\u30f3\u306b\u76f4\u63a5\u5f71\u97ff\u3055\u308c\u307e\u3059\u3002",(0,n.jsx)("ins",{children:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30cf\u30fc\u30c9\u30ea\u30df\u30c3\u30c8"}),"\u306e\u4e21\u65b9\u306f\u3001\u30d7\u30ed\u30c6\u30a3\u30a2\u30d7\u30e9\u30f3\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30d7\u30e9\u30f3\u3067\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e0a\u9650\u7de9\u548c\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001",(0,n.jsx)(s.a,{href:"https://www.gomomento.com/contact-us",children:"\u55b6\u696d\u62c5\u5f53\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"limits",children:"Limits"}),"\n",(0,n.jsxs)("table",{className:"customTable",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Resource"}),(0,n.jsx)("th",{children:"Entity"}),(0,n.jsx)("th",{children:"Default"}),(0,n.jsx)("th",{children:"Basic support"}),(0,n.jsx)("th",{children:"Pro support"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{className:"highlightRow",children:(0,n.jsx)("td",{colspan:"5",children:(0,n.jsx)("strong",{children:"Soft limits"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Operations per second"}),(0,n.jsx)("td",{children:"namespace"}),(0,n.jsx)("td",{children:"100"}),(0,n.jsx)("td",{children:"1,000"}),(0,n.jsx)("td",{children:"10,000"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Hot storage"}),(0,n.jsx)("td",{children:"namespace"}),(0,n.jsx)("td",{children:"100 MB"}),(0,n.jsx)("td",{children:"1 GB"}),(0,n.jsx)("td",{children:"10 GB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Namespace count"}),(0,n.jsx)("td",{children:"region"}),(0,n.jsx)("td",{children:"3"}),(0,n.jsx)("td",{children:"30"}),(0,n.jsx)("td",{children:"300"})]}),(0,n.jsx)("tr",{className:"highlightRow",children:(0,n.jsx)("td",{colspan:"5",children:(0,n.jsx)("strong",{children:"Hard limits"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Time to live (TTL)"}),(0,n.jsx)("td",{children:"item"}),(0,n.jsx)("td",{colspan:"3",children:"7 days"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Item size"}),(0,n.jsx)("td",{children:"item"}),(0,n.jsx)("td",{colspan:"3",children:"50 MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Entry size"}),(0,n.jsx)("td",{children:"entry"}),(0,n.jsx)("td",{colspan:"3",children:"128 KB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Operations per second"}),(0,n.jsx)("td",{children:"region"}),(0,n.jsx)("td",{colspan:"3",children:"5"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"operations",children:"Operations"}),"\n",(0,n.jsxs)(s.p,{children:["\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5API\u306f\u30011\u3064\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u8981\u7d20\u306e\u64cd\u4f5c\u306f\u3088\u308a\u52b9\u7387\u7684\u3067\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u306eAPI\u306e\u30b3\u30b9\u30c8\u306f",(0,n.jsx)(s.strong,{children:"2:1\u306e\u6bd4\u7387"}),"\u3067\u5272\u308a\u5f15\u304b\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u30012\u3064\u306e\u8981\u7d20\u3054\u3068\u306b1\u3064\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ea\u30df\u30c3\u30bf\u30fc\u306b\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f8b\u3068\u3057\u3066\u30011\u3064\u307e\u305f\u306f2\u3064\u306e\u8981\u7d20\u3092\u8ffd\u52a0\u3059\u308b",(0,n.jsx)(s.code,{children:"Upsert"}),"\u30ea\u30af\u30a8\u30b9\u30c8\u306f",(0,n.jsx)(s.em,{children:"1\u3064\u306e\u64cd\u4f5c"}),"\u3092\u8981\u3057\u307e\u3059\u304c\u30013\u3064\u307e\u305f\u306f4\u3064\u306e\u8981\u7d20\u3067\u306f",(0,n.jsx)(s.em,{children:"2\u3064\u306e\u64cd\u4f5c"}),"\u3092\u8981\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u6319\u3052\u308b\u3059\u3079\u3066\u306eAPI\u306f\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3057\u3001\u30b3\u30b9\u30c8\u524a\u6e1b\u306e\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306b\u306a\u3044API\u306f\u3059\u3079\u30661\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)("table",{class:"customTable",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"API Name"}),(0,n.jsx)("th",{children:"Operations"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"FetchByRank"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if leaderboard is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"FetchByScore"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if leaderboard is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"GetRank"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if leaderboard is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"RemoveElements"}),(0,n.jsx)("td",{children:"Number of elements in response / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Upsert"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(6540);const r={},d=n.createContext(r);function i(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);