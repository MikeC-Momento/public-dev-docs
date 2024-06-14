"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5025],{9978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var i=n(4848),o=n(8453),r=n(1470),a=n(9365);const c={sidebar_position:1,sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache."},l="Redis compatibility clients for Momento Cache and Momento Topics",s={id:"cache/develop/integrations/redis-client-compatibility",title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache.",source:"@site/docs/cache/develop/integrations/redis-client-compatibility.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/redis-client-compatibility",permalink:"/cache/develop/integrations/redis-client-compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/redis-client-compatibility.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Redis compatibility clients",pagination_prev:null,title:"Redis compatibility clients",description:"With these drop-in replacement client libraries, quickly upgrade from Redis to Momento Cache."},sidebar:"tutorialSidebar",next:{title:"Laravel",permalink:"/cache/develop/integrations/momento-cache-laravel-php"}},d={},m=[{value:"Getting Started",id:"getting-started",level:2},{value:"Source Code",id:"source-code",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"redis-compatibility-clients-for-momento-cache-and-momento-topics",children:"Redis compatibility clients for Momento Cache and Momento Topics"}),"\n",(0,i.jsx)(t.p,{children:"Do you have existing apps that use a Redis cache, but now you're trading up to Momento\u2019s services? With Redis compatibility clients, there's no need to refactor your code. Instead, compatibility clients are a drop-in replacement for existing Redis clients. Change your client library to the compatibility client, change the connection information, and the core of your code stays the same."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"To switch your existing application to use Momento Cache, you only need to change the code where you construct your client object:"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(a.A,{value:"noderedis",label:"NodeRedis",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Import the Momento redis compatibility client.\nimport {createClient, momento} from 'momento-redis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Initialize Momento's client.\nconst redisClient = createClient(\n    momento.CacheClient.create({\n        configuration: momento.Configurations.Laptop.v1(),\n        credentialProvider: momento.CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: 60,\n    }),\n    'cache_name',\n);\n"})}),(0,i.jsxs)(t.p,{children:["For more in-depth information, with example code, please see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-node-redis-client#momento-nodejs-redis-client",children:"Momento Node.js Redis compatibility client"})," on GitHub."]})]}),(0,i.jsxs)(a.A,{value:"ioredis",label:"IORedis",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Import the Momento redis compatibility client.\nimport {MomentoRedisAdapter} from '@gomomento-poc/node-ioredis-client';\nimport {\n    CacheClient,\n    Configurations,\n    CredentialProvider,\n} from '@gomomento/sdk';\n\n// Instantiate Momento Adapter Directly\nconst Redis = new MomentoRedisAdapter(\n    await CacheClient.create({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_API_KEY',\n        }),\n        defaultTtlSeconds: config.defaultTTLSeconds,\n    }),\n    'cache_name',\n);\n"})}),(0,i.jsxs)(t.p,{children:["For more in-depth information, with example code, please see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-node-ioredis-client",children:"Momento IORedis compatibility client"})," on GitHub."]})]}),(0,i.jsxs)(a.A,{value:"stackexchange",label:"StackExchange",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'using System;\nusing Momento.Auth;\nusing Momento.Config;\nusing Momento.Sdk;\nusing Momento.StackExchange.Redis;\n\n// Create a Momento-backed Redis client\nvar db = MomentoRedisDatabase(\n  await CacheClient.create(\n    config: Configurations.Laptop.v1(),\n    authProvider: new EnvMomentoTokenProvider("MOMENTO_API_KEY"),\n    defaultTtl: TimeSpan.FromSeconds(60),\n  }),\n  "cache_name"\n);\n'})}),(0,i.jsxs)(t.p,{children:["For more in-depth information, with example code, please see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis",children:"Momento StackExchange compatibility client"})," on GitHub."]})]}),(0,i.jsxs)(a.A,{value:"go",label:"Go",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package redis\n\nimport (\n\t"context"\n\t"github.com/momentohq/client-sdk-go/auth"\n\t"github.com/momentohq/client-sdk-go/config"\n\t"github.com/momentohq/client-sdk-go/momento"\n\tmomentoredis "github.com/momentohq/momento-go-redis-client/momento-redis"\n\t"github.com/redis/go-redis/v9"\n\t"time"\n)\n\nfunc initRedisClient() redis.Cmdable {\n\tcredential, eErr := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\n\tif eErr != nil {\n\t\tpanic("Failed to initialize credentials through API key " + eErr.Error())\n\t}\n\tcacheClient, cErr := momento.NewCacheClient(config.LaptopLatest(), credential, 60*time.Second)\n\tif cErr != nil {\n\t\tpanic("Failed to initialize Momento cache client " + cErr.Error())\n\t}\n\t// create cache; it resumes execution normally incase the cache already exists\n\t_, createErr := cacheClient.CreateCache(context.Background(),\n\t\t&momento.CreateCacheRequest{CacheName: "default_cache"})\n\tif createErr != nil {\n\t\tpanic("Failed to create cache with cache name default cache \\n" + createErr.Error())\n\t}\n\tredisClient := momentoredis.NewMomentoRedisClient(cacheClient, "default_cache")\n\treturn redisClient\n}\n'})}),(0,i.jsxs)(t.p,{children:["For more in-depth information, with example code, please see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-go-redis-client",children:"Go-redis compatibility client"})," on GitHub."]})]}),(0,i.jsxs)(a.A,{value:"redis-py",label:"redis-py",default:!0,children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import datetime\n# Import the Momento redis compatibility client.\nimport momento\nfrom momento_redis import MomentoRedis\n\n# Initialize Momento client.\nredis_client = MomentoRedis(\n    momento.CacheClient.create(\n        momento.Configurations.Laptop.latest(),\n        momento.CredentialProvider.from_environment_variable("MOMENTO_API_KEY"),\n        datetime.timedelta(seconds=60)\n    ),\n    "cache_name"\n)\n'})}),(0,i.jsxs)(t.p,{children:["For more in-depth information, with example code, please see ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-python-redis-client",children:"Momento Python Redis compatibility client"})," on GitHub."]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"source-code",children:"Source Code"}),"\n",(0,i.jsx)(t.p,{children:"For source code and examples for all of our Redis compatibility clients, please see the following GitHub repositories:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-node-redis-client",children:"node-redis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-node-ioredis-client",children:"ioredis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-dotnet-stackexchange-redis",children:"StackExchange.Redis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-go-redis-client",children:"go-redis"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/momentohq/momento-python-redis-client",children:"redis-py"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var i=n(4164);const o={tabItem:"tabItem_Ymn6"};var r=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(6540),o=n(4164),r=n(3104),a=n(6347),c=n(205),l=n(7485),s=n(1682),d=n(679);function m(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:o}}=e;return{value:t,label:n,attributes:i,default:o}}))}(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[s,m]=p({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Dv)(n);return[o,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=s??b;return h({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),f(e)}),[m,f,r]),tabValues:r}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:s}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=c[n].value;o!==i&&(s(t),a(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:m,onClick:d,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function C(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(C,{...e,children:m(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(6540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);