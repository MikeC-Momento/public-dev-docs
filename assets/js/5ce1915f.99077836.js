"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6882],{4726:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(4848),t=o(8453),i=(o(2821),o(503));const a={sidebar_position:1,sidebar_label:"Config and Error Handling",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript"]},s="How to Manage Configuration and Error Handling in the Momento Node.js SDK",c={id:"sdks/nodejs/config-and-error-handling",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",source:"@site/docs/sdks/nodejs/config-and-error-handling.mdx",sourceDirName:"sdks/nodejs",slug:"/sdks/nodejs/config-and-error-handling",permalink:"/sdks/nodejs/config-and-error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/nodejs/config-and-error-handling.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Config and Error Handling",title:"Manage Momento Configuration and Error Handling in TypeScript and Node.js",description:"Learn how to configure your Momento CacheClient and write production-ready error handling code in TypeScript and Node.js",keywords:["momento","cache","configuration","error handling","exceptions","sdk","production ready","typescript","node.js","nodejs","javascript"]}},d={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-manage-configuration-and-error-handling-in-the-momento-nodejs-sdk",children:"How to Manage Configuration and Error Handling in the Momento Node.js SDK"}),"\n",(0,r.jsxs)(n.p,{children:["The code below illustrates the simplest way to construct a ",(0,r.jsx)(n.code,{children:"CacheClient"}),":"]}),"\n",(0,r.jsx)(i.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,r.jsxs)(n.p,{children:["However, you may pass in a ",(0,r.jsx)(n.code,{children:"Configuration"})," object to customize the behavior."]}),"\n",(0,r.jsxs)(n.p,{children:["Momento provides several pre-built configurations in the ",(0,r.jsx)(n.code,{children:"Configurations"})," module, such as ",(0,r.jsx)(n.code,{children:"InRegion"})," (which is configured\nwith timeouts and connection counts that are appropriate for server-side connectivity from within the same AWS region),\nand ",(0,r.jsx)(n.code,{children:"Lambda"})," (which is tuned for use in AWS Lambda environments). Here is how you can specify the ",(0,r.jsx)(n.code,{children:"Lambda"})," configuration:"]}),"\n",(0,r.jsx)(i.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest(),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you omit the configuration, Momento will use the ",(0,r.jsx)(n.code,{children:"Laptop"})," configuration by default. This configuration has relaxed\ntimeouts, suitable for development or in high-latency environments. (It is not recommended for production, server-side use.)"]})}),"\n",(0,r.jsxs)(n.p,{children:["For more information about ",(0,r.jsx)(n.code,{children:"Configuration"})," objects see ",(0,r.jsx)(n.a,{href:"/cache/develop/basics/client-configuration-objects",children:"SDK Configuration Objects"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"CacheClient"})," errors are surfaced to developers as part of the return values of the calls, as opposed to throwing\nexceptions. This makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring\nyou've handled the errors you care about."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of how to check for errors on a ",(0,r.jsx)(n.code,{children:"get"})," call:"]}),"\n",(0,r.jsx)(i.F,{language:"javascript",code:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}"}),"\n",(0,r.jsxs)(n.p,{children:["However, if you prefer for exceptions to be thrown, you can configure the ",(0,r.jsx)(n.code,{children:"CacheClient"})," to do so:"]}),"\n",(0,r.jsx)(i.F,{language:"javascript",code:"const cacheClient = await CacheClient.create({\n  configuration: Configurations.Lambda.latest().withThrowOnErrors(true),\n  credentialProvider: CredentialProvider.fromEnvVar('MOMENTO_API_KEY'),\n  defaultTtlSeconds: 60,\n});"}),"\n",(0,r.jsxs)(n.p,{children:["With this configuration setting, any errors that occur will result in an instance of ",(0,r.jsx)(n.code,{children:"SdkError"})," being thrown. You may\ncatch it and use its ",(0,r.jsx)(n.code,{children:".errorCode()"})," method to determine the specific error that occurred:"]}),"\n",(0,r.jsx)(i.F,{language:"javascript",code:"try {\n  const result = (await cacheClient.get('test-cache', 'test-key')).value();\n  if (result !== undefined) {\n    console.log(`Retrieved value for key 'test-key': ${result}`);\n  } else {\n    console.log(\"Key 'test-key' was not found in cache 'test-cache'\");\n  }\n} catch (e) {\n  const momentoError = e as SdkError;\n  if (momentoError.errorCode() === MomentoErrorCode.LIMIT_EXCEEDED_ERROR) {\n    console.log('Request rate limit exceeded, may need to request a limit increase!');\n  } else {\n    throw new Error(\n      `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${momentoError.errorCode()}: ${momentoError.toString()}`\n    );\n  }\n}"}),"\n",(0,r.jsxs)(n.p,{children:["For more information about error handling in Momento see ",(0,r.jsx)(n.a,{href:"/cache/develop/basics/error-handling-production-readiness",children:"SDK Error Handling"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2821:(e,n,o)=>{o(6540)},503:(e,n,o)=>{o.d(n,{F:()=>i});var r=o(1432),t=(o(6540),o(4848));const i=e=>{let{language:n,code:o}=e;return(0,t.jsx)(r.A,{language:n,children:o})}}}]);