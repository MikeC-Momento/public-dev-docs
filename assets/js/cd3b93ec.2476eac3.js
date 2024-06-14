"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8045],{4171:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var a=i(4848),n=i(8453);const o={sidebar_position:4,sidebar_label:"Cache eviction vs expiration",title:"Cache eviction vs expiration",pagination_next:null,description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache"},c="Cache eviction vs. cache expiration",r={id:"cache/learn/how-it-works/cache-eviction-vs-expiration",title:"Cache eviction vs expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache",source:"@site/docs/cache/learn/how-it-works/cache-eviction-vs-expiration.md",sourceDirName:"cache/learn/how-it-works",slug:"/cache/learn/how-it-works/cache-eviction-vs-expiration",permalink:"/cache/learn/how-it-works/cache-eviction-vs-expiration",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/learn/how-it-works/cache-eviction-vs-expiration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Cache eviction vs expiration",title:"Cache eviction vs expiration",pagination_next:null,description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Expiring data with TTL",permalink:"/cache/learn/how-it-works/expire-data-with-ttl"}},s={},h=[{value:"What is cache eviction?",id:"what-is-cache-eviction",level:2},{value:"Momento Cache and eviction",id:"momento-cache-and-eviction",level:2},{value:"Cache expiration",id:"cache-expiration",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"cache-eviction-vs-cache-expiration",children:"Cache eviction vs. cache expiration"}),"\n",(0,a.jsx)(t.p,{children:"The data lifecycle is one of the most important aspects of a cache management system. This page discusses the two means a cache does this, cache eviction and cache expiration, and then provides detail about how Momento Cache employs these concepts."}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/76qpwvn262g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,a.jsx)(t.h2,{id:"what-is-cache-eviction",children:"What is cache eviction?"}),"\n",(0,a.jsx)(t.p,{children:'In general caching terms, eviction is when a cache write causes the aggregate data in a cache to exceed the available memory storage, and the cache must remove some data ("evict") to make room. For example, this evicted data could be data that is used less frequently, or another algorithm, depending on how the cache is configured. Some cache implementations evict data to perform maintenance windows.'}),"\n",(0,a.jsx)(t.h2,{id:"momento-cache-and-eviction",children:"Momento Cache and eviction"}),"\n",(0,a.jsx)(t.p,{children:"Momento considers cache evictions to be a key indicator of service quality degradation. The service continually monitors this and will add capacity to maintain a buffer for all customers. The service level objective of Momento Cache is to respect the TTL for expiry of all cached items and not evict data."}),"\n",(0,a.jsx)(t.p,{children:"Momento Cache has no maintenance windows. Operational changes such as scaling and node replacement are automatically handled in the background by the service. A prewarming process is used to avoid impacting cache hit rates."}),"\n",(0,a.jsx)(t.h2,{id:"cache-expiration",children:"Cache expiration"}),"\n",(0,a.jsx)(t.p,{children:"In general caching terms, expiration is when a time-to-live (TTL) value is part of each piece of data. When that time lapses, the service deletes the data from the cache."}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"./expire-data-with-ttl",children:"Expire data from caches by setting Time-to-Live (TTL)"})," for specific information on how Momento Cache treats this topic."]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var a=i(6540);const n={},o=a.createContext(n);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);