"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9694],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var o=n(7462),a=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function h(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:n,groupId:o}),[h,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=l??h;return d({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var g=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==s&&(h(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(y,(0,o.Z)({},e,t)),a.createElement(v,(0,o.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(w,(0,o.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>s});var o=n(4866),a=n(5162),r=n(814),i=n(7294);const s=e=>{let{js:t,python:n,java:s,go:l,csharp:u,php:c,rust:h,ruby:p,elixir:d,cli:m}=e;return t||n||s||l||u||c||h||p||d||m?i.createElement(o.Z,null,t&&i.createElement(a.Z,{value:"js",label:"JavaScript"},i.createElement(r.Z,{language:"js"},t)),n&&i.createElement(a.Z,{value:"python",label:"Python"},i.createElement(r.Z,{language:"python"},n)),s&&i.createElement(a.Z,{value:"java",label:"Java"},i.createElement(r.Z,{language:"java"},s)),l&&i.createElement(a.Z,{value:"go",label:"Go"},i.createElement(r.Z,{language:"go"},l)),u&&i.createElement(a.Z,{value:"csharp",label:"C#"},i.createElement(r.Z,{language:"csharp"},u)),c&&i.createElement(a.Z,{value:"php",label:"PHP"},i.createElement(r.Z,{language:"php"},c)),h&&i.createElement(a.Z,{value:"rust",label:"Rust"},i.createElement(r.Z,{language:"rust"},h)),p&&i.createElement(a.Z,{value:"ruby",label:"Ruby"},i.createElement(r.Z,{language:"ruby"},p)),d&&i.createElement(a.Z,{value:"elixir",label:"Elixir"},i.createElement(r.Z,{language:"elixir"},d)),m&&i.createElement(a.Z,{value:"cli",label:"CLI"},i.createElement(r.Z,{language:"cli"},m))):null}},3284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905)),r=(n(3404),n(9720));const i={sidebar_position:4,sidebar_label:"Momento Authentication",title:"Working with Momento auth tokens",description:"Learn how to use expiring tokens to enhance the security of your application"},s="Working with Momento auth tokens",l={unversionedId:"develop/basics/working-with-momento-auth-tokens",id:"develop/basics/working-with-momento-auth-tokens",title:"Working with Momento auth tokens",description:"Learn how to use expiring tokens to enhance the security of your application",source:"@site/docs/develop/basics/01-working-with-momento-auth-tokens.md",sourceDirName:"develop/basics",slug:"/develop/basics/working-with-momento-auth-tokens",permalink:"/develop/basics/working-with-momento-auth-tokens",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/basics/01-working-with-momento-auth-tokens.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Momento Authentication",title:"Working with Momento auth tokens",description:"Learn how to use expiring tokens to enhance the security of your application"},sidebar:"tutorialSidebar",previous:{title:"SDK Error Handling",permalink:"/develop/basics/error-handling-production-readiness"},next:{title:"Data Types",permalink:"/develop/datatypes"}},u={},c=[{value:"Token expiration",id:"token-expiration",level:2},{value:"Generating expiring tokens",id:"generating-expiring-tokens",level:2},{value:"Step 1: Sign up or log into the Momento console",id:"step-1-sign-up-or-log-into-the-momento-console",level:3},{value:"Step 2: Generate a Momento auth token",id:"step-2-generate-a-momento-auth-token",level:3},{value:"Step 3: Store your Momento auth token",id:"step-3-store-your-momento-auth-token",level:3},{value:"Step 4: Automating token refresh",id:"step-4-automating-token-refresh",level:3},{value:"Token Scopes",id:"token-scopes",level:2}],h={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-momento-auth-tokens"},"Working with Momento auth tokens"),(0,a.kt)("img",{src:"/img/pile-of-tokens.jpg",width:"90%",alt:"a technical illustration of a bank vault representing security, authorization, and authentication."}),(0,a.kt)("p",null,"To access Momento services from your application, a Momento auth token is required. The auth token is an alphanumeric string Momento generates that is unique to your account and the cloud provider's Region you select. When creating an auth token, you can setup one of two types of tokens:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A super-user token which grant access to all resources and APIs (both data plane and control plane) in the account."),(0,a.kt)("li",{parentName:"ol"},"A fine-grained access control (FGAC) token which only has access to data plan APIs and can be configured to restrict access to the single cache and/or topic level, if so desired.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/develop/api-reference/auth-tokens"},"Auth API reference information")," for information on using Momento's Auth API to programmatically create, manage, and refresh Momento auth tokens."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/F32zTUBkWzw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"token-expiration"},"Token expiration"),(0,a.kt)("p",null,"Tokens can be set to expire after N time set at their creation. There are two types of expiration for Momento auth tokens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An auth token that never expires. This should only be used for dev/test environments. "),(0,a.kt)("li",{parentName:"ul"},"An auth token which expires and requires periodic rotation. You can set the expiration to 7, 30, 60, 90 days or custom, where you can select a specific calendar date. An expiring auth token is considered best practice for production deployments. We will walk through how to do exactly that in this page.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In addition to using an expiring auth token, it is best practice to store an auth token in a service like ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),". Go to ",(0,a.kt)("a",{parentName:"p",href:"/develop/integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager")," for an example on using this.")),(0,a.kt)("h2",{id:"generating-expiring-tokens"},"Generating expiring tokens"),(0,a.kt)("h3",{id:"step-1-sign-up-or-log-into-the-momento-console"},"Step 1: Sign up or log into the Momento console"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"Momento console")," and follow the instructions to log in with your email address, Google account, or GitHub account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(5176).Z,width:"700",height:"337"})),(0,a.kt)("h3",{id:"step-2-generate-a-momento-auth-token"},"Step 2: Generate a Momento auth token"),(0,a.kt)("p",null,"In the console, open the menu and select token."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image of console menu",src:n(4232).Z,width:"320",height:"240"})),(0,a.kt)("p",null,'On the token page, select your 1/ cloud provider, 2/ an available region from the drop down list, 3/ when the token should expire, and then 4/ hit the "Generate Token" button.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(8500).Z,width:"520",height:"377"})),(0,a.kt)("p",null,"Scroll down and you will see your token in a grey box. The tokens in the screenshot has been blurred out, but yours won't be. The box contains 3 separate fields:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Auth Token: this is the actual authentication token that gives your application access to Momento. This token will expired after the specified time period you selected."),(0,a.kt)("li",{parentName:"ol"},"Refresh Token: if you wish to programmatically obtain a new auth token before the current token expires, you need this refresh token."),(0,a.kt)("li",{parentName:"ol"},"Valid Until: this is purely informational, and displays the date and time the current auth token expires at.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(987).Z,width:"600",height:"334"})),(0,a.kt)("h3",{id:"step-3-store-your-momento-auth-token"},"Step 3: Store your Momento auth token"),(0,a.kt)("p",null,'If you wish to quickly test out Momento, click on the copy icon beside the auth token to copy the token to your clipboard and supply it to the Momento SDK. We recommend you also click the "Download JSON" button to store both the auth token and refresh token. Tokens are like passwords, the best practice is to store it in and retrieve it from a secure location such as ',(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/secrets-manager/"},"AWS Secrets Manager")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"GCP Secret Manager"),"."),(0,a.kt)("h3",{id:"step-4-automating-token-refresh"},"Step 4: Automating token refresh"),(0,a.kt)("p",null,"To refresh an expiring token, you will use the Momento ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthClient")," and its ",(0,a.kt)("inlineCode",{parentName:"p"},"refreshAuthToken")," API."),(0,a.kt)("p",null,"To instantiate an ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthClient"),":"),(0,a.kt)(r.X,{js:"new AuthClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n  }),\n});",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"refreshAuthToken")," API:"),(0,a.kt)(r.X,{js:"const generateTokenResponse = await authClient.generateAuthToken(AllDataReadWrite, ExpiresIn.minutes(30));\nif (generateTokenResponse instanceof GenerateAuthToken.Success) {\n  console.log('Generated auth token; refreshing!');\n  const refreshAuthClient = new AuthClient({\n    credentialProvider: CredentialProvider.fromString({authToken: generateTokenResponse.authToken}),\n  });\n  const refreshTokenResponse = await refreshAuthClient.refreshAuthToken(generateTokenResponse.refreshToken);\n  if (refreshTokenResponse instanceof RefreshAuthToken.Success) {\n    console.log('Auth token refreshed!');\n    // logging only a substring of the tokens, because logging security credentials is not advisable :)\n    console.log(`Refreshed auth token starts with: ${refreshTokenResponse.authToken.substring(0, 10)}`);\n    console.log(`New refresh token starts with: ${refreshTokenResponse.refreshToken.substring(0, 10)}`);\n    console.log(`Refreshed auth token expires At: ${refreshTokenResponse.expiresAt.epoch()}`);\n  }\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("p",null,"Once your application is running in production. You will need an automated script that periodically refreshes the auth token, ",(0,a.kt)("strong",{parentName:"p"},"before")," it expires. If you are running in AWS, scheduling a function in AWS Lambda that does this for you. For GCP, Google Cloud Functions is likely your solution of choice. For an example using AWS Lambda, check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/auth-token-refresh-lambda"},"1-click deploy example Lambda function")," that will automatically refresh your token stored in AWS Secrets Manager."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While a Lambda function, Google Cloud Function, or another automated script refreshes the auth token, your application also needs to check AWS Secrets Manager (or wherever you are storing your tokens) periodically for newly refreshed tokens if it is caching the token locally!")),(0,a.kt)("h2",{id:"token-scopes"},"Token Scopes"),(0,a.kt)("p",null,"Momento auth tokens have an associated ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenScope")," which controls their level of access to Momento resources. Here is a list of the available ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenScope"),"s:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SuperUser"),": these tokens have full access to all control plane and data plane operations. They can also be used to generate new tokens via the ",(0,a.kt)("a",{parentName:"li",href:"/develop/api-reference#generateauthtoken"},(0,a.kt)("inlineCode",{parentName:"a"},"generateAuthToken"))," API. The only way to create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SuperUser")," token is through the ",(0,a.kt)("a",{parentName:"li",href:"https://console.gomomento.com"},"Momento web console"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllDataReadWrite"),": these tokens have full read/write access to all data plane operations, but no access to control plane operations. They can be used to read/write any cache, and to publish and subscribe to any topic. They cannot be used to create or delete caches, nor to generate new Momento auth tokens. ",(0,a.kt)("inlineCode",{parentName:"li"},"AllDataReadWrite")," tokens are created via the ",(0,a.kt)("a",{parentName:"li",href:"/develop/api-reference#generateauthtoken"},(0,a.kt)("inlineCode",{parentName:"a"},"generateAuthToken"))," API. ")),(0,a.kt)("p",null,"Got more questions or feedback for us? Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/GDStRczm"},"Discord community")," or reach out to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"Momento support")," for help."))}p.isMDXComponent=!0},4232:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/auth-token-877173c41a2a1fbce91948047a73d82b.gif"},5176:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-60f391edcc3628b2638136ba7fa61627.png"},987:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/generated-token-2245903b8ecca741be2ca22c1b64cee1.jpg"},8500:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-provider-region-28122ca1e4a57cacb8e22e00db3bd692.png"}}]);