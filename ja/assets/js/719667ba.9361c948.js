"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Vector Index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",keywords:["momento","cache","caching","vector index","llm","large language model","vector search","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]},a="Getting Started with Momento Vector Index in JavaScript",s={unversionedId:"sdks/nodejs/vector-index",id:"sdks/nodejs/vector-index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",source:"@site/docs/sdks/nodejs/vector-index.md",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/vector-index",permalink:"/ja/sdks/nodejs/vector-index",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/vector-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Vector Index",title:"Getting started with Momento Vector Index in JavaScript",description:"Learn the basic building blocks for writing TypeScript and JavaScript code to interact with Momento Vector Index.",keywords:["momento","cache","caching","vector index","llm","large language model","vector search","redis","serverless","sdk","sdks","api","typescript","javascript","nodejs","node.js","examples","resources","getting started","quick start","web","browser"]}},l={},c=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and instantiate a vector index client",id:"import-libraries-and-instantiate-a-vector-index-client",level:2},{value:"Create a new index in Momento Vector Index",id:"create-a-new-index-in-momento-vector-index",level:2},{value:"Get list of existing indexes in your account",id:"get-list-of-existing-indexes-in-your-account",level:2},{value:"Write a batch of items to the index",id:"write-a-batch-of-items-to-the-index",level:2},{value:"Searching the index",id:"searching-the-index",level:2},{value:"Deleting items from the index",id:"deleting-items-from-the-index",level:2},{value:"Deleting an index",id:"deleting-an-index",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-momento-vector-index-in-javascript"},"Getting Started with Momento Vector Index in JavaScript"),(0,i.kt)("p",null,"Momento provides two JavaScript SDKs; ",(0,i.kt)("a",{parentName:"p",href:"/sdks/nodejs"},"one for Node.js")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdks/web"},"one for browsers other web applications"),". The two SDKs have identical APIs, so your code will look the same except for ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."),(0,i.kt)("p",null,"This page contains the basics that you will need in order to get going quickly with Momento Vector Index. For more in-depth information and examples, visit the SDK pages linked above."),(0,i.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,i.kt)("p",null,"To Install the Momento Node.js SDK in an existing Node.js project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\n")),(0,i.kt)("p",null,"OR, to install the Momento Web SDK in an existing browser application project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk-web\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You only need one of the two libraries; either ",(0,i.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk-web"),", depending on your target platform. You do not need both.")),(0,i.kt)("h2",{id:"set-up-your-api-key"},"Set up your API key"),(0,i.kt)("p",null,"You'll need a ",(0,i.kt)("a",{parentName:"p",href:"/cache/develop/authentication/api-keys"},"Momento API key")," to authenticate with Momento. You can get one, preferably a fine-grained token, from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/caches"},"Momento Web Console"),".\nOnce you have a token, store it in an environment variable so that the Momento client can consume it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your Momento token here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.kt)("h2",{id:"import-libraries-and-instantiate-a-vector-index-client"},"Import libraries and instantiate a vector index client"),(0,i.kt)("p",null,"This code sets up the class with the necessary imports, the class definition, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," instantiation that each of the other functions will need to call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {CredentialProvider, PreviewVectorIndexClient, VectorIndexConfigurations} from \"@gomomento/sdk\";\n\n\nconst client = new PreviewVectorIndexClient({\n    configuration: VectorIndexConfigurations.Laptop.latest(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n        environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n});\n\n")),(0,i.kt)("p",null,"The following examples assume that you have already instantiated a ",(0,i.kt)("inlineCode",{parentName:"p"},"PreviewVectorIndexClient")," as shown above."),(0,i.kt)("h2",{id:"create-a-new-index-in-momento-vector-index"},"Create a new index in Momento Vector Index"),(0,i.kt)("p",null,"Use this snippet to create a new index in your account. The ",(0,i.kt)("inlineCode",{parentName:"p"},"similarityMetric")," parameter is optional and defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"VectorSimilarityMetric.COSINE_SIMILARITY"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\n// The number of dimensions in your vectors\nconst numDimensions = 2;\nconst similarityMetric = VectorSimilarityMetric.COSINE_SIMILARITY;\n\nconst createResponse = await client.createIndex(indexName, numDimensions, similarityMetric);\nif (createResponse instanceof CreateVectorIndex.Success) {\n    console.log('Index created successfully!');\n} else {\n    console.log(`Error creating index: ${createResponse.toString()}`);\n}\n")),(0,i.kt)("h2",{id:"get-list-of-existing-indexes-in-your-account"},"Get list of existing indexes in your account"),(0,i.kt)("p",null,"In this example, we list the indexes in your account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const listResponse = await client.listIndexes();\nif (listResponse instanceof ListVectorIndexes.Success) {\n    console.log(listResponse.getIndexNames().join('\\n'));\n} else {\n    console.log(`Error listing indexes: ${listResponse.toString()}`);\n}\n")),(0,i.kt)("h2",{id:"write-a-batch-of-items-to-the-index"},"Write a batch of items to the index"),(0,i.kt)("p",null,"A simple example of doing an ",(0,i.kt)("inlineCode",{parentName:"p"},"upsertItemBatch")," operation. This operation will insert the items if they don't exist, or replace them if they do."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst upsertResponse = await client.upsertItemBatch(indexName, [\n    {\n        id: 'example_item_1',\n        vector: [1.0, 2.0],\n        metadata: {key1: 'value1'},\n    },\n    {\n        id: 'example_item_2',\n        vector: [3.0, 4.0],\n        metadata: {key2: 'value2'},\n    },\n]);\nif (upsertResponse instanceof VectorUpsertItemBatch.Success) {\n    console.log('Successfully upserted items');\n} else {\n    console.log(`Error adding items: ${upsertResponse.toString()}`);\n}\n")),(0,i.kt)("h2",{id:"searching-the-index"},"Searching the index"),(0,i.kt)("p",null,"This is an example of a search operation to get the top-k items from the index matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryVector"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"metadataFields")," parameter is optional and can be used to specify which metadata fields to return in the response."),(0,i.kt)("p",null,"Here we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"queryVector")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"[1.0, 2.0]")," and ask for the top 2 results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst queryVector = [1.0, 2.0];\nconst searchResponse = await client.search(indexName, queryVector, {\n    topK: 2,\n    metadataFields: ALL_VECTOR_METADATA,\n});\nif (searchResponse instanceof VectorSearch.Success) {\n    console.log(`Search succeeded with ${searchResponse.hits().length} results`);\n} else {\n    console.log(`Error searching items: ${searchResponse.toString()}`);\n}\n')),(0,i.kt)("h2",{id:"deleting-items-from-the-index"},"Deleting items from the index"),(0,i.kt)("p",null,"An example of deleting the items from an index using ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteItemBatch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const indexName = \"my-index\";\nconst itemsToDelete = [\n    'example_item_1',\n    'example_item_2',\n];\n\nconst deleteResponse = await client.deleteItemBatch(indexName, itemsToDelete);\nif (deleteResponse instanceof VectorDeleteItemBatch.Success) {\n    console.log('Successfully deleted items');\n} else {\n    console.log(`Error deleting items: ${deleteResponse.toString()}`);\n}\n")),(0,i.kt)("h2",{id:"deleting-an-index"},"Deleting an index"),(0,i.kt)("p",null,"An example of deleting an index using ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteIndex"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const indexName = "my-index";\nconst deleteIndexResponse = await client.deleteIndex(indexName);\nif (deleteIndexResponse instanceof DeleteVectorIndex.Success) {\n    console.log("Index \'test-index\' deleted");\n} else {\n    console.log(`Error deleting index: ${deleteIndexResponse.toString()}`);\n}\n')))}p.isMDXComponent=!0}}]);