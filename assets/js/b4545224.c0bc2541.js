"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[89214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:11.3,toc_min_heading_level:2,toc_max_heading_level:2},s="createFileMessageByFile",p={unversionedId:"api/message/createFileMessageByFile",id:"api/message/createFileMessageByFile",title:"createFileMessageByFile",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/createFileMessageByFile.mdx",sourceDirName:"api/message",slug:"/api/message/createFileMessageByFile",permalink:"/sdks/api/message/createFileMessageByFile",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createFileMessageByFile.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"Jan 3, 2025",sidebarPosition:11.3,frontMatter:{sidebar_position:11.3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createFileMessageByURL",permalink:"/sdks/api/message/createFileMessageByURL"},next:{title:"createMergeMessage",permalink:"/sdks/api/message/createMergeMessage"}},u={},c=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=m("Tabs"),g=m("TabItem"),f={toc:c},y="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(y,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createfilemessagebyfile"},"createFileMessageByFile"),(0,r.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,r.kt)("admonition",{title:"Description",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Create a file message.")),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only supported on the web platform. It's recommended not to use it for large file uploads. For uploading files larger than 1G, it's advised to use the ",(0,r.kt)("a",{parentName:"p",href:"/sdks/api/message/createFileMessageByURL"},"createFileMessageByURL")," interface.")),(0,r.kt)(d,{groupId:"sdks-language",values:[{label:"Browser/Electron/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,r.kt)(g,{value:"Web",mdxType:"TabItem"},(0,r.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createFileMessageByFile({\n  filePath: string;\n  fileName: string;\n  uuid: string;\n  sourceUrl: string;\n  fileSize: number;\n  fileType: string;\n  file: File;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,r.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute path of the file, use an empty string if not available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"File name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique file ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Just use an empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileSize"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"File size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"File type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"File object")))),(0,r.kt)("h3",{id:"return-result"},"Return Result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful callback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise<",(0,r.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Failed callback")))),(0,r.kt)("h3",{id:"code-example"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { getSDK } from '@openim/client-sdk';\n// const IMSDK = getSDK();\n\nIMSDK.createFileMessageByFile({\n  filePath: videoFile.path || '',\n  fileName: videoFile.name,\n  uuid: 'uuid',\n  sourceUrl: '',\n  fileSize: videoFile.size,\n  fileType: videoFile.type,\n  file: videoFile,\n})\n  .then(({ data }) => {\n    // Success callback\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Error callback\n  });\n")))))}k.isMDXComponent=!0}}]);