"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[970],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var f=a(2389);const h="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},3404:(e,t,a)=>{a(7294)},9720:(e,t,a)=>{a.d(t,{X:()=>i});var n=a(4866),r=a(5162),l=a(814),o=a(7294);const i=e=>{let{js:t,python:a,java:i,go:u,csharp:s,php:c,rust:p,ruby:d,elixir:m,cli:b}=e;return t||a||i||u||s||c||p||d||m||b?o.createElement(n.Z,null,t&&o.createElement(r.Z,{value:"js",label:"JavaScript"},o.createElement(l.Z,{language:"js"},t)),a&&o.createElement(r.Z,{value:"python",label:"Python"},o.createElement(l.Z,{language:"python"},a)),i&&o.createElement(r.Z,{value:"java",label:"Java"},o.createElement(l.Z,{language:"java"},i)),u&&o.createElement(r.Z,{value:"go",label:"Go"},o.createElement(l.Z,{language:"go"},u)),s&&o.createElement(r.Z,{value:"csharp",label:"C#"},o.createElement(l.Z,{language:"csharp"},s)),c&&o.createElement(r.Z,{value:"php",label:"PHP"},o.createElement(l.Z,{language:"php"},c)),p&&o.createElement(r.Z,{value:"rust",label:"Rust"},o.createElement(l.Z,{language:"rust"},p)),d&&o.createElement(r.Z,{value:"ruby",label:"Ruby"},o.createElement(l.Z,{language:"ruby"},d)),m&&o.createElement(r.Z,{value:"elixir",label:"Elixir"},o.createElement(l.Z,{language:"elixir"},m)),b&&o.createElement(r.Z,{value:"cli",label:"CLI"},o.createElement(l.Z,{language:"cli"},b))):null}},9763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=(a(3404),a(9720));const o={sidebar_position:2,sidebar_label:"SDK Configuration Objects",sidebar_class_name:"sidebar-item-api-reference",title:"SDK configuration objects",description:"Momento SDK \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u521d\u671f\u5316\u306b\u4f7f\u7528\u3055\u308c\u308b\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f7f\u3044\u65b9"},i="SDK Client configuration objects",u={unversionedId:"develop/basics/client-configuration-objects",id:"develop/basics/client-configuration-objects",title:"SDK configuration objects",description:"Momento SDK \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u521d\u671f\u5316\u306b\u4f7f\u7528\u3055\u308c\u308b\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f7f\u3044\u65b9",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/basics/02-client-configuration-objects.md",sourceDirName:"develop/basics",slug:"/develop/basics/client-configuration-objects",permalink:"/ja/develop/basics/client-configuration-objects",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/basics/02-client-configuration-objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"SDK Configuration Objects",sidebar_class_name:"sidebar-item-api-reference",title:"SDK configuration objects",description:"Momento SDK \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u521d\u671f\u5316\u306b\u4f7f\u7528\u3055\u308c\u308b\u8a2d\u5b9a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f7f\u3044\u65b9"},sidebar:"tutorialSidebar",previous:{title:"Basics"},next:{title:"SDK Error Handling",permalink:"/ja/develop/basics/error-handling-production-readiness"}},s={},c=[{value:"Pre-built configurations",id:"pre-built-configurations",level:2},{value:"Laptop",id:"laptop",level:3},{value:"Browser",id:"browser",level:3},{value:"InRegion - Default",id:"inregion---default",level:3},{value:"InRegion - Low Latency",id:"inregion---low-latency",level:3},{value:"Lambda",id:"lambda",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sdk-client-configuration-objects"},"SDK Client configuration objects"),(0,r.kt)("img",{src:"/img/client-configurations.jpg",width:"90%",alt:"a technical illustration of Momento client configuration objects."}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001Momento \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c Momento \u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u8a2d\u5b9a\u304c\u542b\u307e\u308c\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3084\u518d\u8a66\u884c\u3001\u30ed\u30ae\u30f3\u30b0\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5404 SDK \u306b\u306f\u3001\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u7acb\u3061\u4e0a\u3052\u3066\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u3042\u3089\u304b\u3058\u3081 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u69d8\u3005\u306a\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u74b0\u5883\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306e\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u79c1\u305f\u3061\u304c\u884c\u3044\u307e\u3059\u3002(\u305d\u308c\u306b\u3064\u3044\u3066\u306e\u30d6\u30ed\u30b0\u30b7\u30ea\u30fc\u30ba\u3082\u3042\u308a\u307e\u3059\uff01",(0,r.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you"},"\u885d\u6483\u7684\u306a\u307b\u3069\u30b7\u30f3\u30d7\u30eb\uff1a\u3042\u306a\u305f\u306e\u305f\u3081\u306b\u5927\u5909\u306a\u4ed5\u4e8b\u3092\u3059\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30e9\u30a4\u30a2\u30f3\u30c8"),")"),(0,r.kt)("p",null,"\u30d3\u30eb\u30c9\u6e08\u307f\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"configurations")," \u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"latest()")," \u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6301\u3063\u3066\u3044\u3066\u3001\u4e0e\u3048\u3089\u308c\u305f\u74b0\u5883\u306b\u5bfe\u3057\u3066\u5e38\u306b\u6700\u65b0\u306e\u63a8\u5968\u3055\u308c\u308b\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070"),(0,r.kt)(l.X,{js:"Configurations.InRegion.Default.latest();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"latest()")," \u306e\u30d3\u30eb\u30c9\u6e08\u307f ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," \u306f\u3001SDK \u306e\u30ea\u30ea\u30fc\u30b9\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002SDK \u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306b\u3088\u3063\u3066\u8a2d\u5b9a\u304c\u5909\u66f4\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30ea\u30ea\u30fc\u30b9\u3054\u3068\u306b\u56fa\u5b9a\u3055\u308c\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u308b ",(0,r.kt)("inlineCode",{parentName:"p"},"v1()")," \u306e\u3088\u3046\u306a\u56fa\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070"),(0,r.kt)(l.X,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("p",null,"\u30ab\u30b9\u30bf\u30e0\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u5c02\u7528\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u5404 SDK \u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e Configurations \u540d\u524d\u7a7a\u9593\u306b\u3042\u308b\u4f8b\u3092\u898b\u3066\u3001\u3069\u306e\u3088\u3046\u306b\u69cb\u7bc9\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u8a2d\u5b9a\u306f\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u5fc5\u8981\u3068\u306a\u308b\u8981\u4ef6\u3092\u6e80\u305f\u305b\u3066\u3044\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u3082\u3057\u4f55\u304b\u3057\u3089\u6b20\u3051\u3066\u3044\u308b\u3082\u306e\u3092\u898b\u3064\u3051\u3089\u308c\u305f\u5834\u5408\u306b\u306f\u3001SDK \u306e\u30ec\u30dd\u30b8\u30c8\u30ea\u306b GitHub issue \u3092\u4f5c\u308b\u304b\u3001",(0,r.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"support@momentohq.com")," \u3078\u3054\u9023\u7d61\u4e0b\u3055\u3044\u3002\u305c\u3072\u7686\u3055\u3093\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u805e\u3044\u3066\u3001\u4e8b\u524d\u69cb\u7bc9\u6e08\u306e\u8a2d\u5b9a\u3092\u4fee\u6b63\u3057\u305f\u308a\u62e1\u5f35\u3059\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u826f\u3044\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u304c\u3001\u3044\u304f\u3064\u304b\u306e\u4e8b\u524d\u69cb\u7bc9\u6e08\u306e\u8a2d\u5b9a\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"pre-built-configurations"},"Pre-built configurations"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u3042\u3089\u304b\u3058\u3081\u69cb\u7bc9\u3055\u308c\u305f ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," \u306e\u4e00\u90e8\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"laptop"},"Laptop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configurations.Laptop")," \u306f\u958b\u767a\u74b0\u5883\u69d8\u3067\u3001\u30e9\u30c3\u30d7\u30c8\u30c3\u30d7\u4e0a\u304b\u3089\u4f7f\u3046\u305f\u3081\u306b\u3042\u308a\u307e\u3059\u3002\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f\u7de9\u3081\u306b\u306a\u3063\u3066\u3044\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u304c\u591a\u5c11\u5927\u304d\u3044\u3053\u3068\u3092\u4eee\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)(l.X,{js:"Configurations.Laptop.v1();",python:"",java:"Configurations.Laptop.v1();",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"browser"},"Browser"),(0,r.kt)("p",null,"Configurations.Browser \u306f ",(0,r.kt)("a",{parentName:"p",href:"/develop/sdks/web"},"web SDK")," \u306b\u7279\u6709\u306e\u8a2d\u5b9a\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u6bce\u306b\u30d6\u30e9\u30a6\u30b6\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u306e\u632f\u308c\u5e45\u304c\u5927\u304d\u3044\u306e\u3067\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u8a2d\u5b9a\u304c\u7de9\u3081\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"inregion---default"},"InRegion - Default"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.Default")," \u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u540c\u4e00\u306e\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u3042\u308b Momento \u30b5\u30fc\u30d3\u30b9\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308b\u3001\u591a\u304f\u306e\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306e\u305f\u3081\u306e\u8a2d\u5b9a\u3067\u3059\u3002\u30e9\u30c3\u30d7\u30c8\u30c3\u30d7\u8a2d\u5b9a\u3088\u308a\u3082\u7a4d\u6975\u7684\u306a\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3068\u30ea\u30c8\u30e9\u30a4\u306e\u6319\u52d5\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u3088\u308a\u65e9\u304f\u5931\u6557\u3059\u308b\u3053\u3068\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3084\u4ed6\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3088\u308a\u65e9\u304f\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3084\u30b5\u30fc\u30d3\u30b9\u306b\u554f\u984c\u304c\u3042\u308b\u3068\u304d\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c Momento \u3067\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u306b\u306a\u3089\u306a\u3044\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,r.kt)(l.X,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"inregion---low-latency"},"InRegion - Low Latency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.LowLatency")," \u306f p99.9 \u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u53ef\u80fd\u306a\u9650\u308a\u4f4e\u304f\u4fdd\u3064\u3053\u3068\u3092\u512a\u5148\u3057\u305f\u8a2d\u5b9a\u3067\u3001\u305d\u306e\u305f\u3081\u306b\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3092\u72a0\u7272\u306b\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002InRegion.Default \u306e\u8a2d\u5b9a\u3088\u308a\u3082\u65e9\u304f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002\u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u6642\u306b\u8a31\u5bb9\u3067\u304d\u306a\u3044\u7a0b\u306e\u5927\u304d\u306a\u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u751f\u307e\u306a\u3044\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u3053\u3068\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u3082\u91cd\u8981\u306a\u8981\u7d20\u3067\u3001\u3082\u3057\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u53cd\u5fdc\u3057\u306a\u3044\u6642\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ed\u30b8\u30c3\u30af\u3084\u6a29\u5a01\u3042\u308b\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u3082\u3063\u3068\u65e9\u304f\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u305f\u3044\u6642\u306b\u5229\u7528\u3057\u3066\u4e0b\u3055\u3044\u3002"),(0,r.kt)(l.X,{js:"Configurations.InRegion.LowLatency.v1();",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,r.kt)("h3",{id:"lambda"},"Lambda"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configurations.Lambda")," \u306f\u3044\u304f\u3064\u304b\u306e SDK \u3067\u5229\u7528\u53ef\u80fd\u306a\u3001AWS Lambda \u74b0\u5883\u306b\u6700\u9069\u5316\u3055\u308c\u305f\u8a2d\u5b9a\u3067\u3059\u3002Lambda \u306e\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3067\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u6696\u6c17\u3059\u308b\u69d8\u306b\u8a2d\u8a08\u3055\u308c\u305f\u8a2d\u5b9a\u3092\u6301\u3061\u3001\u3082\u3057\u63a5\u7d9a\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u307b\u3069\u9577\u304f Lambda \u304c\u30a2\u30a4\u30c9\u30eb\u72b6\u614b\u306b\u306a\u3063\u305f\u6642\u306f\u3001\u63a5\u7d9a\u304c\u518d\u5ea6\u78ba\u7acb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u7a4d\u6975\u7684\u306b\u4fdd\u8a3c\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,r.kt)(l.X,{js:"",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}d.isMDXComponent=!0}}]);