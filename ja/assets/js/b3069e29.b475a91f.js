"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2809],{6216:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var c=s(4848),i=s(8453);const t={sidebar_position:2,sidebar_label:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u6587\u8108\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f\u3069\u3046\u3044\u3046\u3053\u3068\u304b\u3001\u305d\u3057\u3066 Momento Cache \u304c\u305d\u308c\u3092\u3069\u3046\u3084\u3063\u3066\u7c21\u6f54\u304b\u3064\u9ad8\u901f\u306b\u5b9f\u73fe\u3067\u304d\u308b\u306e\u304b\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},r="\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",o={id:"cache/introduction/common-caching-patterns",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u6587\u8108\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f\u3069\u3046\u3044\u3046\u3053\u3068\u304b\u3001\u305d\u3057\u3066 Momento Cache \u304c\u305d\u308c\u3092\u3069\u3046\u3084\u3063\u3066\u7c21\u6f54\u304b\u3064\u9ad8\u901f\u306b\u5b9f\u73fe\u3067\u304d\u308b\u306e\u304b\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/introduction/common-caching-patterns.md",sourceDirName:"cache/introduction",slug:"/cache/introduction/common-caching-patterns",permalink:"/ja/cache/introduction/common-caching-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/introduction/common-caching-patterns.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u6587\u8108\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f\u3069\u3046\u3044\u3046\u3053\u3068\u304b\u3001\u305d\u3057\u3066 Momento Cache \u304c\u305d\u308c\u3092\u3069\u3046\u3084\u3063\u3066\u7c21\u6f54\u304b\u3064\u9ad8\u901f\u306b\u5b9f\u73fe\u3067\u304d\u308b\u306e\u304b\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"},sidebar:"cacheSidebar",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f?",permalink:"/ja/cache/introduction/what-is-serverless-caching"},next:{title:"Common Caching Strategies",permalink:"/ja/cache/introduction/common-caching-strategies"}},d={},l=[{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9078\u629e\u80a2",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9078\u629e\u80a2",level:2},{value:"\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30ed\u30fc\u30ab\u30eb vs. \u30ea\u30e2\u30fc\u30c8",id:"\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u30ed\u30fc\u30ab\u30eb-vs-\u30ea\u30e2\u30fc\u30c8",level:3},{value:"\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u8aad\u307f\u51fa\u3057 vs \u66f8\u304d\u8fbc\u307f",id:"\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u8aad\u307f\u51fa\u3057-vs-\u66f8\u304d\u8fbc\u307f",level:3},{value:"\u3069\u306e\u69d8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30a4\u30f3\u30e9\u30a4\u30f3 vs \u30a2\u30b5\u30a4\u30c9",id:"\u3069\u306e\u69d8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u30a4\u30f3\u30e9\u30a4\u30f3-vs-\u30a2\u30b5\u30a4\u30c9",level:3}];function h(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",children:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u9ad8\u901f\u3067\u3059\u3002"})}),"\n",(0,c.jsx)(e.p,{children:"\u30a4\u30f3\u30e1\u30e2\u30ea\u3067\u30ad\u30fc\u30d0\u30ea\u30e5\u30fc\u306e\u30a2\u30af\u30bb\u30b9\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u306e\u8a08\u6e2c\u3067\u3082 1\u30df\u30ea\u79d2\u4ee5\u4e0b\u306e p99 \u30ec\u30b9\u30dd\u30f3\u30b9\u30bf\u30a4\u30e0\u3092\u5f97\u3089\u308c\u307e\u3059\u3002\u3068\u3066\u3082\u9ad8\u901f\u3067\u3059\u3002\u305d\u3057\u3066\u3001\u3053\u308c\u3060\u3051\u9ad8\u901f\u306a\u306e\u3067\u3001\u3001\u3001"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u697d\u3057\u3044\u3067\u3059\u3002"})}),"\n",(0,c.jsxs)(e.p,{children:["\u9045\u3044\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u8ab0\u3082\u597d\u307f\u307e\u305b\u3093\u3002\u9045\u3044\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u30e6\u30fc\u30b6\u30fc\u3092\u98fd\u304d\u3055\u305b\u3001",(0,c.jsx)(e.a,{href:"https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/",children:"\u58f2\u4e0a\u3092\u640d\u306d\u307e\u3059"}),"\u3002\u958b\u767a\u8005\u306f\u9045\u3044\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u697d\u3057\u3093\u3067\u3044\u306a\u3044\u30e6\u30fc\u30b6\u306e\u305f\u3081\u306b\u50cd\u304d\u305f\u304f\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u8907\u96d1\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u4e0b\u3052\u305f\u308a\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u8ca0\u8377\u3092\u4e0b\u3052\u308b\u3053\u3068\u3067\u3001\u9045\u3044\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u52a9\u3051\u3066\u304f\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u6ce8\u610f\u3057\u3066\u4f7f\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3001\u306a\u305c\u306a\u3089\u3001\u3001\u3001"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsxs)(e.strong,{children:["\u30ad\u30e3\u30c3\u30b7\u30e5\u306f",(0,c.jsx)(e.a,{href:"https://twitter.com/forrestbrazeal/status/1451189473383890946?lang=en",children:"\u30d5\u30c3\u30c8\u30ac\u30f3"}),"\u306b\u306a\u308a\u5f97\u307e\u3059\u3002"]})}),"\n",(0,c.jsx)(e.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u52b9\u7387\u7684\u306a\u4f7f\u3044\u65b9\u304c\u3042\u308b\u4e00\u65b9\u3067\u3001\u975e\u52b9\u7387\u7684\u306a\u4f7f\u3044\u65b9\u3082\u3042\u308a\u307e\u3059\u3002\u305f\u3060\u3001\u305d\u308c\u3088\u308a\u8cea\u304c\u60aa\u3044\u306e\u304c\u3001\u75db\u307f\u3092\u4f34\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565 -- \u30e6\u30fc\u30b6\u3092\u6df7\u4e71\u3055\u305b\u308b\u53e4\u3044\u30c7\u30fc\u30bf\u3084\u4e00\u8cab\u6027\u306e\u7121\u3044\u30c7\u30fc\u30bf\u3001\u3082\u3057\u304f\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u53ef\u7528\u6027\u3092\u640d\u306a\u3046\u3088\u3046\u306a\u4f7f\u3044\u65b9\u3067\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4e16\u306e\u4e2d\u306b\u306f\u305f\u304f\u3055\u3093\u306e\u7570\u306a\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5b9f\u88c5\u65b9\u6cd5\u304c\u3042\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6226\u7565\u306f\u3044\u304f\u3064\u3082\u306e\u8981\u7d20\u306b\u4f9d\u5b58\u3057\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u3053\u306e\u6295\u7a3f\u3067\u306f\u3001\u7686\u3055\u3093\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4e0a\u624b\u304f\u52d5\u304f\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306e\u8a2d\u8a08\u65b9\u6cd5\u306b\u3064\u3044\u3066\u5b66\u3093\u3067\u3044\u304d\u307e\u3059\u3002\u307e\u305a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3092\u8a2d\u8a08\u3059\u308b\u969b\u306b\u6c7a\u3081\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3044\u304f\u3064\u304b\u306e\u9078\u629e\u80a2\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3059\u3002\u305d\u308c\u304b\u3089\u3001\u3044\u304f\u3064\u304b\u306e\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3068\u3001\u3069\u3046\u3044\u3046\u6642\u306b\u305d\u308c\u3089\u3092\u4f7f\u3046\u3079\u304d\u30fb\u4f7f\u308f\u306a\u3044\u3079\u304d\u304b\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9078\u629e\u80a2",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u9078\u629e\u80a2"}),"\n",(0,c.jsx)(e.p,{children:"\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066\u304a\u8a71\u3059\u308b\u524d\u306b\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8ffd\u52a0\u3059\u308b\u969b\u306b\u6c7a\u3081\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3044\u304f\u3064\u304b\u306e\u9078\u629e\u80a2\u306b\u3064\u3044\u3066\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(e.p,{children:"3\u3064\u306e\u4e2d\u5fc3\u3068\u306a\u308b\u9078\u629e\u80a2\u306f\u3053\u3061\u3089\u3067\u3059:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30ed\u30fc\u30ab\u30eb vs. \u30ea\u30e2\u30fc\u30c8"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u8aad\u307f\u51fa\u3057 vs \u66f8\u304d\u8fbc\u307f"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u3069\u306e\u69d8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30a4\u30f3\u30e9\u30a4\u30f3 vs \u30a2\u30b5\u30a4\u30c9"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u3053\u306e\u9806\u756a\u3067\u4e00\u3064\u305a\u3064\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u30ed\u30fc\u30ab\u30eb-vs-\u30ea\u30e2\u30fc\u30c8",children:"\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30ed\u30fc\u30ab\u30eb vs. \u30ea\u30e2\u30fc\u30c8"}),"\n",(0,c.jsx)(e.p,{children:"\u307e\u305a\u6700\u521d\u306b\u6c7a\u3081\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u9078\u629e\u80a2\u306f\u3001\u30c7\u30fc\u30bf\u3092\u3069\u3053\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b\u3067\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:'\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8003\u3048\u308b\u969b\u306b\u3001\u9ad8\u901f\u3067\u8010\u4e45\u6027\u306e\u4f4e\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u69d8\u306a\u3001\u4e2d\u592e\u96c6\u6a29\u306e\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u7686\u3055\u3093\u307e\u305a\u6700\u521d\u306b\u60f3\u50cf\u3057\u304c\u3061\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u72ec\u7acb\u3057\u305f\u30a4\u30f3\u30d5\u30e9\u3067\u3042\u308b\u5fc5\u7136\u6027\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u3084\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30d6\u30e9\u30a6\u30b6\u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u3053\u3053\u3067"\u30ed\u30fc\u30ab\u30eb"\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u8a00\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u4f55\u304b\u3057\u3089\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u306b\u5bfe\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u3067\u3001\u4ed6\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u3082\u306e\u3092\u6307\u3057\u307e\u3059\u3002'}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u822c\u7684\u306b\u306f\u3001\u30ed\u30fc\u30ab\u30eb vs. \u30ea\u30e2\u30fc\u30c8\u306e\u554f\u3044\u306f\u3001\u5229\u4fbf\u6027 vs. \u7c21\u6f54\u3055\u306b\u884c\u304d\u3064\u304d\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u65b0\u3057\u3044\u30a4\u30f3\u30d5\u30e9\u3092\u8ffd\u52a0\u3059\u308b\u3088\u308a\u3082\u7c21\u5358\u306b\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002\u52a0\u3048\u3066\u3001\u65b0\u3057\u3044\u30a4\u30f3\u30d5\u30e9\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u53ef\u7528\u6027\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30c3\u30d7\u30bf\u30a4\u30e0\u306b\u95a2\u3059\u308b\u65b0\u3057\u3044\u8ab2\u984c\u3092\u3082\u305f\u3089\u3059\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u304c\u3001\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u4e00\u822c\u7684\u306b\u305d\u308c\u306f\u56de\u907f\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u65b9\u3067\u3001\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u4e2d\u592e\u96c6\u6a29\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u6bd4\u3079\u3066\u305d\u308c\u307b\u3069\u6709\u52b9\u7684\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5834\u5408\u3060\u3068\u3001\u904e\u53bb\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c7\u30fc\u30bf\u304c\u3042\u308b\u30de\u30b7\u30f3\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u51e6\u7406\u3055\u308c\u308b\u78ba\u7387\u306f\u3001\u30d5\u30ea\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u6570\u304c\u5897\u3048\u308b\u307b\u3069\u6e1b\u3063\u3066\u3044\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u73fe\u4ee3\u7684\u306a\u30af\u30e9\u30a6\u30c9\u30d9\u30fc\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u63ee\u767a\u6027\u306b\u304a\u3044\u3066\u306f\u3001\u3088\u308a\u9855\u8457\u3067\u3059\u3002\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u95a2\u6570\u3001\u30b3\u30f3\u30c6\u30ca\u3001\u307e\u305f\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u9700\u8981\u306b\u5fdc\u3058\u3066\u52d5\u7684\u306b\u30b9\u30b1\u30fc\u30eb\u30a2\u30c3\u30d7\u3084\u30b9\u30b1\u30fc\u30eb\u30c0\u30a6\u30f3\u3059\u308b\u306b\u5f93\u3063\u3066\u3001\u3088\u308a\u77ed\u547d\u306b\u306a\u3063\u3066\u3044\u304d\u307e\u3059\u3002\u65b0\u3057\u3044\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u6700\u521d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u306b\u306f\u5168\u304f\u5229\u70b9\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u6700\u5f8c\u306b\u3001\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u53e4\u3044\u30c7\u30fc\u30bf\u306e\u7ba1\u7406\u304c\u3088\u308a\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002\u30c7\u30fc\u30bf\u304c\u66f4\u65b0\u3055\u308c\u305f\u308a\u524a\u9664\u3055\u308c\u305f\u6642\u3001\u4e2d\u592e\u96c6\u6a29\u306e\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3042\u308c\u3070\u3001\u95a2\u9023\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u3002\u5206\u6563\u3055\u308c\u305f\u30ed\u30fc\u30ab\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d6\u30e9\u30a6\u30b6\u306b\u5bfe\u3057\u3066\u66f4\u65b0\u3092\u304b\u3051\u308b\u306e\u306f\u3082\u3063\u3068\u5927\u5909\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u9650\u3089\u308c\u305f\u30bf\u30a4\u30d7\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u3084\u3001\u77ed\u3044\u751f\u5b58\u671f\u9593 (TTL) \u306e\u8a2d\u5b9a\u3067\u3057\u304b\u4e0a\u624b\u304f\u52d5\u4f5c\u3057\u306a\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u30ea\u30e2\u30fc\u30c8\u3067\u3001\u4e2d\u592e\u96c6\u6a29\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u3053\u3046\u3057\u305f\u77ed\u6240\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u51e6\u7406\u3092\u884c\u3046\u3069\u306e\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u3082\u5229\u7528\u53ef\u80fd\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u5e45\u5e83\u304f\u6709\u52b9\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u4e00\u822c\u7684\u306b\u30c7\u30fc\u30bf\u3092\u5fc5\u8981\u306a\u6642\u306b\u671f\u9650\u5207\u308c\u306b\u3059\u308b\u65b9\u6cd5\u304c\u3042\u3063\u3066\u3001\u66f8\u304d\u8fbc\u307f\u51e6\u7406\u306e\u4e2d\u3067\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3057\u305f\u76f4\u5f8c\u306b\u30d1\u30fc\u30b8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6b20\u70b9\u306f\u3001\u72ec\u7acb\u3057\u305f\u30a4\u30f3\u30d5\u30e9\u3092\u3069\u3046\u3084\u3063\u3066\u7ba1\u7406\u3059\u308b\u304b\u3068\u3044\u3046\u904b\u7528\u7684\u306a\u8ab2\u984c\u3067\u3059\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u8aad\u307f\u51fa\u3057-vs-\u66f8\u304d\u8fbc\u307f",children:"\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u8aad\u307f\u51fa\u3057 vs \u66f8\u304d\u8fbc\u307f"}),"\n",(0,c.jsx)(e.p,{children:'2\u3064\u76ee\u306b\u8003\u3048\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8003\u616e\u70b9\u306f\u3001\u30c7\u30fc\u30bf\u3092\u3044\u3064\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b\u3067\u3059\u3002\u3053\u3053\u3067\u3082\u30012\u3064\u306e\u9078\u629e\u80a2\u304c\u3042\u308a\u307e\u3059 -- \u521d\u3081\u3066\u30c7\u30fc\u30bf\u304c\u8aad\u307e\u308c\u305f\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b ("\u9045\u5ef6\u8aad\u8fbc"\u3068\u3082\u547c\u3070\u308c\u307e\u3059)\u304b\u3001\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b\u3067\u3059\u3002'}),"\n",(0,c.jsx)(e.p,{children:"\u6700\u3082\u4eba\u6c17\u306e\u3042\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3\u306f\u3001\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30d1\u30bf\u30fc\u30f3\u3067\u3057\u3087\u3046\u3002\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4e2d\u3067\u307e\u305a\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u3093\u3067\u8fd4\u305d\u3046\u3068\u8a66\u307f\u307e\u3059\u3002\u3082\u3057\u305d\u306e\u6642\u70b9\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306b\u30c7\u30fc\u30bf\u304c\u306a\u3051\u308c\u3070\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u51fa\u3059\u69d8\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3059\u524d\u306b\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306e\u3067\u3001\u6b21\u306b\u540c\u3058\u30c7\u30fc\u30bf\u304c\u5fc5\u8981\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6765\u305f\u6642\u306b\u306f\u305d\u306e\u53d6\u5f97\u6e08\u306e\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u3067\u5229\u7528\u53ef\u80fd\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5bfe\u7167\u7684\u306a\u30d1\u30bf\u30fc\u30f3\u304c\u3001\u66f8\u304d\u8fbc\u307f\u304c\u6210\u529f\u3057\u305f\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8aad\u307f\u8fbc\u307e\u305b\u308b\u65b9\u6cd5\u3067\u3059\u3002\u66f8\u304d\u8fbc\u307f\u306e\u6210\u529f\u5f8c\u306b\u3001\u3059\u3050\u306b\u5fc5\u8981\u306b\u306a\u308b\u3067\u3042\u308d\u3046\u3068\u4e88\u60f3\u3057\u3066\u30c7\u30fc\u30bf\u3092\u7a4d\u6975\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u8aad\u8fbc\u6642\u306b\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5229\u70b9\u306f\u3001\u67d4\u8edf\u6027\u3068\u7a7a\u9593\u52b9\u7387\u3067\u3059\u3002\u9045\u5ef6\u8aad\u8fbc\u306f\u307b\u3068\u3093\u3069\u3069\u3093\u306a\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3067\u3082\u4f7f\u3048\u308b\u67d4\u8edf\u306a\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002\u500b\u5225\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3082\u3001\u8907\u6570\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u96c6\u5408\u3067\u3082\u3001\u96c6\u8a08\u3057\u305f\u5024\u3067\u3082\u306a\u3093\u3067\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u304d\u307e\u3059\u3002\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u76f4\u63a5\u53d6\u308c\u308b\u7d50\u679c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u8a08\u7b97\u3092\u884c\u3063\u305f\u7d50\u679c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u8fd4\u3059\u524d\u306b\u6700\u7d42\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u5358\u7d14\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u3001\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u5b9f\u88c5\u304c\u7c21\u5358\u3067\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u3053\u308c\u304c\u3001\u66f8\u304d\u8fbc\u307f\u6642\u306b\u7a4d\u6975\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u6642\u306b\u306f\u3088\u308a\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002\u500b\u5225\u306e\u9805\u76ee\u3092\u66f8\u304d\u8fbc\u307f\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306e\u306f\u7d20\u76f4\u3067\u3059\u304c\u3001\u7d50\u679c\u306e\u96c6\u5408\u3084\u96c6\u8a08\u3055\u308c\u305f\u5024\u3092\u7a4d\u6975\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306e\u306f\u3001\u3069\u3093\u306a\u8aad\u307f\u51fa\u3057\u30d1\u30bf\u30fc\u30f3\u304c\u3042\u3063\u3066\u305d\u308c\u3089\u304c\u3069\u306e\u69d8\u306b\u66f8\u304d\u8fbc\u307f\u306b\u5f71\u97ff\u3059\u308b\u306e\u304b\u3092\u6df1\u304f\u7406\u89e3\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u3060\u3044\u3076\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u52a0\u3048\u3066\u3001\u9045\u5ef6\u8aad\u8fbc\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u4f7f\u308f\u308c\u308b\u7a7a\u9593\u52b9\u7387\u306b\u512a\u308c\u3066\u3044\u307e\u3059\u3002\u5b9f\u969b\u306b\u8aad\u307f\u51fa\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u5206\u304b\u3089\u306a\u3044\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u307f\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3082\u66f8\u304f\u306e\u3067\u306f\u306a\u304f\u3001\u8aad\u307f\u51fa\u3057\u6642\u306b\u4e00\u5ea6\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u591a\u304f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u3001\u500b\u5225\u306e\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u51fa\u3057\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u306f\u6642\u9593\u3068\u95a2\u9023\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u5ea6\u8aad\u307f\u51fa\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u3001\u305d\u306e\u3059\u3050\u3042\u3068\u306b\u3082\u8aad\u307f\u51fa\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3067\u3059\u3002\u5c11\u306a\u304f\u3068\u3082\u4e00\u56de\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3060\u3051\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6700\u9069\u5316\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u8aad\u307f\u51fa\u3057\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u6b20\u70b9\u306f\u3001\u521d\u56de\u8aad\u8fbc\u304c\u9045\u3044\u3053\u3068\u3068\u3001\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u3067\u3059\u3002\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u51fa\u3057\u6642\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u306e\u3067\u3001\u5404\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30c7\u30fc\u30bf\u306f\u5c11\u306a\u304f\u3068\u3082\u4e00\u5ea6\u306f\u3001\u9045\u304f\u3066\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u3066\u3044\u306a\u3044\u30d1\u30b9\u3092\u901a\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u308c\u304c\u5c40\u6240\u6700\u9069\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u66f4\u306b\u3001\u8aad\u307f\u51fa\u3057\u6642\u306b\u3057\u304b\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u306a\u3044\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u53e4\u3044\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3082\u3057\u95a2\u9023\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306e\u6d88\u53bb\u3092\u305b\u305a\u306b\u305d\u306e\u4e0b\u306b\u3042\u308b\u30c7\u30fc\u30bf\u304c\u5909\u308f\u3063\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u306f\u6df7\u4e71\u3059\u308b\u7d50\u679c\u304c\u898b\u3048\u3066\u3057\u307e\u3046\u3067\u3057\u3087\u3046\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3053\u308c\u3092\u7de9\u548c\u3059\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u6642\u9593\u3092\u77ed\u304f\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u304c\u3001\u305d\u3046\u3059\u308b\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u6642\u306b\u8d77\u3053\u308b\u4e0a\u8ff0\u306e\u6b20\u70b9\u3092\u60aa\u5316\u3055\u305b\u3066\u3057\u307e\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u3069\u306e\u69d8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b----\u30a4\u30f3\u30e9\u30a4\u30f3-vs-\u30a2\u30b5\u30a4\u30c9",children:"\u3069\u306e\u69d8\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u304b -- \u30a4\u30f3\u30e9\u30a4\u30f3 vs \u30a2\u30b5\u30a4\u30c9"}),"\n",(0,c.jsx)(e.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3092\u9078\u3076\u969b\u306e\u6700\u5f8c\u306e\u8003\u616e\u70b9\u306f\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3059\u308b\u304b\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3059\u308b\u304b\u3067\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u524d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3064\u3044\u3066\u304a\u8a71\u3057\u307e\u3057\u305f\u3002\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u6700\u3082\u7d20\u76f4\u306a\u30bf\u30a4\u30d7\u306e\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3001\u7686\u3055\u3093\u306e\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u660e\u793a\u7684\u306b\u6307\u793a\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u306f\u5358\u7d14\u306a get \u3068 set \u3092\u6301\u3061\u3001\u3069\u3093\u306a\u30c7\u30fc\u30bf\u3067\u3082\u4fdd\u5b58\u3067\u304d\u308b\u67d4\u8edf\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u30c7\u30fc\u30bf\u3092\u660e\u78ba\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3082\u3057\u30ad\u30e3\u30c3\u30b7\u30e5\u5185\u306b\u30c7\u30fc\u30bf\u304c\u306a\u3051\u308c\u3070\u3001\u7686\u3055\u3093\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u3069\u3053\u304b\u304b\u3089\u5143\u306b\u306a\u308b\u30c7\u30fc\u30bf\u3092\u63a2\u3057\u3066\u304d\u3066\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u66f4\u65b0\u3059\u308b\u8cac\u4efb\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u65b9\u3067\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u7686\u3055\u3093\u306e\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u306f\u900f\u904e\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u306a\u308a\u307e\u3059\u3002\u7686\u3055\u3093\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u9805\u76ee\u306e\u53d6\u5f97\u3092\u3059\u308b\u969b\u306b\u306f\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u76f4\u63a5\u53e9\u304d\u307e\u3059\u3002\u3082\u3057\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u7121\u3051\u308c\u3070\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u81ea\u8eab\u304c\u4e0a\u6d41\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u308c\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3\u3092\u898b\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u3069\u3046\u3057\u3066\u305d\u306e\u540d\u524d\u3092\u3057\u3066\u3044\u308b\u306e\u304b\u304c\u5206\u304b\u308b\u3067\u3057\u3087\u3046\u3002\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a2a\u306b(\u30a2\u30b5\u30a4\u30c9)\u5ea7\u3063\u3066\u3044\u3066\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u306f\u5225\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u4e00\u65b9\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u4e2d\u3067(\u30a4\u30f3\u30e9\u30a4\u30f3)\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:s(3221).A+"",width:"1200",height:"1200"})}),"\n",(0,c.jsx)(e.p,{children:"\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u65b9\u304c\u3001\u307b\u3068\u3093\u3069\u3069\u3093\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u3082\u4f7f\u3048\u308b\u67d4\u8edf\u6027\u306e\u305f\u3081\u306b\u4eba\u6c17\u304c\u3042\u308a\u307e\u3059\u3002\u52a0\u3048\u3066\u3001\u6700\u7d42\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u304b\u3089\u758e\u7d50\u5408\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30ec\u30a4\u30e4\u30fc\u3067\u3069\u306e\u69d8\u306b\u5931\u6557\u3092\u51e6\u7406\u3059\u308b\u304b\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5229\u70b9\u306f\u3001\u7686\u3055\u3093\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u7c21\u7d20\u5316\u3067\u304d\u308b\u3053\u3068\u3067\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u306e\u969b\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\u305f\u3081\u306e\u8907\u6570\u306e\u30b9\u30c8\u30a2\u3084\u95a2\u9023\u3059\u308b\u30ed\u30b8\u30c3\u30af\u306b\u3064\u3044\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u5fc3\u914d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6b20\u70b9\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u53ef\u7528\u6027\u3092\u4e0b\u3052\u308b\u70b9\u3067\u3059\u3002\u3053\u306e\u65b9\u5f0f\u3067\u306f\u3001\u5358\u7d14\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6a5f\u80fd\u3060\u3051\u3067\u306a\u304f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u901a\u4fe1\u306e\u8cac\u4efb\u3092\u62c5\u3046\u65b0\u3057\u3044\u30a4\u30f3\u30d5\u30e9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3082\u3057\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u843d\u3061\u3066\u3057\u307e\u3046\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u81ea\u8eab\u304c\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u4f1a\u8a71\u3057\u3066\u3044\u305f\u306e\u3067\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u96e3\u3057\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u3082\u3046\u4e00\u3064\u306e\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6b20\u70b9\u306f\u305d\u3046\u3044\u3046\u30b5\u30fc\u30d3\u30b9\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3067\u3059\u3002\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u4f7f\u3063\u3066\u3044\u308b\u4e0b\u6d41\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u5bc6\u306a\u9023\u643a\u3092\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u305d\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u9023\u643a\u3059\u308b\u305f\u3081\u306b\u306f\u8ab0\u304b\u304c\u7279\u5225\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u69cb\u7bc9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5f93\u3063\u3066\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30d7\u30ed\u30c8\u30b3\u30eb\u304b\u3001\u7279\u5b9a\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u72ec\u81ea\u306e\u30a2\u30c9\u30aa\u30f3\u3068\u3057\u3066\u4e00\u822c\u7684\u306b\u306f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},3221:(n,e,s)=>{s.d(e,{A:()=>c});const c=s.p+"assets/images/cache_architecture_diagram-61c97025dcbb8f3144d064ed9392f273.png"},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var c=s(6540);const i={},t=c.createContext(i);function r(n){const e=c.useContext(t);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(t.Provider,{value:e},n.children)}}}]);