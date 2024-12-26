"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[86554],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,g=m["".concat(o,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(g,p(p({ref:e},d),{},{components:n})):r.createElement(g,p({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94135:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03",hide_title:!0},o="\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03",u={unversionedId:"webhooks/group/sendGroupMsgAfter",id:"webhooks/group/sendGroupMsgAfter",title:"\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/docs/restapi/webhooks/group/sendGroupMsgAfter.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/sendGroupMsgAfter",permalink:"/zh-Hans/restapi/webhooks/group/sendGroupMsgAfter",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/sendGroupMsgAfter.mdx",tags:[],version:"current",lastUpdatedAt:1735178587,formattedLastUpdatedAt:"2024\u5e7412\u670826\u65e5",frontMatter:{title:"\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u9000\u51fa\u7fa4\u7ec4\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/quitGroup"},next:{title:"\u53d1\u9001\u7fa4\u6d88\u606f\u524d\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/sendGroupMsgBefore"}},d={},m=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",level:2},{value:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42 URL \u793a\u4f8b",id:"\u8bf7\u6c42-url-\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u793a\u4f8b",id:"\u8bf7\u6c42\u5305\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5e94\u7b54\u5305\u793a\u4f8b",id:"\u5e94\u7b54\u5305\u793a\u4f8b",level:2},{value:"\u6210\u529f\u54cd\u5e94",id:"\u6210\u529f\u54cd\u5e94",level:3},{value:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",level:2}],k={toc:m},s="wrapper";function g(t){var{components:e}=t,n=p(t,["components"]);return(0,r.kt)(s,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03"},"\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03"),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8be5\u56de\u8c03\u5b9e\u65f6\u67e5\u770b\u7528\u6237\u7684\u7fa4\u53d1\u6d88\u606f\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u77e5 App \u540e\u53f0\u6709\u7fa4\u7ec4\u6d88\u606f\u53d1\u9001\u6210\u529f\u3002"),(0,r.kt)("li",{parentName:"ul"},"App \u636e\u6b64\u8fdb\u884c\u5fc5\u8981\u7684\u6570\u636e\u540c\u6b65\u3002")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u542f\u7528\u56de\u8c03\uff0c\u5fc5\u987b\u914d\u7f6e\u56de\u8c03 URL\uff0c\u5e76\u5f00\u542f\u672c\u6761\u56de\u8c03\u534f\u8bae\u5bf9\u5e94\u7684\u5f00\u5173\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"\u56de\u8c03\u8bf4\u660e")," \u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5411\u662f OpenIMServer \u5411 App \u540e\u53f0\u53d1\u8d77 HTTP/HTTPS POST \u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"APP \u4e1a\u52a1\u670d\u52a1\u7aef\u9700\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u54cd\u5e94\u6b64\u8bf7\u6c42\u3002")),(0,r.kt)("h2",{id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"},"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App \u7528\u6237\u901a\u8fc7\u5ba2\u6237\u7aef\u53d1\u9001\u7fa4\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"App \u7ba1\u7406\u5458\u901a\u8fc7 REST API \u53d1\u9001\u7fa4\u7ec4\u6d88\u606f\u3002")),(0,r.kt)("h2",{id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a"},"\u56de\u8c03\u53d1\u751f\u65f6\u673a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7fa4\u7ec4\u6d88\u606f\u6210\u529f\u53d1\u9001\u4e4b\u540e\u3002")),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8bf7\u6c42-url-\u793a\u4f8b"},"\u8bf7\u6c42 URL \u793a\u4f8b"),(0,r.kt)("p",null,"\u6b64\u5904",(0,r.kt)("inlineCode",{parentName:"p"},"CallbackCommand"),"\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfterSendGroupMsgCommand")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterSendGroupMsgCommand?contenttype=json\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u793a\u4f8b"},"\u8bf7\u6c42\u5305\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "sender123",\n  "callbackCommand": "callbackAfterSendGroupMsgCommand",\n  "serverMsgID": "serverMsg123",\n  "clientMsgID": "clientMsg123",\n  "operationID": "1646445464564",\n  "senderPlatformID": 1,\n  "senderNickname": "JohnDoe",\n  "sessionType": 2,\n  "msgFrom": 1,\n  "contentType": 1,\n  "status": 1,\n  "sendTime": 1673048592000,\n  "createTime": 1673048592000,\n  "content": "Hello, this is a group message!",\n  "seq": 1,\n  "atUserList": ["user456", "user789"],\n  "faceURL": "http://example.com/path/to/sender/face/image.png",\n  "ex": "Extra data",\n  "groupID": "group123"\n}\n')),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u8c61"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u547d\u4ee4\uff0c\u8fd9\u91cc\u662f\u53d1\u9001\u7fa4\u6d88\u606f\u540e\u7684\u56de\u8c03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverMsgID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u751f\u6210\u7684\u6d88\u606fID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientMsgID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u751f\u6210\u7684\u6d88\u606fID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senderPlatformID"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u7684\u5e73\u53f0ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senderNickname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u7684\u6635\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionType"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgFrom"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6765\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentType"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9\u7684\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sendTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u7684\u65f6\u95f4\u6233\uff08\u6beb\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createTime"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u521b\u5efa\u7684\u65f6\u95f4\u6233\uff08\u6beb\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7684\u5e8f\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7ec4\u6210\u5458ID\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"senderFaceURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u7684\u5934\u50cfURL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u989d\u5916\u7684\u6570\u636e\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7ec4\u7684\u552f\u4e00\u6807\u8bc6\u7b26")))),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u793a\u4f8b"},"\u5e94\u7b54\u5305\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u6210\u529f\u54cd\u5e94"},"\u6210\u529f\u54cd\u5e94"),(0,r.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u540c\u6b65\u6570\u636e\u540e\uff0c\u53d1\u9001\u56de\u8c03\u5e94\u7b54\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": ""\n}\n')),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e1a\u52a1\u7cfb\u7edf\u7684\u56de\u8c03\u662f\u5426\u6b63\u786e\u6267\u884c\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u8868\u793a\u64cd\u4f5c\u6210\u529f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u6b64\u5904\u586b0\u4ee3\u8868\u5ffd\u7565\u56de\u8c03\u7ed3\u679c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u7b80\u5355\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b65\u6267\u884c\u6307\u4ee4\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\u8868\u793a\u62d2\u7edd\u7ee7\u7eed\u6267\u884c\uff0cactionCode\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u65f6\u8bbe\u7f6e\u3002")))))}g.isMDXComponent=!0}}]);