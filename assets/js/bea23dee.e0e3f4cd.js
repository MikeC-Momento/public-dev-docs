"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3854],{2157:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=o(4848),i=o(8453);const s={sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},a="Metrics in the console",r={id:"topics/manage/metrics_in_the_console",title:"Metrics in the Console",description:"Metrics in the console",source:"@site/docs/topics/manage/metrics_in_the_console.md",sourceDirName:"topics/manage",slug:"/topics/manage/metrics_in_the_console",permalink:"/topics/manage/metrics_in_the_console",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/manage/metrics_in_the_console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Metrics in the Console",title:"Metrics in the Console",pagination_prev:null,description:"Metrics in the console",hide_title:!0},sidebar:"topicsSidebar",next:{title:"Quotas and Limits",permalink:"/topics/limits"}},c={},h=[{value:"TPS (transactions per second)",id:"tps-transactions-per-second",level:2},{value:"Byte count (data volume in/out of your Momento caches)",id:"byte-count-data-volume-inout-of-your-momento-caches",level:2},{value:"Errors and successes",id:"errors-and-successes",level:2},{value:"Hits and misses (hit rate)",id:"hits-and-misses-hit-rate",level:2},{value:"FAQ&#39;s",id:"faqs",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"metrics-in-the-console",children:"Metrics in the console"}),"\n",(0,n.jsx)(t.p,{children:"When developing and operating applications with Momento Cache, you'll want visibility to effectively diagnose bugs and optimize performance. Momento provides an hour of service-side metrics to all customers via the Momento console, aimed at facilitating troubleshooting and tuning. If you're an enterprise with critical dependency on Momento Cache, we recommend partnering more closely with the Momento team for support and delivery of detailed historical metrics."}),"\n",(0,n.jsx)(t.p,{children:"Within the Momento console, you can visit the cache metrics dashboard by selecting the small bar graph icon on the left navigation menu, as shown below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(2883).A+"",width:"1019",height:"599"})}),"\n",(0,n.jsx)(t.p,{children:"The available metrics cover cache data plane operations only (control plane operations such as creation or deletion of a cache are not included), and for the preceding hour. The metrics presently show an aggregation for all the caches in your Momento account. You can view point data for any given minute by hovering over the bubble for that minute in the line graph. Metrics display typically lags by a minute or two."}),"\n",(0,n.jsx)(t.h2,{id:"tps-transactions-per-second",children:"TPS (transactions per second)"}),"\n",(0,n.jsx)(t.p,{children:"This line graph represents the number of cache data operation requests per second, averaged over each one minute period. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(2508).A+"",width:"1518",height:"948"})}),"\n",(0,n.jsx)(t.h2,{id:"byte-count-data-volume-inout-of-your-momento-caches",children:"Byte count (data volume in/out of your Momento caches)"}),"\n",(0,n.jsx)(t.p,{children:"This line graph represents the number of bytes transferred in or out of your Momento caches summed over the one minute period. The total byte count transferred over the most recent hour is also shown in the top bar. You can use this to understand the level of application activity within your caches. If you don't see anything here, you're not using any caches and should check the operational health of your application and the logic within your code! The information on data transferred can be used to get an estimate of the throughput your applications are driving to your caches, which can tell you what your cost expectations might be for the month. Looking at both the TPS and the byte count metrics can also give you rough information about cache item size."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(1120).A+"",width:"1518",height:"944"})}),"\n",(0,n.jsx)(t.h2,{id:"errors-and-successes",children:"Errors and successes"}),"\n",(0,n.jsxs)(t.p,{children:["This graph tells you about the number of error and success responses from Momento for application requests to your caches. It can be viewed as a percentage or as a raw count of responses for the minute. If you are seeing an elevated level of errors, dig closer into your application logs to better understand the cause. Elevated error rates can be an indicator that your application requests are being throttled by Momento due to encountering a ",(0,n.jsx)(t.a,{href:"/topics/limits",children:"service limit"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(9815).A+"",width:"1514",height:"1078"})}),"\n",(0,n.jsx)(t.h2,{id:"hits-and-misses-hit-rate",children:"Hits and misses (hit rate)"}),"\n",(0,n.jsx)(t.p,{children:"This graph tells you how well your application is applying caching - you want to see a high rate of hits versus misses. Factors that can affect your hit rate include the TTL chosen for your items and your strategy for populating the cache (you need to write the items into the cache if you expect to find them there next time you make a read). The higher the hit rate you achieve, the greater the benefit you'll see from caching. However, you should balance this against the staleness of the data your application is working with if you are using long TTLs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(9491).A+"",width:"1512",height:"1074"})}),"\n",(0,n.jsx)(t.h3,{id:"faqs",children:"FAQ's"}),"\n",(0,n.jsx)(s,{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("summary",{children:"How can I get metrics for more than an hour?"}),"\nFor production, we recommend partnering with the Momento team for support - this includes publishing of detailed metrics into your observability tooling (presently CloudWatch but more options to come). With delivery of detailed metrics enabled, you can build alarms and dashboards in accordance with your operating standards."]})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)("summary",{children:"Why are there no latency metrics provided?"}),"\nMomento can only measure latency associated with traffic internal to the service (between request routers and storage nodes) - a much better indicator for your application is to measure latency as experienced by the client. This tells much more about the overall latency story and the experience your users are receiving. You might also consider using a canary to test and report on latency as experienced by end users somewhere further away on the network."]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.p,{children:"For customers receiving detailed metrics delivery to CloudWatch, a latency metric with percentiles is provided. This can be used in comparison with client-side latency and canary latency to quickly determine whether a user experience problem is related to your Momento cache or if you should look elsewhere for root cause and resolution."})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1120:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/metrics_bytecount-16a0c56f44f79d94960f23300c1d4e95.png"},9491:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/metrics_hit-miss-a73a870a07547c0a73bee51e5ff0404e.png"},2883:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/metrics_select-fa7782d9e072a2b8bd0d03f0fa16a416.png"},9815:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/metrics_success-error-bae258feb5c20dca400fe94cbed612e1.png"},2508:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/metrics_tps-c32cdb95c2f0410677efa8e3c62fe4ea.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);