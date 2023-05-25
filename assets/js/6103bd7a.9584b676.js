"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),o=n(7294),a=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),u=n(12);function m(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,s]=b({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,a]),tabValues:a}}var h=n(2389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==l&&(m(t),c(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,a.Z)("tabs__item",y,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},8171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(7462),o=(n(7294),n(3905)),a=n(4866),i=n(5162);const l={sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"Quickly switch from using Redis to Momento Cache with these drop in replacement client libraries"},c="Redis compatibility client for Momento Cache and Momento Topics",s={unversionedId:"develop/integrations/redis-client-compatibility",id:"develop/integrations/redis-client-compatibility",title:"Redis compatibility clients",description:"Quickly switch from using Redis to Momento Cache with these drop in replacement client libraries",source:"@site/docs/develop/integrations/redis-client-compatibility.md",sourceDirName:"develop/integrations",slug:"/develop/integrations/redis-client-compatibility",permalink:"/develop/integrations/redis-client-compatibility",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/integrations/redis-client-compatibility.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"sidebar-item-redis",sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"Quickly switch from using Redis to Momento Cache with these drop in replacement client libraries"},sidebar:"tutorialSidebar",next:{title:"Laravel",permalink:"/develop/integrations/momento-cache-laravel-php"}},u={},m=[{value:"Getting Started",id:"getting-started",level:2}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redis-compatibility-client-for-momento-cache-and-momento-topics"},"Redis compatibility client for Momento Cache and Momento Topics"),(0,o.kt)("p",null,"Do you have existing apps that use a Redis cache, but now you're trading up to Momento\u2019s services? With Redis\ncompatibility clients, there's no need to refactor your code. Instead, compatibility clients are a drop-in replacement\nfor existing Redis clients. Change your client library to the compatibility client, change the connection information,\nand the core of your code stays the same."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To switch your existing application to use Momento Cache, you only need to change the code where\nyou construct your client object:"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"noderedis",label:"NodeRedis",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {createClient, momento} from 'momento-redis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Initialize Momento's client.\nconst redisClient = createClient(\n    new momento.CacheClient({\n        configuration: momento.Configurations.Laptop.v1(),\n        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n        }),\n        defaultTtlSeconds: 60,\n    }),\n    'cache_name',\n);\n")),(0,o.kt)("p",null,"For more in-depth information, with example code, please see\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client"},"Momento Node.js Redis compatibility client on GitHub"),".")),(0,o.kt)(i.Z,{value:"ioredis",label:"IORedis",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the Momento redis compatibility client.\nimport {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Instantiate Momento Adapter Directly\nconst Redis = new MomentoRedisAdapter(\n    new CacheClient({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: authTokenEnvVarName,\n        }),\n        defaultTtlSeconds: config.defaultTTLSeconds,\n    }),\n    'cache_name',\n);\n")),(0,o.kt)("p",null,"For more in-depth information, with example code, please see\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-node-ioredis-client"},"Momento IORedis compatibility client on GitHub"),".")),(0,o.kt)(i.Z,{value:"stackexchange",label:"StackExchange",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing Momento.Auth;\nusing Momento.Config;\nusing Momento.Sdk;\nusing Momento.StackExchange.Redis;\n\n// Create a Momento-backed Redis client\nvar db = MomentoRedisDatabase(\n  new CacheClient(\n    config: Configurations.Laptop.v1(),\n    authProvider: new EnvMomentoTokenProvider("MOMENTO_AUTH_TOKEN"),\n    defaultTtl: TimeSpan.FromSeconds(60),\n  }),\n  "cache_name"\n);\n')),(0,o.kt)("p",null,"For more in-depth information, with example code, please see\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis"},"Momento StackExchange compatibility client on GitHub"),"."))))}p.isMDXComponent=!0}}]);