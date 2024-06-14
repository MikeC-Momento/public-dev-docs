"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[9746],{2439:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=s(4848),o=s(8453);const n={sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache"},r="Storing time series data",a={id:"cache/develop/guides/working-with-time-series-data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache",source:"@site/docs/cache/develop/guides/working-with-time-series-data.md",sourceDirName:"cache/develop/guides",slug:"/cache/develop/guides/working-with-time-series-data",permalink:"/cache/develop/guides/working-with-time-series-data",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/guides/working-with-time-series-data.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Working with Time Series Data",title:"Working with Time Series Data",description:"Learn how to store time series data in Momento Cache"},sidebar:"tutorialSidebar",previous:{title:"Working with files",permalink:"/cache/develop/guides/working-with-files-cache"},next:{title:"Integrations"}},d={},c=[{value:"Why use SortedSets?",id:"why-use-sortedsets",level:3},{value:"Storing time series data in the SortedSet",id:"storing-time-series-data-in-the-sortedset",level:2},{value:"Considerations for time series data",id:"considerations-for-time-series-data",level:2},{value:"Time To Live (TTL) Values",id:"time-to-live-ttl-values",level:3},{value:"Sensor Index Set",id:"sensor-index-set",level:3}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"storing-time-series-data",children:"Storing time series data"}),"\n",(0,i.jsx)(t.p,{children:"Temporarily storing time series data enables you to visualize that data without having to worry about long-term storage costs. Let's think about a common use case for time series data like IoT sensors. Sure, it's useful to see what the recent data looks like, but do you need to keep each sensor value indefinitely? With numerous sensors sending metrics into your database, your storage costs will skyrocket. Storing that data in Momento instead is a great way to take advantage of what Momento does best - storing large volumes of data without having to worry about scaling or long-term storage costs."}),"\n",(0,i.jsxs)(t.p,{children:["You can store related data elements in Momento's collection data types such as ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/list-collections",children:"lists"}),", ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/set-collections",children:"sets"}),", and ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/dictionary-collections",children:"dictionaries"}),". You should pick the appropriate data type for your application's access patterns and data schema. For time series data, you should use Momento's ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/sorted-set-collections",children:"SortedSet data type"}),". You can read more about ",(0,i.jsx)(t.code,{children:"SortedSets"})," ",(0,i.jsx)(t.a,{href:"https://www.gomomento.com/blog/were-back-with-another-collection-data-type-sorted-sets",children:"in this blog"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"why-use-sortedsets",children:"Why use SortedSets?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Sorting your time series data by timestamp makes it easy for client applications to retrieve and display the data in sorted order."}),"\n",(0,i.jsxs)(t.li,{children:["Limit query responses with the Momento SDK's ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyrank",children:"SortedSetFetchByRank"})," and ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyscore",children:"SortedSetFetchByScore"})," to a certain number of values or values within a certain timespan."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"storing-time-series-data-in-the-sortedset",children:"Storing time series data in the SortedSet"}),"\n",(0,i.jsxs)(t.p,{children:["Use the Momento SDK's ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/sorted-set-collections#sortedsetputelement",children:"SortedSetPutElement"})," method to insert items into your SortedSet."]}),"\n",(0,i.jsx)(t.p,{children:"Let's consider a workload for storing IoT sensor data in a Momento Cache."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Each sensor has its own SortedSet."}),"\n",(0,i.jsxs)(t.li,{children:["Each sensor_value within sensor's SortedSet is a JSON string containing the value and timestamp\ni.e. ",(0,i.jsx)(t.code,{children:'JSON.stringify("value":1, "timestamp": 1686583076)'})]}),"\n",(0,i.jsx)(t.li,{children:"Each score for the item in the SortedSet is the timestamp of the datapoint. SortedSets use scores to sort the data within the set."}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Code snippet for writing SortedSet into the Cache"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})\n\nconst response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)\n'})}),"\n",(0,i.jsx)(t.p,{children:"Retrieving time series data from the sorted set:"}),"\n",(0,i.jsx)(t.p,{children:"Use SortedSetFetchByRank to retrieve data from the cache. If you want to retrieve the entire SortedSet, don't pass in any startRank and endRank parameter values."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Code snippet for SortedSetFetchByRank to retrieve the entire SortedSet"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)\n'})}),"\n",(0,i.jsx)(t.p,{children:"If you only want to retrieve a subset of the SortedSet, you could set the startRank and endRank parameter values as follows:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Code snippet for SortedSetFetchByRank to retrieve a subset of the SortedSet"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`, 0, 10)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you only want to retrieve data from a specified time period instead of a specific number of values, you can use ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/sorted-set-collections#sortedsetfetchbyscore",children:"SortedSetFetchByScore"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Code snippet for SortedSetFetchByScore to retrieve a subset of the SortedSet"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", `${sensor_id}-sensor-data`, 1686511076, 1686597476)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"considerations-for-time-series-data",children:"Considerations for time series data"}),"\n",(0,i.jsx)(t.h3,{id:"time-to-live-ttl-values",children:"Time To Live (TTL) Values"}),"\n",(0,i.jsxs)(t.p,{children:["Your SortedSet's ",(0,i.jsx)(t.a,{href:"/cache/develop/api-reference/collection-ttl",children:"CollectionTTL object"})," will be configured depending on how long you want to keep the time series data for each sensor. By default, a SortedSet's TTL will be refreshed any time it is modified, meaning it will keep growing as long as you continue adding elements to it."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["The CollectionTTL specifies the TTL for the entire collection, in this case, for the entire SortedSet, ",(0,i.jsx)(t.em,{children:"not"})," for setting the TTL of individual elements within SortedSets. The elements within will not expire if the SortedSet does not expire."]})}),"\n",(0,i.jsx)(t.h3,{id:"sensor-index-set",children:"Sensor Index Set"}),"\n",(0,i.jsx)(t.p,{children:"If you have multiple sensors pushing data into your cache, consider adding a Set data type to store all the Sensor ID's. You must pass in a Sensor ID when fetching data from the SortedSets. Your client application can retrieve all the Sensor ID's from this Set prior to fetching the time series data, then fetch data for every sensor from the Sorted Sets."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Set example",src:s(628).A+"",width:"551",height:"531"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},628:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/time-series-example-db22194dbe532e40de3c167f7f3595e7.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const o={},n=i.createContext(o);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);