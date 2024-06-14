"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5748],{4508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var o=t(4848),s=t(8453);const c={sidebar_position:10,sidebar_label:"Deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache"},i=void 0,r={id:"cache/develop/integrations/deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/deno.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/deno",permalink:"/ja/cache/develop/integrations/deno",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/deno.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"Deno",title:"Integrating Momento Cache with Deno",description:"Learn to deploy a Deno project that uses Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Fastly",permalink:"/ja/cache/develop/integrations/fastly"},next:{title:"Amazon EventBridge",permalink:"/ja/cache/develop/integrations/amazon-eventbridge"}},d={},a=[{value:"Momento Web SDK \u3068 HTTP API \u306e\u9055\u3044",id:"momento-web-sdk-\u3068-http-api-\u306e\u9055\u3044",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Momento \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"momento-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:3},{value:"Deno \u306e\u74b0\u5883\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"deno-\u306e\u74b0\u5883\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:3},{value:"Momento HTTP API \u3092\u5229\u7528\u3059\u308b",id:"momento-http-api-\u3092\u5229\u7528\u3059\u308b",level:2},{value:"Momento Web SDK \u3092\u5229\u7528\u3059\u308b",id:"momento-web-sdk-\u3092\u5229\u7528\u3059\u308b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://deno.land/",children:"Deno"}),"\u306f\u3001\u30bb\u30ad\u30e5\u30a2\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u3092\u5099\u3048\u305fJavaScript\u3001TypeScript\u3001WebAssembly\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u3042\u308a\u3001",(0,o.jsx)(n.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"\u306f\u3001\u305d\u308c\u3089\u306b\u5bfe\u5fdc\u3059\u308b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30fb\u30a8\u30c3\u30b8\u30ef\u30fc\u30ab\u30fc\u30fb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"JavaScript Web SDK"})," \u306e 2 \u3064\u306e ",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno",children:"\u4f8b"})," \u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Web SDK\u307e\u305f\u306fHTTP API\u3092\u4ecb\u3057\u3066Momento Cache\u3068\u5bfe\u8a71\u3057\u3001\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3001\u8a2d\u5b9a\u3001\u304a\u3088\u3073\u524a\u9664\u3059\u308bDeno\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"momento-web-sdk-\u3068-http-api-\u306e\u9055\u3044",children:"Momento Web SDK \u3068 HTTP API \u306e\u9055\u3044"}),"\n",(0,o.jsx)(n.p,{children:"Deno\u3067Momento Cache\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u3001\u3069\u3061\u3089\u304b\u3092\u9078\u629e\u3059\u308b\u7406\u7531\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["HTTP API \u306f\u8efd\u91cf\u3067\u3001Deno \u304c\u5fc5\u8981\u3068\u3059\u308b\u4ee5\u4e0a\u306e\u4f9d\u5b58\u95a2\u4fc2\u306f\u5fc5\u8981\u306a\u304f\u3001\u6a19\u6e96\u306e ",(0,o.jsx)(n.code,{children:"fetch"})," HTTP \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3053\u308c\u306f ",(0,o.jsx)(n.code,{children:"get"}),"\u3001",(0,o.jsx)(n.code,{children:"set"}),"\u3001",(0,o.jsx)(n.code,{children:"delete"})," \u3068\u3044\u3063\u305f Momento API \u306e\u57fa\u672c\u7684\u306a\u30b5\u30d6\u30bb\u30c3\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u3060\u3051\u3067\u3042\u308a\u3001\u73fe\u5728\u306e\u3068\u3053\u308d\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066 AWS \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Web SDK\u306e\u65b9\u304c\u91cd\u304f\u3001SDK\u3078\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001Momento API\uff08Dictionaries\u3084SortedSets\u306e\u3088\u3046\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3001Momento Topics\u3078\u306e\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u6a5f\u80fd\u3092\u542b\u3080\uff09\u3092\u5b8c\u5168\u306b\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u5b8c\u5168\u306a TypeScript/JavaScript API \u3092\u5099\u3048\u3066\u304a\u308a\u3001Momento \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3088\u308a\u7c21\u5358\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Worker \u3092\u958b\u767a\u3059\u308b\u969b\u306e\u6642\u9593\u3068\u52b4\u529b\u3092\u7bc0\u7d04\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u3055\u3089\u306b\u3001Deno Deploy \u306f\u307e\u3060 ",(0,o.jsx)(n.a,{href:"https://deno.land/manual@v1.36.1/node/npm_specifiers",children:"npm specifiers"})," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u4eca\u306e\u3068\u3053\u308d\u3001Deno Deploy \u3092\u4f7f\u7528\u3057\u3066\u516c\u958b\u3067\u304d\u308b\u306e\u306f HTTP API \u306e\u4f8b\u306e\u307f\u3067\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306e\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u5fc5\u8981\u3067\u3059\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/",children:"GitHub"}),"\u3001",(0,o.jsx)(n.a,{href:"https://gitlab.com",children:"GitLab"}),"\u3001",(0,o.jsx)(n.a,{href:"https://bitbucket.org/",children:"Bitbucket"}),"\u306a\u3069\u306eGit\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"\u30a2\u30ab\u30a6\u30f3\u30c8\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u500b\u4eba\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u3042\u308b",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript",children:"Momento JavaScript SDK"}),"\u306e\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30d5\u30a9\u30fc\u30af\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"momento-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Momento \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,o.jsxs)(n.p,{children:["Git \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b Momento JavaScript SDK \u306e\u30b3\u30d4\u30fc\u307e\u305f\u306f\u30d5\u30a9\u30fc\u30af\u304c\u3042\u308c\u3070\u3001",(0,o.jsx)(n.a,{href:"https://console.gomomento.com",children:"Momento \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u3092\u4f7f\u3063\u3066 Momento \u5074\u3092\u8a2d\u5b9a\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e Google \u307e\u305f\u306f GitHub \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u30da\u30fc\u30b8\u306e\u53f3\u4e0a\u306b\u3042\u308b ",(0,o.jsx)(n.code,{children:"Create Cache"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create Cache button",src:t(2432).A+"",width:"336",height:"258"})}),"\n",(0,o.jsxs)(n.p,{children:["AWS\u3092\u4f7f\u3063\u3066",(0,o.jsx)(n.code,{children:"worker"}),"\u3068\u3044\u3046\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3002\u73fe\u5728\u3001Momento HTTP API\u306fAWS\u3067\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308bAWS\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u3042\u308c\u3070\u3069\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u3067\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create cache form",src:t(764).A+"",width:"1920",height:"694"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Create"}),"\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u5229\u7528\u53ef\u80fd\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u65b0\u3057\u3044",(0,o.jsx)(n.code,{children:"worker"}),"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"New cache",src:t(7557).A+"",width:"1916",height:"472"})}),"\n",(0,o.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f5c\u6210\u3057\u305f\u5730\u57df\u3082\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067Momento API Key\u3092\u751f\u6210\u3059\u308b\u969b\u306b\u3001\u540c\u3058\u5730\u57df\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://console.gomomento.com/tokens",children:"tokens"}),"\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3057\u305f\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u3068\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u3059\u3067\u306b\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001Worker \u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u306e\u8aad\u307f\u8fbc\u307f\u3068\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u66f8\u304d\u8fbc\u307f\u3092\u8a31\u53ef\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u4f5c\u6210\u3084\u524a\u9664\u306e\u3088\u3046\u306a\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u64cd\u4f5c\u306f\u8a31\u53ef\u3057\u306a\u3044\u3001\u304d\u3081\u306e\u7d30\u304b\u3044\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u7279\u306b\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3068\u30c7\u30fc\u30bf\u30d7\u30ec\u30fc\u30f3\u306e\u64cd\u4f5c\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5225\u3005\u306b\u7ba1\u7406\u3057\u305f\u3044\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Fine-Grained Access Token"})," \u30c8\u30fc\u30af\u30f3\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u3001\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089 ",(0,o.jsx)(n.code,{children:"Cache Name"})," \u3068\u3057\u3066 ",(0,o.jsx)(n.code,{children:"worker"})," \u3092\u9078\u629e\u3057\u3001",(0,o.jsx)(n.code,{children:"Role Type"})," \u3068\u3057\u3066 ",(0,o.jsx)(n.code,{children:"readwrite"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30b9\u30fc\u30d1\u30fc\u30e6\u30fc\u30b6\u30c8\u30fc\u30af\u30f3 ",(0,o.jsx)(n.code,{children:"Super User Token"})," \u306f\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u306e\u64cd\u4f5c\u7ba1\u7406\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002Momento \u8a8d\u8a3c\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,o.jsx)(n.a,{href:"/ja/cache/develop/authentication/",children:"\u3053\u3061\u3089"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002Generate API Key` \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Generate token",src:t(7550).A+"",width:"3456",height:"1968"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"API Key"})," \u3068 ",(0,o.jsx)(n.code,{children:"HTTP Endpoint"})," \u3092\u30b3\u30d4\u30fc\u3057\u3001\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u5f8c\u3067\u3001Deno Deploy \u306e\u30c7\u30d7\u30ed\u30a4\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Generated token",src:t(6020).A+"",width:"2532",height:"408"})}),"\n",(0,o.jsx)(n.h3,{id:"deno-\u306e\u74b0\u5883\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Deno \u306e\u74b0\u5883\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3089\u3001Deno\u5074\u3092\u8a2d\u5b9a\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u307e\u305a\u3001",(0,o.jsx)(n.a,{href:"https://dash.deno.com/account#access-tokens",children:"Deno\u30b3\u30f3\u30bd\u30fc\u30eb"}),"\u3067\u500b\u4eba\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6b21\u306b\u3001",(0,o.jsx)(n.a,{href:"https://dash.deno.com/projects",children:'"Projects "\u30da\u30fc\u30b8'}),'\u306b\u79fb\u52d5\u3057\u3066\u3001"New Project "\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001"get started with an empty project using deployctl "\u3068\u3044\u3046\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u306f\u3001"lucky-spider-92 "\u306e\u3088\u3046\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u6587\u5b57\u5217\u3068\u6570\u5b57\u306b\u3057\u307e\u3059\u3002']}),"\n",(0,o.jsxs)(n.p,{children:["\u7b2c\u4e09\u306b\u3001\u304a\u597d\u307f\u306e\u65b9\u6cd5\u3067",(0,o.jsx)(n.a,{href:"https://deno.land/manual@v1.36.1/getting_started/installation",children:"deno"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u7b2c\u56db\u306b\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089Deno\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u305f\u3081\u306e",(0,o.jsx)(n.a,{href:"https://deno.com/deploy/docs/deployctl",children:(0,o.jsx)(n.code,{children:"deployctl"})}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u307e\u305f\u3001PATH\u306b",(0,o.jsx)(n.code,{children:"deployctl"}),"\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'export PATH="/Users/<your-username>/.deno/bin:$PATH"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"momento-http-api-\u3092\u5229\u7528\u3059\u308b",children:"Momento HTTP API \u3092\u5229\u7528\u3059\u308b"}),"\n",(0,o.jsx)(n.p,{children:"\u307e\u305a\u3001deno HTTP API example \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd client-sdk-javascript/examples/deno/http-api\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".env"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001Momento Cache \u306e\u540d\u524d\u3001\u5bfe\u5fdc\u3059\u308b\u304d\u3081\u7d30\u304b\u3044\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3001\u30c8\u30fc\u30af\u30f3\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f HTTP \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'MOMENTO_API_KEY="<your-api-key>"\nMOMENTO_CACHE_NAME="<your-cache-name>"\nMOMENTO_HTTP_ENDPOINT="<your-http-endpoint>"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u30ed\u30fc\u30ab\u30eb\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3057\u3001\u30d6\u30e9\u30a6\u30b6\u3067 ",(0,o.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"deno task start\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/http-api/index.ts",children:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"})," \u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u3092\u53d6\u5f97\u3057\u3001\u524a\u9664\u3057\u3001HTML \u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f ",(0,o.jsxs)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/deno/http-api/index.ts#L10",children:[(0,o.jsx)(n.code,{children:"MomentoFetcher"})," \u30af\u30e9\u30b9"]})," \u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30af\u30e9\u30b9\u306f\u3001Momento HTTP API \u306e\u57fa\u672c\u7684\u306a\u53d6\u5f97\u547c\u3073\u51fa\u3057\u306b\u30a8\u30e9\u30fc\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u5c0f\u3055\u306a\u30e9\u30c3\u30d1\u30fc\u3067\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"  const momento = new MomentoFetcher(apiKey, endpoint)\n\n  await momento.set(cacheName, key, value, 10)\n  console.log(`Set the key-value pair in the cache ${cacheName}`)\n\n  const getRespAfterSet = await momento.get(cacheName, key)\n  console.log(`Fetching the key after setting the value: ${getRespAfterSet}`)\n\n  await momento.delete(cacheName, key)\n  console.log(`Deleted the key-value pair from the cache ${cacheName}`)\n\n  return new Response(\n    `Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`,\n    {\n      status: 200,\n      headers: new Headers({\n        'Content-Type': 'text/html; charset=utf-8',\n      }),\n    },\n  )\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u30c7\u30d7\u30ed\u30a4\u306e\u6e96\u5099\u304c\u3067\u304d\u305f\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3068 Deno Deploy \u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u5165\u529b\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'deployctl deploy --project="<your-project-name>" --token="<your-deno-token>" index.ts\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,o.jsx)(n.code,{children:".env"})," \u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u3001\u73fe\u5728\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u3059\u3079\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001\u4ee3\u308f\u308a\u306b Deno Deploy \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066 ",(0,o.jsx)(n.a,{href:"https://deno.com/deploy/docs/environment-variables",children:"\u74b0\u5883\u5909\u6570"})," \u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002deployctl` \u30b3\u30de\u30f3\u30c9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.jsx)(n.a,{href:"https://deno.com/deploy/docs/deployctl",children:"\u3053\u3061\u3089"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001",(0,o.jsx)(n.a,{href:"https://lucky-spider-92.deno.dev/",children:"https://lucky-spider-92.deno.dev/"}),"\u306e\u3088\u3046\u306b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3067\u59cb\u307e\u308bURL\u306b\u516c\u958b\u3055\u308c\u307e\u3059\u3002\u3053\u306eURL\u306f\u3001\u3042\u306a\u305f\u304c\u4f5c\u3063\u305f\u3082\u306e\u3092\u898b\u305b\u308b\u305f\u3081\u306b\u3001\u4ed6\u306e\u4eba\u3068\u7c21\u5358\u306b\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"]}),"\n",(0,o.jsx)(n.h2,{id:"momento-web-sdk-\u3092\u5229\u7528\u3059\u308b",children:"Momento Web SDK \u3092\u5229\u7528\u3059\u308b"}),"\n",(0,o.jsx)(n.p,{children:"\u307e\u305a\u3001deno Web SDK example \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cd client-sdk-javascript/examples/deno/web-sdk\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:".env"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001Momento Cache\u306e\u540d\u524d\u3068\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u304d\u3081\u7d30\u304b\u3044\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'MOMENTO_API_KEY="<your-api-key>"\nMOMENTO_CACHE_NAME="<your-cache-name>"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u30ed\u30fc\u30ab\u30eb\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3057\u3001\u30d6\u30e9\u30a6\u30b6\u3067 ",(0,o.jsx)(n.a,{href:"http://localhost:8000",children:"http://localhost:8000"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"deno task start\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/web-sdk/index.ts",children:"\u30b3\u30fc\u30c9\u4f8b"})," \u306f\u3001Momento CacheClient \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u3092\u53d6\u5f97\u3057\u3001\u524a\u9664\u3057\u3001\u57fa\u672c\u7684\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"  const momento = new CacheClient({\n    configuration: Configurations.Browser.v1(),\n    credentialProvider: CredentialProvider.fromString({\n      apiKey: env['MOMENTO_API_TOKEN'],\n    }),\n    defaultTtlSeconds: 60,\n  })\n\n  const cacheName = env['MOMENTO_CACHE_NAME']\n\n  console.log('Storing key=foo, value=FOO')\n  const setResponse = await momento.set(cacheName, 'foo', 'FOO')\n  const getResponse = await momento.get(cacheName, 'foo')\n  const deleteResponse = await momento.delete(cacheName, 'foo')\n\n  return new Response(getResponse.body, {\n    status: getResponse.status,\n    headers: {\n      'content-type': 'application/json',\n    },\n  })\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u30c7\u30d7\u30ed\u30a4\u306e\u6e96\u5099\u304c\u3067\u304d\u305f\u3089\u3001Deno\u306e",(0,o.jsx)(n.a,{href:"https://deno.land/manual@v1.36.1/advanced/deploying_deno",children:"\u30c7\u30d7\u30ed\u30a4\u30ac\u30a4\u30c9"}),"\u306e1\u3064\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002Deno Deploy\u306f\u307e\u3060npm\u6307\u5b9a\u5b50\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u306e\u3067\u3001\u3053\u306e\u4f8b\u3060\u3051\u3067\u306f\u305d\u3053\u306b\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e\u7c21\u5358\u306a\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u3001Deno\u3068Deno Deploy\u3092\u4f7f\u7528\u3057\u305fMomento\u642d\u8f09\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u304c\u3044\u304b\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u7c21\u5358\u304b\u3092\u3054\u7406\u89e3\u3044\u305f\u3060\u3051\u305f\u3068\u601d\u3044\u307e\u3059\u3002\u3055\u3089\u306b",(0,o.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno",children:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001Momento Cache\u306e\u30b7\u30f3\u30d7\u30eb\u3055\u3092\u697d\u3057\u3093\u3067\u3044\u305f\u3060\u3051\u308c\u3070\u5e78\u3044\u3067\u3059\u3002\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u7ba1\u7406\u3057\u3001\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u305f\u3081\u3001\u7a3c\u50cd\u3092\u958b\u59cb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7557:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-caches-worker-f6fe32f41cabf1c18025d4d7e0862f04.png"},2432:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},764:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/console-create-worker-cache-form-25675fe8e7d0bc42ae1673e102922af3.png"},7550:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/fgac-worker-auth-9a307c6c961d307eaacb3a86c741f6f1.png"},6020:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/http-endpoint-auth-token-2c3853dfb362d741488a794b488e55de.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);