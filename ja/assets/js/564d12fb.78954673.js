"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7738],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7462),n=r(7294),l=r(6010),i=r(2466),o=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:r,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var b=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},3404:(e,t,r)=>{r(7294)},9720:(e,t,r)=>{r.d(t,{X:()=>o});var a=r(4866),n=r(5162),l=r(614),i=r(7294);const o=e=>{let{js:t,python:r,java:o,go:s,csharp:u,php:c,rust:d,ruby:p,elixir:m,cli:h}=e;return t||r||o||s||u||c||d||p||m||h?i.createElement(a.Z,null,t&&i.createElement(n.Z,{value:"js",label:"JavaScript"},i.createElement(l.Z,{language:"js"},t)),r&&i.createElement(n.Z,{value:"python",label:"Python"},i.createElement(l.Z,{language:"python"},r)),o&&i.createElement(n.Z,{value:"java",label:"Java"},i.createElement(l.Z,{language:"java"},o)),s&&i.createElement(n.Z,{value:"go",label:"Go"},i.createElement(l.Z,{language:"go"},s)),u&&i.createElement(n.Z,{value:"csharp",label:"C#"},i.createElement(l.Z,{language:"csharp"},u)),c&&i.createElement(n.Z,{value:"php",label:"PHP"},i.createElement(l.Z,{language:"php"},c)),d&&i.createElement(n.Z,{value:"rust",label:"Rust"},i.createElement(l.Z,{language:"rust"},d)),p&&i.createElement(n.Z,{value:"ruby",label:"Ruby"},i.createElement(l.Z,{language:"ruby"},p)),m&&i.createElement(n.Z,{value:"elixir",label:"Elixir"},i.createElement(l.Z,{language:"elixir"},m)),h&&i.createElement(n.Z,{value:"cli",label:"CLI"},i.createElement(l.Z,{language:"cli"},h))):null}},9105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),l=(r(3404),r(9720));const i={sidebar_position:1,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},o="Using the Momento Vector Index API",s={unversionedId:"vector-index/develop/api-reference/index",id:"vector-index/develop/api-reference/index",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API.",source:"@site/docs/vector-index/develop/api-reference/index.md",sourceDirName:"vector-index/develop/api-reference",slug:"/vector-index/develop/api-reference/",permalink:"/ja/vector-index/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},sidebar:"vectorSidebar",previous:{title:"Service Limits",permalink:"/ja/vector-index/manage/limits"},next:{title:"Auth",permalink:"/ja/vector-index/develop/api-reference/auth"}},u={},c=[{value:"Vector Index methods",id:"vector-index-methods",level:2},{value:"Create Index",id:"create-index",level:3},{value:"Delete Index",id:"delete-index",level:3},{value:"List Indexes",id:"list-indexes",level:3},{value:"Upsert Item Batch",id:"upsert-item-batch",level:3},{value:"Search",id:"search",level:3},{value:"Delete Item Batch",id:"delete-item-batch",level:3}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-the-momento-vector-index-api"},"Using the Momento Vector Index API"),(0,n.kt)("p",null,"Momento Vector Index (MVI) is a scalable, developer-friendly vector index service designed for real-time storage and retrieval of vector data for use in AI-powered applications."),(0,n.kt)("h2",{id:"vector-index-methods"},"Vector Index methods"),(0,n.kt)("h3",{id:"create-index"},"Create Index"),(0,n.kt)("p",null,"Creates a vector index."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numDimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of dimensions per vector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"similarityMetric"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Metric used to quantify the distance between vectors. Can be cosine similarity, inner product, or euclidean similarity. Defaults to cosine similarity.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"AlreadyExists"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.createIndex('test-index', 2);\nif (result instanceof CreateVectorIndex.Success) {\n  console.log(\"Index 'test-index' created\");\n} else if (result instanceof CreateVectorIndex.AlreadyExists) {\n  console.log(\"Index 'test-index' already exists\");\n} else if (result instanceof CreateVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to create index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"delete-index"},"Delete Index"),(0,n.kt)("p",null,"Deletes a vector index."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.deleteIndex('test-index')\nif (result instanceof DeleteVectorIndex.Success) {\n  console.log(\"Index 'test-index' deleted\");\n} else if (result instanceof DeleteVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to delete index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"list-indexes"},"List Indexes"),(0,n.kt)("p",null,"Lists all vector indexes."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"getIndexNames(): string[]"))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.listIndexes();\nif (result instanceof ListVectorIndexes.Success) {\n  console.log(\n    `Indexes:\\n${result\n      .getIndexNames()\n      .join('\\n')}\\n\\n`\n  );\n} else if (result instanceof ListVectorIndexes.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"upsert-item-batch"},"Upsert Item Batch"),(0,n.kt)("p",null,"Upserts a batch of items into a vector index."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"items"),(0,n.kt)("td",{parentName:"tr",align:null},"VectorIndexItem"),(0,n.kt)("td",{parentName:"tr",align:null},"Items to upsert into the index.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.upsertItemBatch('test-index', [\n  {\n    id: 'example_item_1',\n    vector: [1.0, 2.0],\n    metadata: {key1: 'value1'},\n  },\n  {\n    id: 'example_item_2',\n    vector: [3.0, 4.0],\n    metadata: {key2: 'value2'},\n  },\n]);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully added items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while adding items to index: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"Deletes a batch of items from a vector index."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryVector"),(0,n.kt)("td",{parentName:"tr",align:null},"number[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Vector to search for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topK"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of results to return. Defaults to 10.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metadataFields"),(0,n.kt)("td",{parentName:"tr",align:null},"String[] or ALL_VECTOR_METADATA"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of metadata fields to return with each result, or a value indicating all metadata should be returned. If not provided, no metadata is returned. Defaults to None.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hits(): SearchHit[]",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SearchHit: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"id(): string"),(0,n.kt)("li",{parentName:"ul"},"distance(): number"),(0,n.kt)("li",{parentName:"ul"},"metadata(): Map<string, string>"))))))),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.search('test-index', [1.0, 2.0], {topK: 3, metadataFields: ALL_VECTOR_METADATA});\nif (result instanceof VectorSearch.Success) {\n  console.log(`Found ${result.hits().length} matches`);\n} else if (result instanceof VectorSearch.Error) {\n  throw new Error(`An error occurred searching index test-index: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,n.kt)("h3",{id:"delete-item-batch"},"Delete Item Batch"),(0,n.kt)("p",null,"Deletes a batch of items from a vector index."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"indexName"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the vector index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"items"),(0,n.kt)("td",{parentName:"tr",align:null},"String[]"),(0,n.kt)("td",{parentName:"tr",align:null},"IDs of the items to be deleted.")))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Method response object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Success"),(0,n.kt)("li",{parentName:"ul"},"Error")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,n.kt)(l.X,{js:"const result = await vectorClient.deleteItemBatch('test-index', ['example_item_1', 'example_item_2']);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully deleted items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while deleting items: ${result.errorCode()}: ${result.toString()}`);\n}",python:"",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);