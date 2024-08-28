"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5677],{4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var o=n(4848),i=n(8453),a=(n(2821),n(503));const c={sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},r="Getting Started with Momento Cache in Go",s={id:"platform/sdks/go/cache",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Cache.",source:"@site/docs/platform/sdks/go/cache.mdx",sourceDirName:"platform/sdks/go",slug:"/platform/sdks/go/cache",permalink:"/ja/platform/sdks/go/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/go/cache.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cache",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Cache in Go",description:"Learn the basic building blocks for writing Go code to interact with Momento Cache.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","server-side","go","golang"]},sidebar:"platformSidebar",previous:{title:"Go",permalink:"/ja/platform/sdks/go/"},next:{title:"Topics",permalink:"/ja/platform/sdks/go/topics"}},l={},h=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Set up your API key",id:"set-up-your-api-key",level:2},{value:"Import libraries and create a CacheClient object",id:"import-libraries-and-create-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"List the names of existing caches in your account",id:"list-the-names-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Running the code",id:"running-the-code",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getting-started-with-momento-cache-in-go",children:"Getting Started with Momento Cache in Go"}),"\n",(0,o.jsxs)(t.p,{children:["If you need to get going quickly with Go and Momento Cache, this page contains the basic API calls you'll need. ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Check the Go SDK examples"})," for additional complete, working examples."]}),"\n",(0,o.jsx)(t.h2,{id:"install-the-momento-sdk",children:"Install the Momento SDK"}),"\n",(0,o.jsxs)(t.p,{children:["After you have ",(0,o.jsx)(t.a,{href:"https://go.dev/doc/code#Command",children:"created your Go project"}),", install the Momento Go SDK."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cli",children:"go get github.com/momentohq/client-sdk-go\n"})}),"\n",(0,o.jsx)(t.h2,{id:"set-up-your-api-key",children:"Set up your API key"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need a ",(0,o.jsx)(t.a,{href:"/ja/cache/develop/authentication/api-keys",children:"Momento API key"})," to authenticate with Momento.  You can get one from the ",(0,o.jsx)(t.a,{href:"https://console.gomomento.com/caches",children:"Momento Web Console"}),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"export MOMENTO_API_KEY=<your Momento token here>\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": it is best practice to put the token into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."]}),"\n",(0,o.jsx)(t.h2,{id:"import-libraries-and-create-a-cacheclient-object",children:"Import libraries and create a CacheClient object"}),"\n",(0,o.jsx)(t.p,{children:"First, pull in the necessary imports and set up the main function."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"errors"\n\t"log"\n\t"time"\n\n\t"github.com/google/uuid"\n\t"github.com/momentohq/client-sdk-go/auth"\n\t"github.com/momentohq/client-sdk-go/config"\n\t"github.com/momentohq/client-sdk-go/config/logger"\n\t"github.com/momentohq/client-sdk-go/momento"\n\t"github.com/momentohq/client-sdk-go/responses"\n)\n\nfunc main() {\n    fmt.Println("Hello, world.")\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Then instantiate the CacheClient object that will be used to interact with Momento Cache."}),"\n",(0,o.jsx)(a.F,{language:"go",code:'context := context.Background()\ncredentialProvider, err = auth.NewEnvMomentoTokenProvider("MOMENTO_API_KEY")\nif err != nil {\n\tpanic(err)\n}\ndefaultTtl := 60 * time.Second\neagerConnectTimeout := 30 * time.Second\n\nclient, err = momento.NewCacheClientWithEagerConnectTimeout(\n\tconfig.LaptopLatest(),\n\tcredentialProvider,\n\tdefaultTtl,\n\teagerConnectTimeout,\n)\nif err != nil {\n\tpanic(err)\n}\n\nclient.Ping(context)'}),"\n",(0,o.jsx)(t.h2,{id:"create-a-new-cache-in-momento-cache",children:"Create a new cache in Momento Cache"}),"\n",(0,o.jsx)(t.p,{children:"Use this function to create a new cache in your account."}),"\n",(0,o.jsx)(a.F,{language:"go",code:"_, err := client.CreateCache(ctx, &momento.CreateCacheRequest{\n\tCacheName: cacheName,\n})\nif err != nil {\n\tpanic(err)\n}"}),"\n",(0,o.jsx)(t.h2,{id:"list-the-names-of-existing-caches-in-your-account",children:"List the names of existing caches in your account"}),"\n",(0,o.jsx)(t.p,{children:"A simple list of the names of caches for the account."}),"\n",(0,o.jsx)(a.F,{language:"go",code:'resp, err := client.ListCaches(ctx, &momento.ListCachesRequest{})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.ListCachesSuccess:\n\tlog.Printf("Found caches %+v\\n", r.Caches())\n}'}),"\n",(0,o.jsx)(t.h2,{id:"write-an-item-to-a-cache",children:"Write an item to a cache"}),"\n",(0,o.jsx)(t.p,{children:"A simple example of doing a set operation. In the client.set call, the TTL is optional. If you did pass it in, this would override the default TTL value set with the client connection object."}),"\n",(0,o.jsx)(a.F,{language:"go",code:'key := uuid.NewString()\nvalue := uuid.NewString()\nlog.Printf("Setting key: %s, value: %s\\n", key, value)\n_, err := client.Set(ctx, &momento.SetRequest{\n\tCacheName: cacheName,\n\tKey:       momento.String(key),\n\tValue:     momento.String(value),\n\tTtl:       time.Duration(9999),\n})\nif err != nil {\n\tvar momentoErr momento.MomentoError\n\tif errors.As(err, &momentoErr) {\n\t\tif momentoErr.Code() != momento.TimeoutError {\n\t\t\t// this would represent a client-side timeout, and you could fall back to your original data source\n\t\t} else {\n\t\t\tpanic(err)\n\t\t}\n\t}\n}'}),"\n",(0,o.jsx)(t.h2,{id:"read-an-item-from-a-cache",children:"Read an item from a cache"}),"\n",(0,o.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a cache."}),"\n",(0,o.jsx)(a.F,{language:"go",code:'key := uuid.NewString()\nresp, err := client.Get(ctx, &momento.GetRequest{\n\tCacheName: cacheName,\n\tKey:       momento.String(key),\n})\nif err != nil {\n\tpanic(err)\n}\n\nswitch r := resp.(type) {\ncase *responses.GetHit:\n\tlog.Printf("Lookup resulted in cache HIT. value=%s\\n", r.ValueString())\ncase *responses.GetMiss:\n\tlog.Printf("Look up did not find a value key=%s\\n", key)\n}'}),"\n",(0,o.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"go run"})," command to execute the code."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cli",children:"go run main.go\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["For more code examples, check out the ",(0,o.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-go/tree/main/examples",children:"Momento Go SDK repo"}),"."]}),(0,o.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,o.jsx)(t.a,{href:"/ja/cache/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2821:(e,t,n)=>{n(6540)},503:(e,t,n)=>{n.d(t,{F:()=>a});var o=n(1432),i=(n(6540),n(4848));const a=e=>{let{language:t,code:n}=e;return(0,i.jsx)(o.A,{language:t,children:n})}}}]);