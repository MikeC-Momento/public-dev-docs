"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},l="HTTP API Reference for Momento Topics",i={unversionedId:"topics/develop/api-reference/http-api",id:"topics/develop/api-reference/http-api",title:"HTTP API for Momento Topics",description:"Discover the HTTP API for edge computing services to access pub/sub services.",source:"@site/docs/topics/develop/api-reference/http-api.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/http-api",permalink:"/topics/develop/api-reference/http-api",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/http-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"HTTP API for Momento Topics",sidebar_label:"HTTP API",description:"Discover the HTTP API for edge computing services to access pub/sub services."},sidebar:"topicsSidebar",previous:{title:"Webhooks",permalink:"/topics/develop/api-reference/webhooks"},next:{title:"Response objects",permalink:"/topics/develop/api-reference/response-objects"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Regions",id:"regions",level:2},{value:"Publish",id:"publish",level:2},{value:"Request",id:"request",level:3},{value:"Body",id:"body",level:4},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Headers",id:"headers",level:4},{value:"Responses",id:"responses",level:2},{value:"Success",id:"success",level:3},{value:"Error",id:"error",level:3},{value:"Examples",id:"examples",level:2},{value:"Publish",id:"publish-1",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-api-reference-for-momento-topics"},"HTTP API Reference for Momento Topics"),(0,r.kt)("p",null,"Momento provides an HTTP API interface for your applications that can\u2019t use our ",(0,r.kt)("a",{parentName:"p",href:"./../"},"SDKs")," or for ones that prefer to use things like curl or fetch. For example, when deploying to edge compute services like ",(0,r.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.fastly.com/products/edge-compute"},"Fastly Compute@Edge"),", etm. this API is for you. Be aware that most other applications should likely use ",(0,r.kt)("a",{parentName:"p",href:"./../"},"Momento\u2019s SDK clients"),"."),(0,r.kt)("p",null,"You can also view the Open API Specification in our ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/gomomento/workspace/momento-http-api/api/662743a0-471a-41a1-b446-5db596164a00/definition/4765b18e-ba84-4802-9795-ecce9c408062?view=documentation"},"public workspace in Postman"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This documentation does not describe how to implement HTTP request syntax as that is different and unique to each language you might use.")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"For each connection, you will need a Momento auth token generated via the ",(0,r.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," or a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},'token "vending machine" microservice you host'),". Momento auth tokens control access to the Momento services and can be set to expire and grant/restrict access to specific resources."),(0,r.kt)("h2",{id:"regions"},"Regions"),(0,r.kt)("p",null,"To access the Momento HTTP API, use one of the following endpoints in the region of your API token and cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"AWS Region"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"},"https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"},"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"},"https://api.cache.cell-1-us-east-2-1.prod.a.momentohq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"},"https://api.cache.cell-ap-northeast-1-1.prod.a.momentohq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-eu-west-1-1.prod.a.momentohq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"},"https://api.cache.cell-1-ap-south-1-1.prod.a.momentohq.com"))))),(0,r.kt)("p",null,"If you do not see a Region you require, let\u2019s talk. Please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Support"),"."),(0,r.kt)("h2",{id:"publish"},"Publish"),(0,r.kt)("p",null,"Publishes a message to a topic."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Path: /topics/{cacheName}/{topicName}"),(0,r.kt)("li",{parentName:"ul"},"HTTP Method: POST")),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content-Type: octet-stream"),(0,r.kt)("li",{parentName:"ul"},"The body of the request should contain the binary value to be published to the topic.")),(0,r.kt)("h4",{id:"path-parameters"},"Path Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the cache containing the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"URL-safe string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic to publish to.")))),(0,r.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter","\xa0","name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"no**"),(0,r.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,r.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, to be used for authentication/authorization of the request.")))),(0,r.kt)("p",null,"*** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,r.kt)("h4",{id:"headers"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header","\xa0","name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"no**"),(0,r.kt)("td",{parentName:"tr",align:null},"URL-safe","\xa0","string"),(0,r.kt)("td",{parentName:"tr",align:null},"The Momento auth token, in string format, is used for authentication/authorization of the request.")))),(0,r.kt)("p",null,"** You must provide a Momento auth token to be used for authentication/authorization of the request. This may be passed either as the token query parameter or as the Authorization header."),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("h3",{id:"success"},"Success"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 204 No Content")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The message was successfully published to the provided topic")),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 400 Bad Request")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This error type typically indicates that the request was incorrectly specified. See the message body for further details.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 401 Unauthorized")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This error type typically indicates that the Momento auth token passed in is either invalid or expired. See the body of the message for further details.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 403 Forbidden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This error type typically indicates the Momento auth token passed in does not grant the required access to the resources you attempted. See the body of the message for further details.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 404 Not Found")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201cCache Not Found\u201d indicates that the specified cache does not exist.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 429 Too Many Requests")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This error type typically indicates that account limits were exceeded. See the message body for further details, or contact Momento support to request a limit increase.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Status Code: 500 Internal Server Error")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This error type typically indicates that the service is experiencing issues. Contact Momento support for further assistance.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"publish-1"},"Publish"),(0,r.kt)("p",null,"Below is an example that publishes the value ",(0,r.kt)("inlineCode",{parentName:"p"},"hello world!")," to the ",(0,r.kt)("em",{parentName:"p"},"example")," topic in the ",(0,r.kt)("em",{parentName:"p"},"my-cache")," cache in the ",(0,r.kt)("em",{parentName:"p"},"us-east-1")," region."),(0,r.kt)("p",null,"Token provided in query parameter:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curl -X POST -d 'hello world!' \"https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example?token=<token>\"")),(0,r.kt)("p",null,"Token provided as ",(0,r.kt)("em",{parentName:"p"},"Authorization")," header:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -X POST -H "Authorization: <token>" -d \'hello world!\' "https://api.cache.cell-us-east-1-1.prod.a.momentohq.com/topics/my-cache/example"')))}c.isMDXComponent=!0}}]);