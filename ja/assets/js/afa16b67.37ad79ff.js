"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||h[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-php-cheat-sheet",title:"Cheat Sheet for PHP + Momento Cache",description:"Everything to get you going with coding using PHP and Momento Cache"},i="Cheat Sheet for PHP with Momento Cache",s={unversionedId:"develop/sdks/php/cheat-sheet",id:"develop/sdks/php/cheat-sheet",title:"Cheat Sheet for PHP + Momento Cache",description:"Everything to get you going with coding using PHP and Momento Cache",source:"@site/docs/develop/sdks/php/cheat-sheet.md",sourceDirName:"develop/sdks/php",slug:"/develop/sdks/php/cheat-sheet",permalink:"/ja/develop/sdks/php/cheat-sheet",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/php/cheat-sheet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cheat Sheet",sidebar_class_name:"sidebar-item-php-cheat-sheet",title:"Cheat Sheet for PHP + Momento Cache",description:"Everything to get you going with coding using PHP and Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/ja/develop/sdks/php/"},next:{title:"Ruby",permalink:"/ja/develop/sdks/ruby/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure composer to get the PHP SDK",id:"configure-composer-to-get-the-php-sdk",level:3},{value:"Import libraries and connect to return a CacheClient object",id:"import-libraries-and-connect-to-return-a-cacheclient-object",level:2},{value:"Create a new cache in Momento Cache",id:"create-a-new-cache-in-momento-cache",level:2},{value:"Get list of existing caches in your account",id:"get-list-of-existing-caches-in-your-account",level:2},{value:"Write an item to a cache",id:"write-an-item-to-a-cache",level:2},{value:"Read an item from a cache",id:"read-an-item-from-a-cache",level:2},{value:"Delete the test cache",id:"delete-the-test-cache",level:2}],p={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cheat-sheet-for-php-with-momento-cache"},"Cheat Sheet for PHP with Momento Cache"),(0,r.kt)("p",null,"If you need to get going quickly with PHP and Momento Cache, this page contains the basic API calls you'll need."),(0,r.kt)("p",null,"For more info, you can also see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php"},"the PHP SDK on github"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Momento auth token is required. You can generate one using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/momento-cli"},"the Momento CLI"),"."),(0,r.kt)("li",{parentName:"ul"},"Installation of PHP 8.0 or higher"),(0,r.kt)("li",{parentName:"ul"},"Installation of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/v1.46.3/src/php/README.md"},"gRPC PHP extension"),"."),(0,r.kt)("li",{parentName:"ul"},"Installation of ",(0,r.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"Composer"),"  - A common library and dependency manager for PHP.")),(0,r.kt)("h3",{id:"configure-composer-to-get-the-php-sdk"},"Configure composer to get the PHP SDK"),(0,r.kt)("p",null,"Add our repository to your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," file and our SDK as a dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "momentohq/client-sdk-php": "1.0.0"\n  }\n}\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer update")," to install the necessary prerequisites."),(0,r.kt)("h2",{id:"import-libraries-and-connect-to-return-a-cacheclient-object"},"Import libraries and connect to return a CacheClient object"),(0,r.kt)("p",null,"This code sets up the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php/blob/main/examples/example.php"},"example file"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'<?php\ndeclare(strict_types=1);\n\nrequire "vendor/autoload.php";\n\nuse Momento\\Auth\\CredentialProvider;\nuse Momento\\Cache\\CacheClient;\nuse Momento\\Config\\Configurations\\Laptop;\nuse Momento\\Logging\\StderrLoggerFactory;\nuse Psr\\Log\\LoggerInterface;\n\n$CACHE_NAME = uniqid("php-example-");\n$ITEM_DEFAULT_TTL_SECONDS = 60;\n$KEY = "MyKey";\n$VALUE = "MyValue";\n\n// Setup\n$authProvider = CredentialProvider::fromEnvironmentVariable("MOMENTO_AUTH_TOKEN");\n$configuration = Laptop::latest(new StderrLoggerFactory());\n$client = new CacheClient($configuration, $authProvider, $ITEM_DEFAULT_TTL_SECONDS);\n$logger = $configuration->getLoggerFactory()->getLogger("ex:");\n\nfunction printBanner(string $message, LoggerInterface $logger): void\n{\n    $line = "******************************************************************";\n    $logger->info($line);\n    $logger->info($message);\n    $logger->info($line);\n}\n\nprintBanner("*                      Momento Example Start                     *", $logger);\n')),(0,r.kt)("h2",{id:"create-a-new-cache-in-momento-cache"},"Create a new cache in Momento Cache"),(0,r.kt)("p",null,"This function creates a new cache in your Momento account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$response = $client->createCache($CACHE_NAME);\nif ($response->asSuccess()) {\n    $logger->info("Created cache " . $CACHE_NAME . "\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error creating cache: " . $response->asError()->message() . "\\n");\n    exit;\n} elseif ($response->asAlreadyExists()) {\n    $logger->info("Cache " . $CACHE_NAME . " already exists.\\n");\n}\n')),(0,r.kt)("h2",{id:"get-list-of-existing-caches-in-your-account"},"Get list of existing caches in your account"),(0,r.kt)("p",null,"In this example, we use the CacheClient function above to list all of the caches for the Momento account and trap any errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// List cache\n$response = $client->listCaches();\nif ($response->asSuccess()) {\n    $logger->info("SUCCESS: List caches: \\n");\n    foreach ($response->asSuccess()->caches() as $cache) {\n        $cacheName = $cache->name();\n        $logger->info("$cacheName\\n");\n    }\n    $logger->info("\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error listing cache: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,r.kt)("h2",{id:"write-an-item-to-a-cache"},"Write an item to a cache"),(0,r.kt)("p",null,"A simple example of doing a set operation. In the client.set call, the TTL it optional. If you did pass it in, this would override the default TTL value set with the client connection object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// Set\n$logger->info("Setting key: $KEY to value: $VALUE\\n");\n$response = $client->set($CACHE_NAME, $KEY, $VALUE);\nif ($response->asSuccess()) {\n    $logger->info("SUCCESS: - Set key: " . $KEY . " value: " . $VALUE . " cache: " . $CACHE_NAME . "\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error setting key: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,r.kt)("h2",{id:"read-an-item-from-a-cache"},"Read an item from a cache"),(0,r.kt)("p",null,"This is an example of a simple read operation to get an item from a cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// Get\n$logger->info("Getting value for key: $KEY\\n");\n$response = $client->get($CACHE_NAME, $KEY);\nif ($response->asHit()) {\n    $logger->info("SUCCESS: - Get key: " . $KEY . " value: " . $response->asHit()->valueString() . " cache: " . $CACHE_NAME . "\\n");\n} elseif ($response->asMiss()) {\n    $logger->info("Get operation was a MISS\\n");\n} elseif ($response->asError()) {\n    $logger->info("Error getting cache: " . $response->asError()->message() . "\\n");\n    exit;\n}\n')),(0,r.kt)("h2",{id:"delete-the-test-cache"},"Delete the test cache"),(0,r.kt)("p",null,"An example of deleting the test cache we created earlier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// Delete test cache\n$logger->info("Deleting cache $CACHE_NAME\\n");\n$response = $client->deleteCache($CACHE_NAME);\nif ($response->asError()) {\n    $logger->info("Error deleting cache: " . $response->asError()->message() . "\\n");\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Beyond these basic API calls check out the ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/"},"API reference page")," for more information on the full assortment of Momento API calls.")))}h.isMDXComponent=!0}}]);