"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[50124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},s="onConversationChanged",p={unversionedId:"callback/onConversationChanged",id:"callback/onConversationChanged",title:"onConversationChanged",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/callback/onConversationChanged.mdx",sourceDirName:"callback",slug:"/callback/onConversationChanged",permalink:"/zh-Hans/sdks/callback/onConversationChanged",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onConversationChanged.mdx",tags:[],version:"current",lastUpdatedAt:1706619253,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onBlackDeleted",permalink:"/zh-Hans/sdks/callback/onBlackDeleted"},next:{title:"onFriendAdded",permalink:"/zh-Hans/sdks/callback/onFriendAdded"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-3",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u8fd4\u56de\u539f\u578b",id:"\u8fd4\u56de\u539f\u578b-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u8c03\u7528\u793a\u4f8b",id:"\u8c03\u7528\u793a\u4f8b-1",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("Tabs"),k=c("TabItem"),b={toc:u},v="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(v,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onconversationchanged"},"onConversationChanged"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u67d0\u4e9b\u4f1a\u8bdd\u7684\u5173\u952e\u4fe1\u606f\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4f1a\u89e6\u53d1\u8be5\u56de\u8c03\uff0c\u4f8b\u5982\u4f1a\u8bdd\u7684\u672a\u8bfb\u6570\u53d1\u751f\u53d8\u5316\uff0c\u4f1a\u8bdd\u7684\u6700\u540e\u4e00\u6761\u6d88\u606f\u53d1\u751f\u53d8\u5316\u7b49\u3002")),(0,a.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,a.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b"},"\u8fd4\u56de\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function(List<ConversationInfo> list)? onConversationChanged;\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"List<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/conversation/conversationInfo"},"ConversationInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u4fe1\u606f"))))),(0,a.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-1"},"\u8fd4\u56de\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onConversationChanged:(NSArray <OIMConversationInfo *> *)conversations;\n\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conversations"),(0,a.kt)("td",{parentName:"tr",align:null},"NSArray < ",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/conversation/conversationInfo"},"OIMConversationInfo")," ","*"," >"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u4fe1\u606f"))))),(0,a.kt)(k,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-2"},"\u8fd4\u56de\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0}," void onConversationChanged(List<ConversationInfo> list);\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list"),(0,a.kt)("td",{parentName:"tr",align:null},"List<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/conversation/conversationInfo"},"ConversationInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u4fe1\u606f"))))),(0,a.kt)(k,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-3"},"\u8fd4\u56de\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonConversationChanged(data: WSEvent<ConversationItem[]>): void;\n\n")),(0,a.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b"},"\u8c03\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from 'open-im-sdk-wasm';\n// or\n// import { OpenIMSDK, CbEvents } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(\n  CbEvents.OnConversationChanged,\n  ({ data }: WSEvent<ConversationItem[]>) => {\n    // data \u4f1a\u8bdd\u4fe1\u606f\n  }\n);\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/conversation/conversationInfo"},"ConversationItem"),"[]>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u4fe1\u606f"))))),(0,a.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u8fd4\u56de\u539f\u578b-4"},"\u8fd4\u56de\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonConversationChanged(data: WSEvent<ConversationItem[]>): void;\n\n")),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WSEvent"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/conversation/conversationInfo"},"ConversationItem"),"[]>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bdd\u4fe1\u606f")))),(0,a.kt)("h3",{id:"\u8c03\u7528\u793a\u4f8b-1"},"\u8c03\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(\n  IMSDK.IMEvents.OnConversationChanged,\n  ({ data }: WSEvent<ConversationItem[]>) => {\n    // data \u4f1a\u8bdd\u4fe1\u606f\n  }\n);\n")))))}g.isMDXComponent=!0}}]);