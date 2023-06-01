"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[2606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4,sidebar_label:"Sorted sets",title:"Sorted set collections API reference",description:"Learn how to interact with the API for sorted set collection data types in Momento Cache.",slug:"/develop/api-reference/collections/sortedsets"},o="Sorted set collections",i={unversionedId:"develop/api-reference/sorted-set-collections",id:"develop/api-reference/sorted-set-collections",title:"Sorted set collections API reference",description:"Learn how to interact with the API for sorted set collection data types in Momento Cache.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/api-reference/sorted-set-collections.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/collections/sortedsets",permalink:"/ja/develop/api-reference/collections/sortedsets",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/sorted-set-collections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Sorted sets",title:"Sorted set collections API reference",description:"Learn how to interact with the API for sorted set collection data types in Momento Cache.",slug:"/develop/api-reference/collections/sortedsets"},sidebar:"tutorialSidebar",previous:{title:"Sets",permalink:"/ja/develop/api-reference/collections/sets"},next:{title:"Topics (Pub/Sub)",permalink:"/ja/develop/api-reference/topics"}},s={},p=[{value:"Sorted set methods",id:"sorted-set-methods",level:2},{value:"SortedSetPutElement",id:"sortedsetputelement",level:3},{value:"SortedSetPutElements",id:"sortedsetputelements",level:3},{value:"SortedSetFetchByRank",id:"sortedsetfetchbyrank",level:3},{value:"SortedSetFetchByScore",id:"sortedsetfetchbyscore",level:3},{value:"SortedSetGetScore",id:"sortedsetgetscore",level:3},{value:"SortedSetGetScores",id:"sortedsetgetscores",level:3},{value:"SortedSetRemoveElement",id:"sortedsetremoveelement",level:3},{value:"SortedSetRemoveElements",id:"sortedsetremoveelements",level:3},{value:"SortedSetGetRank",id:"sortedsetgetrank",level:3},{value:"SortedSetIncrementScore",id:"sortedsetincrementscore",level:3},{value:"SortedSetElement",id:"sortedsetelement",level:2},{value:"SortedSetLength",id:"sortedsetlength",level:3},{value:"SortedSetLengthByScore",id:"sortedsetlengthbyscore",level:3}],m=(d="SdkExampleTabsImpl",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sorted-set-collections"},"Sorted set collections"),(0,r.kt)("p",null,"A sorted set in Momento Cache is a collection of unique elements with a value (String, Byte[], etc.) and score (signed double 64-bit float) pair. The elements in the item are ordered by the score."),(0,r.kt)("h2",{id:"sorted-set-methods"},"Sorted set methods"),(0,r.kt)("h3",{id:"sortedsetputelement"},"SortedSetPutElement"),(0,r.kt)("p",null,"Adds a new or updates an existing ",(0,r.kt)("a",{parentName:"p",href:"#sortedsetelement"},"sorted set element")," in a sorted set item."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the set does not exist, this method creates a new sorted set item with the element passed in.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the set exists, the element is added to the sorted set if that ",(0,r.kt)("strong",{parentName:"p"},"value")," doesn't exist. If the value of that element does exist, that element is overwritten."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the element to be added to the sorted set by this operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"score"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The score of the element to be added to the sorted set by this operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetputelements"},"SortedSetPutElements"),(0,r.kt)("p",null,"Adds new or updates existing ",(0,r.kt)("a",{parentName:"p",href:"#sortedsetelement"},"sorted set elements")," in a sorted set item."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the set does not exist, this method creates a new sorted set item with the element(s) passed in.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the set exists, for each ",(0,r.kt)("a",{parentName:"p",href:"#sortedsetelement"},"SortedSetElement")," in the array, each element is added to the sorted set if that ",(0,r.kt)("strong",{parentName:"p"},"value")," doesn't exist. If the value of that element does exist, that element is overwritten."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sortedsetelement"},"SortedSetElement"),"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Elements to be added to the sorted set by this operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetfetchbyrank"},"SortedSetFetchByRank"),(0,r.kt)("p",null,"Fetch elements of sorted set, optionally filtered by rank, and return them in ascending or descending order."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startRank"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"The inclusive start rank of the results. Default is zero.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endRank"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"The exclusive end rank of the results. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ie up to and including the element ranked last.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Ascending ","|"," Descending"),(0,r.kt)("td",{parentName:"tr",align:null},"The order you want the sorted set returned.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"elements(): SortedSetElement[]"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetfetchbyscore"},"SortedSetFetchByScore"),(0,r.kt)("p",null,"Fetch elements of sorted set, optionally filtered by score, and return them in ascending or descending order."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[double]"),(0,r.kt)("td",{parentName:"tr",align:null},"The inclusive low score of the results. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"-inf"),", ie include through the lowest score.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[double]"),(0,r.kt)("td",{parentName:"tr",align:null},"The inclusive high score of the results. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"+inf"),", ie include through the highest score.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Ascending ","|"," Descending"),(0,r.kt)("td",{parentName:"tr",align:null},"The order you want the sorted set returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[int]"),(0,r.kt)("td",{parentName:"tr",align:null},"The offset, inclusive, into the filtered list from which to start returning results. Default is 0, ie do not filter. If specified, must be non-negative.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[int]"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of results from the filtered list to return. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ie no limit. If specified, must be strictly positive.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"elements(): SortedSetElement[]"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetgetscore"},"SortedSetGetScore"),(0,r.kt)("p",null,"Gets an element's score from the sorted set, indexed by value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The value to get the score of.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Score: number"))),(0,r.kt)("li",{parentName:"ul"},"Cache miss (if the sorted set does not exist)"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetgetscores"},"SortedSetGetScores"),(0,r.kt)("p",null,"Gets the scores associated with a list of elements from the sorted set, indexed by value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"values"),(0,r.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of values to get the score of.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cache hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Elements() (returns hit/miss per element)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hit:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Score: number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"))))),(0,r.kt)("li",{parentName:"ul"},"Cache miss (if the sorted set does not exist)"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetremoveelement"},"SortedSetRemoveElement"),(0,r.kt)("p",null,"Removes an element from a sorted set, indexed by value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the element to be removed by this operation.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetremoveelements"},"SortedSetRemoveElements"),(0,r.kt)("p",null,"Removes elements from a sorted set, indexed by values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"values"),(0,r.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Values of the elements to be removed by this operation.")))),(0,r.kt)("p",null,"You can remove either one or a specific group of elements."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetgetrank"},"SortedSetGetRank"),(0,r.kt)("p",null,"What position is the element, in the specified sorted set?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the element to retrieve the score of.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rank: integer"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetincrementscore"},"SortedSetIncrementScore"),(0,r.kt)("p",null,"Adds to the score of an element. If the value is ",(0,r.kt)("em",{parentName:"p"},"missing")," from the sorted set, this method sets the value to the amount to increment by."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The resulting incremented score must be between -9223372036854775808 and 9223372036854775807, ie. a signed double 64-bit float. If not, there will be an error response.")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the element does not exist in the sorted set, ",(0,r.kt)("inlineCode",{parentName:"li"},"SortedSetIncrementScore(cacheName, setName, value, 10)")," will set the element's score to 10."),(0,r.kt)("li",{parentName:"ul"},"When the existing element is a value:score of \"{ 'KesselRun' : 12 }\" , ",(0,r.kt)("inlineCode",{parentName:"li"},"SortedSetIncrementScore(cacheName, setName, value, 10)")," will set the element's score to 22.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be altered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the element to be incremented by this operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The quantity to add to the score. May be positive, negative, or zero. Defaults to 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ttl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/ja/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,r.kt)("td",{parentName:"tr",align:null},"TTL for the sorted set item. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Value: number - the new value after incrementing"))),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h2",{id:"sortedsetelement"},"SortedSetElement"),(0,r.kt)("p",null,"A value and score makes up each element in a sorted set."),(0,r.kt)("p",null,"Example:\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "TomHocusXaster" : 1138 }')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the sorted set element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Score"),(0,r.kt)("td",{parentName:"tr",align:null},"Signed double 64-bit float"),(0,r.kt)("td",{parentName:"tr",align:null},"Score the element.")))),(0,r.kt)("p",null,"A SortedSetElement can exist by itself or as part of an array of SortedSetElements."),(0,r.kt)("h3",{id:"sortedsetlength"},"SortedSetLength"),(0,r.kt)("p",null,"Get the number of entries in a sorted set item."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortedSetName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be checked.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"sortedsetlengthbyscore"},"SortedSetLengthByScore"),(0,r.kt)("p",null,"For an existing sorted set item, it finds all of the values between the specified min and max score and returns the length."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortedSetName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the sorted set item to be checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[double]"),(0,r.kt)("td",{parentName:"tr",align:null},"The inclusive low score of the results. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"-inf"),", ie include through the lowest score.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxScore"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional","[double]"),(0,r.kt)("td",{parentName:"tr",align:null},"The inclusive high score of the results. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"+inf"),", ie include through the highest score.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hit",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,r.kt)("li",{parentName:"ul"},"Miss"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}k.isMDXComponent=!0}}]);