"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4114],{7258:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(4848),r=o(8453),s=(o(2821),o(503));const a={sidebar_position:5,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},i="Getting Started with Momento Storage in JavaScript",c={id:"platform/sdks/nodejs/storage",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",source:"@site/docs/platform/sdks/nodejs/storage.mdx",sourceDirName:"platform/sdks/nodejs",slug:"/platform/sdks/nodejs/storage",permalink:"/platform/sdks/nodejs/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/nodejs/storage.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","durable","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},sidebar:"platformSidebar",previous:{title:"Topics",permalink:"/platform/sdks/nodejs/topics"},next:{title:"Compression",permalink:"/platform/sdks/nodejs/compression"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a StorageClient object",id:"import-libraries-and-create-a-storageclient-object",level:2},{value:"Create a new store in Momento Storage",id:"create-a-new-store-in-momento-storage",level:2},{value:"List the names of existing stores in your account",id:"list-the-names-of-existing-stores-in-your-account",level:2},{value:"Write an item to a store",id:"write-an-item-to-a-store",level:2},{value:"Read an item from a store",id:"read-an-item-from-a-store",level:2},{value:"Running the code",id:"running-the-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-momento-storage-in-javascript",children:"Getting Started with Momento Storage in JavaScript"}),"\n",(0,n.jsxs)(t.p,{children:["Momento provides two JavaScript SDKs; ",(0,n.jsx)(t.a,{href:"/platform/sdks/nodejs",children:"one for Node.js"})," and ",(0,n.jsx)(t.a,{href:"/platform/sdks/web",children:"one for browsers other web applications"}),". The two SDKs have identical APIs, so your code will look the same except for ",(0,n.jsx)(t.code,{children:"import"})," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."]}),"\n",(0,n.jsx)(t.p,{children:"This page contains the basics that you will need in order to get going quickly with Momento Storage. For more in-depth information and examples, visit the SDK pages linked above."}),"\n",(0,n.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,n.jsx)(t.p,{children:"To Install the Momento Node.js SDK in an existing Node.js project:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk\n"})}),"\n",(0,n.jsx)(t.p,{children:"OR, to install the Momento Web SDK in an existing browser application project:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cli",children:"npm install @gomomento/sdk-web\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You only need one of the two libraries; either ",(0,n.jsx)(t.code,{children:"@gomomento/sdk"})," or ",(0,n.jsx)(t.code,{children:"@gomomento/sdk-web"}),", depending on your target platform. You do not need both."]})}),"\n",(0,n.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,n.jsxs)(t.p,{children:["You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,n.jsx)(t.h2,{id:"import-libraries-and-create-a-storageclient-object",children:"Import libraries and create a StorageClient object"}),"\n",(0,n.jsx)(t.p,{children:"This code sets up the main function, pulls in the necessary imports, and instantiates the StorageClient that will be used to interact with your cache."}),"\n",(0,n.jsx)(s.F,{language:"javascript",code:"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport {CredentialProvider, PreviewStorageClient, StorageConfigurations} from '@gomomento/sdk';\n\nconst storageClient = new PreviewStorageClient({\n  configuration: StorageConfigurations.Laptop.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});\n"}),"\n",(0,n.jsx)(t.h2,{id:"create-a-new-store-in-momento-storage",children:"Create a new store in Momento Storage"}),"\n",(0,n.jsx)(t.p,{children:"Use this function to create a new store in your account."}),"\n",(0,n.jsx)(s.F,{language:"javascript",code:"const result = await storageClient.createStore(storeName);\nswitch (result.type) {\n  case CreateStoreResponse.AlreadyExists:\n    console.log(`Store '${storeName}' already exists`);\n    break;\n  case CreateStoreResponse.Success:\n    console.log(`Store '${storeName}' created`);\n    break;\n  case CreateStoreResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to create store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(t.h2,{id:"list-the-names-of-existing-stores-in-your-account",children:"List the names of existing stores in your account"}),"\n",(0,n.jsx)(t.p,{children:"A simple list of the names of stores for the account."}),"\n",(0,n.jsx)(s.F,{language:"javascript",code:"const result = await storageClient.listStores();\nswitch (result.type) {\n  case ListStoresResponse.Success:\n    console.log(\n      `Stores:\\n${result\n        .stores()\n        .map(c => c.getName())\n        .join('\\n')}\\n\\n`\n    );\n    break;\n  case ListStoresResponse.Error:\n    throw new Error(`An error occurred while attempting to list stores: ${result.errorCode()}: ${result.toString()}`);\n}"}),"\n",(0,n.jsx)(t.h2,{id:"write-an-item-to-a-store",children:"Write an item to a store"}),"\n",(0,n.jsx)(t.p,{children:"A simple example of doing a put operation."}),"\n",(0,n.jsx)(s.F,{language:"javascript",code:"// to store a string value:\nconst result = await storageClient.putString(storeName, 'test-key', 'test-value');\nswitch (result.type) {\n  case StoragePutResponse.Success:\n    console.log(\"Key 'test-key' stored successfully\");\n    break;\n  case StoragePutResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to store key 'test-key' in store '${storeName}': ${result.errorCode()}: ${result.toString()}`\n    );\n}\n\n// Momento storage also supports these other data types:\nawait storageClient.putInt(storeName, 'test-key', 42);\nawait storageClient.putDouble(storeName, 'test-key', 3.14);\nawait storageClient.putBytes(storeName, 'test-key', Buffer.from('test-value'));"}),"\n",(0,n.jsx)(t.h2,{id:"read-an-item-from-a-store",children:"Read an item from a store"}),"\n",(0,n.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a store."}),"\n",(0,n.jsx)(s.F,{language:"javascript",code:"const getResponse = await storageClient.get(storeName, 'test-key');\n// simplified style; assume the value was found, and that it was a string\nconsole.log(`string hit: ${getResponse.value()!.string()!}`);\n\n// if the value was an integer:\nconst integerGetResponse = await storageClient.get(storeName, 'test-integer-key');\nconsole.log(`integer hit: ${integerGetResponse.value()!.int()!}`);\n\n// pattern-matching style; safer for production code\nswitch (getResponse.type) {\n  case StorageGetResponse.Found:\n    // if you know the value is a string:\n    console.log(`Retrieved value for key 'test-key': ${getResponse.value().string()!}`);\n    break;\n  case StorageGetResponse.NotFound:\n    console.log(`Key 'test-key' was not found in store '${storeName}'`);\n    break;\n  case StorageGetResponse.Error:\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from store '${storeName}': ${getResponse.errorCode()}: ${getResponse.toString()}`\n    );\n}"}),"\n",(0,n.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples",children:"JavaScript SDK GitHub repo examples directory"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,n.jsx)(t.a,{href:"/storage/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,t,o)=>{o(6540)},503:(e,t,o)=>{o.d(t,{F:()=>s});var n=o(1432),r=(o(6540),o(4848));const s=e=>{let{language:t,code:o}=e;return(0,r.jsx)(n.A,{language:t,children:o})}}}]);