"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3371],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,p=d["".concat(l,".").concat(m)]||d[m]||f[m]||o;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),s=t(6550),l=t(1980),c=t(7392),u=t(12);function f(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??f(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,c]=p({queryString:t,groupId:r}),[f,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=l??f;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=t(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:f}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==s&&(f(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function _(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(v,(0,r.Z)({},e,n)),a.createElement(_,(0,r.Z)({},e,n)))}function C(e){const n=(0,y.Z)();return a.createElement(w,(0,r.Z)({key:String(n)},e))}},2842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var r=t(7462),a=(t(7294),t(3905)),o=t(4866),i=t(5162);const s={sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples.",pagination_next:null},l="Add and retrieve a file with Momento Cache",c={unversionedId:"develop/guides/working-with-files-cache",id:"develop/guides/working-with-files-cache",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/guides/working-with-files-cache.md",sourceDirName:"develop/guides",slug:"/develop/guides/working-with-files-cache",permalink:"/ja/develop/guides/working-with-files-cache",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/guides/working-with-files-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Working with files",title:"Adding and retrieving files in a cache",description:"Learn to add and retrieve files from Momento Cache with hands on code samples.",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"AWS Lambda \u3067\u30ad\u30e3\u30c3\u30b7\u30e5",permalink:"/ja/develop/guides/caching-with-aws-lambda"}},u={},f=[],d={toc:f};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-and-retrieve-a-file-with-momento-cache"},"Add and retrieve a file with Momento Cache"),(0,a.kt)("p",null,"An item in Momento Cache is a byte array, so a cache can easily store most any file you want to create, as long as it is\nunder the ",(0,a.kt)("a",{parentName:"p",href:"/manage/limits"},"per item limit of 1MB"),"."),(0,a.kt)("p",null,"Here is an example of reading a file from the filesystem, saving the file to an item in a cache, reading it from the\ncache, and then writing it to the filesystem."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\nconst {CacheClient, CacheGet, CacheSet, Configurations, CredentialProvider} = require('@gomomento/sdk');\nconst dotenv = require('dotenv');\n\ndotenv.config();\n\nconst filePath = './myfile.json';\nconst fileName = 'myfile';\nconst CACHE_NAME = 'test-cache';\n\n// Read a file from the filesystem\nasync function readFile(filePath) {\n    try {\n        const data = fs.readFileSync(filePath);\n        return new Uint8Array(data);\n    } catch (error) {\n        console.error(`Error reading file: ${error}`);\n        return null;\n    }\n}\n\n// Creates the Momento cache client object\nasync function createCacheClient() {\n    return new CacheClient({\n        configuration: Configurations.Laptop.v1(),\n        credentialProvider: CredentialProvider.fromEnvironmentVariable({\n            environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n        }),\n        defaultTtlSeconds: 600,\n    });\n}\n\nasync function writeToCache(client, cacheName, key, data) {\n    const setResponse = await client.set(cacheName, key, data);\n    if (setResponse instanceof CacheSet.Success) {\n        console.log('Key stored successfully!');\n    } else if (setResponse instanceof CacheSet.Error) {\n        console.log(`Error setting key: ${setResponse.toString()}`);\n    } else {\n        console.log(`Some other error: ${setResponse.toString()}`);\n    }\n}\n\nasync function readFromCache(client, cacheName, key) {\n    const fileResponse = await client.get(cacheName, key);\n    if (fileResponse instanceof CacheGet.Hit) {\n        console.log(`cache hit: ${fileResponse.valueString()}`);\n        const contents = fileResponse.valueUint8Array();\n        const buffer = Buffer.from(contents);\n        fs.writeFileSync(\"./myfile2.json\", buffer);\n    } else if (fileResponse instanceof CacheGet.Miss) {\n        console.log('cache miss');\n    } else if (fileResponse instanceof CacheGet.Error) {\n        console.log(`Error: ${fileResponse.message()}`);\n    }\n}\n\nasync function run() {\n    const byteArray = await readFile(filePath);\n    if (byteArray === null) {\n        return;\n    }\n\n    const cacheClient = await createCacheClient();\n\n    await writeToCache(cacheClient, CACHE_NAME, fileName, byteArray);\n    await readFromCache(cacheClient, CACHE_NAME, fileName);\n}\n\nrun();\n")),(0,a.kt)("p",null,"Check our ",(0,a.kt)("a",{parentName:"p",href:"/ja/develop/sdks/nodejs/cheat-sheet"},"Node.js cheat sheet")," for more on using our\nNode.js SDK.")),(0,a.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom datetime import timedelta\nfrom momento import CacheClient, Configurations, CredentialProvider\nfrom momento.responses import CacheGet, CacheSet\n\nfile_path = './myfile.json'\nfile_name = 'myfile'\nCACHE_NAME = 'test-cache'\n\n# Read a file from the filesystem\ndef read_file(file_path):\n    with open(file_path, 'rb') as file:\n        byte_array = file.read()\n    return byte_array\n\n# Write a file to the filesystem\ndef write_file(file_path, data):\n    with open(file_path, \"wb\") as out_file:\n        out_file.write(data)\n\n# Get a connection to and existing cache with your auth token.\ndef client():\n    momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')\n    momento_ttl_seconds = os.getenv('MOMENTO_TTL_SECONDS')\n    ttl  = timedelta(seconds=int(momento_ttl_seconds))\n\n    config = {\n      'configuration': Configurations.Laptop.v1(),\n      'credential_provider': momento_auth_token,\n      'default_ttl':  ttl\n    }\n    # print(config)\n    return CacheClient(**config)\n\ndef run():\n    # read the file contents in. They already come in byte format, so no casting necessary\n    byte_array = read_file(file_path)\n\n    # Get the client connection object.\n    with client() as cache_client:\n        # write the file to the cache\n        set_response = cache_client.set(CACHE_NAME, file_name, byte_array)\n        if isinstance(set_response, CacheSet.Success):\n            print('Key stored successfully!')\n        elif isinstance(set_response, CacheSet.Error):\n            print(f'Error setting key: {set_response}')\n        else:\n            print(f'Some other error: {set_response}')\n\n        # read the file from the cache\n        file_response = cache_client.get(CACHE_NAME, file_name)\n        if isinstance(file_response, CacheGet.Hit):\n            print(f'Cache hit! The value is: {file_response.value_string}')\n            buffer = bytes(file_response.value_string, 'utf-8')\n            print('Writing file to filesystem.')\n            write_file(\"./myfile2.json\", buffer)\n        elif isinstance(file_response, CacheGet.Miss):\n            print('cache miss')\n        elif isinstance(file_response, CacheGet.Error):\n            print(f'Error: {file_response.message()}')\n\nif __name__ == '__main__':\n    run()\n\n")),(0,a.kt)("p",null,"Check our ",(0,a.kt)("a",{parentName:"p",href:"/ja/develop/sdks/python/cheat-sheet"},"Python cheat sheet")," for more on using our\nPython SDK."))))}m.isMDXComponent=!0}}]);