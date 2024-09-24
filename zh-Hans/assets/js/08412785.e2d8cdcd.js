"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[82486],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},f="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),f=m(a),s=r,k=f["".concat(p,".").concat(s)]||f[s]||g[s]||l;return a?n.createElement(k,i(i({ref:e},o),{},{components:a})):n.createElement(k,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[f]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2661:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={sidebar_position:2,title:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",hide_title:!0},p=void 0,m={unversionedId:"apis/messageManagement/batchSendMessage",id:"apis/messageManagement/batchSendMessage",title:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",description:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",source:"@site/docs/restapi/apis/messageManagement/batchSendMessage.mdx",sourceDirName:"apis/messageManagement",slug:"/apis/messageManagement/batchSendMessage",permalink:"/zh-Hans/restapi/apis/messageManagement/batchSendMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/messageManagement/batchSendMessage.mdx",tags:[],version:"current",lastUpdatedAt:1727160122,formattedLastUpdatedAt:"2024\u5e749\u670824\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u6d88\u606f",permalink:"/zh-Hans/restapi/apis/messageManagement/sendMessage"},next:{title:"\u5220\u9664\u7528\u6237\u6240\u6709\u6d88\u606f",permalink:"/zh-Hans/restapi/apis/messageManagement/deleteUserAllMessage"}},o={},f=[{value:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",id:"\u6279\u91cf\u53d1\u9001\u6d88\u606f",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],g={toc:f},s="wrapper";function k(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(s,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"\u6279\u91cf\u53d1\u9001\u6d88\u606f"},"\u6279\u91cf\u53d1\u9001\u6d88\u606f")),(0,n.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6279\u91cf\u53d1\u9001\u6d88\u606f\u3002")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,n.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/msg/batch_send_msg")," ")),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a\uff0c\u5efa\u8bae\u4f7f\u7528\u65f6\u95f4\u6233\uff0c\u5728\u6bcf\u4e2a\u8bf7\u6c42\u4e2d\u72ec\u7acb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458token")))),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "recvIDs": [\n        "9948077346",\n        "9371245179"\n    ],\n    "sendID": "3473643418",\n    "senderNickname": "\u675c\u5e73",\n    "senderFaceURL": "http://nvpydodr.ae/ylyqu",\n    "senderPlatformID": 2,\n    "content": {\n        "content": "hello!!"\n    },\n    "contentType": 101,\n    "sessionType": 1,\n    "isOnlineOnly": false,\n    "notOfflinePush": false,\n    "sendTime": 1340619319058,\n    "offlinePushInfo": {\n        "title": "1213",\n        "desc": "in eiusmod magna",\n        "ex": "ex",\n        "iOSPushSound": "in Duis ut sunt nostrud",\n        "iOSBadgeCount": true\n    },\n    "ex": "ex",\n    "isSendAll": true\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recvIDs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8005ID\u5217\u8868\uff0csessionType1\u6216\u80054\uff0c\u5fc5\u586b\uff0c\u4e3a\u63a5\u6536\u65b9\u7528\u6237ID\uff0c\u5982\u679c\u662f\u7fa4\u804a\u5219\u4e0d\u586b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005ID(\u53ef\u4ee5\u4e3a\u7ba1\u7406\u5458ID\uff0c\u53ef\u4ee5\u4e3a\u7528\u6237ID)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderNickname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u6635\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderFaceURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u5934\u50cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderPlatformID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u5e73\u53f0\u53f7\uff0c\u6a21\u62df\u7528\u6237\u53d1\u9001\u65f6\u586b\u5199\uff0c 1-",">","IOS,2-",">","Android,3-",">","Windows,4-",">","OSX,5-",">","Web,5-",">","MiniWeb,7-",">","Linux,8-",">","AndroidPad,9-",">","IPad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u5185\u90e8\u662fjson \u5bf9\u8c61\uff0c\u5176\u4ed6\u6d88\u606f\u7684\u8be6\u7ec6\u5b57\u6bb5\u8bf7\u53c2\u8003\u6d88\u606f\u7c7b\u578b\u683c\u5f0f\u63cf\u8ff0\u6587\u6863")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contentType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b\uff0c101\u8868\u793a\u6587\u672c\uff0c102\u8868\u793a\u56fe\u7247..\u8be6\u7ec6\u53c2\u8003\u6d88\u606f\u7c7b\u578b\u683c\u5f0f\u63cf\u8ff0\u6587\u6863")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessionType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u7c7b\u578b\uff0c\u53d1\u9001\u7684\u6d88\u606f\u662f\u5355\u804a\u8fd8\u662f\u7fa4\u804a,\u5355\u804a\u4e3a1\uff0c\u7fa4\u804a\uff08\u666e\u901a\u5199\u6269\u6563\uff09\u4e3a2,\u5927\u7fa4(\u8bfb\u6269\u6563\u63a5\u53e3)\u4e3a3\uff0c\u901a\u77e5\u4f1a\u8bdd\u4e3a4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isOnlineOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u5b57\u6bb5\u8bbe\u7f6e\u4e3atrue\u65f6\u5019\uff0c\u53d1\u9001\u7684\u6d88\u606f\u670d\u52a1\u5668\u4e0d\u4f1a\u5b58\u50a8\uff0c\u63a5\u6536\u8005\u5728\u7ebf\u624d\u4f1a\u6536\u5230\uff0c\u4e0d\u5728\u7ebf\u8be5\u6d88\u606f\u4e22\u5931")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"notOfflinePush"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8be5\u5b57\u6bb5\u8bbe\u7f6e\u4e3atrue\u65f6\u5019\uff0c\u53d1\u9001\u7684\u6d88\u606f\u5728\u7528\u6237\u79bb\u7ebf\u65f6\u5c06\u4e0d\u4f1a\u8fdb\u884c\u79bb\u7ebf\u63a8\u9001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u63a8\u9001\u7684\u5177\u4f53\u5185\u5bb9\uff0c\u5982\u679c\u4e0d\u586b\u5199\uff0c\u4f7f\u7528\u670d\u52a1\u5668\u9ed8\u8ba4\u63a8\u9001\u6807\u9898")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u6807\u9898")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a8\u9001\u7684\u5177\u4f53\u63cf\u8ff0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSPushSound"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"IOS\u7684\u63a8\u9001\u58f0\u97f3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSBadgeCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"IOS\u63a8\u9001\u6d88\u606f\u662f\u5426\u8ba1\u5165\u684c\u9762\u56fe\u6807\u672a\u8bfb\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isSendAll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53d1\u9001\u7ed9\u5168\u90e8\u4eba")))),(0,n.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "data": {\n        "results": [\n            {\n                "serverMsgID": "b30cb040685c1ff3e92b32d25826a06e",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "imAdmin"\n            },\n            {\n                "serverMsgID": "5f0987ef1bbdcd565c85befb1a084035",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "3473643418"\n            },\n            {\n                "serverMsgID": "9ba70b63487559db1857ce324ae3bcf0",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "9948077346"\n            },\n            {\n                "serverMsgID": "56f483592c3ee9fff1465d9b23277408",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "9371245179"\n            },\n            {\n                "serverMsgID": "ee8b6bbd3190753bc0713c1085ccb479",\n                "clientMsgID": "ec5792358392cf9168eff64adfa4ac6a",\n                "sendTime": 1340619319058,\n                "recvID": "6412123282"\n            }\n        ],\n        "failedUserIDs": null\n    }\n}\n')),(0,n.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,0\u8868\u793a\u6210\u529f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data.results"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7ed3\u679c\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"serverMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u5668\u6d88\u606fID\uff0c\u9884\u7559\u5b57\u6bb5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clientMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u6d88\u606fID\uff0c\u6b64ID\u4e3a\u6d88\u606f\u552f\u4e00ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6d88\u606f\u53d1\u9001\u7684\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recvID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u6536\u8005ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data.failedUserIDs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"array"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5411\u5176\u53d1\u9001\u6d88\u606f\u5931\u8d25\u7684\u7528\u6237ID\u5217\u8868")))),(0,n.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801,\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}k.isMDXComponent=!0}}]);