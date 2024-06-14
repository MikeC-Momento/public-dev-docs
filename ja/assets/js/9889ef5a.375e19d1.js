"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6414],{7293:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>i});var c=a(4848),o=a(8453);const r={sidebar_position:2,sidebar_label:"Laravel",title:"Laravel + Momento Cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",description:"\u3053\u306e\u7c21\u5358\u306a\u958b\u767a\u8005\u5411\u3051\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f7f\u3063\u3066Laravel\u3068Momento Cache\u3092\u8d70\u3089\u305b\u3066\u307f\u3088\u3046\u3002"},l="Laravel + Momento Cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",t={id:"cache/develop/integrations/momento-cache-laravel-php",title:"Laravel + Momento Cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",description:"\u3053\u306e\u7c21\u5358\u306a\u958b\u767a\u8005\u5411\u3051\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f7f\u3063\u3066Laravel\u3068Momento Cache\u3092\u8d70\u3089\u305b\u3066\u307f\u3088\u3046\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cache/develop/integrations/momento-cache-laravel-php.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/momento-cache-laravel-php",permalink:"/ja/cache/develop/integrations/momento-cache-laravel-php",draft:!1,unlisted:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/momento-cache-laravel-php.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Laravel",title:"Laravel + Momento Cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",description:"\u3053\u306e\u7c21\u5358\u306a\u958b\u767a\u8005\u5411\u3051\u30c1\u30fc\u30c8\u30b7\u30fc\u30c8\u3092\u4f7f\u3063\u3066Laravel\u3068Momento Cache\u3092\u8d70\u3089\u305b\u3066\u307f\u3088\u3046\u3002"},sidebar:"tutorialSidebar",previous:{title:"Redis\u4e92\u63db\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",permalink:"/ja/cache/develop/integrations/redis-client-compatibility"},next:{title:"AWS Secrets Manager",permalink:"/ja/cache/develop/integrations/aws-secrets-manager"}},s={},i=[{value:"Laravel + Momento\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b",id:"laravel--momento\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b",level:2},{value:"Laravel\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"laravel\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:3},{value:"Laravel + Momento\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8a2d\u5b9a",id:"laravel--momento\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8a2d\u5b9a",level:3},{value:"\u30bf\u30b0\u30b5\u30dd\u30fc\u30c8",id:"\u30bf\u30b0\u30b5\u30dd\u30fc\u30c8",level:3},{value:"\u4e0a\u9650",id:"\u4e0a\u9650",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"laravel--momento-cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",children:"Laravel + Momento Cache\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"}),"\n",(0,c.jsx)(n.p,{children:"Laravel\u306f\u3001PHP\u306e\u958b\u767a\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u3057\u3066\u975e\u5e38\u306b\u4eba\u6c17\u304c\u3042\u308a\u307e\u3059\u3002Laravel\u306f\u3001\u30a8\u30ec\u30ac\u30f3\u30c8\u306a\u69cb\u9020\u3001\u8c4a\u5bcc\u306a\u6a5f\u80fd\u3001\u8fc5\u901f\u304b\u3064\u52b9\u7387\u7684\u306b\u4ed5\u4e8b\u3092\u6210\u3057\u9042\u3052\u308b\u305f\u3081\u306e\u512a\u308c\u305f\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3067\u77e5\u3089\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["Laravel\u306e\u591a\u304f\u306e\u7279\u9577\u306e1\u3064\u306f\u3001",(0,c.jsx)(n.a,{href:"https://laravel.com/docs/10.x/cache",children:"cache\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u7528\u306e\u7d71\u4e00API"}),"\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Laravel\u30a2\u30d7\u30ea\u306f\u3001\u3069\u306ecache\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u306e\u8a73\u7d30\u3092\u6c17\u306b\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u3042\u3089\u3086\u308b\u4f7f\u7528\u983b\u5ea6\u306e\u9ad8\u3044\u30c7\u30fc\u30bf\u3092cache\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30b3\u30fc\u30c9\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u3053\u3068\u306a\u304f\u3001\u7570\u306a\u308bcache\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"]}),"\n",(0,c.jsx)(n.p,{children:"Laravel\u306f\u3001Memcached\u3084Redis\u306a\u3069\u306ecache\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u3053\u3067\u3001Momento\u306fLaravel Cache API\u306e\u5b9f\u88c5\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001cache\u30af\u30e9\u30b9\u30bf\u306e\u7ba1\u7406\u3092\u6c17\u306b\u3059\u308b\u3053\u3068\u306a\u304f\u3001cache\u306e\u5229\u70b9\u3092\u3059\u3079\u3066\u624b\u306b\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01Momento Cache\u306e\u67d4\u8edf\u306a\u69cb\u9020\u3068\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306a \u7279\u6027\u306f\u3001Laravel\u306ecache\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306b\u6700\u9069\u306a\u9078\u629e\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Laravel\u3068Laravel Momento Cache\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u8a2d\u5b9a\u3057\u3001Web\u30a2\u30d7\u30ea\u3068API\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8a73\u3057\u304f\u306f",(0,c.jsx)(n.a,{href:"https://github.com/momentohq/laravel-cache",children:"Momento Laravel\u306ecache\u30ea\u30dd\u30b8\u30c8\u30ea"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"laravel--momento\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b",children:"Laravel + Momento\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["Momento\u306ecache\u3092\u4f7f\u7528\u3057\u305fLaravel\u30a2\u30d7\u30ea\u306e\u4f8b\u3092\u3054\u89a7\u306b\u306a\u308a\u305f\u3044\u65b9\u306f ",(0,c.jsx)(n.a,{href:"https://github.com/momentohq/laravel-example",children:"Momento Laravel Example App"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff01\u3053\u306egit repo\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u52d5\u4f5c\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001",(0,c.jsx)(n.a,{href:"https://openweathermap.org/",children:"OpenWeather"}),"\u304b\u3089\u5929\u6c17\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308bWeb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Momento\u306b\u5929\u6c17\u30c7\u30fc\u30bf\u3092cache\u3059\u308b\u3053\u3068\u3067\u3001\u305d\u306e\u5f8c\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u3088\u308a\u8fc5\u901f\u306b\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"laravel\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Laravel\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,c.jsx)(n.h3,{id:"\u6761\u4ef6",children:"\u6761\u4ef6"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Momento API Key\u304c\u5fc5\u8981\u3067\u3059\u3002Momento Console](",(0,c.jsx)(n.a,{href:"https://console.gomomento.com/)%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E7%94%9F%E6%88%90%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82",children:"https://console.gomomento.com/)\u3092\u4f7f\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002"})]}),"\n",(0,c.jsx)(n.li,{children:"PHP 8.0\u4ee5\u964d\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,c.jsx)(n.li,{children:"Laravel 9.x\u4ee5\u964d\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://github.com/grpc/grpc/blob/master/src/php/README.md",children:"gRPC PHP \u62e1\u5f35"})," \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://developers.google.com/google-ads/api/docs/client-libs/php/protobuf#c_implementation",children:"protobuf C\u62e1\u5f35"}),"\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"laravel--momento\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8a2d\u5b9a",children:"Laravel + Momento\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u8a2d\u5b9a"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"composer.json"})," \u30d5\u30a1\u30a4\u30eb\u306b\u5f0a\u793e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8ffd\u52a0\u3057\u3001\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u5f0a\u793eSDK\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "require": {\n    "momentohq/laravel-cache": "1.0.1"\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"composer update"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u5fc5\u8981\u306a\u524d\u63d0\u6761\u4ef6\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6b21\u306b",(0,c.jsx)(n.code,{children:"MomentoServiceProvider"}),"\u3092",(0,c.jsx)(n.code,{children:"config/app.php"}),"\u306b\u8ffd\u52a0\u3057\u307e\u3059:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-php",children:"'providers' => [\n    // ...\n    Momento\\Cache\\MomentoServiceProvider::class\n];\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u5f8c\u306b\u3001",(0,c.jsx)(n.code,{children:"config/cache.php"}),"\u306b\u5fc5\u8981\u306a\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-php",children:"'default' => env('CACHE_DRIVER', 'momento'),\n\n'stores' => [\n        'momento' => [\n            'driver' => 'momento',\n            'cache_name' => env('MOMENTO_CACHE_NAME'),\n            'default_ttl' => 60,\n        ],\n],\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5fc5\u8981\u306a\u6761\u4ef6\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u3001\u3082\u3046\u4e00\u5ea6",(0,c.jsx)(n.code,{children:"composer update"}),"\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u30bf\u30b0\u30b5\u30dd\u30fc\u30c8",children:"\u30bf\u30b0\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,c.jsxs)(n.p,{children:["cache\u30bf\u30b0\u306f\u3001",(0,c.jsx)(n.a,{href:"https://laravel.com/docs/9.x/cache#cache-tags",children:"Laravel \u30de\u30cb\u30e5\u30a2\u30eb"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u306e\u3068\u540c\u3058\u3088\u3046\u306b\u52d5\u4f5c\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:":::\u5099\u8003"}),"\n",(0,c.jsx)(n.p,{children:"\u30bf\u30b0\u306b4MB\u4ee5\u4e0a\u306e\u30ad\u30fc\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u306f\u3001\u610f\u56f3\u3057\u305f\u3068\u304a\u308a\u306b\u30bf\u30b0\u4ed8\u3051\u304c\u3067\u304d\u306a\u3044\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u3057\u304f\u306f\u3001\u5f0a\u793e\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\uff01"}),"\n",(0,c.jsx)(n.p,{children:":::"}),"\n",(0,c.jsx)(n.h3,{id:"\u4e0a\u9650",children:"\u4e0a\u9650"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u306eLaravel\u306ecache\u64cd\u4f5c\u306f\u3001\u73fe\u5728\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"many"}),"\n",(0,c.jsx)(n.li,{children:"putMany"}),"\n",(0,c.jsx)(n.li,{children:"decrement"}),"\n",(0,c.jsx)(n.li,{children:"forever"}),"\n",(0,c.jsx)(n.li,{children:"flush"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u64cd\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u5f0a\u793e\u307e\u3067\u3054\u9023\u7d61\u3044\u305f\u3060\u3051\u308c\u3070\u3001\u512a\u5148\u7684\u306b\u8ffd\u52a0\u3059\u308b\u3088\u3046\u52aa\u3081\u307e\u3059\u3002",(0,c.jsx)(n.a,{href:"https://github.com/momentohq/laravel-cache/issues",children:"GitHub issue"}),"\u3092\u4f5c\u6210\u3044\u305f\u3060\u304f\u304b\u3001",(0,c.jsx)(n.a,{href:"mailto:support@momentohq.com",children:"support@momentohq.com"})," \u307e\u3067\u30e1\u30fc\u30eb\u3092\u304a\u9001\u308a\u3044\u305f\u3060\u304f\u304b\u3001\u5f0a\u793e\u306e",(0,c.jsx)(n.a,{href:"https://discord.com/invite/3HkAKjUZGq",children:"Discord"}),"\u306b\u53c2\u52a0\u3057\u3066\u3044\u305f\u3060\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>t});var c=a(6540);const o={},r=c.createContext(o);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);