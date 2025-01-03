"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[76071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,s=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return r?n.createElement(s,o(o({ref:t},c),{},{components:r})):n.createElement(s,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},74186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",hide_title:!0},p="\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",u={unversionedId:"webhooks/group/kickGroupMember",id:"webhooks/group/kickGroupMember",title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/docs/restapi/webhooks/group/kickGroupMember.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/kickGroupMember",permalink:"/zh-Hans/restapi/webhooks/group/kickGroupMember",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/kickGroupMember.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",frontMatter:{title:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u6210\u5458\u52a0\u5165\u7fa4\u7ec4\u4e4b\u540e\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/joinGroupAfter"},next:{title:"\u7fa4\u6210\u5458\u8fdb\u7fa4\u4e4b\u524d\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/group/memberJoinGroupBefore"}},c={},d=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",level:2},{value:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42 URL \u793a\u4f8b",id:"\u8bf7\u6c42-url-\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u793a\u4f8b",id:"\u8bf7\u6c42\u5305\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5e94\u7b54\u5305\u793a\u4f8b",id:"\u5e94\u7b54\u5305\u793a\u4f8b",level:2},{value:"\u5141\u8bb8\u8e22\u51fa",id:"\u5141\u8bb8\u8e22\u51fa",level:3},{value:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",level:2}],m={toc:d},k="wrapper";function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03"},"\u8e22\u9664\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03"),(0,n.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,n.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8be5\u56de\u8c03\u5904\u7406\u7fa4\u7ec4\u7ba1\u7406\u5458\u8e22\u51fa\u6210\u5458\u7684\u8bf7\u6c42\uff0c\u5305\u62ec\uff1a\u5bf9\u7528\u6237\u9000\u7fa4\u8fdb\u884c\u5b9e\u65f6\u8bb0\u5f55\uff08\u4f8b\u5982\u8bb0\u5f55\u65e5\u5fd7\uff0c\u6216\u8005\u540c\u6b65\u5230\u5176\u4ed6\u7cfb\u7edf\uff09\u3002"),(0,n.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u542f\u7528\u56de\u8c03\uff0c\u5fc5\u987b\u914d\u7f6e\u56de\u8c03 URL\uff0c\u5e76\u5f00\u542f\u672c\u6761\u56de\u8c03\u534f\u8bae\u5bf9\u5e94\u7684\u5f00\u5173\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"\u56de\u8c03\u8bf4\u660e")," \u6587\u6863\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5411\u662f OpenIMServer \u5411 App \u540e\u53f0\u53d1\u8d77 HTTP/HTTPS POST \u8bf7\u6c42\u3002"),(0,n.kt)("li",{parentName:"ul"},"APP \u4e1a\u52a1\u670d\u52a1\u7aef\u9700\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u54cd\u5e94\u6b64\u8bf7\u6c42\u3002")),(0,n.kt)("h2",{id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"},"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7fa4\u7ec4\u7ba1\u7406\u5458\u6216\u62e5\u6709\u8005\u901a\u8fc7\u5ba2\u6237\u7aef\u5c1d\u8bd5\u8e22\u51fa\u67d0\u4e2a\u6216\u67d0\u4e9b\u7fa4\u7ec4\u6210\u5458\u3002")),(0,n.kt)("h2",{id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a"},"\u56de\u8c03\u53d1\u751f\u65f6\u673a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OpenIMServer \u6536\u5230\u8e22\u51fa\u7fa4\u7ec4\u6210\u5458\u7684\u8bf7\u6c42\u4e4b\u540e\uff0c\u5904\u7406\u8be5\u8bf7\u6c42\u524d\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,n.kt)("h3",{id:"\u8bf7\u6c42-url-\u793a\u4f8b"},"\u8bf7\u6c42 URL \u793a\u4f8b"),(0,n.kt)("p",null,"\u6b64\u5904",(0,n.kt)("inlineCode",{parentName:"p"},"CallbackCommand"),"\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"callbackAfterKickGroupCommand")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterKickGroupCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5305\u793a\u4f8b"},"\u8bf7\u6c42\u5305\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackAfterKickGroupCommand",\n  "groupID": "G001",\n  "kickedUserIDs": ["user123", "user456"],\n  "reason": "Violation of group rules"\n}\n')),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u547d\u4ee4\uff0c\u8fd9\u91cc\u662f\u8e22\u51fa\u7fa4\u7ec4\u6210\u5458\u7684\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7ec4\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kickedUserIDs"),(0,n.kt)("td",{parentName:"tr",align:null},"[]string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab\u8e22\u51fa\u7684\u7fa4\u7ec4\u6210\u5458\u7684\u7528\u6237ID\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8e22\u51fa\u6210\u5458\u7684\u539f\u56e0")))),(0,n.kt)("h2",{id:"\u5e94\u7b54\u5305\u793a\u4f8b"},"\u5e94\u7b54\u5305\u793a\u4f8b"),(0,n.kt)("h3",{id:"\u5141\u8bb8\u8e22\u51fa"},"\u5141\u8bb8\u8e22\u51fa"),(0,n.kt)("p",null,"\u5141\u8bb8\u8e22\u51fa\u6307\u5b9a\u7684\u7fa4\u7ec4\u6210\u5458\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actionCode": 0,\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "nextCode": 0\n}\n')),(0,n.kt)("h2",{id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e1a\u52a1\u7cfb\u7edf\u7684\u56de\u8c03\u662f\u5426\u6b63\u786e\u6267\u884c\u3002",(0,n.kt)("inlineCode",{parentName:"td"},"0"),"\u8868\u793a\u64cd\u4f5c\u6210\u529f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u6b64\u5904\u586b0\u4ee3\u8868\u5ffd\u7565\u56de\u8c03\u7ed3\u679c\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u7b80\u5355\u9519\u8bef\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b65\u6267\u884c\u6307\u4ee4\uff0c",(0,n.kt)("inlineCode",{parentName:"td"},"1"),"\u8868\u793a\u62d2\u7edd\u7ee7\u7eed\u6267\u884c\uff0cactionCode\u7b49\u4e8e",(0,n.kt)("inlineCode",{parentName:"td"},"0"),"\u65f6\u8bbe\u7f6e\u3002")))))}s.isMDXComponent=!0}}]);