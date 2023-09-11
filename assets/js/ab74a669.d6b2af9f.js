"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6165],{5162:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),a=t(6010);const s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var o=t(7462),a=t(7294),s=t(6010),r=t(2466),l=t(6550),i=t(1980),c=t(7392),u=t(12);function h(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=p(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[i,c]=k({queryString:t,groupId:o}),[h,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),g=(()=>{const e=i??h;return d({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var g=t(2389);const b="tabList__CuJ",f="tabItem_LNqP";function T(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),o=c[t].value;o!==l&&(h(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:p},r,{className:(0,s.Z)("tabs__item",f,r?.className,{"tabs__item--active":l===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function R(e){const n=m(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",b)},a.createElement(T,(0,o.Z)({},e,n)),a.createElement(w,(0,o.Z)({},e,n)))}function v(e){const n=(0,g.Z)();return a.createElement(R,(0,o.Z)({key:String(n)},e))}},3404:(e,n,t)=>{t(7294)},9720:(e,n,t)=>{t.d(n,{X:()=>l});var o=t(4866),a=t(5162),s=t(814),r=t(7294);const l=e=>{let{js:n,python:t,java:l,go:i,csharp:c,php:u,rust:h,ruby:p,elixir:d,cli:k}=e;return n||t||l||i||c||u||h||p||d||k?r.createElement(o.Z,null,n&&r.createElement(a.Z,{value:"js",label:"JavaScript"},r.createElement(s.Z,{language:"js"},n)),t&&r.createElement(a.Z,{value:"python",label:"Python"},r.createElement(s.Z,{language:"python"},t)),l&&r.createElement(a.Z,{value:"java",label:"Java"},r.createElement(s.Z,{language:"java"},l)),i&&r.createElement(a.Z,{value:"go",label:"Go"},r.createElement(s.Z,{language:"go"},i)),c&&r.createElement(a.Z,{value:"csharp",label:"C#"},r.createElement(s.Z,{language:"csharp"},c)),u&&r.createElement(a.Z,{value:"php",label:"PHP"},r.createElement(s.Z,{language:"php"},u)),h&&r.createElement(a.Z,{value:"rust",label:"Rust"},r.createElement(s.Z,{language:"rust"},h)),p&&r.createElement(a.Z,{value:"ruby",label:"Ruby"},r.createElement(s.Z,{language:"ruby"},p)),d&&r.createElement(a.Z,{value:"elixir",label:"Elixir"},r.createElement(s.Z,{language:"elixir"},d)),k&&r.createElement(a.Z,{value:"cli",label:"CLI"},r.createElement(s.Z,{language:"cli"},k))):null}},4269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(7462),a=(t(7294),t(3905)),s=(t(3404),t(9720));const r={sidebar_position:20,title:"Tokens",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},l="Momento tokens",i={unversionedId:"develop/authentication/tokens",id:"develop/authentication/tokens",title:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used.",source:"@site/docs/develop/authentication/tokens.md",sourceDirName:"develop/authentication",slug:"/develop/authentication/tokens",permalink:"/develop/authentication/tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/authentication/tokens.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Tokens",sidebar_label:"Tokens",description:"Learn what Momento tokens are, how to create them, and how they are used."},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/develop/authentication/api-keys"},next:{title:"Permissions",permalink:"/develop/authentication/permissions"}},c={},u=[{value:"Creating a token",id:"creating-a-token",level:2},{value:"Expiration",id:"expiration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Data restriction",id:"data-restriction",level:2}],h={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-tokens"},"Momento tokens"),(0,a.kt)("p",null,"Tokens are short-lived, limited-scope values intended to be used in temporary situations like user sessions. Software lifecycle events like a user login often result in the issuing of a token only valid for the standard duration of a session. "),(0,a.kt)("p",null,"A Momento token only has access to the ",(0,a.kt)("em",{parentName:"p"},"data plane"),". This means users who have a valid token will not be able do things like create, delete, or flush a cache. They also cannot create new tokens. "),(0,a.kt)("p",null,"A user with a fully privileged token will be able to perform the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add/edit/delete cache items in any cache"),(0,a.kt)("li",{parentName:"ul"},"Publish and subscribe to any topic in any cache"),(0,a.kt)("li",{parentName:"ul"},"Increment cache values via the increment API in any cache")),(0,a.kt)("p",null,"It's up to you to limit the access of a token based on your system requirements. "),(0,a.kt)("h2",{id:"creating-a-token"},"Creating a token"),(0,a.kt)("p",null,"Unlike our ",(0,a.kt)("a",{parentName:"p",href:"/develop/authentication/api-keys"},"API keys"),", the only way to create a token is through code. You cannot create them through the Momento console. "),(0,a.kt)("p",null,"Below are some examples to create tokens with different sets of permissions:"),(0,a.kt)(s.X,{js:"// Generate a token that allows all data plane APIs on all caches and topics.\nconst allDataRWTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (allDataRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with AllDataReadWrite scope!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${allDataRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${allDataRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allDataRWTokenResponse.expiresAt.epoch()}`);\n} else if (allDataRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with AllDataReadWrite scope: ${allDataRWTokenResponse.errorCode()}: ${allDataRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can only call read-only data plane APIs on a specific cache foo. No topic apis (publish/subscribe) are allowed.\nconst singleCacheROTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.cacheReadOnly('foo'),\n  ExpiresIn.minutes(30)\n);\nif (singleCacheROTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with read-only access to cache foo!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${singleCacheROTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${singleCacheROTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${singleCacheROTokenResponse.expiresAt.epoch()}`);\n} else if (singleCacheROTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with single cache read-only scope: ${singleCacheROTokenResponse.errorCode()}: ${singleCacheROTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can call all data plane APIs on all caches. No topic apis (publish/subscribe) are allowed.\nconst allCachesRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.cacheReadWrite(AllCaches),\n  ExpiresIn.minutes(30)\n);\nif (allCachesRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with read-write access to all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${allCachesRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${allCachesRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allCachesRWTokenResponse.expiresAt.epoch()}`);\n} else if (allCachesRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with all caches read-write scope: ${allCachesRWTokenResponse.errorCode()}: ${allCachesRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can call publish and subscribe on all topics within cache bar\nconst singleCacheAllTopicsRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.topicPublishSubscribe({name: 'bar'}, AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (singleCacheAllTopicsRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with publish-subscribe access to all topics within cache bar!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${singleCacheAllTopicsRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${singleCacheAllTopicsRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${singleCacheAllTopicsRWTokenResponse.expiresAt.epoch()}`);\n} else if (singleCacheAllTopicsRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with read-write scope for all topics in a single cache: ${singleCacheAllTopicsRWTokenResponse.errorCode()}: ${singleCacheAllTopicsRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token that can only call subscribe on topic where_is_mo within cache mo_nuts\nconst oneCacheOneTopicRWTokenResponse = await authClient.generateAuthToken(\n  TokenScopes.topicSubscribeOnly('mo_nuts', 'where_is_mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneCacheOneTopicRWTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with subscribe-only access to topic where_is_mo within cache mo_nuts!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${oneCacheOneTopicRWTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${oneCacheOneTopicRWTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneCacheOneTopicRWTokenResponse.expiresAt.epoch()}`);\n} else if (oneCacheOneTopicRWTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with read-write scope for single topic in a single cache: ${oneCacheOneTopicRWTokenResponse.errorCode()}: ${oneCacheOneTopicRWTokenResponse.toString()}`\n  );\n}\n\n// Generate a token with multiple permissions\nconst cachePermission1 = {\n  role: CacheRole.ReadWrite, // Managed role that grants access to read as well as write apis on caches\n  cache: 'acorns', // Scopes the access to a single cache named 'acorns'\n};\nconst cachePermission2 = {\n  role: CacheRole.ReadOnly, // Managed role that grants access to only read data apis on caches\n  cache: AllCaches, // Built-in value for access to all caches in the account\n};\nconst topicPermission1 = {\n  role: TopicRole.PublishSubscribe, // Managed role that grants access to subscribe as well as publish apis\n  cache: 'walnuts', // Scopes the access to a single cache named 'walnuts'\n  topic: 'mo_favorites', // Scopes the access to a single topic named 'mo_favorites' within cache 'walnuts'\n};\nconst topicPermission2 = {\n  role: TopicRole.SubscribeOnly, // Managed role that grants access to only subscribe api\n  cache: AllCaches, // Built-in value for all cache(s) in the account.\n  topic: AllTopics, // Built-in value for access to all topics in the listed cache(s).\n};\n\nconst permissions = {\n  permissions: [cachePermission1, cachePermission2, topicPermission1, topicPermission2],\n};\n\nconst multiplePermsTokenResponse = await authClient.generateAuthToken(permissions, ExpiresIn.minutes(30));\nif (multiplePermsTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated an auth token with multiple cache and topic permissions!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`Auth token starts with: ${multiplePermsTokenResponse.authToken.substring(0, 10)}`);\n  console.log(`Refresh token starts with: ${multiplePermsTokenResponse.refreshToken.substring(0, 10)}`);\n  console.log(`Expires At: ${multiplePermsTokenResponse.expiresAt.epoch()}`);\n} else if (multiplePermsTokenResponse instanceof GenerateAuthToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateAuthToken with multiple permissions: ${multiplePermsTokenResponse.errorCode()}: ${multiplePermsTokenResponse.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"For detailed information on creating a token, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/develop/api-reference/auth"},"API reference page"),"."),(0,a.kt)("h2",{id:"expiration"},"Expiration"),(0,a.kt)("p",null,"Momento tokens are required to have an expiration time. The ",(0,a.kt)("strong",{parentName:"p"},"maximum expiration time for a token is 1 hour"),". When the token expiration time elapses, you will be required to create a new one. "),(0,a.kt)("p",null,"If you attempt to make a call with an expired token, you will receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTHENTICATION_ERROR")," response indicating the provided credentials could not connect to the service."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tokens cannot be refreshed. So once it expires, it's gone forever. You'll be responsible for creating and issuing a new one if the session continues.")),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,"These tokens are a great fit for the following use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using Momento for front-end development"),(0,a.kt)("li",{parentName:"ul"},"Communicating with IoT devices"),(0,a.kt)("li",{parentName:"ul"},"Issuing temporary access to specific resources"),(0,a.kt)("li",{parentName:"ul"},"Providing credentials to users on login")),(0,a.kt)("h2",{id:"data-restriction"},"Data restriction"),(0,a.kt)("p",null,"A common use case for a token is to limit access to only a small subset of resources. Not only can you limit capabilities, like providing a token with ",(0,a.kt)("em",{parentName:"p"},"read-only")," access, but you can also scope it to individual cache items or topics. "),(0,a.kt)("p",null,"To get a full understanding of what you can do with data restriction, check out our ",(0,a.kt)("a",{parentName:"p",href:"/develop/authentication/permissions"},"permissions page"),"."))}p.isMDXComponent=!0}}]);