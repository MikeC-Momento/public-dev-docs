"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4316],{4216:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4848),i=n(8453),s=n(2480);const r={title:"Webhooks",description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics",image:"https://assets-global.website-files.com/628fadb065a50abf13a11485/659580dc80a9699d3d1ae72a_webhooks-launch-blog-header.png",hide_title:!0,sidebar_position:1,sidebar_label:"Overview",pagination_prev:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},l="\u30c8\u30d4\u30c3\u30af\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u3068\u3057\u3066 Webhook \u3092\u4f7f\u7528\u3059\u308b",c={id:"topics/webhooks/overview",title:"Webhooks",description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/webhooks/overview.mdx",sourceDirName:"topics/webhooks",slug:"/topics/webhooks/overview",permalink:"/ja/topics/webhooks/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/webhooks/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Webhooks",description:"Learn about Webhooks, an event-driven mechanism to listen to Momento Topics",image:"https://assets-global.website-files.com/628fadb065a50abf13a11485/659580dc80a9699d3d1ae72a_webhooks-launch-blog-header.png",hide_title:!0,sidebar_position:1,sidebar_label:"Overview",pagination_prev:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",next:{title:"Getting Started",permalink:"/ja/topics/webhooks/creating-a-webhook"}},a={},d=[{value:"\u306a\u305cWebhook\u3092\u4f7f\u3046\u306e\u304b\uff1f",id:"\u306a\u305cwebhook\u3092\u4f7f\u3046\u306e\u304b",level:2},{value:"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8",id:"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8",level:2},{value:"\u30a4\u30d9\u30f3\u30c8\u4f8b",id:"\u30a4\u30d9\u30f3\u30c8\u4f8b",level:3},{value:"\u30a4\u30d9\u30f3\u30c8\u69cb\u6210",id:"\u30a4\u30d9\u30f3\u30c8\u69cb\u6210",level:3},{value:"cache",id:"cache",level:4},{value:"topic",id:"topic",level:4},{value:"event_timestamp",id:"event_timestamp",level:4},{value:"publish_timestamp",id:"publish_timestamp",level:4},{value:"topic_sequence_number",id:"topic_sequence_number",level:4},{value:"token_id",id:"token_id",level:4},{value:"text",id:"text",level:4},{value:"Headers",id:"headers",level:3},{value:"Momento-Signature",id:"momento-signature",level:4},{value:"User-Agent",id:"user-agent",level:4},{value:"Event delivery",id:"event-delivery",level:2},{value:"API calls for Webhooks",id:"api-calls-for-webhooks",level:2},{value:"See More",id:"see-more",level:2}];function h(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"\u30c8\u30d4\u30c3\u30af\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u3068\u3057\u3066-webhook-\u3092\u4f7f\u7528\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u306e\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u3068\u3057\u3066 Webhook \u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,t.jsx)(o.p,{children:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u305f\u3068\u304d\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e subscriberTrigger \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u3057\u3066 webhook \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u304c\u516c\u958b\u3055\u308c\u308b\u305f\u3073\u306b\u3001Momento \u306f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e webhook \u3068\u30c8\u30d4\u30c3\u30af\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u305d\u306e\u4ed6\u306e\u8cfc\u8aad\u8005\u306b POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"\u306a\u305cwebhook\u3092\u4f7f\u3046\u306e\u304b",children:"\u306a\u305cWebhook\u3092\u4f7f\u3046\u306e\u304b\uff1f"}),"\n",(0,t.jsxs)(o.p,{children:["Momento SDK\u3092\u4f7f\u7528\u3057\u3066\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3068Momento\u30b5\u30fc\u30d3\u30b9\u306e\u9593\u306b\u6c38\u7d9a\u7684\u306a\u63a5\u7d9a\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u6a19\u6e96\u7684\u306a\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3092",(0,t.jsx)(o.em,{children:"\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb"}),"\u306a\u3082\u306e\u306b\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u306f\u5e38\u306b\u30aa\u30f3\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u305a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u307e\u305f\u306f\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306b\u5229\u7528\u53ef\u80fd\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u30d6\u30e9\u30a6\u30b6\u3084\u30b3\u30f3\u30c6\u30ca\u306e\u3088\u3046\u306a\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u306f\u3001\u3053\u306e\u74b0\u5883\u3067\u306f\u4fe1\u3058\u3089\u308c\u306a\u3044\u307b\u3069\u3046\u307e\u304f\u52d5\u4f5c\u3059\u308b\u304c\u3001Lambda\u95a2\u6570\u3084Google Cloud Run\u30b5\u30fc\u30d3\u30b9\u306e\u3088\u3046\u306a\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u306b\u306f\u904b\u304c\u306a\u304b\u3063\u305f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"Webhook\u3092\u4f7f\u3048\u3070\u3001\u3069\u3093\u306a\u30bf\u30a4\u30d7\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u3067\u3082\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u4fe1\u3059\u308b\u3088\u3046\u306b\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3067\u304d\u307e\u3059\u3002Webhook\u306f\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u63a5\u7d9a\u3092\u7dad\u6301\u3057\u306a\u3044\u306e\u3067\u3001\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u5f8c\u308d\u306b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u95a2\u6570\u3092\u7f6e\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"}),"\n",(0,t.jsx)(o.p,{children:"\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d0\u30fc\u3068\u3057\u3066Webhook\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u3088\u3046\u306a\u8010\u4e45\u6027\u306e\u3042\u308b\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u6c38\u7d9a\u5316\u3001\u30ea\u30fc\u30b8\u30e7\u30f3\u9593\u3067\u306e\u30c7\u30fc\u30bf\u306e\u8907\u88fd\u3001\u3055\u3089\u306b\u306f\u30c1\u30e3\u30c3\u30c8\u306b\u7ffb\u8a33\u3084\u30e2\u30c7\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u3088\u3046\u306a\u4ef2\u4ecb\u30b5\u30fc\u30d3\u30b9\u3092\u8ffd\u52a0\u3059\u308b\u3088\u3046\u306a\u975e\u540c\u671f\u30a4\u30d9\u30f3\u30c8\u306b\u6700\u9069\u3067\u3059\u3002"}),"\n",(0,t.jsx)(o.p,{children:"\u30c8\u30d4\u30c3\u30af\u306f\u30b9\u30c6\u30fc\u30c8\u30d5\u30eb\u30fb\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u3068\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u306e\u4e21\u65b9\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u308b\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u3044\u3064\u3067\u3082\u3001\u3069\u3053\u304b\u3089\u3067\u3082\u3001\u597d\u304d\u306a\u3082\u306e\u3092\u63a5\u7d9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"}),"\n",(0,t.jsx)(o.h2,{id:"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8",children:"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,t.jsx)(o.p,{children:"\u30a4\u30d9\u30f3\u30c8\u304c\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3055\u308c\u308b\u3068\u3001Momento\u306f\u30a4\u30d9\u30f3\u30c8\u30da\u30a4\u30ed\u30fc\u30c9\u306b\u52a0\u3048\u3066\u3001\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u3059\u308b\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u542b\u3080\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f\u8ffd\u52a0\u306e\u30d8\u30c3\u30c0\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"\u30a4\u30d9\u30f3\u30c8\u4f8b",children:"\u30a4\u30d9\u30f3\u30c8\u4f8b"}),"\n",(0,t.jsx)(o.p,{children:"\u4ee5\u4e0b\u306f\u3001\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u3067\u9001\u4fe1\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u3059\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3059\u3002\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3042\u308a\u3001\u5177\u4f53\u7684\u306a\u5024\u306f\u5b9f\u88c5\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "cache": "chat",\n  "topic": "room-281",\n  "event_timestamp": 1704296470564,\n  "publish_timestamp": 1704296470565,\n  "topic_sequence_number": 1,\n  "token_id": "mo-the-squirrel",\n  "text": "Here I am!!"\n}\n'})}),"\n",(0,t.jsx)(o.h3,{id:"\u30a4\u30d9\u30f3\u30c8\u69cb\u6210",children:"\u30a4\u30d9\u30f3\u30c8\u69cb\u6210"}),"\n",(0,t.jsx)(o.p,{children:"\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u30fb\u30a4\u30d9\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u3001\u305d\u308c\u3089\u304c\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u3068\u3068\u3082\u306b\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h4,{id:"cache",children:"cache"}),"\n",(0,t.jsx)(o.p,{children:"\u30c8\u30d4\u30c3\u30af\u304c\u5c5e\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002\u3053\u308c\u306f\u3001Momento \u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d\u7a7a\u9593\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30c8\u30d4\u30c3\u30af\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u52b9\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u516c\u958b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h4,{id:"topic",children:"topic"}),"\n",(0,t.jsx)(o.p,{children:"Webhook \u3092\u30c8\u30ea\u30ac\u30fc\u3057\u305f\u30c8\u30d4\u30c3\u30af\u306e\u540d\u524d\u3002\u30c8\u30d4\u30c3\u30af\u540d\u306f\u52d5\u7684\u3067\u3042\u308a\u3001Momento \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ea\u30bd\u30fc\u30b9\u3067\u306f\u306a\u3044\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4efb\u610f\u306e\u6587\u5b57\u5217\u306b\u767a\u884c\u3067\u304d\u308b\u306e\u3067\u3001\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30c8\u30d4\u30c3\u30af\u540d\u3068\u3057\u3066\u5909\u6570\u3092\u4f7f\u7528\u3059\u308b\u306a\u3069\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u9a5a\u304f\u307b\u3069\u306e\u67d4\u8edf\u6027\u304c\u52a0\u308f\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h4,{id:"event_timestamp",children:"event_timestamp"}),"\n",(0,t.jsx)(o.p,{children:"\u30a4\u30d9\u30f3\u30c8\u304c\u516c\u958b\u3055\u308c\u305fUnix Epoch\u304b\u3089\u306e\u30df\u30ea\u79d2\u5358\u4f4d\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3002"}),"\n",(0,t.jsx)(o.h4,{id:"publish_timestamp",children:"publish_timestamp"}),"\n",(0,t.jsxs)(o.p,{children:["Webhook \u304c\u767a\u884c\u3055\u308c\u305f Unix Epoch \u304b\u3089\u306e\u30df\u30ea\u79d2\u5358\u4f4d\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3002\u3053\u306e\u5024\u304b\u3089 ",(0,t.jsx)(o.code,{children:"event_timestamp"})," \u306e\u5024\u3092\u5f15\u304f\u3053\u3068\u3067\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u914d\u4fe1\u306e\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u5f85\u3061\u6642\u9593\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e0a\u306e\u4f8b\u3067\u306f\u3001\u914d\u4fe1\u9045\u5ef6\u306f1\u30df\u30ea\u79d2\u3067\u3057\u305f\u3002"]}),"\n",(0,t.jsx)(o.h4,{id:"topic_sequence_number",children:"topic_sequence_number"}),"\n",(0,t.jsxs)(o.p,{children:["\u30c8\u30d4\u30c3\u30af\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u756a\u53f7\u3002\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u308b\u3068 ",(0,t.jsx)(o.code,{children:"topic_sequence_number"})," \u304c\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u9806\u756a\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Momento\u306f\u30a4\u30d9\u30f3\u30c8\u914d\u4fe1\u306e\u9806\u756a\u3092\u4fdd\u8a3c\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsx)(o.h4,{id:"token_id",children:"token_id"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/ja/topics/develop/authentication/tokens",children:"token"}),"\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50\u3002Momento \u306e ",(0,t.jsx)(o.code,{children:"AuthClient"})," \u3092\u4f7f\u3063\u3066\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u3001Momento Topics \u306b\u516c\u958b\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u6e21\u3055\u308c\u308b\u8b58\u5225\u5b50\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,t.jsx)(o.a,{href:"https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers",children:"\u8a73\u7d30\u306f\u3053\u3061\u3089"}),"\u3002"]}),"\n",(0,t.jsx)(o.h4,{id:"text",children:"text"}),"\n",(0,t.jsx)(o.p,{children:"\u30c8\u30d4\u30c3\u30af\u306b\u516c\u958b\u3055\u308c\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u5185\u5bb9\u3002\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5185\u5bb9\u306f\u767a\u884c\u8005\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3001Momento\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsx)(o.p,{children:"\u5404\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f\u3001Momento\u304c\u63d0\u4f9b\u3059\u308b2\u3064\u306e\u7279\u5b9a\u306e\u30d8\u30c3\u30c0\u30fc\u304c\u542b\u307e\u308c\u3001\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30bf\u30fc\u306f\u9001\u4fe1\u8005\u306e\u771f\u6b63\u6027\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h4,{id:"momento-signature",children:"Momento-Signature"}),"\n",(0,t.jsxs)(o.p,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u7f72\u540d\u3067\u3001Webhook\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u3068\u304d\u306b\u6307\u5b9a\u3057\u305f\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3067\u7f72\u540d\u3055\u308c\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5b8c\u5168\u6027\u3068\u767a\u4fe1\u5143\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u53d7\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u691c\u8a3c\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(o.a,{href:"/ja/topics/webhooks/security",children:"webhook \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30da\u30fc\u30b8"})," \u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(o.h4,{id:"user-agent",children:"User-Agent"}),"\n",(0,t.jsxs)(o.p,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9001\u4fe1\u5143\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306b Momento \u304c\u9001\u4fe1\u3059\u308b\u9759\u7684\u30d8\u30c3\u30c0\u3067\u3001",(0,t.jsx)(o.code,{children:"Momento/1.0 (Webhooks; +https://docs.momentohq.com/topics/webhooks)"}),"\u3068\u3044\u3046\u5f62\u5f0f\u3092\u6301\u3061\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"event-delivery",children:"Event delivery"}),"\n",(0,t.jsxs)(o.p,{children:["Momento\u306f\u30a4\u30d9\u30f3\u30c8\u3092\u3042\u306a\u305f\u306e\u30a6\u30a7\u30d6\u30d5\u30c3\u30af\u306b",(0,t.jsx)(o.strong,{children:"1\u56de"}),"\u914d\u4fe1\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u304c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u53d7\u4fe1\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30d1\u30d6\u30ea\u30c3\u30b7\u30e3\u30fc\u306f\u518d\u5ea6\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u81ea\u52d5\u518d\u9001\u4fe1\u3055\u308c\u306a\u3044\u914d\u4fe1\u306e\u5931\u6557\u306f\u3001\u4ee5\u4e0b\u306e\u3044\u305a\u308c\u304b\u306e\u7406\u7531\u306b\u3088\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"2XX\u4ee5\u5916\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\uff08400\u3001403\u3001500\u306a\u3069\uff09\u3002"}),"\n",(0,t.jsx)(o.li,{children:"5\u79d2\u305f\u3063\u3066\u3082\u53cd\u5fdc\u304c\u306a\u3044\u3002"}),"\n",(0,t.jsx)(o.li,{children:"\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e\u63a5\u7d9a\u30a8\u30e9\u30fc\u3002"}),"\n",(0,t.jsxs)(o.li,{children:["\u30ec\u30fc\u30c8\u306e\u5236\u9650\u3092\u8d85\u3048\u3066\u3044\u308b\uff08",(0,t.jsx)(o.a,{href:"/ja/topics/limits",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5236\u9650\u3092\u53c2\u7167"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"api-calls-for-webhooks",children:"API calls for Webhooks"}),"\n",(0,t.jsxs)(o.p,{children:["\u79c1\u305f\u3061\u306eSDK\u3092\u4f7f\u7528\u3057\u3066\u30d7\u30ed\u30b0\u30e9\u30e0\u3067webhook\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u304b\uff1fwebhooks\u306e",(0,t.jsx)(o.a,{href:"/ja/topics/develop/api-reference/webhooks",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"see-more",children:"See More"}),"\n","\n",(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginBottom:"20px"},children:[(0,t.jsx)(s.A,{title:"Use webhooks with API Gateway + Lambda",link:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",description:"Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions"}),(0,t.jsx)(s.A,{title:"Multi-language chat app",link:"https://github.com/momentohq/moderated-chat/",description:"Explore the source code of our live-translation chat app using webhooks."})]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2480:(e,o,n)=>{n.d(o,{A:()=>d});n(6540);const t="card_Yy4i",i="cardLink_tPnZ",s="cardContent_l93Q",r="cardTitle_gz5m",l="cardDescription_RQFX",c="cardBody_MLn8";var a=n(4848);const d=e=>{let{title:o,description:n,link:d,icon:h,variation:m="normal"}=e,p="",u="";if("dense"===m.toLowerCase())p="0",u="15em";return(0,a.jsx)("div",{className:t,style:{width:u},children:(0,a.jsx)("a",{href:d,target:"_blank",className:i,children:(0,a.jsxs)("div",{className:c,children:[h&&(0,a.jsx)("img",{src:h,height:"32px",width:"32px"}),(0,a.jsxs)("div",{className:s,children:[(0,a.jsx)("h3",{className:r,children:o}),(0,a.jsx)("p",{className:l,style:{marginBottom:p},children:n})]})]})})})}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>l});var t=n(6540);const i={},s=t.createContext(i);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);