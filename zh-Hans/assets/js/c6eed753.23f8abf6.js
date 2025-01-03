"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[25889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,g=c["".concat(p,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210",sidebar_position:4},p="\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210",s={unversionedId:"solution/integrate",id:"solution/integrate",title:"\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210",description:"\u5373\u65f6\u901a\u8baf\uff08IM\uff09\u4f5c\u4e3a\u4e00\u79cd\u901a\u4fe1\u80fd\u529b\uff0c\u5df2\u6210\u4e3a\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u6210\u4e3a\u8bb8\u591a\u5e94\u7528\u7a0b\u5e8f\u4e0d\u53ef\u6216\u7f3a\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u5f00\u53d1\u4e86\u4e00\u6b3e\u5e94\u7528\uff0c\u5e76\u5e0c\u671b\u96c6\u6210 OpenIM \u4ee5\u5b9e\u73b0\u804a\u5929\u529f\u80fd\uff0c\u672c\u6587\u5c06\u4e3a\u60a8\u7b80\u8981\u4ecb\u7ecd\u96c6\u6210\u7684\u6b65\u9aa4\u3002",source:"@site/docs/guides/solution/integrate.mdx",sourceDirName:"solution",slug:"/solution/integrate",permalink:"/zh-Hans/guides/solution/integrate",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/solution/integrate.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:4,frontMatter:{title:"\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u63a5\u5165AI\u673a\u5668\u4eba",permalink:"/zh-Hans/guides/solution/aiRobot"},next:{title:"\u5982\u4f55\u9009\u62e9\u4e00\u6b3eIM\u5f00\u6e90\u9879\u76ee",permalink:"/zh-Hans/guides/solution/chooseProject"}},u={},c=[{value:"Your APP Server \u8c03\u7528 REST API \u4e0e IM Server \u5bf9\u63a5",id:"your-app-server-\u8c03\u7528-rest-api-\u4e0e-im-server-\u5bf9\u63a5",level:2},{value:"Your APP Client \u96c6\u6210 OpenIM SDK",id:"your-app-client-\u96c6\u6210-openim-sdk",level:2}],m={toc:c},f="wrapper";function g(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210"},"\u5982\u4f55\u4e0e\u73b0\u6709\u7cfb\u7edf\u96c6\u6210"),(0,n.kt)("p",null,"\u5373\u65f6\u901a\u8baf\uff08IM\uff09\u4f5c\u4e3a\u4e00\u79cd\u901a\u4fe1\u80fd\u529b\uff0c\u5df2\u6210\u4e3a\u4e92\u8054\u7f51\u57fa\u7840\u8bbe\u65bd\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u6210\u4e3a\u8bb8\u591a\u5e94\u7528\u7a0b\u5e8f\u4e0d\u53ef\u6216\u7f3a\u7684\u529f\u80fd\u3002\u5982\u679c\u60a8\u5f00\u53d1\u4e86\u4e00\u6b3e\u5e94\u7528\uff0c\u5e76\u5e0c\u671b\u96c6\u6210 OpenIM \u4ee5\u5b9e\u73b0\u804a\u5929\u529f\u80fd\uff0c\u672c\u6587\u5c06\u4e3a\u60a8\u7b80\u8981\u4ecb\u7ecd\u96c6\u6210\u7684\u6b65\u9aa4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OpenIM\u548c\u4e1a\u52a1\u7cfb\u7edf\u5173\u7cfb\u56fe",src:r(62934).Z,width:"760",height:"563"})),(0,n.kt)("p",null,"\u5728\u4e0a\u8ff0\u7cfb\u7edf\u5173\u7cfb\u56fe\u4e2d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Your APP Server")," \u8868\u793a\u60a8\u73b0\u6709\u5e94\u7528\u7684\u670d\u52a1\u5668\u7aef\uff0c\u5f00\u53d1\u8bed\u8a00\u4e0d\u9650\u3002\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u4e2a\u4eba\u8d44\u6599\u548c\u5bc6\u7801\u9a8c\u8bc1\uff09\u5b58\u50a8\u5728\u8be5\u670d\u52a1\u5668\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Your APP Client")," \u8868\u793a\u60a8\u73b0\u6709\u4e1a\u52a1\u7684\u5ba2\u6237\u7aef\uff0c\u4e3b\u6d41\u7684\u5f00\u53d1\u6846\u67b6\u5747\u652f\u6301\u3002")),(0,n.kt)("h2",{id:"your-app-server-\u8c03\u7528-rest-api-\u4e0e-im-server-\u5bf9\u63a5"},"Your APP Server \u8c03\u7528 REST API \u4e0e IM Server \u5bf9\u63a5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u7528\u6237\u6ce8\u518c"),"\uff1a\u7528\u6237\u6ce8\u518c\u6210\u529f\u540e\uff0c\u8c03\u7528",(0,n.kt)("a",{parentName:"li",href:"../../restapi/apis/userManagement/userRegister"},"\u7528\u6237\u6ce8\u518c\u63a5\u53e3"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u7528\u6237\u4fe1\u606f\u4fee\u6539"),"\uff1a\u7528\u6237\u4fee\u6539\u4fe1\u606f\uff08\u5982\u5934\u50cf\u3001\u6635\u79f0\u3001\u6269\u5c55\u5b57\u6bb5\uff09\u6210\u529f\u540e\uff0c\u8c03\u7528",(0,n.kt)("a",{parentName:"li",href:"../../restapi/apis/userManagement/updateUserInfo"},"\u4fee\u6539\u7528\u6237\u4fe1\u606f\u63a5\u53e3"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u83b7\u53d6 IM Token"),"\uff1a\u5728\u5bc6\u7801\u6821\u9a8c\u5b8c\u6210\u540e\uff0c\u8c03\u7528",(0,n.kt)("a",{parentName:"li",href:"../../restapi/apis/authenticationManagement/getUserToken"},"\u83b7\u53d6\u7528\u6237IM Token\u63a5\u53e3"),"\uff0c\u5e76\u5c06\u83b7\u53d6\u5230\u7684 IM Token \u8fd4\u56de\u7ed9 ",(0,n.kt)("strong",{parentName:"li"},"Your APP Client"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5bfc\u5165\u5b58\u91cf\u7528\u6237"),"\uff1a\u4e0a\u7ebf\u524d\uff0c\u8c03\u7528",(0,n.kt)("a",{parentName:"li",href:"../../restapi/apis/userManagement/userRegister"},"\u7528\u6237\u6ce8\u518c\u63a5\u53e3"),"\u4ee5\u5bfc\u5165\u5df2\u6709\u7528\u6237\u6570\u636e\u3002")),(0,n.kt)("h2",{id:"your-app-client-\u96c6\u6210-openim-sdk"},"Your APP Client \u96c6\u6210 OpenIM SDK"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u7528\u6237\u767b\u5f55"),"\uff1a\u7528\u6237\u767b\u5f55\u6210\u529f\u540e\uff0c\u4ece ",(0,n.kt)("strong",{parentName:"li"},"Your APP Server")," \u83b7\u53d6 IM Token\uff0c\u5e76\u8c03\u7528",(0,n.kt)("a",{parentName:"li",href:"../../sdks/api/initialization/login"},"IM SDK \u767b\u5f55\u63a5\u53e3"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5d4c\u5165 IM SDK"),"\uff1a\u5c06 IM SDK \u5d4c\u5165\u5230\u60a8\u7684\u5e94\u7528\u4e2d\uff0c\u5b9e\u73b0\u804a\u5929\u529f\u80fd\u7684\u96c6\u6210\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u7528\u6237\u4fe1\u606f\u7ba1\u7406"),"\uff1a\u5728\u83b7\u53d6\u6216\u4fee\u6539\u7528\u6237\u4fe1\u606f\u65f6\uff0c\u8c03\u7528 ",(0,n.kt)("strong",{parentName:"li"},"Your APP Server")," \u73b0\u6709\u7684\u63a5\u53e3\u3002")))}g.isMDXComponent=!0},62934:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/relation-0cbbe3dfcb9f6f6a2562dd79892a86ac.png"}}]);