"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[1722],{3043:(e,t,o)=>{o(7294)},7235:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(614),i=o(7294);const s=e=>{let{language:t,code:o}=e;return i.createElement(n.Z,{language:t},o)}},8610:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(7462),i=(o(7294),o(3905)),s=(o(3043),o(7235));const a={sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]},r="Getting Started with Momento Topics in Python",c={unversionedId:"sdks/python/topics",id:"sdks/python/topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",source:"@site/docs/sdks/python/topics.mdx",sourceDirName:"sdks/python",slug:"/sdks/python/topics",permalink:"/ja/sdks/python/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/sdks/python/topics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Topics",title:"Getting started with Momento Topics in Python",description:"Learn the basic building blocks for writing Python code to interact with Momento Topics.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","sdk","sdks","api","examples","resources","getting started","quick start","python","asyncio"]}},p={},l=[{value:"Install the Momento SDK",id:"install-the-momento-sdk",level:2},{value:"Get your Momento API key",id:"get-your-momento-api-key",level:2},{value:"Set up a TopicClient",id:"set-up-a-topicclient",level:2},{value:"Publish a message to a topic",id:"publish-a-message-to-a-topic",level:2},{value:"Subscribe to a topic",id:"subscribe-to-a-topic",level:2},{value:"Running the code",id:"running-the-code",level:2}],m={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-momento-topics-in-python"},"Getting Started with Momento Topics in Python"),(0,i.kt)("p",null,"If you need to get going quickly with Python and Momento Topics, this page contains the basic API calls you'll need. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-python/tree/main/examples"},"Check the Python SDK examples")," for complete, working code samples."),(0,i.kt)("h2",{id:"install-the-momento-sdk"},"Install the Momento SDK"),(0,i.kt)("p",null,"The Momento Python SDK is available on ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/momento/"},"pypi as ",(0,i.kt)("inlineCode",{parentName:"a"},"momento")),"."),(0,i.kt)("p",null,"To install in your Python application via pip, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install momento\n")),(0,i.kt)("h2",{id:"get-your-momento-api-key"},"Get your Momento API key"),(0,i.kt)("p",null,"You'll need a Momento API key. You can get one from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".\nOnce you have your token, store it in an environment variable so that the Momento client can consume it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export MOMENTO_API_KEY=<your api key here>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": it is best practice to put the API key into something like AWS Secret Manager or GCP Secret Manager instead of an environment variable for enhanced security, but we are using one here for demo purposes."),(0,i.kt)("h2",{id:"set-up-a-topicclient"},"Set up a TopicClient"),(0,i.kt)("p",null,"This code creates the TopicClient that you will use to interact with your pub/sub topic."),(0,i.kt)(s.Z,{language:"python",code:'TopicClientAsync(\n    TopicConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"publish-a-message-to-a-topic"},"Publish a message to a topic"),(0,i.kt)("p",null,'This is an example of publishing a message to a topic called "topic", then catching the return value to check if the publish was successful.'),(0,i.kt)(s.Z,{language:"python",code:'response = await topic_client.publish("cache", "my_topic", "my_value")\nmatch response:\n    case TopicPublish.Success():\n        print("Successfully published a message")\n    case TopicPublish.Error() as error:\n        print(f"Error publishing a message: {error.message}")\n\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"subscribe-to-a-topic"},"Subscribe to a topic"),(0,i.kt)("p",null,'This is an example of subscribing to a topic called "topic". When messages are published to this topic, the code here receives and prints them asynchronously.'),(0,i.kt)(s.Z,{language:"python",code:'response = await topic_client.subscribe("cache", "my_topic")\nmatch response:\n    case TopicSubscribe.Error() as error:\n        print(f"Error subscribing to topic: {error.message}")\n    case TopicSubscribe.SubscriptionAsync() as subscription:\n        await topic_client.publish("cache", "my_topic", "my_value")\n        async for item in subscription:\n            match item:\n                case TopicSubscriptionItem.Text():\n                    print(f"Received message as string: {item.value}")\n                    return\n                case TopicSubscriptionItem.Binary():\n                    print(f"Received message as bytes: {item.value!r}")\n                    return\n                case TopicSubscriptionItem.Error():\n                    print(f"Error with received message: {item.inner_exception.message}")\n                    return\n\n',mdxType:"SdkExampleCodeBlockImpl"}),(0,i.kt)("h2",{id:"running-the-code"},"Running the code"),(0,i.kt)("p",null,"You can find complete, working examples in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-python/tree/main/examples"},"Python SDK GitHub repo examples directory"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,i.kt)("a",{parentName:"p",href:"/develop/api-reference"},"API reference page")," for more information on the full assortment of Momento API calls.")))}u.isMDXComponent=!0}}]);