"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6246],{7934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var i=n(4848),r=n(8453);n(2821),n(503),n(6540);var a=n(1470),s=n(9365),l=n(1432);const o=e=>{let{js:t,python:n,java:r,kotlin:o,go:c,csharp:u,php:h,rust:d,ruby:m,elixir:p,swift:f,dart:g,cli:b}=e;return t||n||r||o||c||u||h||d||m||p||f||g||b?(0,i.jsxs)(a.A,{children:[t&&(0,i.jsx)(s.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(l.A,{language:"js",children:t})}),n&&(0,i.jsx)(s.A,{value:"python",label:"Python",children:(0,i.jsx)(l.A,{language:"python",children:n})}),r&&(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(l.A,{language:"java",children:r})}),o&&(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(l.A,{language:"kotlin",children:o})}),c&&(0,i.jsx)(s.A,{value:"go",label:"Go",children:(0,i.jsx)(l.A,{language:"go",children:c})}),u&&(0,i.jsx)(s.A,{value:"csharp",label:"C#",children:(0,i.jsx)(l.A,{language:"csharp",children:u})}),h&&(0,i.jsx)(s.A,{value:"php",label:"PHP",children:(0,i.jsx)(l.A,{language:"php",children:h})}),d&&(0,i.jsx)(s.A,{value:"rust",label:"Rust",children:(0,i.jsx)(l.A,{language:"rust",children:d})}),m&&(0,i.jsx)(s.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(l.A,{language:"ruby",children:m})}),p&&(0,i.jsx)(s.A,{value:"elixir",label:"Elixir",children:(0,i.jsx)(l.A,{language:"elixir",children:p})}),f&&(0,i.jsx)(s.A,{value:"swift",label:"Swift",children:(0,i.jsx)(l.A,{language:"swift",children:f})}),g&&(0,i.jsx)(s.A,{value:"dart",label:"Dart",children:(0,i.jsx)(l.A,{language:"dart",children:g})}),b&&(0,i.jsx)(s.A,{value:"cli",label:"CLI",children:(0,i.jsx)(l.A,{language:"cli",children:b})})]}):null},c={sidebar_position:2,sidebar_label:"Build a Rate-Limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},u="Building a distributed and centralized rate-limiter using Momento",h={id:"cache/how-to/rate-limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento.",source:"@site/docs/cache/how-to/rate-limiter.mdx",sourceDirName:"cache/how-to",slug:"/cache/how-to/rate-limiter",permalink:"/cache/how-to/rate-limiter",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/how-to/rate-limiter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Build a Rate-Limiter",title:"Implement a distributed rate-limiter using Momento",description:"Learn how you can implement a distributed rate-limiter using a centralized backend source, Momento."},sidebar:"tutorialSidebar",previous:{title:"How To"},next:{title:"Learn"}},d={},m=[{value:"What is rate-limiting?",id:"what-is-rate-limiting",level:2},{value:"What\u2019s the use of rate-limiters?",id:"whats-the-use-of-rate-limiters",level:2},{value:"Using Momento to build a distributed rate-limiter",id:"using-momento-to-build-a-distributed-rate-limiter",level:2},{value:"We want more!",id:"we-want-more",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"building-a-distributed-and-centralized-rate-limiter-using-momento",children:"Building a distributed and centralized rate-limiter using Momento"}),"\n",(0,i.jsx)(t.h2,{id:"what-is-rate-limiting",children:"What is rate-limiting?"}),"\n",(0,i.jsx)(t.p,{children:"Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe. Rate-limiting exists literally everywhere; whether you are looking at your Twitter news feed or streaming a live video, there\u2019s a non-zero chance that you are interacting with a rate-limiter. It is watching you, making decisions about your traffic, and rightfully stopping you if you start making too much noise."}),"\n",(0,i.jsx)(t.h2,{id:"whats-the-use-of-rate-limiters",children:"What\u2019s the use of rate-limiters?"}),"\n",(0,i.jsx)(t.p,{children:"The need for rate-limiting stems from the fundamental requirement to maintain the health and quality of any service. Without it, resources could easily become overwhelmed, leading to service degradation or outright failure. This is particularly important in distributed systems, web services, and multi-tenant applications where client requests can vary dramatically in volume and frequency. Rate-limiting ensures a fair distribution of resources, prevents abuse, and can even be a crucial component in defending against certain types of cyber-attacks, such as Distributed Denial of Service (DDoS) attacks."}),"\n",(0,i.jsx)(t.p,{children:"Some common use-cases of rate-limiting includes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"API Management: In a platform offering various APIs, rate-limiting is crucial to prevent a single user or service from monopolizing the bandwidth, ensuring that all users have equitable access to the resources."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"E-commerce Websites: During high-traffic events like Black Friday sales, rate-limiting can prevent the website from crashing by controlling the influx of user requests, thus providing a stable and fair shopping experience to all customers."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Online Gaming Servers: Rate-limiting can help in mitigating cheating by throttling the number of actions a player can perform in a given time, ensuring a level playing field and maintaining the game's integrity."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"using-momento-to-build-a-distributed-rate-limiter",children:"Using Momento to build a distributed rate-limiter"}),"\n",(0,i.jsxs)(t.p,{children:["Let\u2019s imagine you want to create a distributed rate-limiter that could effectively manage transactions-per-minute (TPM) for individual users.\nOur approach utilizes Momento's ",(0,i.jsx)(t.code,{children:"increment"})," and ",(0,i.jsx)(t.code,{children:"updateTTL"})," ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference",children:"APIs"}),". This method proves to be not only efficient but also highly accurate."]}),"\n",(0,i.jsx)(t.p,{children:"At the heart of our rate-limiter is a key mechanism that allows us to perform rate limiting based on user-per-minute granularity. The key is constructed using a combination of a user or entity and the current minute. This key plays a pivotal role in tracking and limiting the number of transactions a user can make in a given minute."}),"\n",(0,i.jsx)(t.p,{children:"The rate limiter increments the value of the unique key for each user when they make a request, setting a time-to-live (TTL) for the first request of the minute to 60 seconds. This is important as we want our keys to expire as they are not meaningful after they have served their purpose for a given minute."}),"\n",(0,i.jsx)(t.p,{children:"A flow of the rate-limiter looks like:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Increment the value of ",(0,i.jsx)(t.code,{children:"user_id-current_minute"}),". If the returned value is 1, that indicates that this was the first request for the user for that given minute. Note that Momento's ",(0,i.jsx)(t.code,{children:"increment"})," API is guaranteed to be atomic. If this return value is 1, we set the TTL of that key using ",(0,i.jsx)(t.code,{children:"updateTTL"})," API to be 60 seconds."]}),"\n",(0,i.jsx)(t.li,{children:"If the value is less than the configured TPM limit for the rate limiter, we allow the request, or else, throttle it."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Let's dive right into our implementation; pay attention to comments in this code where we explain the thought process."}),"\n",(0,i.jsx)(o,{js:"import {\n  CacheClient,\n  CacheIncrement,\n  CacheUpdateTtl,\n  Configurations,\n  CreateCache,\n  CredentialProvider,\n} from '@gomomento/sdk';\n\n// since our rate limiting buckets are per minute, we expire keys every minute\nexport const RATE_LIMITER_TTL_MILLIS = 60000;\n\nexport class MomentoRateLimiter {\n  _client: CacheClient;\n  _limit: number;\n  _cacheName: string;\n\n  constructor(client: CacheClient, limit: number, cacheName: string) {\n    this._client = client;\n    this._limit = limit;\n    this._cacheName = cacheName;\n  }\n\n  /**\n   * Generates a unique key for a user (baseKey) for the current minute. This key will server as the backend\n   * cache key where we will store the amount of calls that have been made by a user for a given minute.\n   * @param baseKey\n   */\n  generateMinuteKey(baseKey: string): string {\n    const currentDate = new Date();\n    const currentMinute = currentDate.getMinutes();\n    return `${baseKey}_${currentMinute}`;\n  }\n\n  public async isLimitExceeded(id: string): Promise<boolean> {\n    const currentMinuteKey = this.generateMinuteKey(id);\n    // we do not pass a TTL to this; we don't know if the key for this user was present or not\n    const resp = await this._client.increment(\n      this._cacheName,\n      currentMinuteKey\n    );\n\n    if (resp instanceof CacheIncrement.Success) {\n      if (resp.value() <= this._limit) {\n        // if returned value is 1, we know this was the first request in this minute for the given user. So\n        // we set the TTL for this minute's key to 60 seconds now.\n        if (resp.value() === 1) {\n          const updateTTLResp = await this._client.updateTtl(\n            this._cacheName,\n            currentMinuteKey,\n            RATE_LIMITER_TTL_MILLIS\n          );\n          if (!(updateTTLResp instanceof CacheUpdateTtl.Set)) {\n            console.error(\n              `Failed to update TTL; this minute's user requests might be overcounted, key: ${currentMinuteKey}`\n            );\n          }\n        }\n        return false;\n      }\n    } else if (resp instanceof CacheIncrement.Error) {\n      throw new Error(resp.message());\n    }\n\n    return true;\n  }\n}\n\nasync function main() {\n  const cacheClient = await CacheClient.create({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_API_KEY',\n    }),\n    defaultTtlSeconds: 60,\n  });\n\n  const tpmLimit = 1;\n  const cacheName = 'rate-limiter';\n\n  const createCacheResp = await cacheClient.createCache(cacheName);\n  if (createCacheResp instanceof CreateCache.Error) {\n    throw new Error(createCacheResp.message());\n  } else if (createCacheResp instanceof CreateCache.AlreadyExists) {\n    console.log(`${cacheName} cache already exists`);\n  }\n\n  const momentoRateLimier = new MomentoRateLimiter(\n    cacheClient,\n    tpmLimit,\n    cacheName\n  );\n\n  const limitExceeded = await momentoRateLimier.isLimitExceeded('user-id');\n  if (!limitExceeded) {\n    // do work for user\n    console.log('Successfully called work and request was allowed');\n  } else {\n    console.warn('Request was throttled');\n  }\n}\n\nmain()\n  .then()\n  .catch((err: Error) => console.error(err.message));\n"}),"\n",(0,i.jsx)(t.h2,{id:"we-want-more",children:"We want more!"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can quickly get started with our SDK examples to play around the Momento rate limiter, where you can also simulate contention and cause your rate-limiter to throttle requests.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/rate-limiter",children:"Typescript"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.gomomento.com/blog/did-you-say-you-want-a-distributed-rate-limiter",children:"Read our blog"})," where we analyze different heuristics of the rate-limiter and also compare it with other approaches."]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var i=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(6540),r=n(4164),a=n(3104),s=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,h]=p({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==i&&(c(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(x,{...e,children:h(e.children)},String(t))}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>a});var i=n(1432),r=(n(6540),n(4848));const a=e=>{let{language:t,code:n}=e;return(0,r.jsx)(i.A,{language:t,children:n})}}}]);