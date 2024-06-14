"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8679],{6764:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(4848),r=s(8453);const i={sidebar_label:"Quotas and Limits",sidebar_position:8,title:"Momento Cache service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Cache and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},d="Momento Cache\u30b5\u30fc\u30d3\u30b9\u306e\u30af\u30a9\u30fc\u30bf",c={id:"cache/limits",title:"Momento Cache service quotas",description:"Examine the namespace and item-level quotas in place with Momento Cache and discover the default and tunable values for your workload based on your support plan.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/limits.mdx",sourceDirName:"cache",slug:"/cache/limits",permalink:"/ja/cache/limits",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/limits.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Quotas and Limits",sidebar_position:8,title:"Momento Cache service quotas",pagination_next:null,description:"Examine the namespace and item-level quotas in place with Momento Cache and discover the default and tunable values for your workload based on your support plan.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Pricing and Free Tier",permalink:"/ja/cache/manage/pricing"}},l={},o=[{value:"\u30ea\u30df\u30c3\u30c8",id:"\u30ea\u30df\u30c3\u30c8",level:2},{value:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",id:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"momento-cache\u30b5\u30fc\u30d3\u30b9\u306e\u30af\u30a9\u30fc\u30bf",children:"Momento Cache\u30b5\u30fc\u30d3\u30b9\u306e\u30af\u30a9\u30fc\u30bf"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["\u30b5\u30fc\u30d3\u30b9\u30af\u30a9\u30fc\u30bf\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30b5\u30dd\u30fc\u30c8\u30d7\u30e9\u30f3\u306b\u76f4\u63a5\u5f71\u97ff\u3055\u308c\u307e\u3059\u3002",(0,n.jsx)("ins",{children:"\u30bd\u30d5\u30c8\u30ea\u30df\u30c3\u30c8\u3068\u30cf\u30fc\u30c9\u30ea\u30df\u30c3\u30c8"}),"\u306e\u4e21\u65b9\u306f\u3001\u30d7\u30ed\u30c6\u30a3\u30a2\u30d7\u30e9\u30f3\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30d7\u30e9\u30f3\u3067\u5897\u3084\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5897\u984d\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001",(0,n.jsx)(t.a,{href:"https://www.gomomento.com/contact-us",children:"\u55b6\u696d\u62c5\u5f53\u307e\u3067\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"\u30ea\u30df\u30c3\u30c8",children:"\u30ea\u30df\u30c3\u30c8"}),"\n",(0,n.jsxs)("table",{className:"customTable",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Resource"}),(0,n.jsx)("th",{children:"Entity"}),(0,n.jsx)("th",{children:"Default"}),(0,n.jsx)("th",{children:"Basic support"}),(0,n.jsx)("th",{children:"Pro support"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{className:"highlightRow",children:(0,n.jsx)("td",{colspan:"5",children:(0,n.jsx)("strong",{children:"Soft limits"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Operations per second"}),(0,n.jsx)("td",{children:"namespace"}),(0,n.jsx)("td",{children:"100"}),(0,n.jsx)("td",{children:"1,000"}),(0,n.jsx)("td",{children:"10,000"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Hot storage"}),(0,n.jsx)("td",{children:"namespace"}),(0,n.jsx)("td",{children:"100 MB"}),(0,n.jsx)("td",{children:"1 GB"}),(0,n.jsx)("td",{children:"10 GB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Namespace count"}),(0,n.jsx)("td",{children:"region"}),(0,n.jsx)("td",{children:"3"}),(0,n.jsx)("td",{children:"30"}),(0,n.jsx)("td",{children:"300"})]}),(0,n.jsx)("tr",{className:"highlightRow",children:(0,n.jsx)("td",{colspan:"5",children:(0,n.jsx)("strong",{children:"Hard limits"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Time to live (TTL)"}),(0,n.jsx)("td",{children:"item"}),(0,n.jsx)("td",{colspan:"3",children:"24 hours"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Item size"}),(0,n.jsx)("td",{children:"item"}),(0,n.jsx)("td",{colspan:"3",children:"5 MB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Collection element size"}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"../cache/develop/basics/datatypes#collection-data-types-cdts",target:"_blank",children:"element"})}),(0,n.jsx)("td",{colspan:"3",children:"128 KB"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Operations per second"}),(0,n.jsx)("td",{children:"region"}),(0,n.jsx)("td",{colspan:"3",children:"5"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",children:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,n.jsxs)(t.p,{children:["\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5API\u306f\u30011\u3064\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u8981\u7d20\u306e\u64cd\u4f5c\u306f\u3088\u308a\u52b9\u7387\u7684\u3067\u3042\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u306eAPI\u306e\u30b3\u30b9\u30c8\u306f",(0,n.jsx)(t.strong,{children:"2:1\u306e\u6bd4\u7387"}),"\u3067\u5272\u308a\u5f15\u304b\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u30012\u3064\u306e\u8981\u7d20\u3054\u3068\u306b1\u3064\u306e\u64cd\u4f5c\u3068\u3057\u3066\u30ea\u30df\u30c3\u30bf\u30fc\u306b\u30ab\u30a6\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u8ab2\u91d1\u3055\u308c\u308b\u64cd\u4f5c\u306e\u6570\u3092\u3055\u3089\u306b\u6e1b\u3089\u3059\u306b\u306f\u3001",(0,n.jsx)(t.a,{href:"./learn/how-it-works/read-concern",children:"read concern"})," \u30d8\u30c3\u30c0\u30fc\u3092 ",(0,n.jsx)(t.code,{children:"Express"})," \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u8ab2\u91d1\u3055\u308c\u308b\u64cd\u4f5c\u56de\u6570\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306e0.8\u500d\u306b\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u3001\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30ad\u30fc\u306e\u5f85\u3061\u6642\u9593\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,n.jsxs)(t.p,{children:["\u4f8b\u3068\u3057\u3066\u30011\u3064\u307e\u305f\u306f2\u3064\u306e\u8981\u7d20\u3092\u8ffd\u52a0\u3059\u308b ",(0,n.jsx)(t.code,{children:"SetAddElements"})," \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f ",(0,n.jsx)(t.em,{children:"1\u3064\u306e\u64cd\u4f5c"})," \u304c\u304b\u304b\u308a\u307e\u3059\u304c\u30013\u3064\u307e\u305f\u306f4\u3064\u306e\u8981\u7d20\u3067\u306f ",(0,n.jsx)(t.em,{children:"2\u3064\u306e\u64cd\u4f5c"})," \u304c\u304b\u304b\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306b\u6319\u3052\u308b\u3059\u3079\u3066\u306eAPI\u306f\u8907\u6570\u306e\u64cd\u4f5c\u3092\u5b9f\u884c\u3057\u3001\u30b3\u30b9\u30c8\u524a\u6e1b\u306e\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306b\u306a\u3044API\u306f\u3059\u3079\u30661\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)("table",{class:"customTable",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"API Name"}),(0,n.jsx)("th",{children:"Operations"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DictionaryFetch"}),(0,n.jsx)("td",{children:"Number of fields in response / 2, or 1 if dictionary is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DictionaryGetFields"}),(0,n.jsx)("td",{children:"Number of fields in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DictionaryRemoveFields"}),(0,n.jsx)("td",{children:"Number of fields in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"DictionarySetFields"}),(0,n.jsx)("td",{children:"Number of fields in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"KeysExist"}),(0,n.jsx)("td",{children:"Number of keys in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ListConcatenateBack"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ListConcatenateFront"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ListFetch"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if list is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SetAddElements"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SetContainsElements"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SetFetch"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if set is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SetRemoveElements"}),(0,n.jsx)("td",{children:"Number of elements in request/2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SortedSetFetchByRank"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if sorted set is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SortedSetFetchByScore"}),(0,n.jsx)("td",{children:"Number of elements in response / 2, or 1 if sorted set is not found"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SortedSetGetScores"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SortedSetPutElements"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"SortedSetRemoveElements"}),(0,n.jsx)("td",{children:"Number of elements in request / 2"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(6540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);