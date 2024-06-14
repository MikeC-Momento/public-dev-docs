"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7213],{7876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=n(4848),i=n(8453);const a={sidebar_position:1,sidebar_label:"Amazon EventBridge",title:"Integrate Momento Topics with Amazon EventBridge",pagination_prev:null,description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","webhook","serverless"]},s="Configure Momento Topics to publish events to Amazon EventBridge",r={id:"topics/integrations/lambda-handler",title:"Integrate Momento Topics with Amazon EventBridge",description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",source:"@site/docs/topics/integrations/lambda-handler.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/lambda-handler",permalink:"/topics/integrations/lambda-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/integrations/lambda-handler.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Amazon EventBridge",title:"Integrate Momento Topics with Amazon EventBridge",pagination_prev:null,description:"How to deploy an AWS Lambda function that handles the webhook payload published by Momento.  The handler exposes the Function over a URL that when executed puts the Momento webhook payload on a configured AWS EventBridge Bus.",hide_title:!0,keywords:["momento","topics","event-driven architecture","eda","webhook","serverless"]},sidebar:"topicsSidebar",next:{title:"AWS Secrets Manager",permalink:"/topics/integrations/aws-secrets-manager"}},l={},h=[{value:"Architecture",id:"architecture",level:2},{value:"Installing the handler",id:"installing-the-handler",level:2},{value:"Deploying the Lambda function via one-click CloudFormation",id:"deploying-the-lambda-function-via-one-click-cloudformation",level:3},{value:"Update the Momento webhook URL",id:"update-the-momento-webhook-url",level:3},{value:"Verifying the payload",id:"verifying-the-payload",level:2},{value:"Example event",id:"example-event",level:3},{value:"Event structure",id:"event-structure",level:3},{value:"detail-type",id:"detail-type",level:4},{value:"source",id:"source",level:4},{value:"detail",id:"detail",level:4},{value:"Considerations",id:"considerations",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"configure-momento-topics-to-publish-events-to-amazon-eventbridge",children:"Configure Momento Topics to publish events to Amazon EventBridge"}),"\n",(0,o.jsxs)(t.p,{children:["Momento ",(0,o.jsx)(t.a,{href:"https://docs.momentohq.com/topics/webhooks/overview",children:"webhooks"})," are a serverless way to connect a topic to a stateless consumer. Below is a guide on how to deploy an AWS Lambda function with a public URL that puts the message onto an Amazon EventBridge bus."]}),"\n",(0,o.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:"The goal of the webhook handler is to process the notification from Momento as quickly and securely as possible with the ultimate destination being AWS EventBridge. By getting the message onto a bus, the possibilities for how to handle that data open up tremendously. The message could be persisted into more durable storage or even propagated to other consumers for further actions."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Webhook architecture",src:n(9124).A+"",width:"1338",height:"614"})}),"\n",(0,o.jsx)(t.h2,{id:"installing-the-handler",children:"Installing the handler"}),"\n",(0,o.jsx)(t.p,{children:"Before starting the process, follow the steps below to complete the deployment."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/topics/webhooks/creating-a-webhook",children:"Create the Momento webhook"}),". ",(0,o.jsxs)(t.em,{children:["Set the Webhook Destination to a dummy value like ",(0,o.jsx)(t.a,{href:"https://none.com",children:"https://none.com"})," as it will be updated once the CloudFormation is deployed"]}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Set up an AWS account with the ability to run CloudFormation. The CloudFormation template performs the following tasks:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Deploy a Lambda function"}),"\n",(0,o.jsx)(t.li,{children:"Create the IAM Role for the function"}),"\n",(0,o.jsx)(t.li,{children:"Create a Lambda Function URL"}),"\n",(0,o.jsx)(t.li,{children:"Create an SQS queue which serves as the Dead-Letter Queue (DLQ)"}),"\n",(0,o.jsxs)(t.li,{children:["(Optional) The ",(0,o.jsx)(t.code,{children:"default"})," Event Bus will be used but if an alternate is desired, that needs to be created ahead of time."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Update the Momento webhook with the CloudFormation output containing the Lambda Function URL"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"deploying-the-lambda-function-via-one-click-cloudformation",children:"Deploying the Lambda function via one-click CloudFormation"}),"\n",(0,o.jsxs)(t.p,{children:["Momento has taken care of the heavy lifting when it comes to building a Lambda webhook handler in addition to supplying a CloudFormation stack for deploying the resources. Initiating the deployment is as simple as clicking this button. ",(0,o.jsx)("a",{href:"https://console.aws.amazon.com/cloudformation/home#/stacks/create/review?stackName=momento-webhook-handler&templateURL=https://us-west-2-momento-webhook-bucket.s3.us-west-2.amazonaws.com/template.yaml",children:(0,o.jsx)("img",{src:"/img/cloudformation-launch-stack.png",target:"_blank",alt:"CloudFormation One-Click"})})]}),"\n",(0,o.jsxs)(t.p,{children:["Deploying the stack will require signing into the ",(0,o.jsx)(t.a,{href:"https://console.aws.amazon.com/",children:"AWS Console"}),". Once that is completed, the CloudFormation Create Stack Screen should appear."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"CloudFormation Create",src:n(3598).A+"",width:"3326",height:"1588"})}),"\n",(0,o.jsx)(t.p,{children:"The stack will take care of the detailed parts of launching the infrastructure, but there are opportunities to customize it."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Stack Name"}),": Name of the stack when deployed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"EventBridgeBus"}),": If using a custom bus, enter the name here. By default, the `default`` bus is used."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"MomentoSecretString"}),": The secret string that Momento uses to sign the payload and sends as a part of the HTTP Headers in the webhook POST. This secret string is available in the Momento Webhook Console. Copy from the below screen and paste it into this parameter"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Momento Webhook Secret",src:n(6451).A+"",width:"2216",height:"1088"})}),"\n",(0,o.jsx)(t.h3,{id:"update-the-momento-webhook-url",children:"Update the Momento webhook URL"}),"\n",(0,o.jsx)(t.p,{children:"Upon completion of the deployment, take the Function URL from the CloudFormation output and update the Momento webhook URL in the Momento console like the image one section above. Below is what the CloudFormation Output will look like:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"CloudFormation Output",src:n(108).A+"",width:"2252",height:"412"})}),"\n",(0,o.jsx)(t.h2,{id:"verifying-the-payload",children:"Verifying the payload"}),"\n",(0,o.jsx)(t.p,{children:"The ultimate destination for this webhook handler is AWS EventBridge. When working with EventBridge, Rules are the configuration point that drives what is filtered and what targets are provided the message to act upon."}),"\n",(0,o.jsx)(t.p,{children:"The Momento Lambda webhook handler puts each event from the webhook on the Event Bus with the following structure."}),"\n",(0,o.jsx)(t.h3,{id:"example-event",children:"Example event"}),"\n",(0,o.jsx)(t.p,{children:"Below is a sample payload representing an EventBridge message as triggered from a Momento webhook. Note that this is a template and specific values will differ in your implementation."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n    "version": "0",\n    "id": "7c7ce805-51c3-4a66-b6e0-39e4e558e6d8",\n    "detail-type": "sample-a#sample-a",\n    "source": "Momento",\n    "account": "252703795646",\n    "time": "2024-01-13T14:56:16Z",\n    "region": "us-west-2",\n    "resources": [],\n    "detail": {\n        "cache": "sample-a",\n        "topic": "sample-a",\n        "event_timestamp": 1705157775308,\n        "publish_timestamp": 1705157775308,\n        "topic_sequence_number": 2,\n        "token_id": "",\n        "text": "{\\"someKey\\":\\"someValue\\"}"\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"event-structure",children:"Event structure"}),"\n",(0,o.jsx)(t.p,{children:"The properties of the EventBridge message are listed below along with the function they provide."}),"\n",(0,o.jsx)(t.h4,{id:"detail-type",children:"detail-type"}),"\n",(0,o.jsxs)(t.p,{children:["detail-type is used to help filter out messages based on the cache and topic source. Since the webhook handler can be used as a single gateway for multiple webhooks, filtering in EventBridge to drive certain values to certain targets is useful. This value will always be a concatenated string in the format of ",(0,o.jsx)(t.code,{children:"{cache-name}#{topic-name}"})," which is sourced from the webhook payload. Note the ",(0,o.jsx)(t.code,{children:"#"})," in the middle of the dynamic values."]}),"\n",(0,o.jsx)(t.h4,{id:"source",children:"source"}),"\n",(0,o.jsxs)(t.p,{children:["The source will always be ",(0,o.jsx)(t.code,{children:"Momento"}),". This property helps determine the origination point of the message."]}),"\n",(0,o.jsx)(t.h4,{id:"detail",children:"detail"}),"\n",(0,o.jsxs)(t.p,{children:["The message detail will contain the actual payload as supplied from the webhook. By not removing elements from the message, maximum detail is provided to all consuming applications. For reference, the Momento webhook payload fields are ",(0,o.jsx)(t.a,{href:"https://docs.momentohq.com/topics/webhooks/overview#example-event",children:"described here."})]}),"\n",(0,o.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,o.jsx)(t.p,{children:"There are two details in the implementation that need to be considered when deploying this Lambda webhook handler."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The handler is designed to reject requests whose published timestamps are ",(0,o.jsx)(t.strong,{children:"older than 60 seconds"}),". This helps protect spamming the handler with outdated messages in ",(0,o.jsx)(t.a,{href:"https://docs.momentohq.com/topics/webhooks/security#replay-attacking",children:"replay attacks"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"The Lambda function is deployed in an Amazon Managed Linux 2 environment built for ARM64 and the Graviton chipset. It is natively compiled from Rust using the AWS SDK built for Rust."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"With a webhook handler that publishes into an EventBridge bus, the extensions are practically endless. By leveraging a purely serverless implementation, resources expand as needed and costs are $0 when messages aren't consumed."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},108:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/cloudformation_output-8ea410a40eb0d3bc892a1bed8feb4f61.jpg"},3598:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/momento_stack-f88f2856c44761ac3d4f7ffce82f4960.png"},9124:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/webhook_arch-65185a7328e91d395388252799182302.jpg"},6451:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/webhook_settings-fe46f0acfa5be4f7110f2a07078d6a44.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);