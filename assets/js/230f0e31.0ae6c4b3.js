"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5325],{6751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),s=r(8453),o=(r(2821),r(503));const i={sidebar_position:2,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Storage in PHP",description:"Learn the basic building blocks for writing PHP code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","duarble","sdk","sdks","api","examples","resources","getting started","quick start","server-side","php","laravel","drupal"]},a="Getting Started with Momento Storage in PHP",l={id:"platform/sdks/php/storage",title:"Getting started with Momento Storage in PHP",description:"Learn the basic building blocks for writing PHP code to interact with Momento Storage.",source:"@site/docs/platform/sdks/php/storage.mdx",sourceDirName:"platform/sdks/php",slug:"/platform/sdks/php/storage",permalink:"/platform/sdks/php/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/platform/sdks/php/storage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Storage",displayed_sidebar:"platformSidebar",title:"Getting started with Momento Storage in PHP",description:"Learn the basic building blocks for writing PHP code to interact with Momento Storage.",keywords:["momento","cache","caching","topics","pubsub","pub/sub","eda","event-driven architecture","redis","serverless","storage","persistence","datastore","database","duarble","sdk","sdks","api","examples","resources","getting started","quick start","server-side","php","laravel","drupal"]},sidebar:"platformSidebar",previous:{title:"Cache",permalink:"/platform/sdks/php/cache"},next:{title:"Swift",permalink:"/platform/sdks/swift/"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure composer to get the PHP SDK",id:"configure-composer-to-get-the-php-sdk",level:3},{value:"Import libraries and connect to return a StorageClient object",id:"import-libraries-and-connect-to-return-a-storageclient-object",level:2},{value:"Create a new store in Momento Storage",id:"create-a-new-store-in-momento-storage",level:2},{value:"List the names of existing stores in your account",id:"list-the-names-of-existing-stores-in-your-account",level:2},{value:"Write an item to a store",id:"write-an-item-to-a-store",level:2},{value:"Read an item from a store",id:"read-an-item-from-a-store",level:2},{value:"Delete an item from a store",id:"delete-an-item-from-a-store",level:2},{value:"Running the code",id:"running-the-code",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-momento-storage-in-php",children:"Getting Started with Momento Storage in PHP"}),"\n",(0,n.jsx)(t.p,{children:"If you need to get going quickly with PHP and Momento Storage, this page contains the basic API calls you'll need."}),"\n",(0,n.jsxs)(t.p,{children:["For more info, you can also see ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-php",children:"the PHP SDK on GitHub"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Momento API Key is required. You can generate one using ",(0,n.jsx)(t.a,{href:"https://console.gomomento.com/",children:"the Momento console"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Installation of PHP 8.0 or higher"}),"\n",(0,n.jsxs)(t.li,{children:["Installation of the ",(0,n.jsx)(t.a,{href:"https://github.com/grpc/grpc/blob/master/src/php/README.md",children:"gRPC PHP extension"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Installation of the ",(0,n.jsx)(t.a,{href:"https://developers.google.com/google-ads/api/docs/client-libs/php/protobuf#c_implementation",children:"protobuf C extension"})]}),"\n",(0,n.jsxs)(t.li,{children:["Installation of ",(0,n.jsx)(t.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"Composer"}),"  - A common library and dependency manager for PHP."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"configure-composer-to-get-the-php-sdk",children:"Configure composer to get the PHP SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Add our repository to your ",(0,n.jsx)(t.code,{children:"composer.json"})," file and our SDK as a dependency:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "require": {\n    "momentohq/client-sdk-php": "1.11.1"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"composer update"})," to install the necessary prerequisites."]}),"\n",(0,n.jsx)(t.h2,{id:"import-libraries-and-connect-to-return-a-storageclient-object",children:"Import libraries and connect to return a StorageClient object"}),"\n",(0,n.jsx)(t.p,{children:"This code pulls in the necessary imports and instantiates the StorageClient that will be used to interact with your store."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'<?php\nrequire "vendor/autoload.php";\nuse Momento\\Auth\\CredentialProvider;\nuse Momento\\Config\\Configurations\\Storage\\Laptop;\nuse Momento\\Storage\\PreviewStorageClient;\n\n$storageClient = new PreviewStorageClient(\n    Laptop::latest(),\n    CredentialProvider::fromEnvironmentVariable("MOMENTO_API_KEY")\n);\n'}),"\n",(0,n.jsx)(t.h2,{id:"create-a-new-store-in-momento-storage",children:"Create a new store in Momento Storage"}),"\n",(0,n.jsx)(t.p,{children:"Use this function to create a new store in your account."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'\n$create_store_response = $storage_client->createStore($store_name);\nif ($create_store_response->asSuccess()) {\n    print("Store $store_name created\\n");\n} elseif ($create_store_response->asAlreadyExists()) {\n    print("Store $store_name already exists\\n");\n} elseif ($err = $create_store_response->asError()) {\n    print("An error occurred while attempting to create $store_name: {$err->errorCode()} - {$err->message()}\\n");\n}'}),"\n",(0,n.jsx)(t.h2,{id:"list-the-names-of-existing-stores-in-your-account",children:"List the names of existing stores in your account"}),"\n",(0,n.jsx)(t.p,{children:"A simple list of the names of stores for the account."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'\n$list_stores_response = $storage_client->listStores();\nif ($listSuccess = $list_stores_response->asSuccess()) {\n    print("Found stores:\\n");\n    foreach ($listSuccess->stores() as $store) {\n        $store_name = $store->name();\n        print("- $store_name\\n");\n    }\n} elseif ($err = $list_stores_response->asError()) {\n    print("An error occurred while attempting to list stores: {$err->errorCode()} - {$err->message()}\\n");\n}'}),"\n",(0,n.jsx)(t.h2,{id:"write-an-item-to-a-store",children:"Write an item to a store"}),"\n",(0,n.jsx)(t.p,{children:"A simple example of doing a put operation."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'\n$put_response = $storage_client->putString($store_name, "test-key", "test-value");\nif ($put_response->asSuccess()) {\n    print("Key \'test-key\' stored successfully\\n");\n} elseif ($err = $put_response->asError()) {\n    print("An error occurred while attempting to store \'test-key\': {$err->errorCode()} - {$err->message()}\\n");\n}\n\n// Momento storage also supports int, float, and bytes types.\n// Because strings in PHP are a series of bytes, the putBytes method accepts a string as the value.\n$put_response = $storage_client->putBytes($store_name, "test-key", "test-value");\n$put_response = $storage_client->putInt($store_name, "test-key", 42);\n$put_response = $storage_client->putFloat($store_name, "test-key", 3.14);'}),"\n",(0,n.jsx)(t.h2,{id:"read-an-item-from-a-store",children:"Read an item from a store"}),"\n",(0,n.jsx)(t.p,{children:"This is an example of a simple read operation to get an item from a store."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'\n$get_response = $storage_client->get($store_name, "test-key");\nif ($found = $get_response->asFound()) {\n    $value_type = $found->type();\n    if ($value_type == StorageValueType::STRING) {\n        print("Got string value: " . $found->valueString() . "\\n");\n    } elseif ($value_type == StorageValueType::INT) {\n        print("Got integer value: " . $found->valueInt() . "\\n");\n    } elseif ($value_type == StorageValueType::FLOAT) {\n        print("Got float value: " . $found->valueFloat() . "\\n");\n    } elseif ($value_type == StorageValueType::BYTES) {\n        // This case is not expected in this example as PHP doesn\'t have a native byte type\n        print("Got bytes value: " . $found->valueBytes() . "\\n");\n    }\n    // You may also pull the value directly from the response without type checking\n    print("Retrieved value for key \'test-key\': {$get_response->value()}\\n");\n} elseif ($get_response->asNotFound()) {\n    print("Key \'test-key\' was not found in store $store_name\\n");\n} elseif ($err = $get_response->asError()) {\n    print("An error occurred while attempting to get key \'test-key\' from store $store_name: {$err->errorCode()} - {$err->message()}\\n");\n}'}),"\n",(0,n.jsx)(t.h2,{id:"delete-an-item-from-a-store",children:"Delete an item from a store"}),"\n",(0,n.jsx)(t.p,{children:"This is an example of a simple delete operation to remove an item from a store."}),"\n",(0,n.jsx)(o.F,{language:"php",code:'\n$delete_response = $storage_client->delete($store_name, "test-key");\nif ($delete_response->asSuccess()) {\n    print("Key \'test-key\' deleted successfully\\n");\n} elseif ($err = $delete_response->asError()) {\n    print("An error occurred while attempting to delete key \'test-key\' from store $store_name: {$err->errorCode()} - {$err->message()}\\n");\n}'}),"\n",(0,n.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find complete, working examples in the ",(0,n.jsx)(t.a,{href:"https://github.com/momentohq/client-sdk-php/blob/main/examples",children:"PHP SDK GitHub repo examples directory"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Beyond these basic API calls check out the ",(0,n.jsx)(t.a,{href:"/storage/develop/api-reference/",children:"API reference page"})," for more information on the full assortment of Momento API calls."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2821:(e,t,r)=>{r(6540)},503:(e,t,r)=>{r.d(t,{F:()=>o});var n=r(1432),s=(r(6540),r(4848));const o=e=>{let{language:t,code:r}=e;return(0,s.jsx)(n.A,{language:t,children:r})}}}]);