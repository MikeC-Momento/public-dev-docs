"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9969],{6409:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(4848),o=i(8453),s=(i(2821),i(503));const r={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]},c="Kotlin\u3067Momento Topic\u3092\u59cb\u3081\u308b",l={id:"sdks/kotlin/topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/kotlin/topics.mdx",sourceDirName:"sdks/kotlin",slug:"/sdks/kotlin/topics",permalink:"/ja/sdks/kotlin/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/kotlin/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Kotlin",description:"Learn the basic building blocks for writing Kotlin code to interact with Momento Topics in your native Android applications, or your JVM server-side applications.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","android","mobile","kotlin","java","jvm"]}},a={},d=[{value:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kotlin\u3067momento-topic\u3092\u59cb\u3081\u308b",children:"Kotlin\u3067Momento Topic\u3092\u59cb\u3081\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Kotlin\u3068Momento\u30c8\u30d4\u30c3\u30af\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5b8c\u5168\u3067\u5b9f\u7528\u7684\u306a\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u306f\u3001",(0,t.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Kotlin SDK examples"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"momento-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Momento SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Momento SDK\u306fMaven Central\u3067\u5165\u624b\u3067\u304d\u307e\u3059: ",(0,t.jsx)(n.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:"`software.momento.kotlin/sdk"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://central.sonatype.com/artifact/software.momento.kotlin/sdk",children:"Maven Central"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001SDK\u306e\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:"\u65e2\u5b58\u306eKotlin\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'implementation("software.momento.kotlin:sdk:x.x.x")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>software.momento.kotlin</groupId>\n    <artifactId>sdk</artifactId>\n    <version>x.x.x</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",children:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002Momento Web Console](",(0,t.jsx)(n.a,{href:"https://console.gomomento.com/)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u308b\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30d1\u30d6/\u30b5\u30d6\u30fb\u30c8\u30d4\u30c3\u30af\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b TopicClient \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.F,{language:"kotlin",code:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}'}),"\n",(0,t.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"}),"\n",(0,t.jsx)(n.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3001\u767a\u884c\u304c\u6210\u529f\u3057\u305f\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u305f\u3081\u306b\u623b\u308a\u5024\u3092\u30ad\u30e3\u30c3\u30c1\u3059\u308b\u4f8b\u3067\u3059\u3002'}),"\n",(0,t.jsx)(s.F,{language:"kotlin",code:'when (val response = topicClient.publish("test-cache", "test-topic", "test-message")) {\n    is TopicPublishResponse.Success -> println("Message published successfully")\n    is TopicPublishResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to publish message to topic \'test-topic\': ${response.errorCode}",\n        response\n    )\n}'}),"\n",(0,t.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b"}),"\n",(0,t.jsx)(n.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b\u4f8b\u3067\u3042\u308b\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308b\u3068\u3001\u3053\u3053\u306e\u30b3\u30fc\u30c9\u306f\u305d\u308c\u3092\u975e\u540c\u671f\u306b\u53d7\u4fe1\u3057\u3066\u8868\u793a\u3059\u308b\u3002'}),"\n",(0,t.jsx)(s.F,{language:"kotlin",code:'when (val response = topicClient.subscribe("test-cache", "test-topic")) {\n    is TopicSubscribeResponse.Subscription -> coroutineScope {\n        launch {\n            withTimeoutOrNull(2000) {\n                response.collect { item ->\n                    when (item) {\n                        is TopicMessage.Text -> println("Received text message: ${item.value}")\n                        is TopicMessage.Binary -> println("Received binary message: ${item.value}")\n                        is TopicMessage.Error -> throw RuntimeException(\n                            "An error occurred reading messages from topic \'test-topic\': ${item.errorCode}", item\n                        )\n                    }\n                }\n            }\n        }\n    }\n\n    is TopicSubscribeResponse.Error -> throw RuntimeException(\n        "An error occurred while attempting to subscribe to topic \'test-topic\': ${response.errorCode}", response\n    )\n}'}),"\n",(0,t.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-kotlin/tree/main/examples",children:"Kotlin SDK GitHub repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"/topics/develop/api-reference",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},2821:(e,n,i)=>{i(6540)},503:(e,n,i)=>{i.d(n,{F:()=>s});var t=i(1432),o=(i(6540),i(4848));const s=e=>{let{language:n,code:i}=e;return(0,o.jsx)(t.A,{language:n,children:i})}}}]);