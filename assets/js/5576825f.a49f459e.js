"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6853],{5195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(4848),o=t(8453),i=t(2480);const r={sidebar_position:30,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},a="Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",c={id:"topics/patterns/token_id_webhook",title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",source:"@site/docs/topics/patterns/token_id_webhook.md",sourceDirName:"topics/patterns",slug:"/topics/patterns/token_id_webhook",permalink:"/topics/patterns/token_id_webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/patterns/token_id_webhook.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures",sidebar_label:"Identifying unique resources",description:"Learn best practices around using Momento Topics, webhooks, and tokens to process unique resources in your event-driven architectures.",keywords:["topics","webhooks","eda","momento","event-driven architecture"]},sidebar:"topicsSidebar",previous:{title:"Running background tasks",permalink:"/topics/patterns/running-background-tasks"},next:{title:"Develop",permalink:"/topics/develop/"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"See More",id:"see-more",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"leverage-momento-topics-webhooks-and-tokens-in-your-event-driven-architectures",children:"Leverage Momento Topics, webhooks, and tokens in your event-driven architectures"}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"../",children:"Momento Topics"}),", you can subscribe to messages on a topic and publish messages to a different topic. ",(0,s.jsx)(n.a,{href:"../webhooks/overview",children:"Webhooks"})," serve as HTTP callbacks triggered in response to messages published to these topics, acting as stateless consumers. ",(0,s.jsx)(n.a,{href:"../../cache/develop/authentication/tokens",children:"Tokens"})," are designed to provide short-lived session tokens for users and services interacting with a system. By embedding unique identifiers (",(0,s.jsx)(n.code,{children:"token_id"}),") in each token, they ensure secure and traceable access to resources."]}),"\n",(0,s.jsxs)(n.p,{children:["The key here is that you can use Topics to facilitate real-time communication between users by granting them short-lived tokens. These tokens can be embedded with user information (",(0,s.jsx)(n.code,{children:"token_id"}),"), which, when messages are published, can be leveraged to access shared resources like Momento caches via webhook callbacks. For instance, you can personalize user experiences by accessing their information stored in a Momento cache by identifying the user through the ",(0,s.jsx)(n.code,{children:"token_id"}),". Embedding information provides two significant advantages:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It enhances security and prevents a user from spoofing their identity."}),"\n",(0,s.jsx)(n.li,{children:"It reduces data transfer costs as the user information is embedded with the token itself."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture",src:t(4999).A+"",width:"547",height:"520"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://console.gomomento.com/caches/create",children:"Create a cache in the Momento console"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/topics/webhooks/creating-a-webhook",children:"Create a webhook"})," for the cache. Assign the webhook destination to a public facing endpoint. This endpoint must accept POST requests and be able to receive inbound calls from Momento. More detail about the structure of this event is ",(0,s.jsx)(n.a,{href:"../webhooks/overview#example-event",children:"described here"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Create your infrastructure. For example, below is sample code that creates a lambda function URL for our webhook endpoint. It also stores\nyour Momento auth token in AWS secrets manager."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"\nimport * as path from 'path';\nimport * as cdk from 'aws-cdk-lib';\nimport {Construct} from 'constructs';\nimport * as lambda from 'aws-cdk-lib/aws-lambda';\nimport * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';\nimport * as secrets from 'aws-cdk-lib/aws-secretsmanager';\nimport {CfnOutput} from \"aws-cdk-lib\";\n\nexport class MomentoWebhookStack extends cdk.Stack {\n    constructor(scope: Construct, id: string, props?: cdk.StackProps) {\n        super(scope, id, props);\n\n        const momentoApiKeyParam = new cdk.CfnParameter(this, 'MomentoApiKey', {\n            type: 'String',\n            description: 'The Momento API key that will be used to read from the cache.',\n            noEcho: true,\n        });\n\n        const momentoSecretStringParam = new cdk.CfnParameter(this, 'MomentoSecretString', {\n            type: 'String',\n            description: 'The Momento Webhook Secret String that will be used to validate the caller',\n            noEcho: true,\n        });\n\n        const apiKeySecret = new secrets.Secret(this, 'MomentoWebhookHandlerApiKey', {\n            secretName: 'MomentoWebhookHandlerApiKey',\n            secretStringValue: new cdk.SecretValue(momentoApiKeyParam.valueAsString),\n        });\n\n        const secretStringSecret = new secrets.Secret(this, 'MomentoWebhookHandlerSecretString', {\n            secretName: 'MomentoWebhookHandlerSecretString',\n            secretStringValue: new cdk.SecretValue(momentoSecretStringParam.valueAsString),\n        });\n\n        const webhookHandlerLambda = new lambdaNodejs.NodejsFunction(this, 'MomentoWebhookHandler', {\n            functionName: 'MomentoWebhookHandler',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/webhook-handler/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/webhook-handler'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/webhook-handler/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName,\n                THE_SIGNING_SECRET: secretStringSecret.secretName,\n            },\n        });\n\n        const serviceLambda = new lambdaNodejs.NodejsFunction(this, 'ServiceLambda', {\n            functionName: 'ServiceLambda',\n            runtime: lambda.Runtime.NODEJS_18_X,\n            entry: path.join(__dirname, '../../lambda/service-topics/handler.ts'),\n            projectRoot: path.join(__dirname, '../../lambda/service-topics'),\n            depsLockFilePath: path.join(__dirname, '../../lambda/service-topics/package-lock.json'),\n            handler: 'handler',\n            timeout: cdk.Duration.seconds(30),\n            memorySize: 128,\n            environment: {\n                MOMENTO_API_KEY_SECRET_NAME: apiKeySecret.secretName\n            },\n        });\n\n        // \ud83d\udc47 Setup lambda url\n        const lambdaUrl = webhookHandlerLambda.addFunctionUrl({\n            authType: lambda.FunctionUrlAuthType.NONE,\n        });\n\n        apiKeySecret.grantRead(webhookHandlerLambda);\n        apiKeySecret.grantRead(serviceLambda);\n        secretStringSecret.grantRead(webhookHandlerLambda);\n\n        new CfnOutput(this, 'FunctionUrl ', { value: lambdaUrl.url });\n    }\n}\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Add code to the webhook to process incoming messages. Below is sample code for the webhook lambda handler that extracts a user's ",(0,s.jsx)(n.code,{children:"token_id"})," from the webhook payload, and access resources stored in Momento cache. It also verifies that the webhook caller is indeed Momento through the signing secret."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"\nimport {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {CacheClient, CacheGet, CacheListPushFront, Configurations, CredentialProvider, WebhookUtils} from '@gomomento/sdk';\nimport * as crypto from \"crypto\";\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _cacheClient: CacheClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const secretStringSecretName = process.env.THE_SIGNING_SECRET;\n\n    if (secretStringSecretName === undefined) {\n      throw new Error(\"Missing required env var 'THE_SIGNING_SECRET\");\n    }\n\n    const secretString = await getSecret(secretStringSecretName);\n    const authorized = WebhookUtils.validateWebhookRequest(\n        {\n            signature: event.headers['momento-signature'],\n            signingSecret: secretString,\n            body: event.body\n        }\n    );\n\n    if (authorized !== WebhookUtils.RequestValidation.VALID ) {\n      return {\n        statusCode: 403,\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: '{\"message\": \"Access Denied!\"}',\n      };\n    }\n\n    const payload = JSON.parse(event.body)\n    const userID = payload.token_id\n    const message = JSON.parse(payload.text)\n\n    console.log('Storing user comment for userID ' + userID + ' and courseId ' + message.courseId);\n    console.log('Comment: ' + message.comment);\n\n    const cacheClient = await getCacheClient();\n    if (_cacheClient === undefined) {\n      throw new Error('Cache client is undefined');\n    }\n\n    const listResp = await cacheClient.listPushFront(cacheName, String(message.courseId),\n      JSON.stringify({userID: userID, comment: message.comment}));\n    if (listResp instanceof CacheListPushFront.Success) {\n      console.log('Successfully persisted comment for course');\n    } else if (listResp instanceof CacheListPushFront.Error) {\n      console.log('Error while publishing comment for course ' + listResp.message());\n    }\n\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!' + err\n      }),\n    };\n  }\n};\n\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\nasync function getCacheClient(): Promise<CacheClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_cacheClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _cacheClient = await CacheClient.create({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n      defaultTtlSeconds: 60,\n    });\n  }\n  return _cacheClient;\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Finally, below has sample code for generating the token and publishing user messages on a topic. In a real-world,\nthese would ideally live in separate micro-services."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';\nimport {\n  AuthClient, Configurations, CredentialProvider, DisposableTokenScopes,\n  ExpiresIn, GenerateDisposableToken, TopicClient, TopicPublish\n} from '@gomomento/sdk';\n\nconst _secretsClient = new SecretsManagerClient({});\nconst _cachedSecrets = new Map<string, string>();\nlet _authClient: AuthClient | undefined = undefined;\nlet _topicClient: TopicClient | undefined = undefined;\n\nconst cacheName = 'course-comments';\nconst topicName = 'comment';\n\nexport const handler = async (event: any) => {\n  try {\n\n    const authClient = await getAuthClient();\n\n    const eventsPublishToken = await authClient.generateDisposableToken(\n      DisposableTokenScopes.topicPublishOnly(cacheName, topicName),\n      ExpiresIn.minutes(30),\n      {tokenId: 'taylor'},\n    )\n\n    if (eventsPublishToken instanceof GenerateDisposableToken.Success) {\n      console.log('Generated a disposable API key with access to the \"events\" topic in the \"cache\" cache!');\n      // logging only a substring of the tokens, because logging security credentials is not advisable :)\n      //console.log(`API key starts with: ${eventsPublishToken.authToken.substring(0, 10)}`);\n      //console.log(`Expires At: ${eventsPublishToken.expiresAt.epoch()}`);\n      console.log('Publishing to the \"events\" topic in the \"cache\" cache! using the generated disposable token');\n      const topicClient = await getTopicClient(eventsPublishToken.authToken);\n      const message = JSON.stringify({\n        comment: 'This course and video is awesome!',\n        courseId: 123,\n      });\n      console.log(\"Message: \"  + message);\n      const publishResponse = await topicClient.publish(cacheName, topicName, message);\n      if (publishResponse instanceof TopicPublish.Success) {\n        console.log('Published to the \"events\" topic in the \"cache\" cache!');\n      } else if (publishResponse instanceof TopicPublish.Error) {\n        throw new Error(\n          `An error occurred while attempting to publish to the \"events\" topic in the \"cache\" cache: ${publishResponse.errorCode()}: ${publishResponse.toString()}`\n        );\n      }\n    } else if (eventsPublishToken instanceof GenerateDisposableToken.Error) {\n      throw new Error(\n        `An error occurred while attempting to call generateApiKey with disposable token scope: ${eventsPublishToken.errorCode()}: ${eventsPublishToken.toString()}`\n      );\n    }\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n      },\n      body: '{}',\n    };\n  } catch (err) {\n    console.log(err);\n    return {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: 'An error occurred!',\n      }),\n    };\n  }\n}\n\nasync function getAuthClient(): Promise<AuthClient> {\n  const apiKeySecretName = process.env.MOMENTO_API_KEY_SECRET_NAME;\n  if (apiKeySecretName === undefined) {\n    throw new Error(\"Missing required env var 'MOMENTO_API_KEY_SECRET_NAME\");\n  }\n  if (_authClient === undefined) {\n    const momentoApiKey = await getSecret(apiKeySecretName);\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _authClient = new AuthClient({\n      credentialProvider: CredentialProvider.fromString({apiKey: momentoApiKey}),\n    });\n  }\n  return _authClient;\n}\n\nasync function getTopicClient(disposableTokenKey: string): Promise<TopicClient> {\n  if (_topicClient === undefined) {\n    console.log('Retrieved secret!');\n    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment\n    _topicClient = new TopicClient({\n      configuration: Configurations.Lambda.latest(),\n      credentialProvider: CredentialProvider.fromString({apiKey: disposableTokenKey}),\n    });\n  }\n\n  return _topicClient;\n}\n\nasync function getSecret(secretName: string): Promise<string> {\n  if (!_cachedSecrets.has(secretName)) {\n    const secretResponse = await _secretsClient.send(new GetSecretValueCommand({SecretId: secretName}));\n    if (secretResponse) {\n      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n      _cachedSecrets.set(secretName, secretResponse.SecretString!);\n    } else {\n      throw new Error(`Unable to retrieve secret: ${secretName}`);\n    }\n  }\n  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n  return _cachedSecrets.get(secretName)!;\n}\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-more",children:"See More"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"By integrating Momento topics, webhooks, and tokens, you can create secure and stateless asynchronous systems. This convention can be applied to a variety of use-cases such as multi-language chat app, online polling, and event-driven systems."}),"\n"]}),"\n","\n",(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginBottom:"20px"},children:[(0,s.jsx)(i.A,{title:"Multi-language chat app",link:"https://github.com/momentohq/moderated-chat/",description:"Explore the source code of our live-translation chat app using webhooks."}),(0,s.jsx)(i.A,{title:"Use webhooks with API Gateway + Lambda",link:"https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app",description:"Learn how to integrate Momento webhooks with Amazon API Gateway and Lambda functions"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2480:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);const s="card_Yy4i",o="cardLink_tPnZ",i="cardContent_l93Q",r="cardTitle_gz5m",a="cardDescription_RQFX",c="cardBody_MLn8";var l=t(4848);const d=e=>{let{title:n,description:t,link:d,icon:h,variation:m="normal"}=e,u="",p="";if("dense"===m.toLowerCase())u="0",p="15em";return(0,l.jsx)("div",{className:s,style:{width:p},children:(0,l.jsx)("a",{href:d,target:"_blank",className:o,children:(0,l.jsxs)("div",{className:c,children:[h&&(0,l.jsx)("img",{src:h,height:"32px",width:"32px"}),(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("h3",{className:r,children:n}),(0,l.jsx)("p",{className:a,style:{marginBottom:u},children:t})]})]})})})}},4999:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/token-id-webhook-06b7252991e86f2953c2aba0f917efbf.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);