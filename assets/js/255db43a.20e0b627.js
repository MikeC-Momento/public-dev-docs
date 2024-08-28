"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3205],{3484:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(4848),s=i(8453),o=(i(2821),i(503));const r={sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]},a="Getting Started with Momento Topics in Rust",c={id:"platform/sdks/rust/topics",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",source:"@site/docs/platform/sdks/rust/topics.mdx",sourceDirName:"platform/sdks/rust",slug:"/platform/sdks/rust/topics",permalink:"/platform/sdks/rust/topics",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/rust/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Topics in Rust",description:"Learn the basic building blocks for writing Rust code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","rust","tokio"]},sidebar:"platformSidebar",previous:{title:"Config and Error Handling",permalink:"/platform/sdks/rust/config-and-error-handling"},next:{title:"Storage",permalink:"/platform/sdks/rust/storage"}},l={},d=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-momento-topics-in-rust",children:"Getting Started with Momento Topics in Rust"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to get going quickly with Rust and Momento Topics, this page contains the basic API calls you'll need. ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-rust/tree/main/example",children:"Check the Rust SDK examples"})," for complete, working code samples."]}),"\n",(0,n.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,n.jsxs)(t.p,{children:["The Momento SDK is available on crates.io: ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/momento",children:(0,n.jsx)(t.code,{children:"momento"})}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://crates.io/crates/momento",children:"crates.io"})," to find the latest available version of the SDK."]})}),"\n",(0,n.jsx)(t.p,{children:"Install the client library in an existing Rust project:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cargo add momento\n"})}),"\n",(0,n.jsx)(t.h2,{id:"get-your-momento-api-key",children:"Get your Momento API key"}),"\n",(0,n.jsxs)(t.p,{children:["You'll need a Momento API key. You can get one from the ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your api key here>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,n.jsx)(t.h2,{id:"set-up-a-topicclient",children:"Set up a TopicClient"}),"\n",(0,n.jsx)(t.p,{children:"This code creates the TopicClient that you will use to interact with your pub/sub topic."}),"\n",(0,n.jsx)(o.F,{language:"rust",code:'  let _topic_client = TopicClient::builder()\n      .configuration(momento::topics::configurations::Laptop::latest())\n      .credential_provider(CredentialProvider::from_env_var("MOMENTO_API_KEY")?)\n      .build()?;'}),"\n",(0,n.jsx)(t.h2,{id:"publish-a-message-to-a-topic",children:"Publish a message to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'}),"\n",(0,n.jsx)(o.F,{language:"rust",code:'  topic_client\n      .publish(cache_name, topic_name, "Hello, Momento!")\n      .await?;\n  println!("Published message");'}),"\n",(0,n.jsx)(t.h2,{id:"subscribe-to-a-topic",children:"Subscribe to a topic"}),"\n",(0,n.jsx)(t.p,{children:'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'}),"\n",(0,n.jsx)(o.F,{language:"rust",code:'  // Make a subscription\n  let mut subscription = topic_client\n      .subscribe(cache_name, topic_name)\n      .await\n      .expect("subscribe rpc failed");\n\n  // Consume the subscription\n  while let Some(item) = subscription.next().await {\n      println!("Received subscription item: {item:?}")\n  }'}),"\n",(0,n.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-rust/tree/main/example",children:"Rust SDK GitHub repo examples directory"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,n.jsx)(t.a,{href:"/topics/develop/api-reference",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,t,i)=>{i(6540)},503:(e,t,i)=>{i.d(t,{F:()=>o});var n=i(1432),s=(i(6540),i(4848));const o=e=>{let{language:t,code:i}=e;return(0,s.jsx)(n.A,{language:t,children:i})}}}]);