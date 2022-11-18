"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4589:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:3,sidebar_class_name:"sidebar-item-pricing",title:"\u6599\u91d1",description:"Explore the simplicity of the pricing model for Momento Serverless Cache"},i="Momento Serverless Cache Pricing",l={unversionedId:"pricing",id:"pricing",title:"\u6599\u91d1",description:"Explore the simplicity of the pricing model for Momento Serverless Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/pricing.md",sourceDirName:".",slug:"/pricing",permalink:"/ja/pricing",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/pricing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item-pricing",title:"\u6599\u91d1",description:"Explore the simplicity of the pricing model for Momento Serverless Cache"},sidebar:"tutorialSidebar",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3068\u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/ja/how-it-works/caching-with-serverless"},next:{title:"\u30b5\u30fc\u30d3\u30b9\u4e0a\u9650",permalink:"/ja/limits"}},s={},u=[{value:"Examples:",id:"examples",level:3},{value:"You process a total of 1 million read/write requests per day with average object sizes of 4KB. Momento would cost you:",id:"you-process-a-total-of-1-million-readwrite-requests-per-day-with-average-object-sizes-of-4kb-momento-would-cost-you",level:5},{value:"You process an average load of 5K RPS with 1KB objects. Momento would cost you:",id:"you-process-an-average-load-of-5k-rps-with-1kb-objects-momento-would-cost-you",level:5},{value:"You have a 20 RPS Lambda that caches 1KB objects. Momento would cost you:",id:"you-have-a-20-rps-lambda-that-caches-1kb-objects-momento-would-cost-you",level:5},{value:"FAQ&#39;s",id:"faqs",level:3}],c={toc:u};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"momento-serverless-cache-pricing"},"Momento Serverless Cache Pricing"),(0,n.kt)("p",null,"Serverless is about simplicity in every dimension, including pricing! Momento Serverless Cache costs $0.15/GB transferred. That's it!"),(0,n.kt)("p",null,"Your first 50 GB are free each month\u2014and you don't even need a credit card to get started."),(0,n.kt)("p",null,"Momento Serverless Cache has no hidden charges. You don\u2019t have to pay for storage, replication, or instances. We literally only charge you for data transferred in/out of Momento Serverless Cache. Everything else is included. Sign up with confidence and create something wonderful."),(0,n.kt)("p",null,"We\u2019ve included some sample pricing exercises below to help you estimate. If you need further assistance (or just can\u2019t believe it), drop a message in our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/Z7FSXB89"},"Discord"),", and we\u2019ll get it sorted out. Take the Momento Serverless Cache challenge: see how much you can save!"),(0,n.kt)("h3",{id:"examples"},"Examples:"),(0,n.kt)("h5",{id:"you-process-a-total-of-1-million-readwrite-requests-per-day-with-average-object-sizes-of-4kb-momento-would-cost-you"},"You process a total of 1 million read/write requests per day with average object sizes of 4KB. Momento would cost you:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"1 million requests / day * 30.5 days/month * 4KB/request * $.15/GB")," = ",(0,n.kt)("strong",{parentName:"p"},"$18.3 /month")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See the calculation in ",(0,n.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=1+million%2F+day+*+4KB+*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," for more detail.")),(0,n.kt)("h5",{id:"you-process-an-average-load-of-5k-rps-with-1kb-objects-momento-would-cost-you"},"You process an average load of 5K RPS with 1KB objects. Momento would cost you:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"5K requests/second * 86400 seconds/day * 30.5 days/month * 1KB/request")," = ",(0,n.kt)("strong",{parentName:"p"},"$1976/month")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See the calculation in ",(0,n.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=5000%2Fsecond+*+1KB++*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," for more detail.")),(0,n.kt)("h5",{id:"you-have-a-20-rps-lambda-that-caches-1kb-objects-momento-would-cost-you"},"You have a 20 RPS Lambda that caches 1KB objects. Momento would cost you:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"20 requests/second * 86400 seconds/day * 30.5 days/month * 1KB")," = ",(0,n.kt)("strong",{parentName:"p"},"$.38/month")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: Without the free tier, this workflow would cost $7.88/month")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See the calculation in ",(0,n.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=%28%2820+requests%2Fsecond+*+1KB%2Frequest%29+-+50GB+%2Fmonth%29+*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," for more detail.")),(0,n.kt)("h3",{id:"faqs"},"FAQ's"),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,"Is it really just $.15/GB transferred in and out of Momento? What else do you charge for \u2026"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Dimension"),(0,n.kt)("th",{parentName:"tr",align:null},"Momento Charges"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Memory / Storage"),(0,n.kt)("td",{parentName:"tr",align:null},"$0/GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Multi-AZ Replication Charges"),(0,n.kt)("td",{parentName:"tr",align:null},"$0/GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Single Sign-On & Teams (coming soon)"),(0,n.kt)("td",{parentName:"tr",align:null},"$0/user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connections"),(0,n.kt)("td",{parentName:"tr",align:null},"$0/thousand connections"))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can I run a production app for free on Momento?"),"Absolutely! Our free tier and low usage tiers are as fast, as available, and as secure as our at scale service. You get all our availability features like multi-AZ replication, hot key protection, and automatic scaling to handle bursts. You even get all our security features for free (end-to-end encryption, per request authentication, TLS).",(0,n.kt)("p",null,"We frequently find customers provisioning an entire cluster to handle low-RPS workflows. If you want them to be HA, you need multiple nodes. If you believe in CICD, you likely have a similarly sized cluster in staging\u2014and maybe even in dev. That adds up! Turn off those machines\u2014and save the environment. Go Momento!")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Can I run a production app for $1.50/month on Momento?"),"Absolutely! If you are transferring 60 GB of data in/out of Momento each month, you get the first 50GB free each month and pay $0.15/GB for the remaining 10GB each month. Access enterprise-grade availability, security, and performance at any scale with Momento.",(0,n.kt)("p",null,"As crazy as it sounds, we are not the first to do this. You can experience this with other serverless services like DynamoDB, S3, and more\u2014we are just bringing serverless to caching!")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Will it scale?"),"Hell yes! Momento is the best way to future-proof your caching story. You can add Momento *extremely* quickly\u2014and it just fades into the background whether you are doing 1 RPS or 1 million RPS. You just pay for what you use\u2014so you get a scalable cache without spending a lot of cash."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Will it blend?"),"We do not recommend putting Momento in a blender as it may void the warranty of your blender, but Momento is robust with enterprise grade security and availability. Momento does blend seamlessly with your current cloud setup, whether you're on AWS, GCP, Azure, or multi-cloud!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/ja/getting-started"},"Give Momento a Try!")))}m.isMDXComponent=!0}}]);