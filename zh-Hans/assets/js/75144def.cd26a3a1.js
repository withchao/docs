"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[82573],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=m(r),g=n,k=d["".concat(o,".").concat(g)]||d[g]||c[g]||l;return r?a.createElement(k,i(i({ref:e},u),{},{components:r})):a.createElement(k,i({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19346:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>d});r(67294);var a=r(3905);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const p={sidebar_position:18,title:"\u7981\u8a00\u7fa4\u6210\u5458",hide_title:!0},o=void 0,m={unversionedId:"apis/groupManagement/muteGroupMember",id:"apis/groupManagement/muteGroupMember",title:"\u7981\u8a00\u7fa4\u6210\u5458",description:"\u7981\u8a00\u7fa4\u6210\u5458",source:"@site/docs/restapi/apis/groupManagement/muteGroupMember.mdx",sourceDirName:"apis/groupManagement",slug:"/apis/groupManagement/muteGroupMember",permalink:"/zh-Hans/restapi/apis/groupManagement/muteGroupMember",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/groupManagement/muteGroupMember.mdx",tags:[],version:"current",lastUpdatedAt:1735178587,formattedLastUpdatedAt:"2024\u5e7412\u670826\u65e5",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"\u7981\u8a00\u7fa4\u6210\u5458",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u53d6\u6d88\u7fa4\u7981\u8a00",permalink:"/zh-Hans/restapi/apis/groupManagement/cancelMuteGroup"},next:{title:"\u53d6\u6d88\u7981\u8a00\u7fa4\u6210\u5458",permalink:"/zh-Hans/restapi/apis/groupManagement/cancelMuteGroupMember"}},u={},d=[{value:"\u7981\u8a00\u7fa4\u6210\u5458",id:"\u7981\u8a00\u7fa4\u6210\u5458",level:2},{value:"\u7b80\u8981\u63cf\u8ff0",id:"\u7b80\u8981\u63cf\u8ff0",level:3},{value:"\u8bf7\u6c42\u65b9\u5f0f",id:"\u8bf7\u6c42\u65b9\u5f0f",level:3},{value:"\u8bf7\u6c42URL",id:"\u8bf7\u6c42url",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b",level:3},{value:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e",level:3}],c={toc:d},g="wrapper";function k(t){var{components:e}=t,r=i(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){n(t,e,r[e])}))}return t}({},c,r),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("h2",{id:"\u7981\u8a00\u7fa4\u6210\u5458"},"\u7981\u8a00\u7fa4\u6210\u5458")),(0,a.kt)("h3",{id:"\u7b80\u8981\u63cf\u8ff0"},"\u7b80\u8981\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7981\u8a00\u7fa4\u6210\u5458\u3002")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u5f0f"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,a.kt)("h3",{id:"\u8bf7\u6c42url"},"\u8bf7\u6c42URL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/group/mute_group_member"))),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a\uff0c\u5efa\u8bae\u4f7f\u7528\u65f6\u95f4\u6233\uff0c\u5728\u6bcf\u4e2a\u8bf7\u6c42\u4e2d\u72ec\u7acb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"token"),(0,a.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/restapi/apis/authenticationManagement/getAdminToken"},"\u7ba1\u7406\u5458 token"))))),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"},"\u8bf7\u6c42\u53c2\u6570\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "groupID": "889944039",\n  "userID": "2824146701",\n  "mutedSeconds": 10\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"groupID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mutedSeconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"\u88ab\u7981\u8a00\u7684\u79d2\u6570")))),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": ""\n}\n')),(0,a.kt)("h3",{id:"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u6210\u529f\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801\uff0c0\u8868\u793a\u6210\u529f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f\uff0c\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"data"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u901a\u7528\u6570\u636e\u5bf9\u8c61\uff0c\u5177\u4f53\u7ed3\u6784\u89c1\u4e0b\u65b9")))),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,a.kt)("h3",{id:"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"},"\u5931\u8d25\u8fd4\u56de\u793a\u4f8b\u7684\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7801\uff0c\u5177\u4f53\u67e5\u770b\u5168\u5c40\u9519\u8bef\u7801\u6587\u6863")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u7b80\u8981\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u8be6\u7ec6\u4fe1\u606f")))))}k.isMDXComponent=!0}}]);