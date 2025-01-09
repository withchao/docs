"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[34150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"React Native",hide_title:!0,sidebar_position:4},s=void 0,l={unversionedId:"quickstart/reactNative",id:"quickstart/reactNative",title:"React Native",description:"\u4f7f\u7528 Demo \ud83d\ude80",source:"@site/docs/sdks/quickstart/reactNative.mdx",sourceDirName:"quickstart",slug:"/quickstart/reactNative",permalink:"/zh-Hans/sdks/quickstart/reactNative",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/reactNative.mdx",tags:[],version:"current",lastUpdatedAt:1736416519,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",sidebarPosition:4,frontMatter:{title:"React Native",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Flutter",permalink:"/zh-Hans/sdks/quickstart/flutter"},next:{title:"Browser",permalink:"/zh-Hans/sdks/quickstart/browser"}},p={},u=[{value:"\u4f7f\u7528 Demo \ud83d\ude80",id:"\u4f7f\u7528-demo-",level:2},{value:"\u6ce8\u610f\u4e8b\u9879 \u2757\ufe0f",id:"\u6ce8\u610f\u4e8b\u9879-\ufe0f",level:2},{value:"\u96c6\u6210\u6b65\u9aa4 ( React Native CLI )",id:"\u96c6\u6210\u6b65\u9aa4--react-native-cli-",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u521d\u59cb\u5316 SDK",id:"2-\u521d\u59cb\u5316-sdk",level:3},{value:"3. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c",id:"3-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c",level:3},{value:"4. \u6536\u53d1\u6d88\u606f",id:"4-\u6536\u53d1\u6d88\u606f",level:3}],d={toc:u},m="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo-"},"\u4f7f\u7528 Demo \ud83d\ude80"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-reactnative-demo"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIMSDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879-\ufe0f"},"\u6ce8\u610f\u4e8b\u9879 \u2757\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"open-im-sdk-rn@3.5.1")," \u5305\u542b\u4e86\u91cd\u5927\u7684\u7834\u574f\u6027\u66f4\u65b0\u3002\u5982\u679c\u60a8\u9700\u8981\u5347\u7ea7\uff0c\u8bf7\u68c0\u67e5\u4f20\u5165\u53c2\u6570\u548c\u8fd4\u56de\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0e\u5176\u4ed6SDK\u4e0d\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"React Native SDK")," ",(0,r.kt)("strong",{parentName:"p"},"operationID")," \u4e0d\u662f\u53ef\u9009\u7684\uff0c\u800c\u662f\u5fc5\u586b\u7684\u3002\uff08operationID \u7528\u4e8e\u540e\u7aef\u65e5\u5fd7\u67e5\u8be2\uff09"))),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4--react-native-cli-"},"\u96c6\u6210\u6b65\u9aa4 ( React Native CLI )"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add open-im-sdk-rn\n")),(0,r.kt)("h3",{id:"2-\u521d\u59cb\u5316-sdk"},"2. \u521d\u59cb\u5316 SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN from 'open-im-sdk-rn';\nimport RNFS from 'react-native-fs';\n\nRNFS.mkdir(RNFS.DocumentDirectoryPath + '/tmp');\n\nOpenIMSDKRN.initSDK({\n  platformID: 2,  // 1: ios, 2: android\n  apiAddr: 'http://your-server-ip:10002',\n  wsAddr: 'ws://your-server-ip:10001',\n  dataDir: RNFS.DocumentDirectoryPath + '/tmp',\n  logLevel: 5,\n  isLogStandardOutput: true,\n}, 'opid');\n")),(0,r.kt)("h3",{id:"3-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c"},"3. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN, { OpenIMEmitter } from 'open-im-sdk-rn';\n\nOpenIMSDKRN.login({\n  userID: 'IM user ID',\n  token: 'IM user token',\n}, 'opid');\n\nOpenIMEmitter.addListener('onConnecting', () => {\n  console.log('onConnecting');\n});\n\nOpenIMEmitter.addListener('onConnectSuccess', () => {\n  console.log('onConnectSuccess');\n});\n\nOpenIMEmitter.addListener('onConnectFailed', ({ errCode, errMsg }) => {\n  console.log('onConnectFailed', errCode, errMsg);\n});\n")),(0,r.kt)("h3",{id:"4-\u6536\u53d1\u6d88\u606f"},"4. \u6536\u53d1\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import OpenIMSDKRN, { OpenIMEmitter } from 'open-im-sdk-rn';\nimport type { MessageItem } from 'open-im-sdk-rn';\n\nOpenIMEmitter.addListener('onRecvNewMessages', (data: MessageItem[]) => {\n  console.log('onRecvNewMessages', data);\n});\n\nconst message = await OpenIMSDKRN.createTextMessage('hello openim', 'opid');\n\nOpenIMSDKRN.sendMessage({\n  recvID: 'recipient user ID',\n  groupID: '',\n  message,\n}, 'opid')\n  .then(() => {\n    // Message sent successfully \u2709\ufe0f\n  })\n  .catch(err => {\n    // Failed to send message \u274c\n    console.log(err);\n  });\n")))}f.isMDXComponent=!0}}]);