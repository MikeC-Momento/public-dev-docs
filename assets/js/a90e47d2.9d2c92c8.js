"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3102],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=s??p;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var N=a(2389);const g="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},i,{className:(0,l.Z)("tabs__item",f,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>o});var n=a(4866),r=a(5162),l=a(814),i=a(7294);const o=e=>{let{js:t,python:a,java:o,go:s,csharp:u,rust:c,ruby:p,cli:d}=e;return t||a||o||s||u||c||p||d?i.createElement(n.Z,null,t&&i.createElement(r.Z,{value:"js",label:"JavaScript"},i.createElement(l.Z,{language:"js"},t)),a&&i.createElement(r.Z,{value:"python",label:"Python"},i.createElement(l.Z,{language:"python"},a)),o&&i.createElement(r.Z,{value:"java",label:"Java"},i.createElement(l.Z,{language:"java"},o)),s&&i.createElement(r.Z,{value:"go",label:"Go"},i.createElement(l.Z,{language:"go"},s)),u&&i.createElement(r.Z,{value:"csharp",label:"C#"},i.createElement(l.Z,{language:"csharp"},u)),c&&i.createElement(r.Z,{value:"rust",label:"Rust"},i.createElement(l.Z,{language:"rust"},c)),p&&i.createElement(r.Z,{value:"ruby",label:"Ruby"},i.createElement(l.Z,{language:"ruby"},p)),d&&i.createElement(r.Z,{value:"cli",label:"CLI"},i.createElement(l.Z,{language:"cli"},d))):null}},675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=(a(3404),a(9720));const i={sidebar_position:6,title:"API reference information",pagination_prev:null,sidebar_label:"API reference",description:"Learn the API calls you need to know and how to use them with Momento Cache."},o="API reference for Momento Cache",s={unversionedId:"develop/api-reference/index",id:"develop/api-reference/index",title:"API reference information",description:"Learn the API calls you need to know and how to use them with Momento Cache.",source:"@site/docs/develop/api-reference/index.mdx",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/",permalink:"/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"API reference information",pagination_prev:null,sidebar_label:"API reference",description:"Learn the API calls you need to know and how to use them with Momento Cache."},sidebar:"tutorialSidebar",next:{title:"Dictionary",permalink:"/develop/api-reference/collections/dictionary"}},u={},c=[{value:"Control APIs",id:"control-apis",level:2},{value:"Create cache",id:"create-cache",level:3},{value:"Delete cache",id:"delete-cache",level:3},{value:"List caches",id:"list-caches",level:3},{value:"Flush cache",id:"flush-cache",level:3},{value:"Data APIs",id:"data-apis",level:2},{value:"Set",id:"set",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3},{value:"Increment",id:"increment",level:3},{value:"Ping",id:"ping",level:3},{value:"ItemGetType",id:"itemgettype",level:3},{value:"KeyExists",id:"keyexists",level:3},{value:"KeysExist",id:"keysexist",level:3},{value:"SetIfNotExists",id:"setifnotexists",level:3},{value:"Time to Live APIs",id:"time-to-live-apis",level:2},{value:"UpdateTtl",id:"updatettl",level:3},{value:"IncreaseTtl",id:"increasettl",level:3},{value:"DecreaseTtl",id:"decreasettl",level:3},{value:"ItemGetTtl",id:"itemgetttl",level:3},{value:"Auth APIs",id:"auth-apis",level:2},{value:"GenerateAuthToken",id:"generateauthtoken",level:3},{value:"RefreshAuthToken",id:"refreshauthtoken",level:3},{value:"Collection data types",id:"collection-data-types",level:3},{value:"Current status of API support in SDKs",id:"current-status-of-api-support-in-sdks",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-reference-for-momento-cache"},"API reference for Momento Cache"),(0,r.kt)("h2",{id:"control-apis"},"Control APIs"),(0,r.kt)("p",null,"These API methods are used to manage and control caches."),(0,r.kt)("h3",{id:"create-cache"},"Create cache"),(0,r.kt)("p",null,"Creates a cache with the provided name"),(0,r.kt)("p",null,"Attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache to be created.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.createCache('test-cache');\nif (result instanceof CreateCache.Success) {\n  console.log(\"Cache 'test-cache' created\");\n} else if (result instanceof CreateCache.AlreadyExists) {\n  console.log(\"Cache 'test-cache' already exists\");\n} else {\n  throw new Error(`An error occurred while attempting to create cache 'test-cache': ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"delete-cache"},"Delete cache"),(0,r.kt)("p",null,"Deletes a cache"),(0,r.kt)("p",null,"Attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache to be deleted.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.deleteCache('test-cache');\nif (result instanceof DeleteCache.Success) {\n  console.log(\"Cache 'test-cache' deleted\");\n} else if (result instanceof DeleteCache.Error) {\n  throw new Error(\n    `An error occurred while attempting to delete cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"list-caches"},"List caches"),(0,r.kt)("p",null,"Lists all caches"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextToken"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Token for pagination of caches.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.listCaches();\nif (result instanceof ListCaches.Success) {\n  console.log(\n    `Caches:\\n${result\n      .getCaches()\n      .map(c => c.getName())\n      .join('\\n')}\\n\\n`\n  );\n} else if (result instanceof ListCaches.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"flush-cache"},"Flush cache"),(0,r.kt)("p",null,"Flushes all data from a cache"),(0,r.kt)("p",null,"Attributes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache to be flushed.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.flushCache('test-cache');\nif (result instanceof CacheFlush.Success) {\n  console.log(\"Cache 'test-cache' flushed\");\n} else if (result instanceof CacheFlush.Error) {\n  throw new Error(\n    `An error occurred while attempting to flush cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"While you could use ",(0,r.kt)("a",{parentName:"p",href:"#delete-cache"},"Delete Cache"),", then ",(0,r.kt)("a",{parentName:"p",href:"#create-cache"},"Create Cache")," to mimic this, the FlushCache API keeps the settings and only deletes the data in the cache.")),(0,r.kt)("h2",{id:"data-apis"},"Data APIs"),(0,r.kt)("p",null,"These API methods are used to directly interact with data in a cache."),(0,r.kt)("h3",{id:"set"},"Set"),(0,r.kt)("p",null,"Sets the value in cache with a given Time To Live (TTL) seconds. If a value for this key is already present it will be replaced by the new value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"The value to be stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttlSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to Live for the item in Cache.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"get"},"Get"),(0,r.kt)("p",null,"Get the cache value stored for the given key."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be retrieved.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Delete the cache value stored for the given key."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be deleted.")))),(0,r.kt)(l.X,{js:"const result = await cacheClient.delete('test-cache', 'test-key');\nif (result instanceof CacheDelete.Success) {\n  console.log(\"Key 'test-key' deleted successfully\");\n} else if (result instanceof CacheDelete.Error) {\n  throw new Error(\n    `An error occurred while attempting to delete key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"increment"},"Increment"),(0,r.kt)("p",null,"Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field does not exist, this method sets the field's value to the amount to increment by."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be incremented.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The quantity to add to the value. May be positive, negative, or zero. Defaults to 1.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64-bit integer. If not, there will be an error response.")),(0,r.kt)("h3",{id:"ping"},"Ping"),(0,r.kt)("p",null,"Sends a ping to the server. This API can be used for checking connectivity to confirm that the client can connect to the server successfully."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Success\n* Error\n\nSee [response objects](/develop/api-reference/response-objects) for specific information.\n"))),(0,r.kt)("h3",{id:"itemgettype"},"ItemGetType"),(0,r.kt)("p",null,"For a given key, returns the type (SCALAR, DICTIONARY, LIST, etc.) of the corresponding item, if it exists."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Key whose item type should be returned.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type()"),": enum: SCALAR, DICTIONARY, SET, LIST, SORTED_SET")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache miss")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache error"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))),(0,r.kt)("h3",{id:"keyexists"},"KeyExists"),(0,r.kt)("p",null,"Checks if a provided key exists in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Key which is to be checked for its existence in the cache.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Success\n- `exists()`: Bool\n* Error\n\nSee [response objects](/develop/api-reference/response-objects) for specific information.\n"))),(0,r.kt)("h3",{id:"keysexist"},"KeysExist"),(0,r.kt)("p",null,"Checks if provided keys exist in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Keys which are to be checked for their existence in the cache.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Success\n- `exists()`: Bool[]\n* Error\n\nSee [response objects](/develop/api-reference/response-objects) for specific information.\n"))),(0,r.kt)("h3",{id:"setifnotexists"},"SetIfNotExists"),(0,r.kt)("p",null,"Associates the provided value to a cache item with a given key."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The key to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The value to be stored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttlSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to Live for the item in Cache.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Stored\n* NotStored\n* Error\n\nSee [response objects](/develop/api-reference/response-objects) for specific information.\n"))),(0,r.kt)("h2",{id:"time-to-live-apis"},"Time to Live APIs"),(0,r.kt)("p",null,"These APIs apply across all cache types."),(0,r.kt)("h3",{id:"updatettl"},"UpdateTtl"),(0,r.kt)("p",null,"Overwrites the TTL of a cache item with the provided value in seconds."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value's TTL is to be updated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to live that you want to update in cache in seconds.")))),(0,r.kt)("h3",{id:"increasettl"},"IncreaseTtl"),(0,r.kt)("p",null,"Increase the TTL seconds for a key to the provided value only if it would increase the TTL."),(0,r.kt)("p",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the TTL is 5 seconds and is increased to 6 seconds, the new TTL will be 6 seconds."),(0,r.kt)("li",{parentName:"ul"},"If the TTL is 5 seconds and is increased to 3 seconds, the TTL will not be increased.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value's TTL is to be increased.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to live that you want to increase to.")))),(0,r.kt)("h3",{id:"decreasettl"},"DecreaseTtl"),(0,r.kt)("p",null,"Decrease the TTL seconds for a key to the provided value only if it would decrease the TTL."),(0,r.kt)("p",null,"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the TTL is 5 seconds and is decreased to 3 seconds, the new TTL will be 3 seconds."),(0,r.kt)("li",{parentName:"ul"},"If the TTL is 5 seconds and is decreased to 6 seconds, the TTL will not be decreased.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The key under which the value's TTL is to be decreased.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to live that you want to decrease to.")))),(0,r.kt)("h3",{id:"itemgetttl"},"ItemGetTtl"),(0,r.kt)("p",null,"For a given key, returns the duration of time remaining (Time To Live) before the item expires from the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Key whose item type should be returned.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remainingTtl()"),": Duration")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache miss")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache error"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))),(0,r.kt)("h2",{id:"auth-apis"},"Auth APIs"),(0,r.kt)("p",null,"These APIs are used to manage Momento auth tokens and access."),(0,r.kt)("h3",{id:"generateauthtoken"},"GenerateAuthToken"),(0,r.kt)("p",null,"Generates a new Momento Auth token with the specified permissions and expiry."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},"TokenScope"),(0,r.kt)("td",{parentName:"tr",align:null},"The permissions to grant to the new token.  Pre-built TokenScope objects are provided by the SDKs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,r.kt)("td",{parentName:"tr",align:null},"ExpiresIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds until the token expires, or ",(0,r.kt)("inlineCode",{parentName:"td"},"never"),".")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authToken"),": string - the new auth token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - a refresh token that can be used with the ",(0,r.kt)("inlineCode",{parentName:"li"},"RefreshAuthToken")," API to refresh the token before it expires"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - the timestamp at which the token will expire")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Error"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))),(0,r.kt)(l.X,{js:"const generateTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (generateTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with AllDataReadWrite scope!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${generateTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${generateTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${generateTokenResponse.expiresAt.epoch()}`);\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"refreshauthtoken"},"RefreshAuthToken"),(0,r.kt)("p",null,"Refreshes an existing, unexpired Momento auth token.  Produces a new auth token with the same permissions and expiry duration as the original auth token."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The refreshToken for the current auth token, acquired from the original call to ",(0,r.kt)("inlineCode",{parentName:"td"},"GenerateAuthToken"),".")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authToken"),": string - the new auth token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken"),": string - a refresh token that can be used with the ",(0,r.kt)("inlineCode",{parentName:"li"},"RefreshAuthToken")," API to refresh the token before it expires"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expiresAt"),": Timestamp - the timestamp at which the token will expire")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Error"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))),(0,r.kt)(l.X,{js:"const generateTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (generateTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated auth token; refreshing!');\n  const refreshAuthClient = new AuthClient({\n    credentialProvider: CredentialProvider.fromString({authToken: generateTokenResponse.authToken}),\n  });\n  const refreshTokenResponse = await refreshAuthClient.refreshAuthToken(generateTokenResponse.refreshToken);\n  if (refreshTokenResponse instanceof RefreshAuthToken.Success) {\n    console.log('Auth token refreshed!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`Refreshed auth token starts with: ${refreshTokenResponse.authToken.substring(0, 10)}`);\n    console.log(`New refresh token starts with: ${refreshTokenResponse.refreshToken.substring(0, 10)}`);\n    console.log(`Refreshed auth token expires At: ${refreshTokenResponse.expiresAt.epoch()}`);\n  }\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"collection-data-types"},"Collection data types"),(0,r.kt)("p",null,"Collections may contain different types of structures depending on your use case. Supported data types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/api-reference/collections/dictionary"},"Dictionaries")," are used to store unordered field:value pairs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/api-reference/collections/list"},"Lists")," are a collection of ordered elements, sorted in the sequence each element was inserted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/api-reference/collections/sets"},"Sets")," are an unordered collection of unique elements in string format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/api-reference/collections/sortedsets"},"Sorted Sets")," are an ordered collection of unique elements.  Each element contains a value:score pair.")),(0,r.kt)("p",null,"For more in-depth information on usage, see ",(0,r.kt)("a",{parentName:"p",href:"/develop/datatypes"},"collection data types"),"."),(0,r.kt)("h2",{id:"current-status-of-api-support-in-sdks"},"Current status of API support in SDKs"),(0,r.kt)("p",null,"For the current status of API support in various SDK languages, see the ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/language-support"},"language support page"),"."))}d.isMDXComponent=!0}}]);