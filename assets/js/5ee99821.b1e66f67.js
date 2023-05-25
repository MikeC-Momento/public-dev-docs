"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3468],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,s=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",slug:"/develop/api-reference/collections/dictionary"},i="Dictionary API reference for Momento Cache",o={unversionedId:"develop/api-reference/dictionary-collections",id:"develop/api-reference/dictionary-collections",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",source:"@site/docs/develop/api-reference/dictionary-collections.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/collections/dictionary",permalink:"/develop/api-reference/collections/dictionary",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/dictionary-collections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Dictionary",title:"Dictionary API reference",description:"Learn how to interact with the API for dictionary collection data types in Momento Cache.",slug:"/develop/api-reference/collections/dictionary"},sidebar:"tutorialSidebar",previous:{title:"API reference",permalink:"/develop/api-reference/"},next:{title:"Lists",permalink:"/develop/api-reference/collections/list"}},p={},d=[{value:"Dictionary methods",id:"dictionary-methods",level:2},{value:"DictionaryFetch",id:"dictionaryfetch",level:3},{value:"DictionaryGetField",id:"dictionarygetfield",level:3},{value:"DictionaryGetFields",id:"dictionarygetfields",level:3},{value:"DictionaryIncrement",id:"dictionaryincrement",level:3},{value:"DictionaryRemoveField",id:"dictionaryremovefield",level:3},{value:"DictionaryRemoveFields",id:"dictionaryremovefields",level:3},{value:"DictionarySetField",id:"dictionarysetfield",level:3},{value:"DictionarySetFields",id:"dictionarysetfields",level:3},{value:"DictionaryLength",id:"dictionarylength",level:3}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dictionary-api-reference-for-momento-cache"},"Dictionary API reference for Momento Cache"),(0,r.kt)("p",null,"This page details the Momento API methods for the ",(0,r.kt)("a",{parentName:"p",href:"/develop/datatypes#dictionary-collections"},"dictionary collection data type"),"."),(0,r.kt)("h2",{id:"dictionary-methods"},"Dictionary methods"),(0,r.kt)("h3",{id:"dictionaryfetch"},"DictionaryFetch"),(0,r.kt)("p",null,"Gets a dictionary item from a cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("p",null,"The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesBytes()"),": Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringString()"),": Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryStringBytes()"),": Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueDictionaryBytesString()"),": Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the field/value pairs, truncated."))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Cache error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionarygetfield"},"DictionaryGetField"),(0,r.kt)("p",null,"Get one field from a dictionary item in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache hit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fieldBytes()"),": Bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueString()"),": String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"valueBytes()"),": Bytes"),(0,r.kt)("p",{parentName:"li"},"  These return the field and its value from the dictionary.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache miss"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cache error"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldString()"),": String"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fieldBytes()"),": Bytes")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionarygetfields"},"DictionaryGetFields"),(0,r.kt)("p",null,"Get one or more fields from a dictionary in the cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesBytes(): Map<Bytes, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringString(): Map<String, String>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryStringBytes(): Map<String, Bytes>"),(0,r.kt)("li",{parentName:"ul"},"valueDictionaryBytesString(): Map<Bytes, String>"),(0,r.kt)("li",{parentName:"ul"},"toString(): String - displays truncated valueDictionaryStringString()"))),(0,r.kt)("li",{parentName:"ul"},"Cache miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionaryincrement"},"DictionaryIncrement"),(0,r.kt)("p",null,"Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field is missing from the dictionary, this method sets the field's value to the amount to increment by."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The resulting incremented value must be between -9223372036854775808 and 9223372036854775807, ie. a signed 64-bit integer. If not, there will be an error response.")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the field does not exist, ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," will set the field's value to 10."),(0,r.kt)("li",{parentName:"ul"},"When the field = 5, ",(0,r.kt)("inlineCode",{parentName:"li"},"dictionaryIncrement(cache, dict, field, 10)")," will set the field's value to 15."),(0,r.kt)("li",{parentName:"ul"},"When the field = \u2018five\u2019, it will respond with a FailedPreconditionException error.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The quantity to add to the value. May be positive, negative, or zero. Defaults to 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"This will come back as a TTL construct.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value()"),": integer - the new value after incrementing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()"),": String - displays the value()"))),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionaryremovefield"},"DictionaryRemoveField"),(0,r.kt)("p",null,"Removes a field from a dictionary item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionaryremovefields"},"DictionaryRemoveFields"),(0,r.kt)("p",null,"Removes multiple fields from a dictionary item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be retrieved.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionarysetfield"},"DictionarySetField"),(0,r.kt)("p",null,"Sets a field:value pair in an existing dictionary item. If the dictionary item does not exist, it is created with the new field:value pair."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the field in the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String/Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the field to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionarysetfields"},"DictionarySetFields"),(0,r.kt)("p",null,"Sets several field:value pairs in a dictionary item. If the dictionary item does not exist, it is created with the new fields."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]/Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Field:value pair to be added to the dictionary item by the set operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h3",{id:"dictionarylength"},"DictionaryLength"),(0,r.kt)("p",null,"Get the length of an existing dictionary item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dictionaryName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dictionary item to be checked.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")))}c.isMDXComponent=!0}}]);