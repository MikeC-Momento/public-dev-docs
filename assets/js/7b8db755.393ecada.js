"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5271],{4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(4848),s=n(8453),i=(n(2821),n(503));const c={sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","dotnet","csharp","c sharp","c#"]},o="Getting Started with Momento Cache in .NET",a={id:"sdks/dotnet/cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",source:"@site/docs/sdks/dotnet/cache.mdx",sourceDirName:"sdks/dotnet",slug:"/sdks/dotnet/cache",permalink:"/sdks/dotnet/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/dotnet/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",title:"Getting started with Momento Cache in .NET",description:"Learn the basic building blocks for writing .NET/C# code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","dotnet","csharp","c sharp","c#"]}},h={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a CacheClient object",id:"import-libraries-and-create-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started-with-momento-cache-in-net",children:"Getting Started with Momento Cache in .NET"}),"\n",(0,r.jsxs)(t.p,{children:["If you need to get going quickly with .NET and Momento Cache, this page contains the basic API calls you'll need. ",(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples",children:"Check the .NET SDK examples"})," for complete, working examples including build configuration files."]}),"\n",(0,r.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,r.jsx)(t.p,{children:"Install the client library in an existing .NET project:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cli",children:"dotnet add package Momento.Sdk\n"})}),"\n",(0,r.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,r.jsxs)(t.p,{children:["You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,r.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,r.jsx)(t.h2,{id:"import-libraries-and-create-a-cacheclient-object",children:"Import libraries and create a CacheClient object"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoUsage/Program.cs",children:"This example file"})," pulls in the necessary imports, reads the API key from an environment variable, and instantiates the CacheClient that is used to interact with a cache."]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,r.jsx)(t.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,r.jsx)(i.F,{language:"csharp",code:'var result = await cacheClient.CreateCacheAsync("test-cache");\r\nif (result is CreateCacheResponse.Success)\r\n{\r\n    Console.WriteLine("Cache \'test-cache\' created");\r\n}\r\nelse if (result is CreateCacheResponse.CacheAlreadyExists)\r\n{\r\n    Console.WriteLine("Cache \'test-cache\' already exists");\r\n}\r\nelse if (result is CreateCacheResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to create cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r'}),"\n",(0,r.jsx)(t.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,r.jsx)(t.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,r.jsx)(i.F,{language:"csharp",code:'var result = await cacheClient.ListCachesAsync();\r\nif (result is ListCachesResponse.Success success)\r\n{\r\n    Console.WriteLine($"Caches:\\n{string.Join("\\n", success.Caches.Select(c => c.Name))}\\n\\n");\r\n}\r\nelse if (result is ListCachesResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to list caches: {error.ErrorCode}: {error}");\r\n}\r'}),"\n",(0,r.jsx)(t.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,r.jsx)(t.p,{children:"A simple example of doing a set operation. In the client.set call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,r.jsx)(i.F,{language:"csharp",code:'var result = await cacheClient.SetAsync("test-cache", "test-key", "test-value");\r\nif (result is CacheSetResponse.Success)\r\n{\r\n    Console.WriteLine("Key \'test-key\' stored successfully");\r\n}\r\nelse if (result is CacheSetResponse.Error error)\r\n{\r\n    throw new Exception($"An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': {error.ErrorCode}: {error}");\r\n}\r'}),"\n",(0,r.jsx)(t.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,r.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,r.jsx)(i.F,{language:"csharp",code:"var result = await cacheClient.GetAsync(\"test-cache\", \"test-key\");\r\nif (result is CacheGetResponse.Hit hit)\r\n{\r\n    Console.WriteLine($\"Retrieved value for key 'test-key': {hit.ValueString}\");\r\n}\r\nelse if (result is CacheGetResponse.Miss)\r\n{\r\n    Console.WriteLine(\"Key 'test-key' was not found in cache 'test-cache'\");\r\n}\r\nelse if (result is CacheGetResponse.Error error)\r\n{\r\n    throw new Exception($\"An error occurred while attempting to get key 'test-key' from cache 'test-cache': {error.ErrorCode}: {error}\");\r\n}\r"}),"\n",(0,r.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,r.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples",children:"csharp SDK GitHub repo examples directory"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,r.jsx)(t.a,{href:"/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]}),(0,r.jsxs)(t.p,{children:["Check out this example code for ",(0,r.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-dotnet/blob/main/examples/MomentoApplication/Program.cs",children:"more advanced calls"}),"."]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>i});var r=n(1432),s=(n(6540),n(4848));const i=e=>{let{language:t,code:n}=e;return(0,s.jsx)(r.A,{language:t,children:n})}}}]);