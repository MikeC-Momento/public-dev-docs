"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7494],{6556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=n(4848),i=n(8453),o=(n(2821),n(503));const s={sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]},c="Getting Started with Momento Cache in Rust",r={id:"platform/sdks/rust/cache",title:"Getting started with Momento Cache in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Cache.",source:"@site/docs/platform/sdks/rust/cache.mdx",sourceDirName:"platform/sdks/rust",slug:"/platform/sdks/rust/cache",permalink:"/platform/sdks/rust/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/rust/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]},sidebar:"platformSidebar",previous:{title:"Rust",permalink:"/platform/sdks/rust/"},next:{title:"Config and Error Handling",permalink:"/platform/sdks/rust/config-and-error-handling"}},l={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and instantiate a CacheClient object",id:"import-libraries-and-instantiate-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getting-started-with-momento-cache-in-rust",children:"Getting Started with Momento Cache in Rust"}),"\n",(0,a.jsxs)(t.p,{children:["If you need to get going quickly with Rust and Momento Cache, this page contains the basic API calls you'll need. ",(0,a.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-rust/tree/main/example",children:"Check the Rust SDK examples"})," for complete, working examples including build configuration files."]}),"\n",(0,a.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,a.jsxs)(t.p,{children:["The Momento SDK is available on crates.io: ",(0,a.jsx)(t.a,{href:"https://crates.io/crates/momento",children:(0,a.jsx)(t.code,{children:"momento"})}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Visit ",(0,a.jsx)(t.a,{href:"https://crates.io/crates/momento",children:"crates.io"})," to find the latest available version of the SDK."]})}),"\n",(0,a.jsx)(t.p,{children:"Install the client library in an existing Rust project:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo add momento\n"})}),"\n",(0,a.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,a.jsxs)(t.p,{children:["You'll need a Momento API key to authenticate with Momento.  You can get one from the ",(0,a.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your API key, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento API key here>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"import-libraries-and-instantiate-a-cacheclient-object",children:"Import libraries and instantiate a CacheClient object"}),"\n",(0,a.jsx)(t.p,{children:"This code sets up the main function, the necessary imports, and the CacheClient instantiation that each of the other functions will need to call."}),"\n",(0,a.jsx)(o.F,{language:"rust",code:'use momento::cache::configurations;\nuse momento::{CacheClient, CredentialProvider, MomentoError};\nuse std::time::Duration;\n\n#[tokio::main]\nasync fn main() -> Result<(), MomentoError> {\n    let _cache_client = CacheClient::builder()\n        .default_ttl(Duration::from_secs(60))\n        .configuration(configurations::Laptop::latest())\n        .credential_provider(CredentialProvider::from_env_var(\n            "MOMENTO_API_KEY".to_string(),\n        )?)\n        .build()?;\n    // ...\n    Ok(())\n}\n'}),"\n",(0,a.jsx)(t.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,a.jsx)(t.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,a.jsx)(o.F,{language:"rust",code:'  match cache_client.create_cache(cache_name).await? {\n      CreateCacheResponse::Created => println!("Cache {} created", cache_name),\n      CreateCacheResponse::AlreadyExists => println!("Cache {} already exists", cache_name),\n  }'}),"\n",(0,a.jsx)(t.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,a.jsx)(t.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,a.jsx)(o.F,{language:"rust",code:'  let response = cache_client.list_caches().await?;\n  println!("Caches: {:#?}", response.caches);'}),"\n",(0,a.jsx)(t.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,a.jsx)(t.p,{children:"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client object."}),"\n",(0,a.jsx)(o.F,{language:"rust",code:'  cache_client.set(cache_name, "key", "value").await?;\n  println!("Value stored");'}),"\n",(0,a.jsx)(t.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,a.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,a.jsx)(o.F,{language:"rust",code:'  let response = cache_client.get(cache_name, "key").await?;\n  let _item: String = response.try_into().expect("I stored a string!");'}),"\n",(0,a.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,a.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,a.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-rust/tree/main/example",children:"Rust SDK github repo examples directory"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,a.jsx)(t.a,{href:"/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>o});var a=n(1432),i=(n(6540),n(4848));const o=e=>{let{language:t,code:n}=e;return(0,i.jsx)(a.A,{language:t,children:n})}}}]);