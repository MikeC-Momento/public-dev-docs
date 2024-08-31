"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2742],{3770:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=s(4848),a=s(8453),o=s(1470),t=s(9365),c=s(8254),r=s(7206);const l={sidebar_position:10,title:"Instant Messaging Pattern",sidebar_label:"Instant messaging",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",keywords:["topics","development patterns","momento","chat","instant messaging","enterprise patterns"]},p="Momento Cache\u3068Topics\u3092\u4f7f\u3063\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u69cb\u7bc9\u3059\u308b",d={id:"topics/patterns/instant-messaging",title:"Instant Messaging Pattern",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/patterns/instant-messaging.mdx",sourceDirName:"topics/patterns",slug:"/topics/patterns/instant-messaging",permalink:"/ja/topics/patterns/instant-messaging",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/patterns/instant-messaging.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Instant Messaging Pattern",sidebar_label:"Instant messaging",description:"Learn best practices for building instant messaging with Momento Cache and Topics.",keywords:["topics","development patterns","momento","chat","instant messaging","enterprise patterns"]},sidebar:"topicsSidebar",previous:{title:"Patterns"},next:{title:"Running background tasks",permalink:"/ja/topics/patterns/running-background-tasks"}},h={},m=[{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",level:2},{value:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2},{value:"Message storage",id:"message-storage",level:3},{value:"Lists",id:"lists",level:4},{value:"Delivery",id:"delivery",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767a\u884c",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767a\u884c",level:4},{value:"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad",id:"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad",level:4},{value:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u307f\u3067\u306e\u5b9f\u88c5",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u307f\u3067\u306e\u5b9f\u88c5",level:3},{value:"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9 \u3068 \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9 \u306e\u5b9f\u88c5",id:"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9-\u3068-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9-\u306e\u5b9f\u88c5",level:3},{value:"Learn more",id:"learn-more",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"momento-cache\u3068topics\u3092\u4f7f\u3063\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u69cb\u7bc9\u3059\u308b",children:"Momento Cache\u3068Topics\u3092\u4f7f\u3063\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u69cb\u7bc9\u3059\u308b"})}),"\n",(0,i.jsxs)(n.p,{children:["\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306f\u3001\u591a\u304f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5fc5\u9808\u306e\u6a5f\u80fd\u3067\u3059\u30021\u5bfe1\u30011\u5bfe\u591a\u3001\u591a\u5bfe\u591a\u306e\u4f1a\u8a71\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u884c\u3046\u3053\u3068\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u8003\u3048\u3089\u308c\u3066\u3044\u307e\u3059\u3002Momento Cache\u3068Topics\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306a\u3057\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u3092\u7d44\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(n.a,{href:"/platform/sdks/web",children:"Momento web SDK"}),"\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d6\u30e9\u30a6\u30b6\u3067\u76f4\u63a5\u30ad\u30e3\u30c3\u30b7\u30e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u304a\u3088\u3073\u8cfc\u8aad\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001",(0,i.jsx)(n.strong,{children:"Momento Cache"})," \u3092\u4f7f\u7528\u3057\u3066\u904e\u53bb\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4fdd\u5b58\u3057\u3001",(0,i.jsx)(n.strong,{children:"Momento Topics"})," \u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u53c2\u52a0\u8005\u9593\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30fb\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4fc3\u9032\u3057\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}),"\n",(0,i.jsx)(n.p,{children:"Momento\u3067\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u69cb\u7bc9\u306f\u3001\u5b8c\u5168\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u3001\u3064\u307e\u308a\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30d6\u30e9\u30a6\u30b6\u3001iPhone\u30a2\u30d7\u30ea\u3001Android\u30a2\u30d7\u30ea\u306f\u3059\u3079\u3066\u3001Momento\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3059\u308b\u6a5f\u80fd\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Diagram of client applications communicating directly via Momento",src:s(5156).A+"",width:"1299",height:"253"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u306e\u56f3\u3067\u306f\u3001\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u304c\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3059\u308b\u3068\u3001",(0,i.jsx)(n.a,{href:"/cache/develop/basics/datatypes#lists",children:"list"})," \u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u56fa\u6709\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3001\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u9593\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u308b\u3068\u3001\u9001\u4fe1\u8005\u306b\u3088\u3063\u3066\u76f4\u63a5\u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,i.jsx)(n.p,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306f2\u3064\u306e\u90e8\u5206\u306b\u5206\u304b\u308c\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Message storage"}),"\n",(0,i.jsx)(n.li,{children:"Delivery"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u3044\u3064\u3067\u3082\u30c1\u30e3\u30c3\u30c8\u306b\u53c2\u52a0\u3057\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5c65\u6b74\u3092\u95b2\u89a7\u3057\u305f\u308a\u3001\u65b0\u3057\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53d7\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"message-storage",children:"Message storage"}),"\n",(0,i.jsxs)(n.p,{children:["\u307b\u3068\u3093\u3069\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5230\u7740\u3059\u308b\u524d\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u305f\u5834\u5408\u3001\u4f1a\u8a71\u306e\u5c65\u6b74\u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u306b\u5165\u308b\u3068\u304d\u306e\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u30bf\u30b9\u30af\u306e\u4e00\u90e8\u306f\u3001\u3053\u306e\u5c65\u6b74\u3092\u30ed\u30fc\u30c9\u3057\u3066\u753b\u9762\u306b\u8868\u793a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306fMomento\u306e",(0,i.jsx)(n.strong,{children:"list"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u3067\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"lists",children:"Lists"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../../cache/develop/basics/datatypes#lists",children:"\u30ea\u30b9\u30c8"})," \u306f\u3001\u8981\u7d20\u306e\u9806\u5e8f\u4ed8\u304d\u914d\u5217\u3092\u683c\u7d0d\u3059\u308b\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u3067\u3059\u3002\u8981\u7d20\u3092\u30ea\u30b9\u30c8\u306e\u524d\u9762\u307e\u305f\u306f\u80cc\u9762\u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u4e00\u5ea6\u306b\u8907\u6570\u306e\u30a8\u30f3\u30c8\u30ea\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u305f\u9806\u306b\u683c\u7d0d\u3055\u308c\u308b\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306b\u6700\u9069\u306a\u30c7\u30fc\u30bf\u578b\u3067\u3059\u3002\u30e6\u30fc\u30b6\u304c\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u53c2\u52a0\u3059\u308b\u3068\u30011\u56de\u306e",(0,i.jsx)(n.a,{href:"../../cache/develop/api-reference/list-collections#listfetch",children:"listFetch API\u30b3\u30fc\u30eb"}),"\u3067\u30c1\u30e3\u30c3\u30c8\u5c65\u6b74\u5168\u4f53\u3092\u3059\u3070\u3084\u304f\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30ea\u30b9\u30c8\u5185\u306e\u8981\u7d20\u306f\u4e00\u610f\u3067\u3042\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u540c\u3058\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4f55\u5ea6\u3082\u30ea\u30b9\u30c8\u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308c\u3070\u3001\u305d\u306e\u90fd\u5ea6\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u7528\u9014\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u9069\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u5ea6\u306b N \u500b\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d6\u5f97"}),"\n",(0,i.jsx)(n.li,{children:"\u4e00\u5ea6\u306b\u8907\u6570\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8ffd\u52a0"}),"\n",(0,i.jsx)(n.li,{children:"\u4e00\u5b9a\u306e\u9577\u3055\u306e\u30c1\u30e3\u30c3\u30c8\u5c65\u6b74\u3001\u3064\u307e\u308a\u76f4\u8fd1\u306e100\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u4fdd\u6301"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30ea\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u591a\u304f\u306e\u914d\u5217\u64cd\u4f5c\u95a2\u6570\u304c\u3042\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u5c65\u6b74\u304c\u9577\u304f\u306a\u308a\u3059\u304e\u305f\u5834\u5408\u306b\u81ea\u52d5\u7684\u306b\u5207\u308a\u8a70\u3081\u305f\u308a\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u30e2\u30c7\u30ec\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u306e\u305f\u3081\u306b\u7279\u5b9a\u306e\u8981\u7d20\u3092\u524a\u9664\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"delivery",children:"Delivery"}),"\n",(0,i.jsxs)(n.p,{children:["\u6280\u8853\u7684\u306b\u306f\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u4fdd\u5b58\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306e\u5fc5\u9808\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u7406\u8ad6\u7684\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u63a5\u7d9a\u3057\u3066\u3044\u308b\u9593\u306b\u9001\u4fe1\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3060\u3051\u3092\u8868\u793a\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30e1\u30e2\u30ea\u30fc\u306b\u4fdd\u5b58\u3057\u3066\u304a\u3051\u3070\u3088\u3044\u3002\u5bfe\u7167\u7684\u306b\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u914d\u4fe1\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306e\u5fc5\u9808\u90e8\u5206\u3067\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u8005\u304b\u3089\u3059\u3079\u3066\u306e\u53d7\u4fe1\u8005\u306b\u6700\u5c0f\u9650\u306e\u5f85\u3061\u6642\u9593\u3067\u5c4a\u3051\u308b\u3053\u3068\u304c\u3001\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u6838\u5fc3\u3067\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u305f\u3081\u306b\u3001",(0,i.jsx)(n.a,{href:"https://www.gomomento.com/platform/topics",children:"Momento Topics"}),"\u3092\u4f7f\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Momento Topics\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u540c\u58eb\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u3001\u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3001\u30b5\u30fc\u30d0\u30fc\u3068\u30b5\u30fc\u30d0\u30fc\u3092\u63a5\u7d9a\u3059\u308b\u4f4e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u306ePub/Sub\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002WebSocket\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3001Momento\u306f\u30c8\u30d4\u30c3\u30af\u306e\u3059\u3079\u3066\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u306b\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306e\u5834\u5408\u3001\u9001\u4fe1\u8005\u306f\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092 ",(0,i.jsx)(n.em,{children:"\u767a\u884c"})," \u3057\u307e\u3059\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d7\u4fe1\u8005\u306f\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u3088\u3063\u30661\u4eba\u307e\u305f\u306f\u591a\u6570\u306b\u306a\u308a\u307e\u3059\u304c\u3001",(0,i.jsx)(n.em,{children:"\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0"}),"\u306b\u306a\u308a\u307e\u3059\u3002Momento Topics\u306f\u3001\u516c\u958b\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u8cfc\u8aad\u8005\u306b\u914d\u4fe1\u3057\u3001\u79c1\u305f\u3061\u304c\u6c42\u3081\u3066\u3044\u308b\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u307e\u3059\uff01"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Momento \u30c8\u30d4\u30c3\u30af\u306f\u3001\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u3001\u67d4\u8edf\u3067\u52d5\u7684\u306a\u30c8\u30d4\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u3092\u69cb\u7bc9\u3059\u308b\u63a8\u5968\u306e\u65b9\u6cd5\u306f\u3001",(0,i.jsx)(n.em,{children:"\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u307e\u305f\u306f\u30bb\u30c3\u30b7\u30e7\u30f3\u8b58\u5225\u5b50\u3092\u30c8\u30d4\u30c3\u30af\u540d"}),"\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30c1\u30e3\u30c3\u30c8\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u67d4\u8edf\u3067\u5c02\u7528\u306e\u30c8\u30d4\u30c3\u30af\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.h4,{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767a\u884c",children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u767a\u884c"}),"\n",(0,i.jsx)(n.p,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u306e\u306f\u3001\u305f\u3063\u305f\u3072\u3068\u3064\u306e\u30b3\u30de\u30f3\u30c9\u3060\u3051\u3067\u3059\uff1a"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.A,{value:"node",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await topics.publish('message-namespace', sessionId, 'Hello world!');\n"})})}),(0,i.jsx)(t.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'topics.publish("message-namespace", sessionId, "Hello world!")\n'})})}),(0,i.jsx)(t.A,{value:"go",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'_, err := topics.Publish(ctx, &momento.TopicPublishRequest{\n  CacheName: momento.String("message-namespace"),\n  TopicName: sessionId,\n  Value: momento.String("Hello world!")\n})\n'})})}),(0,i.jsx)(t.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final TopicPublishResponse response = topics.publish("message-namespace", sessionId, "Hello world!").join();\n'})})}),(0,i.jsx)(t.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var response = await topics.PublishAsync("message-namespace", sessionId, "Hello world!");\n'})})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad",children:"\u30c8\u30d4\u30c3\u30af\u306e\u8cfc\u8aad"}),"\n",(0,i.jsx)(n.p,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8cfc\u8aad\u306f\u3001\u7279\u5b9a\u306e\u30c8\u30d4\u30c3\u30af\u306b\u4f55\u304b\u304c\u516c\u958b\u3055\u308c\u308b\u305f\u3073\u306b\u3001Momento\u306b\u305d\u308c\u3092\u914d\u4fe1\u3057\u3001\u7279\u5b9a\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u307e\u3059\u3002\u500b\u3005\u306e\u30c8\u30d4\u30c3\u30af\u306b\u5bfe\u3057\u3066\u30011 \u304b\u3089\u6570\u5343 (\u3042\u308b\u3044\u306f\u305d\u308c\u4ee5\u4e0a!) \u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u8cfc\u8aad\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.A,{value:"node",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const subscription = await topics.subscribe('message-namespace', sessionId, {\n  onItem: (data) => processMessage(data.value(), data.tokenId())\n});\n"})})}),(0,i.jsx)(t.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'with TopicClient(TopicConfigurations.Default.v1(), _AUTH_PROVIDER) as client:\n  subscription = client.subscribe("cache", "my_topic")\n  match subscription:\n    case TopicSubscribe.Error():\n      raise Exception("Subscription error: ", subscription.message)\n    case TopicSubscribe.Subscription():\n      for item in subscription:\n        match item:\n          case TopicSubscriptionItem.Text():\n            print(item.value)\n          case TopicSubscriptionItem.Binary():\n            print(item.value!r)\n'})})}),(0,i.jsx)(t.A,{value:"go",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"subscription, err := topicClient.Subscribe(ctx, &momento.TopicSubscribeRequest{\n  CacheName: cacheName,\n  TopicName: topicName,\n})\nif err != nil {\n  panic(err)\n}\n\ngo func() { pollForMessages(ctx, subscription) }()\ntime.Sleep(time.Second)\n\nfunc pollForMessages(ctx context.Context, subscription momento.TopicSubscription) {\n  for {\n    item, err := subscription.Item(ctx)\n    if err != nil {\n      panic(err)\n    }\n    switch message := item.(type) {\n    case momento.String:\n      fmt.Printf(\"received message as string: '%v'\\n\", message)\n    case momento.Bytes:\n      fmt.Printf(\"received message as bytes: '%v'\\n\", message)\n    }\n  }\n}\n"})})}),(0,i.jsx)(t.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'final TopicSubscribeResponse subscribeResponse =\n  topicClient\n    .subscribe(\n      TopicExample.CACHE_NAME,\n      TOPIC_NAME,\n      new ISubscriptionCallbacks() {\n        @Override\n        public void onItem(TopicMessage message) {\n          logger.info("Received message on topic {}: {}", TOPIC_NAME, message.toString());\n        };\n\n        @Override\n        public void onError(Throwable error) {\n          logger.error("Subscription to topic {} failed with error", TOPIC_NAME, error);\n        };\n      };).join();\n'})})}),(0,i.jsx)(t.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var subscriptionTask = Task.Run(async () =>\n{\n  var subscribeResponse = await topicClient.SubscribeAsync(cacheName, TopicName);\n  switch (subscribeResponse)\n  {\n    case TopicSubscribeResponse.Subscription subscription:\n      try {\n        var cancellableSubscription = subscription.WithCancellation(cts.Token);\n        await foreach (var message in cancellableSubscription) {\n          switch (message)\n          {\n            case TopicMessage.Binary:\n              Logger.LogInformation("Received binary message from topic: {binaryData}", Convert.ToBase64String(binary.Value));\n              break;\n            case TopicMessage.Text text:\n              Logger.LogInformation("Received string message from topic: {message}", text.Value);\n              break;\n            case TopicMessage.Error error:\n              Logger.LogInformation("Received error message from topic: {error}", error.Message);\n              cts.Cancel();\n              break;\n          }\n        }\n      } finally {\n        subscription.Dispose();\n      }\n\n      break;\n    case TopicSubscribeResponse.Error error:\n      Logger.LogInformation("Error subscribing to a topic: {error}", error.Message);\n      cts.Cancel();\n      break;\n  }\n});\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"}),"\n",(0,i.jsxs)(n.p,{children:["Momento\u306f",(0,i.jsx)(n.a,{href:"../develop/authentication/tokens",children:"\u5805\u7262\u306a\u8a8d\u8a3c\u30e1\u30ab\u30cb\u30ba\u30e0"}),"\u3092\u63d0\u4f9b\u3057\u3001\u30b3\u30f3\u30b7\u30e5\u30fc\u30de\u304c\u7279\u5b9a\u306e\u30ea\u30bd\u30fc\u30b9\u3084\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u5236\u9650\u3057\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u6a5f\u80fd\u3092\u69cb\u7bc9\u3059\u308b\u3068\u304d\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30af\u30bb\u30b9\u3059\u3079\u304d\u3067\u306f\u306a\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u508d\u53d7\u3057\u306a\u3044\u3088\u3046\u306b\u3001\u30b9\u30b3\u30fc\u30d7\u3092\u8003\u616e\u3059\u308b\u3053\u3068\u306f\u975e\u5e38\u306b\u91cd\u8981\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u30d1\u30bf\u30fc\u30f3\u3067\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u30c8\u30d4\u30c3\u30af\u306e\u4e21\u65b9\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u3092\u30c8\u30d4\u30c3\u30af\u540d\u3068\u4e00\u81f4\u3055\u305b\u308b\u3053\u3068\u3067\u3001\u4e0a\u3067\u63a8\u5968\u3057\u305f\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u5f93\u3063\u3066\u3001\u3044\u304f\u3064\u304b\u306e\u7570\u306a\u308b\u65b9\u6cd5\u3067\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u307f\u3067\u306e\u5b9f\u88c5",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u307f\u3067\u306e\u5b9f\u88c5"}),"\n",(0,i.jsx)(n.p,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u3092\u5b8c\u5168\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u3067\u3001\u3064\u307e\u308a\u30d6\u30e9\u30a6\u30b6\u3084\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u76f4\u63a5\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30dd\u30ea\u30b7\u30fc\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.A,{value:"node",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const scope = {\n  permissions: [\n    {\n      role: "readwrite",\n      cache: "instant-messaging",\n      item: {\n        key: chatId\n      }\n    },\n    {\n      role: "publishsubscribe",\n      cache: "instant-messaging",\n      topic: chatId\n    }\n  ]\n};\n\nconst token = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1));\n'})})}),(0,i.jsx)(t.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'List<DisposableTokenPermission> permissions = new ArrayList<>();\n  permissions.add(\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadWrite, CacheSelector.ByName("instant-messaging"), CacheSelector.ByName(chatId)));\n  permissions.add(\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishSubscribe,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId)));\n  DisposableTokenScope scope = new DisposableTokenScope(permissions);\n\n  GenerateDisposableTokenResponse response =  authClient.generateDisposableTokenAsync(scope, ExpiresIn.hours(1)).join();\n'})})}),(0,i.jsx)(t.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var scope = new DisposableTokenScope(Permissions: new List<DisposableTokenPermission>\n  {\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadWrite,\n          CacheSelector.ByName("instant-messaging"),\n          CacheSelector.ByName(chatid)\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishSubscribe,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatid)\n      )\n  });\n\n  var tokenResponse = await client.GenerateDisposableTokenAsync( scope, ExpiresIn.Hours(1));\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u7279\u5b9a\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u306b\u8aad\u307f\u53d6\u308a\u6a29\u9650\u3068\u66f8\u304d\u8fbc\u307f\u6a29\u9650\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305f\u30011\u3064\u306e\u30c8\u30d4\u30c3\u30af\u306b\u5bfe\u3057\u3066\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3068\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u306e\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u304c\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002\u30b3\u30f3\u30b7\u30e5\u30fc\u30de\u306f\u30011\u3064\u306e\u30c8\u30d4\u30c3\u30af\u306b\u5bfe\u3057\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u30011\u3064\u306e\u30c8\u30d4\u30c3\u30af\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ed6\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u8a8d\u8a3c\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u3068\u30c8\u30d4\u30c3\u30af\u306f\u540c\u3058\u5024\u3092\u5171\u6709\u3059\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u63a8\u5968\u3055\u308c\u308b\u30d9\u30b9\u30c8\u30fb\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3042\u308a\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30fb\u30a2\u30a4\u30c6\u30e0\u306e\u30c7\u30fc\u30bf\u304c\u30c8\u30d4\u30c3\u30af\u306b\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5e72\u6e09\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30dd\u30ea\u30b7\u30fc\u304c\u4f5c\u6210\u3055\u308c\u305f\u3089\u3001\u305d\u308c\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u6e21\u3057\u3001\u8a2d\u5b9a\u3055\u308c\u305f\u6642\u9593\u5f8c\u306b\u5931\u52b9\u3059\u308b\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u306e\u307f\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306e\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u306f\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u4fe1\u983c\u6027\u3067\u3059\u3002\u3053\u308c\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u66f8\u304d\u8fbc\u307f\u6a29\u9650\u3092\u4e0e\u3048\u308b\u3053\u3068\u306b\u306a\u308b\u306e\u3067\u3001\u30b3\u30fc\u30c9\u3067\u516c\u958b\u3059\u308b\u5185\u5bb9\u306b\u306f\u6ce8\u610f\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30a8\u30f3\u30c9\u30fb\u30e6\u30fc\u30b6\u30fc\u306b\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u3092\u8a31\u53ef\u3059\u308b\u3053\u3068\u306f\u3001\u305d\u306e\u4f7f\u7528\u65b9\u6cd5\u306b\u5bfe\u3059\u308b\u4fe1\u983c\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u307e\u305f\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u30b3\u30fc\u30c9\u306b\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u96c6\u4e2d\u3055\u305b\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30c7\u30fc\u30bf\u3092\u5206\u6563\u3055\u305b\u3066\u4fdd\u5b58\u3059\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u53d6\u308a\u307e\u3059\u3002"}),(0,i.jsx)(n.p,{children:"\u3082\u3057\u305d\u308c\u304c\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3068\u3063\u3066\u8a31\u5bb9\u7bc4\u56f2\u3067\u3042\u308c\u3070\u3001\u6bd4\u985e\u306e\u306a\u3044\u5e02\u5834\u6295\u5165\u307e\u3067\u306e\u6642\u9593\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8907\u96d1\u3055\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9-\u3068-\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9-\u306e\u5b9f\u88c5",children:"\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9 \u3068 \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9 \u306e\u5b9f\u88c5"}),"\n",(0,i.jsx)(n.p,{children:"\u66f8\u304d\u8fbc\u307f\u3092\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u30b3\u30fc\u30c9\u306b\u96c6\u4e2d\u3055\u305b\u308b\u3068\u3001\u30d1\u30bf\u30fc\u30f3\u306f\u5c11\u3057\u5909\u308f\u308a\u307e\u3059\u3002\u751f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u5165\u529b\u306f1\u3064\u306e\u30c8\u30d4\u30c3\u30af\u3092\u901a\u3057\u3066\u9001\u4fe1\u3055\u308c\u3001\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u30d4\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002\u691c\u8a3c\u3055\u308c\u305f\u30c8\u30d4\u30c3\u30af\u306b\u9001\u308a\u8fd4\u3059\u524d\u306b\u3001\u5909\u63db\u3084\u30e2\u30c7\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u884c\u308f\u308c\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306b\u5f93\u3063\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u4f7f\u7528\u3055\u308c\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u4f8b\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.A,{value:"node",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const scope = {\n  permissions: [\n    {\n      role: "read",\n      cache: "instant-messaging",\n      item: {\n        key: chatId\n      }\n    },\n    {\n      role: "publishonly",\n      cache: "instant-messaging",\n      topic: `${chatid}-input`\n    },\n    {\n      role: "subscribeonly",\n      cache: "instant-messaging",\n      topic: chatid\n    },\n  ]\n};\n\nconst token = await authClient.generateDisposableToken(scope, ExpiresIn.hours(1));\n'})})}),(0,i.jsx)(t.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'List<DisposableTokenPermission> permissions = new ArrayList<>();\n  permissions.add(\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadOnly, CacheSelector.ByName("instant-messaging"), CacheSelector.ByName(chatId)));\n  permissions.add(\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId + "-input")));\n  permissions.add(\n    new DisposableToken.TopicPermission(\n          TopicRole.SubscribeOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatId)));\n\n  DisposableTokenScope scope = new DisposableTokenScope(permissions);\n\n  GenerateDisposableTokenResponse response =  authClient.generateDisposableTokenAsync(scope, ExpiresIn.hours(1)).join();\n'})})}),(0,i.jsx)(t.A,{value:"dotnet",label:".NET",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var scope = new DisposableTokenScope(Permissions: new List<DisposableTokenPermission>\n  {\n      new DisposableToken.CacheItemPermission(\n          CacheRole.ReadOnly,\n          CacheSelector.ByName("instant-messaging"),\n          CacheSelector.ByName(chatid)\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.PublishOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName($"{chatid}-input")\n      ),\n      new DisposableToken.TopicPermission(\n          TopicRole.SubscribeOnly,\n          CacheSelector.ByName("instant-messaging"),\n          TopicSelector.ByName(chatid)\n      )\n  });\n\n  var tokenResponse = await client.GenerateDisposableTokenAsync( scope, ExpiresIn.Hours(1));\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u4f1a\u8a71\u3092\u683c\u7d0d\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30a2\u30a4\u30c6\u30e0\u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002\u66f8\u304d\u8fbc\u307f\u306f\u3001\u30e2\u30c7\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u5909\u63db\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u884c\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u307e\u305f\u3001",(0,i.jsx)(n.code,{children:"{chatid}-input"}),"\u30c8\u30d4\u30c3\u30af\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u30a2\u30af\u30bb\u30b9\u3082\u8a31\u53ef\u3059\u308b\u3002\u30b5\u30fc\u30d0\u30b3\u30fc\u30c9\u306f\u3053\u306e\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3057\u3001\u30e2\u30c7\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u884c\u3044\u3001\u6700\u7d42\u7684\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092 ",(0,i.jsx)(n.code,{children:"{chatid}"})," \u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,i.jsx)(n.p,{children:"Momento\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u3042\u3089\u3086\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8fc5\u901f\u304b\u3064\u5b89\u5168\u306b\u958b\u767a\u3067\u304d\u307e\u3059\u3002Cache\u3068Topics\u306e\u8a73\u7d30\u3001\u307e\u305f\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsxs)(c.p,{children:[(0,i.jsx)(r.V,{title:"More about instant messaging",link:"https://www.gomomento.com/solutions/use-cases/chat",description:"Learn more about how to build instant messaging on Momento"}),(0,i.jsx)(r.V,{title:"How to build a multi-language chat app",link:"https://www.gomomento.com/blog/how-to-develop-a-chat-app-with-built-in-moderation",description:"Walk through an app that automatically translates messages to other languages"}),(0,i.jsx)(r.V,{title:"In-game chat case study",link:"https://www.gomomento.com/resources/case-studies/momento-enables-zigzagame-to-go-fully-serverless-and-save-money-in-the-process",description:"See how ZigZaGame used Momento to power their in-game chat"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8254:(e,n,s)=>{var i=s(6305).default;n.p=void 0;i(s(4788));var a=s(4848);n.p=e=>{let{variant:n,children:s}=e;return(0,a.jsx)("div",{...{0:{className:"xrvj5dj xoybqp3 x1p9eum2"},1:{className:"xrvj5dj xoybqp3 x1wlfl8j"}}[!("dense"!==n)|0],children:s})}},7206:(e,n,s)=>{var i=s(6305).default;n.V=void 0;i(s(4788));var a=s(4848);n.V=e=>{let{title:n,description:s,link:i,icon:o,alignText:t="start",alignItems:c="start"}=e;return(0,a.jsxs)("a",{href:i,target:"_blank",...{0:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np x7a106z xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g"},1:{className:"x78zum5 xh8yej3 x1in32aq x1tamke2 x1q0g3np xou54vl xqlwffn x12oqio5 x15ny4rc xokoxfd x1hl2dhg x1heor9g x6s0dn4"}}[!("center"!==c)|0],children:[o&&(0,a.jsx)("img",{src:o,height:"32px",width:"32px"}),(0,a.jsxs)("div",{...{0:{className:"x1iyjqo2 x1yc453h"},1:{className:"x1iyjqo2 x2b8uid"}}[!("center"!==t)|0],children:[(0,a.jsx)("h3",{className:"x1q12cbh",children:n}),(0,a.jsx)("p",{className:"xif65rj xo1l8bm x1du4iog",children:s})]})]})}},5156:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/instant-messaging-architecture-7571645aa4337dc413b47eebd12ee1aa.png"}}]);