"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[67383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const i={title:"introduction",hide_title:!0,sidebar_position:1},p="OpenIM \u6280\u672f\u5206\u4eab",u={unversionedId:"introduction",id:"introduction",title:"introduction",description:"\u4e00\u3001\u9879\u76ee\u80cc\u666f\u4e0e\u53d1\u5c55\u5386\u7a0b",source:"@site/docs/blog/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/zh-Hans/blog/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/blog/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1735178587,formattedLastUpdatedAt:"2024\u5e7412\u670826\u65e5",sidebarPosition:1,frontMatter:{title:"introduction",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u670d\u52a1\u7aef\u6574\u4f53\u67b6\u6784",permalink:"/zh-Hans/blog/golang/architectural/example"}},c={},s=[{value:"\u4e00\u3001\u9879\u76ee\u80cc\u666f\u4e0e\u53d1\u5c55\u5386\u7a0b",id:"\u4e00\u9879\u76ee\u80cc\u666f\u4e0e\u53d1\u5c55\u5386\u7a0b",level:2},{value:"V3.x \u7cfb\u5217\u76ee\u6807",id:"v3x-\u7cfb\u5217\u76ee\u6807",level:3},{value:"\u4e8c\u3001\u6027\u80fd\u4e0e\u4e00\u81f4\u6027\uff1a\u591a\u7ea7\u7f13\u5b58\u4f53\u7cfb",id:"\u4e8c\u6027\u80fd\u4e0e\u4e00\u81f4\u6027\u591a\u7ea7\u7f13\u5b58\u4f53\u7cfb",level:2},{value:"\u591a\u7ea7\u7f13\u5b58\u7ed3\u6784",id:"\u591a\u7ea7\u7f13\u5b58\u7ed3\u6784",level:3},{value:"\u6570\u636e\u4e00\u81f4\u6027",id:"\u6570\u636e\u4e00\u81f4\u6027",level:3},{value:"\u4e09\u3001\u7ec4\u4ef6\u9009\u578b\uff1aMongoDB\u3001Redis\u3001Kafka \u5404\u663e\u795e\u901a",id:"\u4e09\u7ec4\u4ef6\u9009\u578bmongodbrediskafka-\u5404\u663e\u795e\u901a",level:2},{value:"MongoDB",id:"mongodb",level:3},{value:"Redis",id:"redis",level:3},{value:"Kafka",id:"kafka",level:3},{value:"\u56db\u3001\u5f00\u53d1\u5b9e\u8df5\uff1a\u53cd\u5c04\u3001\u6cdb\u578b\u4e0e\u5de5\u5177\u94fe",id:"\u56db\u5f00\u53d1\u5b9e\u8df5\u53cd\u5c04\u6cdb\u578b\u4e0e\u5de5\u5177\u94fe",level:2},{value:"\u53cd\u5c04\u4e0e\u6cdb\u578b\u7684\u5999\u7528",id:"\u53cd\u5c04\u4e0e\u6cdb\u578b\u7684\u5999\u7528",level:3},{value:"\u5de5\u5177\u94fe\u7684\u6784\u5efa\u548c\u542f\u505c",id:"\u5de5\u5177\u94fe\u7684\u6784\u5efa\u548c\u542f\u505c",level:3}],d={toc:s},m="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openim-\u6280\u672f\u5206\u4eab"},"OpenIM \u6280\u672f\u5206\u4eab"),(0,r.kt)("h2",{id:"\u4e00\u9879\u76ee\u80cc\u666f\u4e0e\u53d1\u5c55\u5386\u7a0b"},"\u4e00\u3001\u9879\u76ee\u80cc\u666f\u4e0e\u53d1\u5c55\u5386\u7a0b"),(0,r.kt)("p",null,"OpenIM \u4ece\u542f\u52a8\u5f00\u6e90\u9879\u76ee\u5230\u73b0\u5728\uff0c\u5df2\u7ecf\u8d70\u8fc7\u4e86 5 \u4e2a\u5e74\u5934\u3002\u76ee\u524d\u5df2\u8fed\u4ee3\u4e86\u4e09\u4e2a\u5927\u7248\u672c\uff0c\u529f\u80fd\u548c\u6027\u80fd\u9010\u6b65\u5f97\u5230\u5b8c\u5584\u4e0e\u4f18\u5316\u3002"),(0,r.kt)("h3",{id:"v3x-\u7cfb\u5217\u76ee\u6807"},"V3.x \u7cfb\u5217\u76ee\u6807"),(0,r.kt)("p",null,"  \u529f\u80fd\u66f4\u52a0\u5168\u9762\uff0c\u5f15\u5165\u4e86\u591a\u7ea7\u7f13\u5b58\u3001\u5206\u5e03\u5f0f\u90e8\u7f72\u65b9\u6848\uff0c\u652f\u6301\u66f4\u5927\u89c4\u6a21\u7684\u4e1a\u52a1\u573a\u666f\u3002\u76ee\u524d\u5f00\u6e90\u7248\u5c06\u6301\u7eed\u7ef4\u62a4 3.8 \u7248\u672c\u548c\u5546\u4e1a\u7248\uff0c\u5176\u4ed6\u7248\u672c\u4e0d\u518d\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"5 \u5e74\u7684\u6f14\u8fdb\u8fc7\u7a0b\u4e2d\uff0c\u56e2\u961f\u5728\u67b6\u6784\u8bbe\u8ba1\u3001\u7ec4\u4ef6\u9009\u578b\u4ee5\u53ca\u5f00\u53d1\u5b9e\u8df5\u7b49\u65b9\u9762\u6c89\u6dc0\u4e86\u8bb8\u591a\u7ecf\u9a8c\uff0c\u4e5f\u7ecf\u5386\u4e86\u8bf8\u591a\u6311\u6218\u3002\u63a5\u4e0b\u6765\u5c06\u7ed3\u5408\u5b9e\u9645\u6848\u4f8b\uff0c\u5206\u4eab\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u601d\u8def\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002\u4e5f\u5e0c\u671b\u80fd\u5e76\u501f\u6b64\u673a\u4f1a\u548c\u5927\u5bb6\u4ea4\u6d41\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4e8c\u6027\u80fd\u4e0e\u4e00\u81f4\u6027\u591a\u7ea7\u7f13\u5b58\u4f53\u7cfb"},"\u4e8c\u3001\u6027\u80fd\u4e0e\u4e00\u81f4\u6027\uff1a\u591a\u7ea7\u7f13\u5b58\u4f53\u7cfb"),(0,r.kt)("p",null,"\u5728\u5373\u65f6\u901a\u8baf\u9886\u57df\uff0c\u6027\u80fd\u901a\u5e38\u662f\u8bc4\u4f30\u7cfb\u7edf\u53ef\u7528\u6027\u7684\u6838\u5fc3\u6307\u6807\u4e4b\u4e00\uff0c\u800c\u7f13\u5b58\u5219\u662f\u89e3\u51b3\u6027\u80fd\u74f6\u9888\u7684\u5e38\u89c1\u624b\u6bb5\u3002"),(0,r.kt)("h3",{id:"\u591a\u7ea7\u7f13\u5b58\u7ed3\u6784"},"\u591a\u7ea7\u7f13\u5b58\u7ed3\u6784"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u672c\u5730\u7f13\u5b58"),"\n\u5b58\u50a8\u6838\u5fc3\u9ad8\u9891\u6570\u636e\uff0c\u4f8b\u5982\u5ba2\u6237\u7aef\u5b58\u50a8\u6d88\u606f\uff0c\u4f1a\u8bdd\uff0c\u7fa4\u7ec4\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u7f13\u5b58\uff08Redis\uff09"),"\n\u901a\u8fc7 Redis \u7b49\u5206\u5e03\u5f0f\u7f13\u5b58\u5b58\u50a8\u5171\u4eab\u6570\u636e\uff0c\u63d0\u9ad8\u5168\u5c40\u8bbf\u95ee\u6548\u7387\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6301\u4e45\u5316\u5b58\u50a8\uff08MongoDB\uff09"),"\n\u6301\u4e45\u5316\u4fdd\u5b58\u5386\u53f2\u6d88\u606f\u3001\u7528\u6237\u8d44\u6599\u7b49\u5173\u952e\u4e1a\u52a1\u6570\u636e\uff0c\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u4e0e\u53ef\u8ffd\u6eaf\u3002"))),(0,r.kt)("h3",{id:"\u6570\u636e\u4e00\u81f4\u6027"},"\u6570\u636e\u4e00\u81f4\u6027"),(0,r.kt)("p",null,"\u591a\u7ea7\u7f13\u5b58\u5e26\u6765\u6027\u80fd\u63d0\u5347\u7684\u540c\u65f6\uff0c\u4e5f\u9762\u4e34\u6570\u636e\u4e00\u81f4\u6027\u7684\u6311\u6218\u3002\u6211\u4eec\u901a\u8fc7\u4ee5\u4e0b\u624b\u6bb5\u6765\u4fdd\u969c\u6570\u636e\u4e00\u81f4\u6027\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5408\u7406\u7684\u5931\u6548\u7b56\u7565"),"\n\u5f15\u5165rockscache\u7ec4\u4ef6\u89e3\u51b3\u5206\u5e03\u5f0f\u7f13\u5b58\u7684\u4e00\u81f4\u6027\u95ee\u9898\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217\u5f02\u6b65\u901a\u77e5"),"\n\u5f53\u6570\u636e\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u901a\u8fc7IM\u7684\u901a\u77e5\u673a\u5236\uff0c\u786e\u4fdd\u6570\u636e\u9ad8\u5ea6\u540c\u6b65\uff0c\u5e76\u4f7f\u7528\u589e\u91cf\u51cf\u5c11\u7f51\u7edc\u6d41\u91cf\uff0c\u63d0\u5347\u540c\u6b65\u6548\u7387\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4e09\u7ec4\u4ef6\u9009\u578bmongodbrediskafka-\u5404\u663e\u795e\u901a"},"\u4e09\u3001\u7ec4\u4ef6\u9009\u578b\uff1aMongoDB\u3001Redis\u3001Kafka \u5404\u663e\u795e\u901a"),(0,r.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u89c4\u6a21\u7684\u589e\u5927\uff0c\u4ee5\u53ca\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u7684\u63d0\u5347\uff0c\u5982\u4f55\u9009\u578b\u5408\u9002\u7684\u7ec4\u4ef6\u81f3\u5173\u91cd\u8981\u3002OpenIM \u7684\u6280\u672f\u6808\u4e2d\uff0cMongoDB\u3001Redis\u3001Kafka \u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u4e09\u5927\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5b83\u4eec\u5404\u6709\u4f18\u52bf\u3001\u5f7c\u6b64\u4e0d\u53ef\u66ff\u4ee3\u3002"),(0,r.kt)("h3",{id:"mongodb"},"MongoDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5b58\u50a8\u6d77\u91cf\u975e\u7ed3\u6784\u5316\u6216\u534a\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5982\u804a\u5929\u8bb0\u5f55\u3001\u7fa4\u7ec4\u4fe1\u606f\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7075\u6d3b\u7684\u6587\u6863\u6a21\u578b\uff0c\u6613\u4e8e\u5b9e\u73b0\u67d0\u4e9b\u67e5\u8be2\u548c\u805a\u5408\u64cd\u4f5c\u3002")),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d85\u9ad8\u6027\u80fd\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u63d0\u4f9b\u591a\u79cd\u6570\u636e\u7ed3\u6784\u9002\u7528\u4e8e\u7f13\u5b58\u573a\u666f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6301\u4e45\u5316\u4e0e\u96c6\u7fa4\u529f\u80fd\uff0c\u5728\u4fdd\u8bc1\u6027\u80fd\u7684\u524d\u63d0\u4e0b\u5177\u5907\u4e00\u5b9a\u7684\u5bb9\u707e\u80fd\u529b\u3002")),(0,r.kt)("h3",{id:"kafka"},"Kafka"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ad8\u541e\u5410\u91cf\u7684\u6d88\u606f\u961f\u5217\uff0c\u7528\u4e8e\u6d88\u606f\u5f02\u6b65\u5904\u7406\u3001\u7cfb\u7edf\u89e3\u8026\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5206\u533a\u4e0e\u526f\u672c\u673a\u5236\uff0c\u4fdd\u8bc1\u7cfb\u7edf\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u7684\u53ef\u9760\u6027\u4e0e\u4f38\u7f29\u6027\u3002")),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u5177\u4f53\u4e1a\u52a1\u9700\u6c42\uff0c\u7efc\u5408\u5229\u7528\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8ba9\u6bcf\u79cd\u5de5\u5177\u53d1\u6325\u5b83\u7684\u7279\u957f\uff0c\u5b9e\u73b0\u9ad8\u53ef\u7528\u3001\u9ad8\u5e76\u53d1\u7684\u7cfb\u7edf\u67b6\u6784\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u56db\u5f00\u53d1\u5b9e\u8df5\u53cd\u5c04\u6cdb\u578b\u4e0e\u5de5\u5177\u94fe"},"\u56db\u3001\u5f00\u53d1\u5b9e\u8df5\uff1a\u53cd\u5c04\u3001\u6cdb\u578b\u4e0e\u5de5\u5177\u94fe"),(0,r.kt)("p",null,"\u4ee3\u7801\u7684\u7b80\u6d01\u4e0e\u7ef4\u62a4\u6210\u672c\u5f80\u5f80\u6709\u7740\u6b63\u76f8\u5173\uff1a\u8d8a\u662f\u7b80\u6d01\u7684\u4ee3\u7801\uff0c\u8d8a\u80fd\u907f\u514d\u91cd\u590d\u9020\u8f6e\u5b50\uff0c\u63d0\u9ad8\u53ef\u8bfb\u6027\u4e0e\u6269\u5c55\u6027\u3002"),(0,r.kt)("h3",{id:"\u53cd\u5c04\u4e0e\u6cdb\u578b\u7684\u5999\u7528"},"\u53cd\u5c04\u4e0e\u6cdb\u578b\u7684\u5999\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53cd\u5c04"),"\n\u53cd\u5c04\u80fd\u6781\u5927\u51cf\u5c11\u5197\u4f59\u4ee3\u7801\uff0c\u51cf\u5c11\u8026\u5408\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6cdb\u578b"),"\n\u5728\u5904\u7406\u76f8\u4f3c\u903b\u8f91\u3001\u76f8\u4f3c\u5bf9\u8c61\u65f6\uff0c\u5927\u91cf\u4f7f\u7528\u6cdb\u578b\u53ef\u4ee5\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u63d0\u9ad8\u6269\u5c55\u6027\u3002"))),(0,r.kt)("h3",{id:"\u5de5\u5177\u94fe\u7684\u6784\u5efa\u548c\u542f\u505c"},"\u5de5\u5177\u94fe\u7684\u6784\u5efa\u548c\u542f\u505c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8de8\u5e73\u53f0\u6784\u5efa"),"\n\u4e3a\u4e86\u9002\u914d\u591a\u5e73\u53f0\u73af\u5883\uff08Linux\u3001Mac\u3001Windows \u7b49\uff09\uff0c\u9879\u76ee\u7f16\u8bd1\u4f7f\u7528mage\uff0c\u907f\u514d\u5f15\u5165\u5404\u79cd\u811a\u672c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4e00\u952e\u542f\u505c\u4e0e\u8fd0\u7ef4"),"\n\u7edf\u4e00\u4f7f\u7528mage\u5de5\u5177\uff0c\u5b9e\u73b0\u5bf9\u5404\u4e2a\u670d\u52a1\u7684\u542f\u52a8\u3001\u505c\u6b62\u3001\u65e5\u5fd7\u67e5\u770b\u7b49\u529f\u80fd\uff0c\u4e00\u952e\u641e\u5b9a\uff0c\u964d\u4f4e\u8fd0\u7ef4\u95e8\u69db\u3002"))))}k.isMDXComponent=!0}}]);