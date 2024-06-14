"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[224],{1374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453),s=(t(2821),t(503));const r={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]},c="Python\u3067Momento\u30c8\u30d4\u30c3\u30af\u3092\u59cb\u3081\u308b",a={id:"sdks/python/topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/python/topics.mdx",sourceDirName:"sdks/python",slug:"/sdks/python/topics",permalink:"/ja/sdks/python/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/python/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]}},p={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",level:2},{value:"\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b",id:"\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"python\u3067momento\u30c8\u30d4\u30c3\u30af\u3092\u59cb\u3081\u308b",children:"Python\u3067Momento\u30c8\u30d4\u30c3\u30af\u3092\u59cb\u3081\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["Python\u3068Momento\u30c8\u30d4\u30c3\u30af\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-python/tree/main/examples",children:"Python SDK \u306e\u30b5\u30f3\u30d7\u30eb"})," \u306b\u306f\u3001\u5b8c\u5168\u306a\u52d5\u4f5c\u3059\u308b\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Momento Python SDK \u306f ",(0,i.jsxs)(n.a,{href:"https://pypi.org/project/momento/",children:["pypi as ",(0,i.jsx)(n.code,{children:"momento"})]})," \u304b\u3089\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Python\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bpip\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install momento\n"})}),"\n",(0,i.jsx)(n.h2,{id:"momento-api\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b",children:"Momento API\u30ad\u30fc\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002Momento Web Console"}),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\n\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5f37\u5316\u306e\u305f\u3081\u306b\u306f\u3001API\u30ad\u30fc\u3092\u74b0\u5883\u5909\u6570\u3067\u306f\u306a\u304f\u3001AWS Secret Manager\u3084GCP Secret Manager\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u5165\u308c\u308b\u306e\u304c\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3060\u304c\u3001\u3053\u3053\u3067\u306f\u30c7\u30e2\u306e\u305f\u3081\u306bAPI\u30ad\u30fc\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"topicclient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"TopicClient\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30d1\u30d6/\u30b5\u30d6\u30fb\u30c8\u30d4\u30c3\u30af\u3068\u306e\u5bfe\u8a71\u306b\u4f7f\u7528\u3059\u308b TopicClient \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(s.F,{language:"python",code:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n'}),"\n",(0,i.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u767a\u884c\u3057\u3001\u305d\u306e\u8fd4\u308a\u5024\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3066\u767a\u884c\u304c\u6210\u529f\u3057\u305f\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u4f8b\u3067\u3059\u3002'}),"\n",(0,i.jsx)(s.F,{language:"python",code:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n'}),"\n",(0,i.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b",children:"\u30c8\u30d4\u30c3\u30af\u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:'\u3053\u308c\u306f\u3001"topic "\u3068\u3044\u3046\u30c8\u30d4\u30c3\u30af\u3092\u8cfc\u8aad\u3059\u308b\u4f8b\u3067\u3059\u3002\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30d1\u30d6\u30ea\u30c3\u30b7\u30e5\u3055\u308c\u308b\u3068\u3001\u3053\u3053\u306e\u30b3\u30fc\u30c9\u306f\u305d\u308c\u3092\u975e\u540c\u671f\u306b\u53d7\u4fe1\u3057\u3066\u8868\u793a\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(s.F,{language:"python",code:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n'}),"\n",(0,i.jsx)(n.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/momentohq/client-sdk-python/tree/main/examples",children:"Python SDK GitHub repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306b\u3082\u3001Momento\u306eAPI\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/topics/develop/api-reference",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2821:(e,n,t)=>{t(6540)},503:(e,n,t)=>{t.d(n,{F:()=>s});var i=t(1432),o=(t(6540),t(4848));const s=e=>{let{language:n,code:t}=e;return(0,o.jsx)(i.A,{language:n,children:t})}}}]);