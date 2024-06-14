"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1942],{9019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=n(4848),o=n(8453),r=(n(2821),n(503));const c={sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","elixir","phoenix","erlang","beam"]},a="Getting Started with Momento Cache in Elixir",s={id:"sdks/elixir/cache",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",source:"@site/docs/sdks/elixir/cache.mdx",sourceDirName:"sdks/elixir",slug:"/sdks/elixir/cache",permalink:"/sdks/elixir/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/elixir/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",title:"Getting started with Momento Cache in Elixir",description:"Learn the basic building blocks for writing Elixir code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","elixir","phoenix","erlang","beam"]}},h={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Set up a CacheClient",id:"set-up-a-cacheclient",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getting-started-with-momento-cache-in-elixir",children:"Getting Started with Momento Cache in Elixir"}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get going quickly with Elixir and Momento Cache, this page contains the basic API calls you'll need. ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples",children:"Check the Elixir SDK examples"})," for complete, working examples."]}),"\n",(0,i.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,i.jsxs)(t.p,{children:["The latest version of the Momento Elixir SDK is available on ",(0,i.jsx)(t.a,{href:"https://hex.pm/packages/gomomento",children:"Hex"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,i.jsxs)(t.p,{children:["You'll need a Momento auth token to authenticate with Momento.  You can get one from the ",(0,i.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export MOMENTO_AUTH_TOKEN=<your Momento token here>\n"})}),"\n",(0,i.jsx)(t.h2,{id:"set-up-a-cacheclient",children:"Set up a CacheClient"}),"\n",(0,i.jsx)(t.p,{children:"This code creates the CacheClient struct that each of the other functions requires."}),"\n",(0,i.jsx)(r.F,{language:"elixir",code:'alias Momento.CacheClient\n\nconfig = Momento.Configurations.Laptop.latest()\ncredential_provider = Momento.Auth.CredentialProvider.from_env_var!("MOMENTO_AUTH_TOKEN")\ndefault_ttl_seconds = 60.0\nclient = CacheClient.create!(config, credential_provider, default_ttl_seconds)\n'}),"\n",(0,i.jsx)(t.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,i.jsx)(t.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,i.jsx)(r.F,{language:"elixir",code:'case Momento.CacheClient.create_cache(client, "test-cache") do\n  {:ok, _} ->\n    IO.puts("Cache \'test-cache\' created")\n\n  :already_exists ->\n    :ok\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to create cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend'}),"\n",(0,i.jsx)(t.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,i.jsx)(t.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,i.jsx)(r.F,{language:"elixir",code:'case Momento.CacheClient.list_caches(client) do\n  {:ok, result} ->\n    IO.puts("Caches:")\n    IO.inspect(result.caches)\n\n  {:error, error} ->\n    IO.puts("An error occurred while attempting to list caches: #{error.error_code}")\n    raise error\nend'}),"\n",(0,i.jsx)(t.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,i.jsx)(t.p,{children:"A simple example of doing a set operation. In the CacheClient.set() call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,i.jsx)(r.F,{language:"elixir",code:'case Momento.CacheClient.set(client, "test-cache", "test-key", "test-value") do\n  {:ok, _} ->\n    IO.puts("Key \'test-key\' stored successfully")\n\n  {:error, error} ->\n    IO.puts(\n      "An error occurred while attempting to store key \'test-key\' in cache \'test-cache\': #{error.error_code}"\n    )\n\n    raise error\nend'}),"\n",(0,i.jsx)(t.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,i.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,i.jsx)(r.F,{language:"elixir",code:"case Momento.CacheClient.get(client, \"test-cache\", \"test-key\") do\n  {:ok, hit} ->\n    IO.puts(\"Retrieved value for key 'test-key': #{hit.value}\")\n\n  :miss ->\n    IO.puts(\"Key 'test-key' was not found in cache 'test-cache'\")\n\n  {:error, error} ->\n    IO.puts(\n      \"An error occurred while attempting to get key 'test-key' from cache 'test-cache': #{error.error_code}\"\n    )\n\n    raise error\nend"}),"\n",(0,i.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,i.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,i.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-elixir/tree/main/examples",children:"Elixir SDK GitHub repo examples directory"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>r});var i=n(1432),o=(n(6540),n(4848));const r=e=>{let{language:t,code:n}=e;return(0,o.jsx)(i.A,{language:t,children:n})}}}]);