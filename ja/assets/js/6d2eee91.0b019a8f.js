"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9486],{9086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var c=i(4848),t=i(8453);const s={sidebar_position:3,sidebar_label:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",pagination_next:null,description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u306f\u4f55\u304b\u3001\u305d\u3057\u3066Momento Cache\u304c\u3069\u306e\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b7\u30f3\u30d7\u30eb\u3067\u9ad8\u901f\u306b\u3059\u308b\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"},r="\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",a={id:"cache/introduction/common-caching-strategies",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u306f\u4f55\u304b\u3001\u305d\u3057\u3066Momento Cache\u304c\u3069\u306e\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b7\u30f3\u30d7\u30eb\u3067\u9ad8\u901f\u306b\u3059\u308b\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/introduction/common-caching-strategies.md",sourceDirName:"cache/introduction",slug:"/cache/introduction/common-caching-strategies",permalink:"/ja/cache/introduction/common-caching-strategies",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/introduction/common-caching-strategies.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",pagination_next:null,description:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u306f\u4f55\u304b\u3001\u305d\u3057\u3066Momento Cache\u304c\u3069\u306e\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30b7\u30f3\u30d7\u30eb\u3067\u9ad8\u901f\u306b\u3059\u308b\u306e\u304b\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"},sidebar:"cacheSidebar",previous:{title:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u30d1\u30bf\u30fc\u30f3",permalink:"/ja/cache/introduction/common-caching-patterns"}},d={},o=[{value:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d6\u30e9\u30a6\u30b6\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",id:"\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",id:"\u30ed\u30fc\u30ab\u30eb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",level:2},{value:"\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",id:"\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",level:2},{value:"\u30e9\u30a4\u30c8\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",id:"\u30e9\u30a4\u30c8\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",level:2},{value:"\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",id:"\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565",children:"\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565"}),"\n",(0,c.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u6226\u7565\u3092\u5b9f\u88c5\u3059\u308b\u969b\u306b\u5fc5\u8981\u306a\u91cd\u8981\u306a\u9078\u629e\u304c\u308f\u304b\u3063\u305f\u3068\u3053\u308d\u3067\u3001\u3088\u304f\u4f7f\u308f\u308c\u308b\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u30fb\u30d1\u30bf\u30fc\u30f3\u3092\u3044\u304f\u3064\u304b\u304a\u3055\u3089\u3044\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002\u305d\u308c\u305e\u308c\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u3064\u3044\u3066\u3001\u305d\u306e\u30d1\u30bf\u30fc\u30f3\u3001\u4e0a\u8a18\u306e3\u3064\u306e\u8cea\u554f\u306b\u5bfe\u3059\u308b\u305d\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u9078\u629e\u3001\u305d\u306e\u30d1\u30bf\u30fc\u30f3\u3092\u4f7f\u3044\u305f\u3044\u5834\u5408\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",children:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d6\u30e9\u30a6\u30b6\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0"}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u521d\u306e\u3001\u305d\u3057\u3066\u304a\u305d\u3089\u304f\u6700\u3082\u5358\u7d14\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30a6\u30a7\u30d6\u30d9\u30fc\u30b9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u30ad\u30fc\u30d0\u30ea\u30e5\u30fc\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u4e00\u65e6\u30e6\u30fc\u30b6\u30fc\u304c\u3042\u306a\u305f\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u8a8d\u8a3c\u3055\u308c\u308b\u3068\u3001\u305d\u306e\u5f8c\u306e\u95b2\u89a7\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8868\u793a\u3092\u9ad8\u901f\u5316\u3059\u308b\u305f\u3081\u306b\u3001\u30b5\u30fc\u30d3\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306eID\u3068\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306b\u95a2\u3059\u308b\u3044\u304f\u3064\u304b\u306e\u60c5\u5831\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Cached data in local storage",src:i(1878).A+"",title:"Caching in local storage",width:"1207",height:"176"})}),"\n",(0,c.jsxs)(n.p,{children:["\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001",(0,c.jsx)(n.strong,{children:"\u30ed\u30fc\u30ab\u30eb"}),"\u3001",(0,c.jsx)(n.strong,{children:"\u30b5\u30a4\u30c9"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3042\u308a\u3001\u304a\u305d\u3089\u304f\u8aad\u307f\u53d6\u308a\u6642\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5229\u70b9\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8API\u304c\u6700\u65b0\u306e\u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u30b7\u30f3\u30d7\u30eb\u3067\u3042\u308b\u3053\u3068\u3067\u3059\u3002\u3055\u3089\u306b\u3001\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u306e\u30de\u30b7\u30f3\u4e0a\u306e\u30b9\u30da\u30fc\u30b9\u3092\u4e8b\u5b9f\u4e0a\u8cb8\u3057\u51fa\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u4e8b\u524d\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3057\u305f\u308a\u3001\u5bb9\u91cf\u4e0d\u8db3\u3092\u5fc3\u914d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d6\u30e9\u30a6\u30b6\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6b20\u70b9\u306f\u3001\u7279\u5b9a\u306e\u72b6\u6cc1\u3067\u3057\u304b\u4f7f\u3048\u306a\u3044\u3053\u3068\u3067\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u30d6\u30e9\u30a6\u30b6\u3092\u518d\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u7279\u5b9a\u306e\u64cd\u4f5c\u3092\u7c21\u5358\u306b\u30b9\u30d4\u30fc\u30c9\u30a2\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u3001\u7570\u306a\u308b\u30c7\u30d0\u30a4\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u6642\u3001\u3042\u308b\u3044\u306f\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u7570\u306a\u308b\u30d6\u30e9\u30a6\u30b6\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u6642\u3067\u3055\u3048\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u306f\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002\u3055\u3089\u306b\u3001\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u304c\u30ed\u30fc\u30ab\u30eb\u30fb\u30b9\u30c8\u30ec\u30fc\u30b8\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u30d7\u30ed\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u7121\u52b9\u306b\u3059\u308b\u30e1\u30ab\u30cb\u30ba\u30e0\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30eb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",children:"\u30ed\u30fc\u30ab\u30eb\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0"}),"\n",(0,c.jsx)(n.p,{children:"2\u3064\u76ee\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306f\u3001\u3082\u30461\u3064\u306e\u30ed\u30fc\u30ab\u30eb\u6226\u7565\u3067\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3067\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30fb\u30b5\u30fc\u30d0\u30fc\u30fb\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u3084\u4ed6\u306e\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u306e\u4e2d\u9593\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c7\u30fc\u30bf\u306f\u591a\u304f\u306e\u5834\u5408\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u30ad\u30fc\u30fb\u30d0\u30ea\u30e5\u30fc\u30fb\u30de\u30c3\u30d7\u306e\u3088\u3046\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30fb\u30d7\u30ed\u30bb\u30b9\u5185\u3067\u30a4\u30f3\u30fb\u30e1\u30e2\u30ea\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u305d\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u307e\u305a\u30a4\u30f3\u30e1\u30e2\u30ea\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u5024\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u30d7\u30e9\u30a4\u30de\u30ea\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u30d6\u30e9\u30a6\u30b6\u306e\u30ed\u30fc\u30ab\u30eb\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u540c\u69d8\u3001\u3053\u308c\u306f",(0,c.jsx)(n.strong,{children:"\u30ed\u30fc\u30ab\u30eb"}),"\u3001",(0,c.jsx)(n.strong,{children:"\u30b5\u30a4\u30c9"}),"\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u6226\u7565\u3067\u3042\u308a\u3001\u8aad\u307f\u8fbc\u307f\u6642\u306b\u66f8\u304d\u8fbc\u307e\u308c\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3068\u8a00\u3048\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u6226\u7565\u306e\u5229\u70b9\u306f\u3001\u4f7f\u3044\u3084\u3059\u3055\u3068\u30b7\u30f3\u30d7\u30eb\u3055\u306b\u3042\u308a\u307e\u3059\u3002\u983b\u7e41\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u3001\u6bd4\u8f03\u7684\u5bff\u547d\u306e\u9577\u3044\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408\u3001\u8ffd\u52a0\u306e\u30a4\u30f3\u30d5\u30e9\u3092\u7acb\u3061\u4e0a\u3052\u3066\u904b\u7528\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u500b\u3005\u306e\u30b5\u30fc\u30d0\u30fc\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u7d20\u65e9\u304f\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u8a2d\u5b9a\u30c7\u30fc\u30bf\u306a\u3069\u52d5\u304d\u306e\u9045\u3044\u30c7\u30fc\u30bf\u306b\u306f\u52b9\u679c\u7684\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306e\u6b20\u70b9\u306f\u3001\u30ea\u30e2\u30fc\u30c8\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u624b\u6cd5\u3088\u308a\u3082\u52b9\u679c\u304c\u4f4e\u3044\u3053\u3068\u3067\u3059\u3002\u5404\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u305d\u308c\u305e\u308c\u72ec\u7acb\u3057\u305f\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6301\u3064\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u5e45\u5e83\u304f\u3001\u305d\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u4e00\u5ea6\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f\u3082\u306e\u3060\u3051\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30d2\u30c3\u30c8\u7387\u306f\u304b\u306a\u308a\u4f4e\u304f\u306a\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30af\u30e9\u30b9\u30bf\u30fb\u30b5\u30a4\u30ba\uff08\u305d\u3057\u3066\u304a\u305d\u3089\u304f\u5168\u4f53\u7684\u306a\u8ca0\u8377\uff09\u304c\u5927\u304d\u304f\u306a\u308b\u3068\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d2\u30c3\u30c8\u7387\u306f\u3055\u3089\u306b\u4f4e\u304f\u306a\u308a\u307e\u3059\uff01\u3053\u308c\u306f\u3001AWS Lambda\u306e\u3088\u3046\u306a\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5b9a\u671f\u7684\u306b\u751f\u6210\u30fb\u7834\u68c4\u3055\u308c\u308b\u30cf\u30a4\u30d1\u30fc\u30a8\u30d5\u30a7\u30e1\u30e9\u30eb\u306a\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u5834\u5408\u306b\u7279\u306b\u5384\u4ecb\u3067\u3059\u3002\u6700\u5f8c\u306b\u3001\u30ed\u30fc\u30ab\u30eb\u30d6\u30e9\u30a6\u30b6\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u540c\u69d8\u306b\u3001\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u671f\u9650\u5207\u308c\u306e\u30c7\u30fc\u30bf\u3092\u7121\u52b9\u306b\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",children:"\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0"}),"\n",(0,c.jsx)(n.p,{children:"3\u756a\u76ee\u306e\u3001\u305d\u3057\u3066\u6700\u3082\u4e00\u822c\u7684\u306a\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u6226\u7565\u306f\u3001\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\uff08\u4e00\u822c\u306b\u300c\u9045\u5ef6\u30ed\u30fc\u30c9\u300d\u3068\u547c\u3070\u308c\u308b\uff09\u3067\u3059\u3002\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u307e\u305a\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u3092\u8981\u6c42\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002\u3082\u3057\u30c7\u30fc\u30bf\u304c\u3042\u308c\u3070\u3001\u547c\u3073\u51fa\u3057\u5143\u306b\u8fd4\u3057\u307e\u3059\u3002\u3082\u3057\u30c7\u30fc\u30bf\u304c\u306a\u3051\u308c\u3070\u3001\u30d7\u30e9\u30a4\u30de\u30ea\u30fc\u30fb\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u306b\u30c7\u30fc\u30bf\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u6b21\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u3001\u547c\u3073\u51fa\u3057\u5143\u306b\u30c7\u30fc\u30bf\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Architecture diagram of read-aside caching",src:i(9068).A+"",title:"Read-aside caching",width:"560",height:"760"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001",(0,c.jsx)(n.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u3001\u8aad\u307f\u53d6\u308a\u30d9\u30fc\u30b9\u3001\u30b5\u30a4\u30c9\u306e"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u6226\u7565\u306e\u5229\u70b9\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d2\u30c3\u30c8\u7387\u306e\u5411\u4e0a\u3068\u3001\u307b\u3068\u3093\u3069\u306e\u554f\u984c\u3078\u306e\u6c4e\u7528\u6027\u306b\u3042\u308a\u307e\u3059\u3002\u307b\u3068\u3093\u3069\u306e\u30a2\u30af\u30bb\u30b9\u30d1\u30bf\u30fc\u30f3\u306b\u304a\u3044\u3066\u3001\u4e00\u5ea6\u30a2\u30af\u30bb\u30b9\u3055\u308c\u305f\u30c7\u30fc\u30bf\u7247\u306f\u3001\u305d\u306e\u5f8c\u3059\u3050\u306b\u518d\u3073\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3068\u8a00\u3048\u307e\u3059\u3002\u30c7\u30fc\u30bf\u306e\u4e00\u90e8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u305f\u5f8c\u3001\u4e00\u5143\u5316\u3055\u308c\u305f\u5834\u6240\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u7fa4\u5168\u4f53\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u7387\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306f\u3001\u307b\u307c\u3059\u3079\u3066\u306e\u72b6\u6cc1\u306b\u9069\u7528\u3067\u304d\u307e\u3059\u3002\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30ec\u30b9\u30dd\u30f3\u30b9\u3001\u4e2d\u9593\u8a08\u7b97\u306e\u5f8c\u3001HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3078\u306e\u5b8c\u5168\u306a\u96c6\u7d04\u30ec\u30b9\u30dd\u30f3\u30b9\u306a\u3069\u304c\u4ee3\u8868\u7684\u306a\u4f8b\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u79fb\u884c\u3059\u308b\u3053\u3068\u3067\u3001\u30d2\u30c3\u30c8\u7387\u306f\u4e0a\u304c\u308a\u307e\u3059\u304c\u3001\u904b\u7528\u306e\u8ca0\u62c5\u304c\u5897\u3048\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8907\u96d1\u3055\u3082\u5897\u3057\u307e\u3059\u3002\u7ba1\u7406\u3059\u3079\u304d\u30a4\u30f3\u30d5\u30e9\u304c\u5897\u3048\u3001\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u306e\u53ef\u7528\u6027\u3078\u306e\u5f71\u97ff\u3082\u8003\u616e\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30d7\u30e9\u30a4\u30de\u30ea\u30fb\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\u306e\u3067\u53ef\u7528\u6027\u306b\u5f71\u97ff\u306f\u306a\u3044\u3068\u601d\u3046\u304b\u3082\u3057\u308c\u306a\u3044\u304c\u3001\u591a\u304f\u306e\u505c\u6b62\u306f\u3001\u30d7\u30e9\u30a4\u30de\u30ea\u30fb\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u3078\u306e\u6301\u7d9a\u4e0d\u53ef\u80fd\u306a\u8ca0\u8377\u306b\u3064\u306a\u304c\u308b\u521d\u671f\u30ad\u30e3\u30c3\u30b7\u30e5\u969c\u5bb3\u304c\u539f\u56e0\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u3055\u3089\u306b\u3001\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3001\u30c7\u30fc\u30bf \u306e\u6700\u521d\u306e\u8aad\u307f\u53d6\u308a\u306b\u5bfe\u3057\u3066\u30ec\u30a4\u30c6\u30f3\u30b7\u30fb\u30b3\u30b9\u30c8\u3092\u652f\u6255\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8aad\u307f\u53d6\u308a\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306e\u30ec\u30b3\u30fc\u30c9\u306b\u5206\u6563\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u307b\u307c\u6e80\u676f\u306b\u306a\u308a\u3001\u5168\u4f53\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u7387\u304c\u4f4e\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30e9\u30a4\u30c8\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",children:"\u30e9\u30a4\u30c8\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0"}),"\n",(0,c.jsx)(n.p,{children:"\u6b21\u306e\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u6226\u7565\u3082\u524d\u56de\u3068\u540c\u69d8\u3067\u3059\u3002\u30e9\u30a4\u30c8\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3067\u306f\u3001\u30ea\u30fc\u30c9\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u540c\u3058\u3088\u3046\u306b\u96c6\u4e2d\u578b\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u521d\u3081\u3066\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5f8c\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u30ed\u30fc\u30c9\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3093\u3060\u3068\u304d\u306b\u7a4d\u6975\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Architecture diagram of write-aside caching",src:i(8517).A+"",title:"Write-aside caching",width:"580",height:"760"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001",(0,c.jsx)(n.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u3001\u66f8\u304d\u8fbc\u307f\u30d9\u30fc\u30b9\u3001\u30b5\u30a4\u30c9\u306e"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3067\u3042\u308b\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30fb\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u306e\u5229\u70b9\u306e\u591a\u304f\u306f\u3001\u30ea\u30fc\u30c9\u30fb\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3068\u4f3c\u3066\u3044\u307e\u3059\u3002\u96c6\u4e2d\u578b\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u306f\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u7387\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u5404\u30a8\u30f3\u30c8\u30ea\u30fc\u306e\u6700\u521d\u306e\u30df\u30b9\u304c\u306a\u304f\u306a\u308b\u306e\u3067\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d2\u30c3\u30c8\u7387\u306f\u3055\u3089\u306b\u9ad8\u304f\u306a\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u66f8\u304d\u8fbc\u307f\u5f8c\u3059\u3050\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u3053\u3068\u304c\u308f\u304b\u3063\u3066\u3044\u308b\u30c7\u30fc\u30bf\u306e\u5f85\u3061\u6642\u9593\u3092\u77ed\u7e2e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6700\u5f8c\u306b\u3001\u6b63\u3057\u304f\u5b9f\u88c5\u3059\u308c\u3070\u3001\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u66f4\u65b0\u304c\u5373\u5ea7\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u53cd\u6620\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\u304c\u53e4\u304f\u306a\u308b\u53ef\u80fd\u6027\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30e9\u30a4\u30c8\u30fb\u30a2\u30b5\u30a4\u30c9\u6226\u7565\u306e\u6b20\u70b9\u306f\u3001\u8907\u96d1\u3055\u304c\u5897\u3059\u3053\u3068\u3067\u3059\u3002\u30ea\u30fc\u30c9\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u306f\u3001\u5358\u4e00\u306e\u30c7\u30fc\u30bf\u30fb\u30a2\u30af\u30bb\u30b9\u30fb\u30d1\u30b9\u306e\u4e2d\u3067\u5b9f\u88c5\u3055\u308c\u308b\u65b9\u6cd5\u3068\u3057\u3066\u306f\u5358\u7d14\u660e\u5feb\u3067\u3059\u3002\u30e9\u30a4\u30c8\u30fb\u30a2\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ad\u30fc\u3068\u5024\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u3001\u8aad\u307f\u53d6\u308a\u30d1\u30b9\u3068\u66f8\u304d\u8fbc\u307f\u30d1\u30b9\u304c\u9023\u643a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u8aad\u307f\u53d6\u308a\u3068\u66f8\u304d\u8fbc\u307f\u306e\u4e21\u65b9\u306e\u30a2\u30af\u30bb\u30b9\u30d1\u30bf\u30fc\u30f3\u3092\u6df1\u304f\u7406\u89e3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u308a\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u5165\u5ff5\u306a\u76e3\u67fb\u3068\u3001\u30d1\u30bf\u30fc\u30f3\u9593\u306e\u30c7\u30fc\u30bf\u306e\u9673\u8150\u5316\u3092\u9632\u3050\u305f\u3081\u306e\u7d76\u3048\u9593\u306a\u3044\u8b66\u6212\u304c\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0",children:"\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0"}),"\n",(0,c.jsx)(n.p,{children:"\u6700\u5f8c\u306e2\u3064\u306e\u6226\u7565\u306f\u3001\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3068\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u3067\u3059\u3002\u3053\u306e2\u3064\u306e\u6226\u7565\u306f\u3001\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u76f4\u63a5\u7d4c\u7531\u3059\u308b\u3068\u3044\u3046\u70b9\u3067\u30e6\u30cb\u30fc\u30af\u3067\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u8981\u6c42\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u307e\u3059\u3002\u30c7\u30fc\u30bf\u304c\u30ed\u30fc\u30ab\u30eb\u3067\u5229\u7528\u53ef\u80fd\u306a\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u305d\u308c\u3092\u8fd4\u3057\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u3001_cache\u81ea\u8eab_\u304c\u30d7\u30e9\u30a4\u30de\u30ea\u30fb\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u304b\u3089\u30c7\u30fc\u30bf\u3092\u30d5\u30a7\u30c3\u30c1\u3057\u3001\u30c7\u30fc\u30bf\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3001\u305d\u308c\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u4e0b\u306e\u56f3\u306f\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30d5\u30ed\u30fc\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u66f8\u304d\u8fbc\u307f\u8981\u6c42\u304c\u6765\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u66f8\u304d\u8fbc\u307f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u305d\u308c\u3092\u30e1\u30a4\u30f3\u30fb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u6c38\u7d9a\u5316\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u66f8\u304d\u8fbc\u307f\u304c\u6c38\u7d9a\u5316\u3055\u308c\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8fd4\u3059\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Architecture diagram of write-through caching",src:i(7862).A+"",title:"Write-through caching",width:"756",height:"760"})}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001",(0,c.jsx)(n.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u3001\u30a4\u30f3\u30e9\u30a4\u30f3"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u6226\u7565\u3067\u3042\u308a\u3001\u8aad\u307f\u8fbc\u307f\u5074\u3067\u3082\u66f8\u304d\u8fbc\u307f\u5074\u3067\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Content_delivery_network",children:"\u30b3\u30f3\u30c6\u30f3\u30c4\u30fb\u30c7\u30ea\u30d0\u30ea\u30fc\u30fb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}),"(CDN)\u306f\u3001\u4e0b\u306e\u753b\u50cf\u306b\u3042\u308b\u3088\u3046\u306b\u3001\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4e00\u7a2e\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Architecture diagram of a content delivery network (CDN)",src:i(7861).A+"",title:"Read-through CDN",width:"870",height:"301"})}),"\n",(0,c.jsxs)(n.p,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u4e00\u90e8\u306b\u5bfe\u3057\u3066HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3044\u3001CDN\u306f\u5229\u7528\u53ef\u80fd\u3067\u3042\u308c\u3070\u30a8\u30c3\u30b8\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u305d\u308c\u3092\u63d0\u4f9b\u3057\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u30aa\u30ea\u30b8\u30f3\u306b\u623b\u308b\u3002CDN\u304c\u30aa\u30ea\u30b8\u30f3\u304b\u3089\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u53d6\u5f97\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u5f8c\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u305f\u3081\u306b\u30a8\u30c3\u30b8\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u4ed6\u306b\u3082\u3001",(0,c.jsx)(n.a,{href:"https://varnish-cache.org/",children:"Varnish"}),"\u3084",(0,c.jsx)(n.a,{href:"https://www.nginx.com/",children:"Nginx"}),"\u306e\u3088\u3046\u306aHTTP\u30d9\u30fc\u30b9\u306e\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u3082\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d9\u30fc\u30b9\u306e\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3082\u3063\u3068\u7a00\u3060\u304c\u3001\u5b58\u5728\u3059\u308b\u3002",(0,c.jsx)(n.a,{href:"https://aws.amazon.com/dynamodb/dax/",children:"DynamoDB Accelerator"})," (DAX)\u306f\u3001DynamoDB\u306e\u30ea\u30fc\u30c9\u30b9\u30eb\u30fc\u3001\u30e9\u30a4\u30c8\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3042\u308b\u3002DAX\u306b\u5bfe\u3057\u3066DynamoDB\u30c6\u30fc\u30d6\u30eb\u3068\u540c\u3058\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001DAX\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066DynamoDB\u30c6\u30fc\u30d6\u30eb\u306b\u8aad\u307f\u8fbc\u307f\u3068\u66f8\u304d\u8fbc\u307f\u3092\u8ee2\u9001\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u5229\u70b9\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8996\u70b9\u304b\u3089\u898b\u305f\u30b7\u30f3\u30d7\u30eb\u3055\u306b\u3042\u308a\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30ad\u30fc\u3092\u7ba1\u7406\u3057\u305f\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30df\u30b9\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306b\u591a\u6bb5\u968e\u306e\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u88c5\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u3053\u308c\u3092\u51e6\u7406\u3057\u3066\u304f\u308c\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30ea\u30e2\u30fc\u30c8\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u3067\u3042\u308b\u305f\u3081\u3001\u30b5\u30a4\u30c9\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u898b\u3089\u308c\u308b\u3088\u3046\u306a\u9ad8\u3044\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30d2\u30c3\u30c8\u7387\u3068\u3044\u3046\u30e1\u30ea\u30c3\u30c8\u3082\u5f97\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u306f\u30c7\u30e1\u30ea\u30c3\u30c8\u3082\u3042\u308a\u307e\u3059\u3002\u7b2c\u4e00\u306b\u3001\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u306e\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u898b\u3064\u3051\u306b\u304f\u3044\u304b\u3001\u5b58\u5728\u3057\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u8005\u306f\u3001\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u30fb\u30bd\u30fc\u30b9\u3078\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u51e6\u7406\u3059\u308b\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5b9f\u88c5\u306b\u3088\u3063\u3066\u306f\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30fb\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3068\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52d5\u4f5c\u306b\u77db\u76fe\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30a4\u30f3\u30e9\u30a4\u30f3\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u91cd\u8981\u306a\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u304c\u8ffd\u52a0\u3055\u308c\u3001\u30a2\u30b5\u30a4\u30c9\u30ad\u30e3\u30c3\u30b7\u30e5\u3088\u308a\u3082\u53ef\u7528\u6027\u306b\u5f71\u97ff\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1878:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/local-storage-caching-8fdad5d220416e8d2bec417c542ee82d.png"},9068:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/read-aside-caching-1acc971ecbacc3b2ab849e23535e845c.png"},7861:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/read-through-cdn-69630182d743ee83526444d9a981f842.png"},8517:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/write-aside-caching-40ad59b23711d30f65a9a7dcd70b9d79.png"},7862:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/write-through-caching-635e0645a848c7b64b6e1de6302d05d9.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var c=i(6540);const t={},s=c.createContext(t);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);