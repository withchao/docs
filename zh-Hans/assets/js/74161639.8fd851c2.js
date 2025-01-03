"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[63172],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Mini Program",hide_title:!0,sidebar_position:7},c=void 0,l={unversionedId:"quickstart/miniProgram",id:"quickstart/miniProgram",title:"Mini Program",description:"\u96c6\u6210\u6b65\u9aa4",source:"@site/docs/sdks/quickstart/miniProgram.mdx",sourceDirName:"quickstart",slug:"/quickstart/miniProgram",permalink:"/zh-Hans/sdks/quickstart/miniProgram",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/miniProgram.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:7,frontMatter:{title:"Mini Program",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"uni-app",permalink:"/zh-Hans/sdks/quickstart/uniapp"},next:{title:"\u5404\u7aef SDK",permalink:"/zh-Hans/sdks/api/"}},p={},u=[{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u5f15\u5165 SDK",id:"2-\u5f15\u5165-sdk",level:3},{value:"3. \u767b\u9646",id:"3-\u767b\u9646",level:3},{value:"4. \u6536\u53d1\u6d88\u606f",id:"4-\u6536\u53d1\u6d88\u606f",level:3}],d={toc:u},m="wrapper";function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6b64\u7248\u672c jssdk \u9700\u8981\u914d\u5408\u65b0\u7248 IM Server\uff083.8.2+\uff09\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6b64\u7248\u672c jssdk \u76f4\u63a5\u548c IM Server\u901a\u4fe1\uff0c\u672c\u5730\u4e0d\u5b58\u50a8\u4efb\u4f55\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6b64\u7248\u672c jssdk \u76ee\u524d\u652f\u6301\u6240\u6709\u6846\u67b6 web \u5f00\u53d1\uff0c\u540c\u65f6\u517c\u5bb9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u548c uniapp\u3002"))),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @openim/client-sdk --save\n")),(0,r.kt)("h3",{id:"2-\u5f15\u5165-sdk"},"2. \u5f15\u5165 SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 SDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getSDK } from '@openim/client-sdk';\n\nconst IMSDK = getSDK();\n")),(0,r.kt)("h3",{id:"3-\u767b\u9646"},"3. \u767b\u9646"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getSDK, CbEvents, CallbackEvent } from '@openim/client-sdk';\n\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnConnecting, handleConnecting);\nIMSDK.on(CbEvents.OnConnectFailed, handleConnectFailed);\nIMSDK.on(CbEvents.OnConnectSuccess, handleConnectSuccess);\n\nIMSDK.login({\n  userID: 'IM user ID',\n  token: 'IM user token',\n  platformID: 5,\n  wsAddr: 'ws://your-server-ip:10001',\n  apiAddr: 'http://your-server-ip:10002',\n});\n\nfunction handleConnecting() {\n  // Connecting...\n}\n\nfunction handleConnectFailed({ errCode, errMsg }: CallbackEvent) {\n  // Connection failed \u274c\n  console.log(errCode, errMsg);\n}\n\nfunction handleConnectSuccess() {\n  // Connection successful \u2705\n}\n")),(0,r.kt)("h3",{id:"4-\u6536\u53d1\u6d88\u606f"},"4. \u6536\u53d1\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CbEvents, CallbackEvent, MessageItem } from '@openim/client-sdk';\n\n// Listenfor new messages \ud83d\udce9\nIMSDK.on(CbEvents.OnRecvNewMessages, handleNewMessages);\n\nconst message = (await IMSDK.createTextMessage('hello openim')).data;\n\nIMSDK.sendMessage({\n  recvID: 'recipient user ID',\n  groupID: '',\n  message,\n})\n  .then(() => {\n    // Message sent successfully \u2709\ufe0f\n  })\n  .catch(err => {\n    // Failed to send message \u274c\n    console.log(err);\n  });\n\nfunction handleNewMessages({ data }: CallbackEvent<MessageItem[]>) {\n  // New message list \ud83d\udce8\n  console.log(data);\n}\n")))}f.isMDXComponent=!0}}]);