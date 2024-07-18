"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5220],{6283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(4848),r=n(8453),s=(n(2821),n(503));const i={sidebar_position:3,sidebar_label:"Storage",title:"Getting started with Momento Storage in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},a="Go\u3067Momento\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u59cb\u3081\u308b",c={id:"sdks/go/storage",title:"Getting started with Momento Storage in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Storage.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/go/storage.mdx",sourceDirName:"sdks/go",slug:"/sdks/go/storage",permalink:"/ja/sdks/go/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/go/storage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Storage",title:"Getting started with Momento Storage in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]}},l={},d=[{value:"Momento SDK \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"momento-sdk-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"API\u30ad\u30fc\u306e\u8a2d\u5b9a",id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",level:2},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001StorageClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057storageclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059",level:2},{value:"Momento Storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b",id:"momento-storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"\u30b9\u30c8\u30a2\u306b\u5546\u54c1\u3092\u66f8\u304d\u8fbc\u3080",id:"\u30b9\u30c8\u30a2\u306b\u5546\u54c1\u3092\u66f8\u304d\u8fbc\u3080",level:2},{value:"\u30b9\u30c8\u30a2\u306e\u5546\u54c1\u3092\u8aad\u3080",id:"\u30b9\u30c8\u30a2\u306e\u5546\u54c1\u3092\u8aad\u3080",level:2},{value:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"go\u3067momento\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u59cb\u3081\u308b",children:"Go\u3067Momento\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u59cb\u3081\u308b"}),"\n",(0,o.jsxs)(t.p,{children:["Go\u3068Momento Storage\u3092\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u30da\u30fc\u30b8\u306b\u306f\u5fc5\u8981\u306a\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30d3\u30eb\u30c9\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080\u5b8c\u5168\u3067\u5b9f\u7528\u7684\u306a\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Go SDK examples"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"momento-sdk-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"Momento SDK \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,o.jsxs)(t.p,{children:["Momento SDK\u306fGo\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u5165\u624b\u3067\u304d\u307e\u3059\uff1a ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/momentohq/client-sdk-go",children:"client-sdk-go"})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/momentohq/client-sdk-go",children:"Go\u30d1\u30c3\u30b1\u30fc\u30b8"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u5229\u7528\u53ef\u80fd\u306a\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306eSDK\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,o.jsx)(t.p,{children:"\u65e2\u5b58\u306eGo\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30fb\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"go get github.com/momentohq/client-sdk-go\n"})}),"\n",(0,o.jsx)(t.h2,{id:"api\u30ad\u30fc\u306e\u8a2d\u5b9a",children:"API\u30ad\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,o.jsxs)(t.p,{children:["Momento\u3067\u8a8d\u8a3c\u3059\u308b\u306b\u306f\u3001Momento API\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002 Momento Web Console](",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/api-keys)%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/api-keys)\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\nAPI\u30ad\u30fc\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u74b0\u5883\u5909\u6570\u306b\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057storageclient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059",children:"\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u63a5\u7d9a\u3057\u3001StorageClient\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30e1\u30a4\u30f3\u95a2\u6570\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30dd\u30fc\u30c8\u3001StorageClient\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(s.F,{language:"go",code:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/momentohq/client-sdk-go/auth"\n\t"github.com/momentohq/client-sdk-go/config"\n\t"github.com/momentohq/client-sdk-go/momento"\n)\n\nfunc main() {\n\tctx := context.Background()\n\tvar credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tclient, err := momento.NewPreviewStorageClient(config.StorageLaptopLatest(), credentialProvider)\n\n\tvar storeName = "store-name"\n\n\tdefer func() {\n\t\tfmt.Println("Deleting store")\n\t\t_, err = client.DeleteStore(ctx, &momento.DeleteStoreRequest{\n\t\t\tStoreName: storeName,\n\t\t})\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t}()\n\n\t// ...\n}\n'}),"\n",(0,o.jsx)(t.h2,{id:"momento-storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b",children:"Momento Storage\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u65b0\u3057\u3044\u30b9\u30c8\u30a2\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(s.F,{language:"go",code:'resp, err := storageClient.CreateStore(ctx, &momento.CreateStoreRequest{\n\tStoreName: storeName,\n})\nif err != nil {\n\tpanic(err)\n}\n\nswitch resp.(type) {\ncase *responses.CreateStoreSuccess:\n\tfmt.Printf("Successfully created store %s\\n", storeName)\ncase *responses.CreateStoreAlreadyExists:\n\tfmt.Printf("Store %s already exists\\n", storeName)\n}'}),"\n",(0,o.jsx)(t.h2,{id:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b",children:"\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3042\u308b\u65e2\u5b58\u306e\u30b9\u30c8\u30a2\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3059\u308b"}),"\n",(0,o.jsx)(t.p,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5e97\u8217\u540d\u306e\u5358\u7d14\u306a\u30ea\u30b9\u30c8\u3002"}),"\n",(0,o.jsx)(s.F,{language:"go",code:'resp, err := storageClient.ListStores(ctx, &momento.ListStoresRequest{})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.ListStoresSuccess:\n\tlog.Printf("Found stores:\\n")\n\tfor _, store := range r.Stores() {\n\t\tlog.Printf("\\tStore name: %s\\n", store.Name())\n\t}\n}'}),"\n",(0,o.jsx)(t.h2,{id:"\u30b9\u30c8\u30a2\u306b\u5546\u54c1\u3092\u66f8\u304d\u8fbc\u3080",children:"\u30b9\u30c8\u30a2\u306b\u5546\u54c1\u3092\u66f8\u304d\u8fbc\u3080"}),"\n",(0,o.jsx)(t.p,{children:"Put\u64cd\u4f5c\u306e\u7c21\u5358\u306a\u4f8b\u3002"}),"\n",(0,o.jsx)(s.F,{language:"go",code:'_, err := storageClient.Put(ctx, &momento.StoragePutRequest{\n\tStoreName: storeName,\n\tKey:       "key",\n\tValue:     storageTypes.String("my-value"),\n})\nif err != nil {\n\tpanic(err)\n}\n\n// Momento storage also supports these other data types:\nstorageClient.Put(ctx, &momento.StoragePutRequest{\n\tStoreName: storeName,\n\tKey:       "key",\n\tValue:     storageTypes.Int(42),\n})\nstorageClient.Put(ctx, &momento.StoragePutRequest{\n\tStoreName: storeName,\n\tKey:       "key",\n\tValue:     storageTypes.Float(3.14),\n})\nstorageClient.Put(ctx, &momento.StoragePutRequest{\n\tStoreName: storeName,\n\tKey:       "key",\n\tValue:     storageTypes.Bytes{0x01, 0x02, 0x03},\n})'}),"\n",(0,o.jsx)(t.h2,{id:"\u30b9\u30c8\u30a2\u306e\u5546\u54c1\u3092\u8aad\u3080",children:"\u30b9\u30c8\u30a2\u306e\u5546\u54c1\u3092\u8aad\u3080"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u308c\u306f\u3001\u30b9\u30c8\u30a2\u304b\u3089\u5546\u54c1\u3092\u53d6\u5f97\u3059\u308b\u5358\u7d14\u306a\u8aad\u307f\u53d6\u308a\u64cd\u4f5c\u306e\u4f8b\u3067\u3059\u3002"}),"\n",(0,o.jsx)(s.F,{language:"go",code:'getResp, err := storageClient.Get(ctx, &momento.StorageGetRequest{\n\tStoreName: storeName,\n\tKey:       "key",\n})\nif err != nil {\n\tpanic(err)\n}\n\n// If the value was not found, the response\'s Value will be nil.\nif getResp.Value() == nil {\n\tfmt.Println("Got nil")\n}\n\n// If you know the type you\'re expecting, you can assert it directly:\nintVal, ok := getResp.Value().(storageTypes.Int)\nif !ok {\n\tfmt.Printf("Not an integer, received type: %T\\n", getResp.Value())\n} else {\n\tfmt.Printf("Got the integer %d\\n", intVal)\n}\n\n// Use switch if you don\'t know the type beforehand:\nswitch t := getResp.Value().(type) {\ncase storageTypes.String:\n\tfmt.Printf("Got the string %s\\n", t)\ncase storageTypes.Bytes:\n\tfmt.Printf("Got the bytes %b\\n", t)\ncase storageTypes.Float:\n\tfmt.Printf("Got the float %f\\n", t)\ncase storageTypes.Int:\n\tfmt.Printf("Got the integer %d\\n", t)\ncase nil:\n\tfmt.Println("Got nil")\n}'}),"\n",(0,o.jsx)(t.h2,{id:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c",children:"\u30b3\u30fc\u30c9\u306e\u5b9f\u884c"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Go SDK github repo examples directory"}),"\u306b\u5b8c\u5168\u306a\u52d5\u4f5c\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["\u3053\u308c\u3089\u306e\u57fa\u672c\u7684\u306aAPI\u30b3\u30fc\u30eb\u4ee5\u5916\u306eMomento API\u30b3\u30fc\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.jsx)(t.a,{href:"/ja/storage/develop/api-reference/",children:"API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8"}),"\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>s});var o=n(1432),r=(n(6540),n(4848));const s=e=>{let{language:t,code:n}=e;return(0,r.jsx)(o.A,{language:t,children:n})}}}]);