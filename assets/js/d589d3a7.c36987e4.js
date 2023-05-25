"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,p=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function h(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=p({queryString:n,groupId:a}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??h;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var f=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(h(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(C,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);const l={sidebar_position:3,sidebar_label:"Getting Started",sidebar_class_name:"sidebar-item-getting-started",title:"Getting Started",pagination_prev:null,pagination_next:null,description:"Jump in and get started quickly using Momento Cache and Momento Topics with your SDK of choice."},s="Getting Started with Momento Cache and Momento Topics",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Jump in and get started quickly using Momento Cache and Momento Topics with your SDK of choice.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Getting Started",sidebar_class_name:"sidebar-item-getting-started",title:"Getting Started",pagination_prev:null,pagination_next:null,description:"Jump in and get started quickly using Momento Cache and Momento Topics with your SDK of choice."},sidebar:"tutorialSidebar"},u={},h=[{value:"Step 1: Sign up and log into the Momento console",id:"step-1-sign-up-and-log-into-the-momento-console",level:2},{value:"Step 2: Create an authentication token in the Momento console",id:"step-2-create-an-authentication-token-in-the-momento-console",level:2},{value:"Step 3: Store auth token",id:"step-3-store-auth-token",level:2},{value:"Step 4: Grab the SDK, create a cache, and read/write data",id:"step-4-grab-the-sdk-create-a-cache-and-readwrite-data",level:2},{value:"Try our CLI and an SDK in your browser",id:"try-our-cli-and-an-sdk-in-your-browser",level:2},{value:"Installing the Momento CLI",id:"installing-the-momento-cli",level:2},{value:"All Momento SDKs",id:"all-momento-sdks",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:h};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-momento-cache-and-momento-topics"},"Getting Started with Momento Cache and Momento Topics"),(0,o.kt)("p",null,"If you're looking to jump in and get started with Momento Cache with an SDK, you've come to the right place."),(0,o.kt)("p",null,"If you want to quickly get a feel for the Momento Cache experience without installing any software? You can do so right here ",(0,o.kt)("a",{parentName:"p",href:"#try-our-cli-and-an-sdk-in-your-browser"},"in your browser"),"."),(0,o.kt)("h2",{id:"step-1-sign-up-and-log-into-the-momento-console"},"Step 1: Sign up and log into the Momento console"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Go to the Momento Console")," and follow the instructions to login with your email address, Google account, or GitHub account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5176).Z,width:"700",height:"337"})),(0,o.kt)("h2",{id:"step-2-create-an-authentication-token-in-the-momento-console"},"Step 2: Create an authentication token in the Momento console"),(0,o.kt)("p",null,"In the console, open the menu and select Token."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image of console menu",src:n(4232).Z,width:"320",height:"240"})),(0,o.kt)("p",null,'On the token page, select your 1/ cloud provider, 2/ an available Region from the drop down list, 3/ when the token should expire, and then 4/ hit the "Generate Token" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(8500).Z,width:"520",height:"377"})),(0,o.kt)("p",null,"Scroll down and you will see your token in a grey box. The token in the screenshot has been blurred out, but yours won't be. Click on the copy icon to copy the token to your clipboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(987).Z,width:"600",height:"334"})),(0,o.kt)("h2",{id:"step-3-store-auth-token"},"Step 3: Store auth token"),(0,o.kt)("p",null,"There are multiple places you can store the auth token used to authenticate with Momento. For this simple example, we'll store the auth token in an environment variable, but best practice is to store the auth token in something like AWS Secrets Manager or GCP Secret Manager."),(0,o.kt)("h2",{id:"step-4-grab-the-sdk-create-a-cache-and-readwrite-data"},"Step 4: Grab the SDK, create a cache, and read/write data"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"node",label:"Node.js",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Install the Momento SDK and dotenv in your project directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"npm install @gomomento/sdk\nnpm install dotenv\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create a .env file")),(0,o.kt)("p",null,"Create a .env file in the directory to hold your Momento auth token and the TTL (in seconds) you want to use by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"export MOMENTO_AUTH_TOKEN=<your Momento token here>\nexport MOMENTO_TTL_SECONDS=300\n")),(0,o.kt)("p",null,"Copy this code to a file test.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Declare the Momento SDK library\nconst { CacheGet, CacheSet, Configurations, ListCaches, CreateCache,\n  CacheClient, CredentialProvider } = require('@gomomento/sdk');\n\n// Declate the dotenv library\nconst dotenv = require('dotenv');\n\n// Defines name of cache to use.\nconst CACHE_NAME = 'demo-cache';\n\n// Run the config function to bring in the .env file\ndotenv.config();\n\n// Creates the Momento cache client object\nasync function createCacheClient() {\n  return new CacheClient({\n    configuration: Configurations.Laptop.v1(),\n    credentialProvider: CredentialProvider.fromEnvironmentVariable({\n      environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n    }),\n    defaultTtlSeconds: 600,\n  });\n}\n\n// Create a new cache\nasync function createCache(client) {\n  const createCacheResponse = await client.createCache(CACHE_NAME);\n  if (createCacheResponse instanceof CreateCache.Success) {\n    console.log('Cache created.');\n  } else if (createCacheResponse instanceof CreateCache.AlreadyExists) {\n    console.log('Cache already exists');\n  } else if (createCacheResponse instanceof CreateCache.Error) {\n    throw createCacheResponse.innerException();\n  }\n}\n\n// List all caches in Momento for this account.\nasync function listCaches(client) {\n  const listResponse = await client.listCaches(client);\n  if (listResponse instanceof ListCaches.Error) {\n    console.log('Error listing caches: ', listResponse.message());\n  } else if (listResponse instanceof ListCaches.Success) {\n    console.log('Found caches:');\n    listResponse.getCaches().forEach(cacheInfo => {\n      console.log(' -',cacheInfo.getName());\n    });\n  } else {\n    throw new Error('Unrecognized response: ', listResponse.toString());\n  }\n}\n\n// A function to write to the cache\nasync function writeToCache(client, cacheName, key, data) {\n  const setResponse = await client.set(cacheName, key, data);\n  if (setResponse instanceof CacheSet.Success) {\n    console.log('Key stored successfully!');\n  } else if (setResponse instanceof CacheSet.Error) {\n    console.log('Error setting key: ', setResponse.toString());\n  } else {\n    console.log('Some other error: ', setResponse.toString());\n  }\n}\n\n// A function to read scalar items from the cache\nasync function readFromCache(client, cacheName, key) {\n  const readResponse = await client.get(cacheName, key);\n  if (readResponse instanceof CacheGet.Hit) {\n    console.log('Cache hit: ', readResponse.valueString());\n  } else if (readResponse instanceof CacheGet.Miss) {\n    console.log('Cache miss');\n  } else if (readResponse instanceof CacheGet.Error) {\n    console.log('Error: ', readResponse.message());\n  }\n}\n\n// A simple function that calls all functions in order. You probably want more error handling.\nasync function run() {\n  const cacheClient = await createCacheClient();\n\n  await createCache(cacheClient);\n\n  await listCaches(cacheClient);\n\n  await writeToCache(cacheClient, CACHE_NAME, \"code\", \"12345\");\n  await readFromCache(cacheClient, CACHE_NAME, \"code\");\n}\n\nrun();\n")),(0,o.kt)("p",null,"Run code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"node test.js\n")),(0,o.kt)("p",null,"The output should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cli"},"[2023-05-21T00:56:37.819Z] INFO (Momento: CacheClient): Creating Momento CacheClient\n[2023-05-21T00:56:37.831Z] INFO (Momento: ControlClient): Creating cache: demo-cache\nCache created.\nFound caches:\n - demo-cache\nKey stored successfully!\nCache hit:  12345\n")))),(0,o.kt)("h2",{id:"try-our-cli-and-an-sdk-in-your-browser"},"Try our CLI and an SDK in your browser"),(0,o.kt)("p",null,"You can try out Momento Cache today, right in your browser. No software installation required!"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Momento Cache is a fully-managed, API-based, serverless service. It does not deploy any resources in your (AWS, GCP, Azure, etm.) accounts.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"First, request your free auth token, create a cache, configure your CLI, and start running ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," commands on your cache. Launch below."),(0,o.kt)("a",{href:"https://play.instruqt.com/embed/momento/tracks/sandbox-container-1challenge?token=em_54kTDywfWaG95-rC&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser",target:"_top"},(0,o.kt)("img",{src:"/img/cli_lab.png",alt:"CLI lab"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Then, use the auth token and cache you just created to run a JavaScript application using our Node.js SDK. Launch below."),(0,o.kt)("a",{href:"https://play.instruqt.com/embed/momento/tracks/momento-nodejs-demo?token=em_f8PM8Aob-mHIfOTT&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser",target:"_top"},(0,o.kt)("img",{src:"/img/sdk_lab.png",alt:"SDK lab"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Want to experiment with Momento Topics? This demo lets you subscribe to Topic messages in one pane, while publishing\nmessages to the topic in a second pane! Launch below."),(0,o.kt)("a",{href:"https://play.instruqt.com/embed/momento/tracks/topics-on-the-momento-cli?token=em_Q_mgzhVtWtP5B_jj&finish_btn_target=_top&finish_btn_text=Return+to+Docs&finish_btn_url=https%3A%2F%2Fdocs.momentohq.com%2Fgetting-started#try-our-cli-and-an-sdk-in-your-browser",target:"_top"},(0,o.kt)("img",{src:"/img/topics_lab.png",alt:"Topics lab"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"installing-the-momento-cli"},"Installing the Momento CLI"),(0,o.kt)("p",null,"You can also install the Momento CLI locally (Linux, Windows, Mac) if desired. The latest version of the CLI and instructions for install and use is available from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-cli"},"this repo"),"."),(0,o.kt)("h2",{id:"all-momento-sdks"},"All Momento SDKs"),(0,o.kt)("p",null,"We currently have the following SDK's languages available. Check out each repo for detailed instructions and usage examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-nodejs"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-dotnet"},".NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-rust"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-ruby"},"Ruby"))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Does Momento deploy any resources into my cloud account?"),"No it does not. Momento Cache is a fully-managed, API-based, serverless service that you call from within your application code."))}m.isMDXComponent=!0},4232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/auth-token-877173c41a2a1fbce91948047a73d82b.gif"},5176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},987:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generated-token-2245903b8ecca741be2ca22c1b64cee1.jpg"},8500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-provider-region-28122ca1e4a57cacb8e22e00db3bd692.png"}}]);