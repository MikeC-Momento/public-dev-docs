"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9242],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(7462),n=a(7294),r=a(6010),s=a(2466),i=a(6550),u=a(1980),o=a(7392),c=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,o]=k({queryString:a,groupId:l}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),N=(()=>{const e=u??m;return d({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),h(e)}),[o,h,r]),tabValues:r}}var N=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),l=o[a].value;l!==i&&(m(t),u(l))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},n.createElement(b,(0,l.Z)({},e,t)),n.createElement(f,(0,l.Z)({},e,t)))}function y(e){const t=(0,N.Z)();return n.createElement(v,(0,l.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>i});var l=a(4866),n=a(5162),r=a(614),s=a(7294);const i=e=>{let{js:t,python:a,java:i,go:u,csharp:o,php:c,rust:m,ruby:p,elixir:d,swift:k,dart:h,cli:N}=e;return t||a||i||u||o||c||m||p||d||k||h||N?s.createElement(l.Z,null,t&&s.createElement(n.Z,{value:"js",label:"JavaScript"},s.createElement(r.Z,{language:"js"},t)),a&&s.createElement(n.Z,{value:"python",label:"Python"},s.createElement(r.Z,{language:"python"},a)),i&&s.createElement(n.Z,{value:"java",label:"Java"},s.createElement(r.Z,{language:"java"},i)),u&&s.createElement(n.Z,{value:"go",label:"Go"},s.createElement(r.Z,{language:"go"},u)),o&&s.createElement(n.Z,{value:"csharp",label:"C#"},s.createElement(r.Z,{language:"csharp"},o)),c&&s.createElement(n.Z,{value:"php",label:"PHP"},s.createElement(r.Z,{language:"php"},c)),m&&s.createElement(n.Z,{value:"rust",label:"Rust"},s.createElement(r.Z,{language:"rust"},m)),p&&s.createElement(n.Z,{value:"ruby",label:"Ruby"},s.createElement(r.Z,{language:"ruby"},p)),d&&s.createElement(n.Z,{value:"elixir",label:"Elixir"},s.createElement(r.Z,{language:"elixir"},d)),k&&s.createElement(n.Z,{value:"swift",label:"Swift"},s.createElement(r.Z,{language:"swift"},k)),h&&s.createElement(n.Z,{value:"dart",label:"Dart"},s.createElement(r.Z,{language:"dart"},h)),N&&s.createElement(n.Z,{value:"cli",label:"CLI"},s.createElement(r.Z,{language:"cli"},N))):null}},7682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var l=a(7462),n=(a(7294),a(3905)),r=(a(3404),a(9720));const s={sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},i="Momento Cache\u306e\u305f\u3081\u306eSet API\u306b\u3064\u3044\u3066",u={unversionedId:"cache/develop/api-reference/set-collections",id:"cache/develop/api-reference/set-collections",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/api-reference/set-collections.md",sourceDirName:"cache/develop/api-reference",slug:"/cache/develop/api-reference/set-collections",permalink:"/ja/cache/develop/api-reference/set-collections",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/api-reference/set-collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sets",title:"Set API reference",description:"Momento Cache\u306e\u30bb\u30c3\u30c8\u30fb\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30fb\u30c7\u30fc\u30bf\u578b\u306eAPI\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/ja/cache/develop/api-reference/list-collections"},next:{title:"Sorted sets",permalink:"/ja/cache/develop/api-reference/sorted-set-collections"}},o={},c=[{value:"Set methods",id:"set-methods",level:2},{value:"SetAddElement",id:"setaddelement",level:3},{value:"SetAddElements",id:"setaddelements",level:3},{value:"SetFetch",id:"setfetch",level:3},{value:"SetRemoveElement",id:"setremoveelement",level:3},{value:"SetRemoveElements",id:"setremoveelements",level:3},{value:"SetContainsElement",id:"setcontainselement",level:3},{value:"SetContainsElements",id:"setcontainselements",level:3},{value:"SetLength",id:"setlength",level:3}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"momento-cache\u306e\u305f\u3081\u306eset-api\u306b\u3064\u3044\u3066"},"Momento Cache\u306e\u305f\u3081\u306eSet API\u306b\u3064\u3044\u3066"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Momento\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL"),'\u3092\u4f7f\u7528\u3057\u3066TTL\u52d5\u4f5c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e "write" \u64cd\u4f5c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u5f15\u6570\u3067\u3059\u3002')),(0,n.kt)("p",null,"\u96c6\u5408\u306f\u8981\u7d20\u306e\u96c6\u307e\u308a\u3067\u3059\u304c\u3001\u5404\u8981\u7d20\u306f\u4e00\u5ea6\u3057\u304b\u73fe\u308c\u305a\u3001\u9806\u5e8f\u306f\u4fdd\u8a3c\u3055\u308c\u307e\u305b\u3093\u3002\n\u4f8b: \u30bb\u30c3\u30c8\u304c ",(0,n.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," \u3092\u542b\u307f\u30012 \u3092\u8ffd\u52a0\u3057\u3066\u3082\u30bb\u30c3\u30c8\u306f ",(0,n.kt)("inlineCode",{parentName:"p"},"[1, 2, 3].")," \u306e\u307e\u307e\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/basics/datatypes#set-collections"},"Sets"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"set-methods"},"Set methods"),(0,n.kt)("h3",{id:"setaddelement"},"SetAddElement"),(0,n.kt)("p",null,"\u30bb\u30c3\u30c8\u306b\u8981\u7d20\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30bb\u30c3\u30c8\u9805\u76ee\u304c\u307e\u3060\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u305d\u308c\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"element"),(0,n.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u8ffd\u52a0\u3055\u308c\u308b\u8981\u7d20\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ttl"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u9805\u76ee\u306e TTL\u3067\u3059\u3002\u3053\u306e TTL \u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u63a5\u7d9a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308b TTL \u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"const result = await cacheClient.setAddElement('test-cache', 'test-set', 'test-element');\nif (result instanceof CacheSetAddElement.Success) {\n  console.log(\"Element added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElement on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setaddelements"},"SetAddElements"),(0,n.kt)("p",null,"Adds multiple elements to a set item."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elements"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u8ffd\u52a0\u3055\u308c\u308b\u8981\u7d20\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ttl"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/ja/cache/develop/api-reference/collection-ttl"},"CollectionTTL object")),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u9805\u76ee\u306e TTL\u3067\u3059\u3002\u3053\u306e TTL \u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u63a5\u7d9a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u521d\u671f\u5316\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3055\u308c\u308b TTL \u3088\u308a\u3082\u512a\u5148\u3055\u308c\u307e\u3059\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"const result = await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetAddElements.Success) {\n  console.log(\"Elements added successfully to set 'test-set'\");\n} else if (result instanceof CacheSetAddElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetAddElements on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setfetch"},"SetFetch"),(0,n.kt)("p",null,"Gets a set item from a cache."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d6\u5f97\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("p",null,"SetFetch \u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"valueSetBytes(): Bytes[]"),(0,n.kt)("li",{parentName:"ul"},"valueSetString(): String[]"),(0,n.kt)("li",{parentName:"ul"},"toString(): String"))),(0,n.kt)("li",{parentName:"ul"},"Miss"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setFetch('test-cache', 'test-set');\nif (result instanceof CacheSetFetch.Hit) {\n  console.log('Set fetched successfully- ');\n  result.valueSet().forEach((value, key) => {\n    console.log(`${key} : ${value}`);\n  });\n} else if (result instanceof CacheSetFetch.Miss) {\n  console.log(\"Set 'test-set' was not found in cache 'test-cache'\");\n} else if (result instanceof CacheSetFetch.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetFetch on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setremoveelement"},"SetRemoveElement"),(0,n.kt)("p",null,"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u9805\u76ee\u304b\u3089\u5358\u4e00\u306e\u8981\u7d20\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"element"),(0,n.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u524a\u9664\u3055\u308c\u308b\u8981\u7d20\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"await cacheClient.setAddElement('test-cache', 'test-set', 'test-element');\nconst result = await cacheClient.setRemoveElement('test-cache', 'test-set', 'test-element');\nif (result instanceof CacheSetRemoveElement.Success) {\n  console.log(\"Element 'test-element' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElement.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElement on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setremoveelements"},"SetRemoveElements"),(0,n.kt)("p",null,"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u304b\u3089\u8907\u6570\u306e\u8981\u7d20\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5909\u66f4\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elements"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u64cd\u4f5c\u306b\u3088\u3063\u3066\u524a\u9664\u3055\u308c\u308b\u8981\u7d20\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"await cacheClient.setAddElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nconst result = await cacheClient.setRemoveElements('test-cache', 'test-set', ['test-element1', 'test-element2']);\nif (result instanceof CacheSetRemoveElements.Success) {\n  console.log(\"Elements 'test-element1' and 'test-element2' removed successfully from set 'test-set'\");\n} else if (result instanceof CacheSetRemoveElements.Error) {\n  throw new Error(\n    `An error occurred while attempting to call cacheSetRemoveElements on set 'test-set' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setcontainselement"},"SetContainsElement"),(0,n.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u8981\u7d20\u304c\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30c3\u30c8\u306b\u542b\u307e\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u8abf\u3079\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"element"),(0,n.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u8981\u7d20\u306e\u540d\u524d\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("p",null,"SetContainsElement\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"containsElement(): bool"))),(0,n.kt)("li",{parentName:"ul"},"Miss"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setcontainselements"},"SetContainsElements"),(0,n.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u8981\u7d20\u304c\u6307\u5b9a\u3055\u308c\u305f\u30bb\u30c3\u30c8\u306b\u542b\u307e\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elements"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b58\u5728\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u8981\u7d20\u540d\u306e\u914d\u5217\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("p",null,"SetContainsElements\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u30d2\u30c3\u30c8\u3001\u30df\u30b9\u3001\u30a8\u30e9\u30fc\u306e3\u3064\u306e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"containsElements(): bool[]"))),(0,n.kt)("li",{parentName:"ul"},"Miss"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"setlength"},"SetLength"),(0,n.kt)("p",null,"\u65e2\u5b58\u306e\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u9577\u3055\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,n.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8a73\u7d30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u540d\u524d\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"setName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u30c1\u30a7\u30c3\u30af\u3059\u308b\u30bb\u30c3\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u540d\u524d\u3002")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,n.kt)("li",{parentName:"ul"},"Miss"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"\u8a73\u3057\u304f\u306f",(0,n.kt)("a",{parentName:"p",href:"/ja/cache/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",swift:"",dart:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}d.isMDXComponent=!0}}]);