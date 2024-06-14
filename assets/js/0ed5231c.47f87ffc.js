"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6782],{7628:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=t(4848),i=t(8453);const s={sidebar_position:2,sidebar_label:"Getting Started",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",pagination_next:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},r="Create your first webhook in Momento",c={id:"topics/webhooks/creating-a-webhook",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",source:"@site/docs/topics/webhooks/creating-a-webhook.md",sourceDirName:"topics/webhooks",slug:"/topics/webhooks/creating-a-webhook",permalink:"/topics/webhooks/creating-a-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/webhooks/creating-a-webhook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Getting Started",title:"Creating a webhook",description:"Learn how to create a webhook using the Momento Console",pagination_next:null,keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",previous:{title:"Overview",permalink:"/topics/webhooks/overview"}},a={},h=[];function l(e){const o={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"create-your-first-webhook-in-momento",children:"Create your first webhook in Momento"}),"\n",(0,n.jsxs)(o.p,{children:["To complete step one of setting up the webhook, log into the ",(0,n.jsx)(o.a,{href:"https://console.gomomento.com",children:"Momento console"}),". Navigate to the ",(0,n.jsx)(o.a,{href:"https://console.gomomento.com/caches",children:"cache list"})," on the left navigation bar and select the cache that will publish to the webhook."]}),"\n",(0,n.jsx)(o.p,{children:"To create the webhook, a few simple details need to be supplied."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Webhook Creation",src:t(601).A+"",width:"2402",height:"804"})}),"\n",(0,n.jsx)(o.p,{children:"The three fields presented are important for different reasons."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Webhook Name"}),": Human-readable name for the webhook."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Topic Name"}),": Topic that will trigger the webhook when published."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Webhook Destination"}),": Endpoint URL of the webhook to POST to."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Next, ",(0,n.jsx)(o.a,{href:"https://console.gomomento.com/api-keys",children:"create a Fine-Grained Access Key"})," for the cache, with topic ",(0,n.jsx)(o.code,{children:"publish"})," permissions."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Token Creation",src:t(4126).A+"",width:"1279",height:"508"})}),"\n",(0,n.jsxs)(o.p,{children:["Using this token, you can now start publishing to the topic. You can use the ",(0,n.jsx)(o.a,{href:"/topics/develop/api-reference",children:"Momento SDK"})," to publish to the topic."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:"import {TopicClient, TopicPublish, CredentialProvider} from '@gomomento/sdk';\n\nconst momento = new TopicClient({\n    credentialProvider: CredentialProvider.fromString('<the api key>'),\n});\nconst publishResponse = await momento.publish(cacheName, topicName, value);\nif (publishResponse instanceof TopicPublish.Success) {\n    console.log('Value published successfully!');\n} else {\n    console.log(`Error publishing value: ${publishResponse.toString()}`);\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You should now be able to see the events being received by your webhook endpoint. What this endpoint does with the events is up to you! It is worth noting that this Webhook can listen to multiple topics across multiple caches. Since the ",(0,n.jsx)(o.code,{children:"topic"})," and ",(0,n.jsx)(o.code,{children:"cache"})," come as part of the POST body, events can be distinguished by these attributes, and processed in differently depending on which Cache/Topic the event came from."]})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},601:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/creating_webhook-d370b1e45b70e26f02cc9f1ceb77150a.jpg"},4126:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/create-fine-grained-token-97e4922c35cfd605d5409827859cbfc6.png"},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>c});var n=t(6540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);