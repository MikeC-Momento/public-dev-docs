"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[939],{3598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(4848),a=t(8453),o=(t(1441),t(5347));const i={sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},l="Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a",s={id:"topics/develop/index",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/index.md",sourceDirName:"topics/develop",slug:"/topics/develop/",permalink:"/ja/topics/develop/",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",title:"Developing applications with Momento SDKs",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"topicsSidebar",previous:{title:"Identifying unique resources",permalink:"/ja/topics/patterns/token_id_webhook"},next:{title:"Authentication",permalink:"/ja/topics/develop/authentication/"}},c={},u=[{value:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",id:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",level:2},{value:"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"momento-sdk\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a",children:"Momento SDK\u3092\u4f7f\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a"}),"\n",(0,r.jsx)(n.p,{children:"\u3088\u3046\u3053\u305d\uff01 \u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u3059\u3079\u3066\u306eSDK\u3067Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a2\u30bb\u30f3\u30d6\u30eb\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u4e00\u822c\u7684\u306a\u69cb\u6210\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001Momento \u306e\u8a8d\u8a3c\u60c5\u5831 (auth \u30c8\u30fc\u30af\u30f3\u3068\u547c\u3070\u308c\u307e\u3059) \u306e\u63d0\u4f9b\u65b9\u6cd5\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u672c\u756a\u74b0\u5883\u3078\u306e\u5bfe\u5fdc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u60c5\u5831\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9",children:"\u30c8\u30d4\u30c3\u30af\u30b9\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u69cb\u7bc9"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TopicClient"})," \u306f\u3001Momento \u306e\u30b5\u30fc\u30d3\u30b9\u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30e1\u30a4\u30f3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"CredentialProvider"})," \u3068 ",(0,r.jsx)(n.code,{children:"Configuration"}),"\u3001\u305d\u3057\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL (time to live) \u5024\u3092\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e TTL \u306f\u3001",(0,r.jsx)(n.code,{children:"CacheClient"})," \u3092\u4f7f\u7528\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u524a\u9664\u3055\u308c\u308b\u307e\u3067\u306e\u4fdd\u5b58\u671f\u9593\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f ",(0,r.jsx)(n.code,{children:"TopicClient"})," \u306e\u4f5c\u6210\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,r.jsx)(o.r,{js:"new TopicClient({\n  configuration: TopicConfigurations.Default.latest(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY'),\n});",python:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",kotlin:'TopicClient(\n    CredentialProvider.fromEnvVar("MOMENTO_API_KEY"), TopicConfigurations.Laptop.latest\n).use { topicClient ->\n    //...\n}',go:'credProvider, err := auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\n\ntopicClient, err = momento.NewTopicClient(\n\tconfig.TopicsDefault(),\n\tcredProvider,\n)\nif err != nil {\n\tpanic(err)\n}',csharp:'new TopicClient(\r\n    TopicConfigurations.Laptop.latest(),\r\n    new EnvMomentoTokenProvider("MOMENTO_API_KEY")\r\n);\r',php:"",rust:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;',elixir:"",swift:'do {\n    let credentialProvider = try CredentialProvider.fromEnvironmentVariable(envVariableName: "MOMENTO_API_KEY")\n    let topicClient = TopicClient(\n        configuration: TopicClientConfigurations.iOS.latest(),\n        credentialProvider: credentialProvider\n    )\n} catch {\n    print("Unable to create topic client: \\(error)")\n    exit(1)\n}',dart:'try {\n  final topicClient = TopicClient(\n      CredentialProvider.fromEnvironmentVariable("MOMENTO_API_KEY"),\n      TopicClientConfigurations.latest());\n} catch (e) {\n  print("Unable to create topic client: $e");\n  exit(1);\n}',ts:""}),"\n",(0,r.jsx)(n.h2,{id:"momento-api-\u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b",children:"Momento API \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u30fb\u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["Momento\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u969b\u306b\u3001Momento API\u30ad\u30fc\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u3060\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(n.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"})," \u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001",(0,r.jsx)(n.code,{children:"CredentialProvider"})," \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b Momento SDK \u306b\u30c8\u30fc\u30af\u30f3\u3092\u6e21\u3057\u307e\u3059\u3002\u74b0\u5883\u5909\u6570\u307e\u305f\u306f\u6587\u5b57\u5217\u304b\u3089 ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30d5\u30a1\u30af\u30c8\u30ea\u30e1\u30bd\u30c3\u30c9\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u3001\u74b0\u5883\u5909\u6570\u304b\u3089 ",(0,r.jsx)(n.code,{children:"CredentialProvider"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,r.jsx)(o.r,{js:"CredentialProvider.fromEnvironmentVariable('MOMENTO_API_KEY');",python:'CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n\n',java:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY");',kotlin:'CredentialProvider.fromEnvVar("MOMENTO_API_KEY")',go:'credentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}',csharp:"",php:'\nCredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");',rust:"",elixir:'Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")',swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://aws.amazon.com/secrets-manager/",children:"AWS\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3"}),"\u3001",(0,r.jsx)(n.a,{href:"https://cloud.google.com/secret-manager",children:"GCP\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3"}),"\u3001\u307e\u305f\u306f\u30ed\u30fc\u30ab\u30eb\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u306bMomento API\u30ad\u30fc\u3092\u4fdd\u5b58\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u307e\u305a\u305d\u3053\u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001\u6b21\u306e\u3088\u3046\u306b\u6587\u5b57\u5217\u304b\u3089",(0,r.jsx)(n.code,{children:"CredentialProvider"}),"\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(o.r,{js:"const apiKey = retrieveApiKeyFromYourSecretsManager();\nCredentialProvider.fromString({apiKey: apiKey});",python:"",java:"final String authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString(authToken);",kotlin:"val authToken = retrieveAuthTokenFromYourSecretsManager()\nCredentialProvider.fromString(authToken)",go:'apiKey := RetrieveApiKeyFromYourSecretsManager()\ncredentialProvider, err = auth.NewStringMomentoTokenProvider(apiKey)\nif err != nil {\n\tfmt.Println("Error parsing API key:", err)\n}',csharp:"",php:"",rust:'  let _credential_provider = CredentialProvider::from_string("my-api-key".to_string());\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLaptop() {\n  let _config = momento::cache::configurations::Laptop::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionDefaultLatest() {\n  let _config = momento::cache::configurations::InRegion::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationInRegionLowLatency() {\n  let _config = momento::cache::configurations::LowLatency::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_ConfigurationLambdaLatest() {\n  let _config = momento::cache::configurations::Lambda::latest();\n\n\nallow(non_snake_case)]\nb fn example_API_InstantiateCacheClient() -> Result<(), MomentoError> {\n  let _cache_client = CacheClient::builder()\n      .default_ttl(Duration::from_secs(60))\n      .configuration(Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var(\n          "MOMENTO_API_KEY".to_string(),\n      )?)\n      .build()?;',elixir:"auth_token = retrieve_auth_token_from_your_secrets_manager()\nMomento.Auth.CredentialProvider.from_string!(auth_token)",swift:"",dart:"",ts:""}),"\n",(0,r.jsxs)(n.p,{children:["AWS Secrets Manager \u304b\u3089\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"/topics/integrations/aws-secrets-manager",children:"Retrieving a Momento auth token from AWS Secrets Manager"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Momento \u8a8d\u8a3c\u306b\u95a2\u3059\u308b\u4e00\u822c\u7684\u306a\u60c5\u5831\u306f\u3001",(0,r.jsx)(n.a,{href:"./develop/authentication",children:"\u8a8d\u8a3c\u306e\u30da\u30fc\u30b8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"./develop/api-reference/response-objects",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u306e\u30da\u30fc\u30b8\u3084\u3001\u4f7f\u7528\u3057\u3066\u3044\u308bSDK\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8(\u5de6\u30ca\u30d3\u306e ",(0,r.jsx)(n.code,{children:"Develop"}),"->",(0,r.jsx)(n.code,{children:"SDKs"})," \u306e\u4e0b)\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),a=t(4164),o=t(3104),i=t(6347),l=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:a}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=c??v;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function _(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(_,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},1441:(e,n,t)=>{t(6540)},5347:(e,n,t)=>{t.d(n,{r:()=>l});var r=t(1470),a=t(9365),o=t(1432),i=(t(6540),t(4848));const l=e=>{let{js:n,python:t,java:l,kotlin:s,go:c,csharp:u,php:d,rust:p,ruby:h,elixir:m,swift:v,dart:f,cli:g}=e;return n||t||l||s||c||u||d||p||h||m||v||f||g?(0,i.jsxs)(r.A,{children:[n&&(0,i.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(o.A,{language:"js",children:n})}),t&&(0,i.jsx)(a.A,{value:"python",label:"Python",children:(0,i.jsx)(o.A,{language:"python",children:t})}),l&&(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(o.A,{language:"java",children:l})}),s&&(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(o.A,{language:"kotlin",children:s})}),c&&(0,i.jsx)(a.A,{value:"go",label:"Go",children:(0,i.jsx)(o.A,{language:"go",children:c})}),u&&(0,i.jsx)(a.A,{value:"csharp",label:"C#",children:(0,i.jsx)(o.A,{language:"csharp",children:u})}),d&&(0,i.jsx)(a.A,{value:"php",label:"PHP",children:(0,i.jsx)(o.A,{language:"php",children:d})}),p&&(0,i.jsx)(a.A,{value:"rust",label:"Rust",children:(0,i.jsx)(o.A,{language:"rust",children:p})}),h&&(0,i.jsx)(a.A,{value:"ruby",label:"Ruby",children:(0,i.jsx)(o.A,{language:"ruby",children:h})}),m&&(0,i.jsx)(a.A,{value:"elixir",label:"Elixir",children:(0,i.jsx)(o.A,{language:"elixir",children:m})}),v&&(0,i.jsx)(a.A,{value:"swift",label:"Swift",children:(0,i.jsx)(o.A,{language:"swift",children:v})}),f&&(0,i.jsx)(a.A,{value:"dart",label:"Dart",children:(0,i.jsx)(o.A,{language:"dart",children:f})}),g&&(0,i.jsx)(a.A,{value:"cli",label:"CLI",children:(0,i.jsx)(o.A,{language:"cli",children:g})})]}):null}}}]);