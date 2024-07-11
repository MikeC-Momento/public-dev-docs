"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3641],{5929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(4848),a=t(8453),o=(t(1441),t(5347));const i={sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={id:"storage/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/storage/develop/index.md",sourceDirName:"storage/develop",slug:"/storage/develop/",permalink:"/storage/develop/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/storage/develop/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"storageSidebar",previous:{title:"Momento Storage",permalink:"/storage/"},next:{title:"API Reference",permalink:"/storage/develop/api-reference/"}},c={},u=[{value:"Constructing a Storage Client",id:"constructing-a-storage-client",level:2},{value:"Instantiating credential providers using Momento API keys",id:"instantiating-credential-providers-using-momento-api-keys",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"developing-applications-with-momento-sdks",children:"Developing applications with Momento SDKs"}),"\n",(0,r.jsx)(n.p,{children:"Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called API keys), how to configure your client, and some basic information about error handling and production readiness."}),"\n",(0,r.jsx)(n.h2,{id:"constructing-a-storage-client",children:"Constructing a Storage Client"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"StorageClient"})," is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," and a ",(0,r.jsx)(n.code,{children:"Configuration"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of how to construct a ",(0,r.jsx)(n.code,{children:"StorageClient"}),":"]}),"\n",(0,r.jsx)(o.r,{js:"return new PreviewStorageClient({\n  configuration: StorageConfigurations.Laptop.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});",python:"",java:"",kotlin:"",go:"",csharp:"",php:"",rust:"",elixir:"",swift:"",dart:"",ts:""}),"\n",(0,r.jsx)(n.h2,{id:"instantiating-credential-providers-using-momento-api-keys",children:"Instantiating credential providers using Momento API keys"}),"\n",(0,r.jsxs)(n.p,{children:["You need to provide a Momento API key when instantiating a Momento client. If you don't have one yet, you can get one from the ",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),". Once you have a token, provide it to Momento SDKs when you create an instance of ",(0,r.jsx)(n.code,{children:"CredentialProvider"}),". There are convenient factory methods provided to construct a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," object, either from an environment variable or from a String. Below is an example of how to instantiate ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from an environment variable:"]}),"\n",(0,r.jsx)(o.r,{js:"CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY');",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:"",csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["If you're storing your Momento auth token in a secret manager such as ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secret Manager"}),", ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/secret-manager",children:"GCP Secret Manager"}),", or a local config file, you must first retrieve the credentials from there and then instantiate a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from a string, like this:"]}),"\n",(0,r.jsx)(o.r,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:"",csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["For an example of how to retrieve credentials from AWS Secrets Manager, see ",(0,r.jsx)(n.a,{href:"/cache/integrations/aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see our ",(0,r.jsx)(n.a,{href:"./develop/api-reference",children:"API Reference"})," page, and the docs for the specific ",(0,r.jsx)(n.a,{href:"/sdks",children:"SDK"})," that you are using."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),a=t(4164),o=t(3104),i=t(6347),l=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,b.jsx)(_,{...e,children:d(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>l});var r=t(1470),a=t(9365),o=t(1432),i=(t(6540),t(4848));const l=e=>{let{js:n,python:t,java:l,kotlin:s,go:c,csharp:u,php:d,rust:h,ruby:p,elixir:m,swift:g,dart:f,cli:v}=e;return n||t||l||s||c||u||d||h||p||m||g||f||v?(0,i.jsxs)(r.A,{children:[n&&(0,i.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(o.A,{language:"js",children:n})}),t&&(0,i.jsx)(a.A,{value:"python",label:"Python",children:(0,i.jsx)(o.A,{language:"python",children:t})}),l&&(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(o.A,{language:"java",children:l})}),s&&(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(o.A,{language:"kotlin",children:s})}),c&&(0,i.jsx)(a.A,{value:"go",label:"Go",children:(0,i.jsx)(o.A,{language:"go",children:c})}),u&&(0,i.jsx)(a.A,{value:"csharp",label:"C#",children:(0,i.jsx)(o.A,{language:"csharp",children:u})}),d&&(0,i.jsx)(a.A,{value:"php",label:"PHP",children:(0,i.jsx)(o.A,{language:"php",children:d})}),h&&(0,i.jsx)(a.A,{value:"rust",label:"Rust",children:(0,i.jsx)(o.A,{language:"rust",children:h})}),p&&(0,i.jsx)(a.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(o.A,{language:"ruby",children:p})}),m&&(0,i.jsx)(a.A,{value:"elixir",label:"Elixir",children:(0,i.jsx)(o.A,{language:"elixir",children:m})}),g&&(0,i.jsx)(a.A,{value:"swift",label:"Swift",children:(0,i.jsx)(o.A,{language:"swift",children:g})}),f&&(0,i.jsx)(a.A,{value:"dart",label:"Dart",children:(0,i.jsx)(o.A,{language:"dart",children:f})}),v&&(0,i.jsx)(a.A,{value:"cli",label:"CLI",children:(0,i.jsx)(o.A,{language:"cli",children:v})})]}):null}}}]);