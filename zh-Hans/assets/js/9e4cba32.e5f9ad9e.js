"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[90270],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,u(u({ref:e},s),{},{components:a})):n.createElement(c,u({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,u=new Array(l);u[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:r,u[1]=i;for(var p=2;p<l;p++)u[p]=a[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45641:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},o="UserStatusInfo",p={unversionedId:"class/user/userStatusInfo",id:"class/user/userStatusInfo",title:"UserStatusInfo",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/user/userStatusInfo.mdx",sourceDirName:"class/user",slug:"/class/user/userStatusInfo",permalink:"/zh-Hans/sdks/class/user/userStatusInfo",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/user/userStatusInfo.mdx",tags:[],version:"current",lastUpdatedAt:1727160122,formattedLastUpdatedAt:"2024\u5e749\u670824\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"UserInfo",permalink:"/zh-Hans/sdks/class/user/userInfo"},next:{title:"FullUserInfo",permalink:"/zh-Hans/sdks/class/user/fullUserInfo"}},s={},m=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"UserStatusInfo",id:"userstatusinfo-1",level:3},{value:"OIMUserStatusInfo",id:"oimuserstatusinfo",level:3},{value:"UsersOnlineStatus",id:"usersonlinestatus",level:3},{value:"UserOnlineState",id:"useronlinestate",level:3},{value:"UserOnlineState",id:"useronlinestate-1",level:3},{value:"UserOnlineState",id:"useronlinestate-2",level:3},{value:"OnlineStatus",id:"onlinestatus",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=d("Tabs"),c=d("TabItem"),N={toc:m},g="wrapper";function b(t){var{components:e}=t,a=u(t,["components"]);return(0,n.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"userstatusinfo"},"UserStatusInfo"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u8be6\u60c5")),(0,n.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(c,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"userstatusinfo-1"},"UserStatusInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"int"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0ID\u5217\u8868"))))),(0,n.kt)(c,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"oimuserstatusinfo"},"OIMUserStatusInfo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/platform"},"OIMPlatform"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0ID\u5217\u8868"))))),(0,n.kt)(c,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"usersonlinestatus"},"UsersOnlineStatus"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"List"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0 ID"))))),(0,n.kt)(c,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"useronlinestate"},"UserOnlineState"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"Platform[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237 ID"))))),(0,n.kt)(c,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"useronlinestate-1"},"UserOnlineState"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"Platform[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237 ID"))))),(0,n.kt)(c,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"useronlinestate-2"},"UserOnlineState"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"platformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"Platform[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237 ID"))))),(0,n.kt)(c,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"onlinestatus"},"OnlineStatus"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Status"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u8868\u793a\u79bb\u7ebf\uff0c1 \u8868\u793a\u5728\u7ebf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PlatformIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"int[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5728\u7ebf\u7684\u5e73\u53f0ID\u5217\u8868")))))))}b.isMDXComponent=!0}}]);