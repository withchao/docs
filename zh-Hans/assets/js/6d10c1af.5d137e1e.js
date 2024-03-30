"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[35771],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,i(i({ref:e},u),{},{components:n})):r.createElement(b,i({ref:e},u))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67429:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},s="OnOnlineStatusList",c={unversionedId:"callback/OnOnlineStatusList",id:"callback/OnOnlineStatusList",title:"OnOnlineStatusList",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/callback/OnOnlineStatusList.mdx",sourceDirName:"callback",slug:"/callback/OnOnlineStatusList",permalink:"/zh-Hans/sdks/callback/OnOnlineStatusList",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/OnOnlineStatusList.mdx",tags:[],version:"current",lastUpdatedAt:1711794081,formattedLastUpdatedAt:"2024\u5e743\u670830\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"OnMsgStruct",permalink:"/zh-Hans/sdks/callback/OnMsgStruct"},next:{title:"OnSearchFriendItemList",permalink:"/zh-Hans/sdks/callback/OnSearchFriendItemList"}},u={},p=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u59d4\u6258",id:"\u59d4\u6258",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},m=d("Tabs"),b=d("TabItem"),O={toc:p},f="wrapper";function y(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(f,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},O,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ononlinestatuslist"},"OnOnlineStatusList"),(0,r.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u83b7\u53d6\u5728\u7ebf\u72b6\u6001\u5217\u8868\u56de\u8c03")),(0,r.kt)(m,{groupId:"sdks-language",values:[{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,r.kt)(b,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u59d4\u6258"},"\u59d4\u6258"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"public delegate void OnOnlineStatusList(List<OnlineStatus> list, int errCode, string errMsg);\n")),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"List<",(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/user/userStatusInfo"},"OnlineStatus"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null})))))))}y.isMDXComponent=!0}}]);