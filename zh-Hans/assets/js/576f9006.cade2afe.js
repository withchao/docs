"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[76734],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,f=s["".concat(d,".").concat(k)]||s[k]||g[k]||l;return n?a.createElement(f,i(i({ref:e},o),{},{components:n})):a.createElement(f,i({ref:e},o))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73904:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>s});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={sidebar_position:1,title:"\u53d1\u9001\u6d88\u606f",hide_title:!0},d=void 0,m={unversionedId:"apis/messageManagement/sendMessage",id:"apis/messageManagement/sendMessage",title:"\u53d1\u9001\u6d88\u606f",description:"\u53d1\u9001\u6d88\u606f",source:"@site/docs/restapi/apis/messageManagement/sendMessage.mdx",sourceDirName:"apis/messageManagement",slug:"/apis/messageManagement/sendMessage",permalink:"/zh-Hans/restapi/apis/messageManagement/sendMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/messageManagement/sendMessage.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u53d1\u9001\u6d88\u606f",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u591a\u4e2a\u7528\u6237\u5bf9\u540c\u4e00ID\u7684\u4f1a\u8bdd\u8bbe\u7f6e\u5b57\u6bb5",permalink:"/zh-Hans/restapi/apis/conversationManagement/setConversations"},next:{title:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",permalink:"/zh-Hans/restapi/apis/messageManagement/batchSendMessage"}},o={},s=[{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],g={toc:s},k="wrapper";function f(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"\u53d1\u9001\u6d88\u606f"},"\u53d1\u9001\u6d88\u606f")),(0,a.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u62df\u8eab\u4efd\u5411\u6307\u5b9a\u7528\u6237\u6216\u7fa4\u7ec4\u53d1\u9001\u6d88\u606f\uff0c\u4e5f\u53ef\u7528\u4e8e\u4ece\u5176\u4ed6\u5e73\u53f0\u5bfc\u5165\u5386\u53f2\u8bb0\u5f55\u3002")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/msg/send_msg")," ")),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a\uff0c\u5efa\u8bae\u4f7f\u7528\u65f6\u95f4\u6233\uff0c\u5728\u6bcf\u4e2a\u8bf7\u6c42\u4e2d\u72ec\u7acb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/apis/authenticationManagement/getAdminToken"},"\u7ba1\u7406\u5458 token"))))),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "openIMAdmin",\n  "recvID": "2839678182",\n  "groupID": "",\n  "senderNickname": "openIMAdmin-Gordon",\n  "senderFaceURL": "http://www.head.com",\n  "senderPlatformID": 1,\n  "content": {\n    "content": "hello!!"\n  },\n  "contentType": 101,\n  "sessionType": 1,\n  "isOnlineOnly": false,\n  "notOfflinePush": false,\n  "sendTime": 1695212630740,\n  "offlinePushInfo": {\n    "title": "send message",\n    "desc": "",\n    "ex": "",\n    "iOSPushSound": "default",\n    "iOSBadgeCount": true\n  },\n  "ex": "ex"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sendID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u901a\u77e5\u53f7ID\uff0c\u6216\u7528\u6237ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"recvID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005ID\uff0csessionType1\u6216\u80054\u65f6\u5fc5\u586b\uff0c\u5982\u679c\u662f\u7fa4\u804a\u5219\u4e0d\u586b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"groupID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4ID\uff0csessionType3\u65f6\u5fc5\u586b\uff0c\u5982\u679c\u4e3a\u5355\u804a\u5219\u4e0d\u586b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"senderNickname"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u8005\u6635\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"senderFaceURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u8005\u5934\u50cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"senderPlatformID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u8005\u7684",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u7ec8\u7aef\u7c7b\u578b"),"\uff0c\u6a21\u62df\u7528\u6237\u53d1\u9001\u65f6\u586b\u5199\uff0c\u53d6\u503c\u4e3a1-9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u5185\u90e8\u662fjson \u5bf9\u8c61\uff0c\u5176\u4ed6\u6d88\u606f\u7684\u8be6\u7ec6\u5b57\u6bb5\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/contentDescription/#content-%E5%85%B7%E4%BD%93%E5%86%85%E5%AE%B9-"},"\u6d88\u606f\u7c7b\u578b\u683c\u5f0f\u63cf\u8ff0\u6587\u6863"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"content.content"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"contentType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/contentDescription"},"\u6d88\u606f\u7c7b\u578b"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessionType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u4f1a\u8bdd\u7c7b\u578b"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isOnlineOnly"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005\u5728\u7ebf\u624d\u80fd\u6536\u5230\uff0c\u5426\u5219\u5c06\u4f1a\u4e22\u5931")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"notOfflinePush"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8fdb\u884c\u79bb\u7ebf\u63a8\u9001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u65f6\u95f4\uff0c\u4ec5\u5bfc\u5165\u6d88\u606f\u65f6\u586b\u5199\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u63a8\u9001\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u5982\u679c\u4e0d\u586b\u5199\uff0c\u4f7f\u7528\u670d\u52a1\u5668\u9ed8\u8ba4\u63a8\u9001\u6807\u9898\u3002notOfflinePush\u4e3atrue\u65f6\u8be5\u5b57\u6bb5\u4e0d\u4f1a\u4f7f\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.title"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6807\u9898")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.desc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u5177\u4f53\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.ex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSPushSound"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"IOS\u7684\u63a8\u9001\u58f0\u97f3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSBadgeCount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"IOS\u63a8\u9001\u6d88\u606f\u662f\u5426\u8ba1\u5165\u684c\u9762\u56fe\u6807\u672a\u8bfb\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ex"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")))),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "serverMsgID": "8698dd5d163dd79b8fdfa333fee06f40",\n    "clientMsgID": "1ca0e4cf279ad5cce6b28331b2b42092",\n    "sendTime": 1679558586210\n  }\n}\n')),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801\uff0c0\u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"serverMsgID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u6d88\u606fID\uff0c\u9884\u7559\u5b57\u6bb5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clientMsgID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u6d88\u606fID\uff0c\u6b64ID\u4e3a\u6d88\u606f\u552f\u4e00ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u53d1\u9001\u7684\u65f6\u95f4")))),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801\uff0c\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}f.isMDXComponent=!0}}]);