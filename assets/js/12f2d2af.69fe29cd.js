"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[50320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:7,toc_min_heading_level:2,toc_max_heading_level:2},u="getTotalUnreadMsgCount",p={unversionedId:"api/conversation/getTotalUnreadMsgCount",id:"api/conversation/getTotalUnreadMsgCount",title:"getTotalUnreadMsgCount",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/conversation/getTotalUnreadMsgCount.mdx",sourceDirName:"api/conversation",slug:"/api/conversation/getTotalUnreadMsgCount",permalink:"/sdks/api/conversation/getTotalUnreadMsgCount",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/conversation/getTotalUnreadMsgCount.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"Jan 3, 2025",sidebarPosition:7,frontMatter:{sidebar_position:7,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"getConversationIDBySessionType",permalink:"/sdks/api/conversation/getConversationIDBySessionType"},next:{title:"markConversationMessageAsRead",permalink:"/sdks/api/conversation/markConversationMessageAsRead"}},s={},m=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Value",id:"return-value-1",level:3},{value:"Code Sample",id:"code-sample-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Code Sample",id:"code-sample-2",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Value",id:"return-value-2",level:3},{value:"Code Sample",id:"code-sample-3",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Value",id:"return-value-3",level:3},{value:"Code Sample",id:"code-sample-4",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-6",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Code Example",id:"code-example-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Tabs"),k=d("TabItem"),g={toc:m},N="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gettotalunreadmsgcount"},"getTotalUnreadMsgCount"),(0,a.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Get the total unread count of all conversations.")),(0,a.kt)(c,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<dynamic> getTotalUnreadMsgCount({\n    String? operationID,\n  })\n")),(0,a.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-value"},"Return Value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},"dynamic"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful Return")))),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    final count = await OpenIM.iMManager.conversationManager.getTotalUnreadMsgCount();\n    //todo\n"))),(0,a.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)getTotalUnreadMsgCountWithOnSuccess:(nullable OIMNumberCallback)onSuccess\n                                  onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,a.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-value-1"},"Return Value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onProgress"},"OIMNumberCallback")),(0,a.kt)("td",{parentName:"tr",align:null},"Successful Return")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed Return")))),(0,a.kt)("h3",{id:"code-sample-1"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.manager getTotalUnreadMsgCountWithOnSuccess:^(NSInteger number) {\n\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n\n}];\n\n"))),(0,a.kt)(k,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"   public void getTotalUnreadMsgCount(OnBase<String> base)\n")),(0,a.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"base"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase<String",">")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback Interface")))),(0,a.kt)("h3",{id:"code-sample-2"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    OpenIMClient.getInstance().conversationManager.getTotalUnreadMsgCount(new OnBase<String>() {\n              @Override\n              public void onError(int code, String error) {\n\n              }\n\n              @Override\n              public void onSuccess(String data) {\n\n              }\n          });\n"))),(0,a.kt)(k,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.getTotalUnreadMsgCount(operationID?: string): Promise<WsResponse<number>>\n")),(0,a.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-value-2"},"Return Value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<number",">",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful Callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed Callback")))),(0,a.kt)("h3",{id:"code-sample-3"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { getSDK } from '@openim/client-sdk';\n// const IMSDK = getSDK();\n\nIMSDK.getTotalUnreadMsgCount()\n  .then(({ data }) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('getTotalUnreadMsgCount', operationID: string): Promise<number>\n")),(0,a.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used for troubleshooting, should be unique, recommended to use current time and random number")))),(0,a.kt)("h3",{id:"return-value-3"},"Return Value"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package makes the function Promise-based. When calling, use ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," to determine and handle successful and failed callbacks.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<number",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful Callback")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed Callback")))),(0,a.kt)("h3",{id:"code-sample-4"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('getTotalUnreadMsgCount', IMSDK.uuid())\n  .then((data) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.getTotalUnreadMsgCount(operationID: string): Promise<number>\n")),(0,a.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, keep unique, suggest using current time and random number")))),(0,a.kt)("h3",{id:"return-result"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<number",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback on successful call")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.getTotalUnreadMsgCount('operationID')\n  .then((data) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-6"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void GetTotalUnreadMsgCount(OnBase<int> cb)\n\n")),(0,a.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback")))),(0,a.kt)("h3",{id:"code-example-1"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.GetTotalUnreadMsgCount((count,err,errMsg)=>{\n\n});\n")))))}b.isMDXComponent=!0}}]);