"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4857],{3192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(4848),o=t(8453),i=(t(1441),t(5347));const a={sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Developing applications with Momento SDKs",s={id:"topics/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/topics/develop/index.md",sourceDirName:"topics/develop",slug:"/topics/develop/",permalink:"/topics/develop/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"topicsSidebar",previous:{title:"Identifying unique resources",permalink:"/topics/patterns/token_id_webhook"},next:{title:"API Reference",permalink:"/topics/develop/api-reference/"}},c={},u=[{value:"Constructing a Topics client",id:"constructing-a-topics-client",level:2},{value:"Instantiating credential providers using Momento API keys",id:"instantiating-credential-providers-using-momento-api-keys",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"developing-applications-with-momento-sdks",children:"Developing applications with Momento SDKs"}),"\n",(0,r.jsx)(n.p,{children:"Welcome! This page provides information about common constructs you will need in order to assemble Momento clients in all of our SDKs. This page covers how to provide your Momento credentials (called auth tokens), how to configure your client, and some basic information about error handling and production readiness."}),"\n",(0,r.jsx)(n.h2,{id:"constructing-a-topics-client",children:"Constructing a Topics client"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"TopicClient"})," is the main object you will use in your code to interact with Momento services. To instantiate one, you need to pass a ",(0,r.jsx)(n.code,{children:"CredentialProvider"}),", a ",(0,r.jsx)(n.code,{children:"Configuration"}),", and a default time to live (TTL) value. The default TTL determines how long items using that ",(0,r.jsx)(n.code,{children:"CacheClient"})," will be stored in the cache before the cache deletes them."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of how to construct a ",(0,r.jsx)(n.code,{children:"TopicClient"}),":"]}),"\n",(0,r.jsx)(i.r,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err = momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\r\n    TopicConfigurations.Laptop.latest(),\r\n    new EnvMomentoTokenProvider("MOMENTO_API_KEY")\r\n);\r',php:"",rust:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;',elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"instantiating-credential-providers-using-momento-api-keys",children:"Instantiating credential providers using Momento API keys"}),"\n",(0,r.jsxs)(n.p,{children:["You need to provide a Momento API key when instantiating a Momento client. If you don't have one yet, you can get one from the ",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),". Once you have a token, provide it to Momento SDKs when you create an instance of ",(0,r.jsx)(n.code,{children:"CredentialProvider"}),". There are convenient factory methods provided to construct a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," object, either from an environment variable or from a String. Below is an example of how to instantiate ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from an environment variable:"]}),"\n",(0,r.jsx)(i.r,{js:"CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY');",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:'credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}',csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["If you're storing your Momento API key in a secret manager such as ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS Secret Manager"}),", ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/secret-manager",children:"GCP Secret Manager"}),", or a local config file, you must first retrieve the credentials from there and then instantiate a ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," from a string, like this:"]}),"\n",(0,r.jsx)(i.r,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:'apiKey := RetrieveApiKeyFromYourSecretsManager()\ncredentialProvider, err = auth.NewStringMomentoTokenProvider(apiKey)\nif err != nil {\n\tfmt.Println("Error parsing API key:", err)\n}',csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["For an example of how to retrieve credentials from AWS Secrets Manager, see ",(0,r.jsx)(n.a,{href:"/cache/integrations/aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For general information on Momento authentication, see ",(0,r.jsx)(n.a,{href:"./develop/authentication",children:"our auth page"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see our ",(0,r.jsx)(n.a,{href:"./develop/api-reference/response-objects",children:"Response Objects"})," page, and the docs for the specific SDK that you are using (under ",(0,r.jsx)(n.code,{children:"Develop"}),"->",(0,r.jsx)(n.code,{children:"SDKs"})," in the left nav)."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const o={tabItem:"tabItem_Ymn6"};var i=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),o=t(4164),i=t(3104),a=t(6347),l=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=p(e),[a,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:o}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),g=(()=>{const e=c??v;return h({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&s(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function _(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),o=l[t].value;o!==r&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,b.jsx)(_,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>l});var r=t(1470),o=t(9365),i=t(1432),a=(t(6540),t(4848));const l=e=>{let{js:n,python:t,java:l,kotlin:s,go:c,csharp:u,php:d,rust:p,ruby:h,elixir:m,swift:v,dart:f,cli:g}=e;return n||t||l||s||c||u||d||p||h||m||v||f||g?(0,a.jsxs)(r.A,{children:[n&&(0,a.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,a.jsx)(i.A,{language:"js",children:n})}),t&&(0,a.jsx)(o.A,{value:"python",label:"Python",children:(0,a.jsx)(i.A,{language:"python",children:t})}),l&&(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(i.A,{language:"java",children:l})}),s&&(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(i.A,{language:"kotlin",children:s})}),c&&(0,a.jsx)(o.A,{value:"go",label:"Go",children:(0,a.jsx)(i.A,{language:"go",children:c})}),u&&(0,a.jsx)(o.A,{value:"csharp",label:"C#",children:(0,a.jsx)(i.A,{language:"csharp",children:u})}),d&&(0,a.jsx)(o.A,{value:"php",label:"PHP",children:(0,a.jsx)(i.A,{language:"php",children:d})}),p&&(0,a.jsx)(o.A,{value:"rust",label:"Rust",children:(0,a.jsx)(i.A,{language:"rust",children:p})}),h&&(0,a.jsx)(o.A,{value:"ruby",label:"Ruby",children:(0,a.jsx)(i.A,{language:"ruby",children:h})}),m&&(0,a.jsx)(o.A,{value:"elixir",label:"Elixir",children:(0,a.jsx)(i.A,{language:"elixir",children:m})}),v&&(0,a.jsx)(o.A,{value:"swift",label:"Swift",children:(0,a.jsx)(i.A,{language:"swift",children:v})}),f&&(0,a.jsx)(o.A,{value:"dart",label:"Dart",children:(0,a.jsx)(i.A,{language:"dart",children:f})}),g&&(0,a.jsx)(o.A,{value:"cli",label:"CLI",children:(0,a.jsx)(i.A,{language:"cli",children:g})})]}):null}}}]);