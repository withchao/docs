"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[36751],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=o(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},25274:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:2},p="createVideoMessageByURL",o={unversionedId:"api/message/createVideoMessageByURL",id:"api/message/createVideoMessageByURL",title:"createVideoMessageByURL",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/message/createVideoMessageByURL.mdx",sourceDirName:"api/message",slug:"/api/message/createVideoMessageByURL",permalink:"/sdks/api/message/createVideoMessageByURL",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createVideoMessageByURL.mdx",tags:[],version:"current",lastUpdatedAt:1711794081,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"createVideoMessageFromFullPath",permalink:"/sdks/api/message/createVideoMessageFromFullPath"},next:{title:"createVideoMessageByFile",permalink:"/sdks/api/message/createVideoMessageByFile"}},m={},d=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Code Sample",id:"code-sample-1",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Function Prototype",id:"function-prototype-6",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Return Result",id:"return-result-4",level:3},{value:"Code Example",id:"code-example-4",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},g=u("Tabs"),k=u("TabItem"),N={toc:d},h="wrapper";function c(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(h,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createvideomessagebyurl"},"createVideoMessageByURL"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{title:"Description",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When you need to store resources yourself, create a video message to send to the other party after uploading the video and thumbnail via the API and obtaining the download address.")),(0,n.kt)("admonition",{title:"Note",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Messages created using this API must be sent through ",(0,n.kt)("a",{parentName:"p",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),".")),(0,n.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<Message> createVideoMessageByURL({\n    required VideoElem videoElem,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoElem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/videoElem"},"VideoElem")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video address")))),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"Successful return")))),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    Message msg = await OpenIM.iMManager.messageManager.createVideoMessageByURL(videoElem: videoElem);\n    //todo\n"))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n+ (OIMMessageInfo *)createVideoMessageByURL:(NSString *)fileURL\n                                  videoType:(NSString * _Nullable)videoType\n                                   duration:(NSInteger)duration\n                                      size:(NSInteger)size\n                                   snapshot:(NSString * _Nullable)snapshotURL\n\n")),(0,n.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fileURL"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoType"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Video type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"duration"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Duration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Duration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotPath"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Video thumbnail address")))),(0,n.kt)("h3",{id:"return-result-1"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"Successful return")))),(0,n.kt)("h3",{id:"code-example-1"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMMessageInfo *message = [OIMMessageInfo createVideoMessageByURL:@"" videoType:nil duration:1 size:1024 snapshot:nil];\n\n'))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"   public Message createVideoMessageByURL(VideoElem videoElem)\n")),(0,n.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoElem"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/videoElem"},"VideoElem")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video address")))),(0,n.kt)("h3",{id:"return-result-2"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"Successful return")))),(0,n.kt)("h3",{id:"code-example-2"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"        Message Message= OpenIMClient.getInstance().messageManager. createVideoMessageByURL(videoElem)\n"))),(0,n.kt)(k,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createVideoMessage({\n  videoPath: string;\n  duration: number;\n  videoType: string;\n  snapshotPath: string;\n  videoUUID: string;\n  videoUrl: string;\n  videoSize: number;\n  snapshotUUID: string;\n  snapshotSize: number;\n  snapshotUrl: string;\n  snapshotWidth: number;\n  snapshotHeight: number;\n  snapShotType: string;\n}, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,n.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File path, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"duration"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video duration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File type, usually the file extension")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Path of the video thumbnail, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video download URL. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Size of the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Download URL for the video thumbnail. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Width of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Height of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapShotType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of the thumbnail, usually the file extension")))),(0,n.kt)("h3",{id:"return-results"},"Return Results"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-sample"},"Code Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n// or\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.createVideoMessage({\n  videoPath: '',\n  duration: 6,\n  videoType: 'mp4',\n  snapshotPath: '',\n  videoUUID: '',\n  videoUrl: '',\n  videoSize: 1024,\n  snapshotUUID: '',\n  snapshotSize: 1024,\n  snapshotUrl: '',\n  snapshotWidth: 1024,\n  snapshotHeight: 1024,\n  snapShotType: 'png',\n})\n  .then(({ data }) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('createVideoMessageByURL', operationID: string, {\n  videoPath: string;\n  duration: number;\n  videoType: string;\n  snapshotPath: string;\n  videoUUID: string;\n  videoUrl: string;\n  videoSize: number;\n  snapshotUUID: string;\n  snapshotSize: number;\n  snapshotUrl: string;\n  snapshotWidth: number;\n  snapshotHeight: number;\n  snapShotType: string;\n}): Promise<MessageItem>\n")),(0,n.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for issue tracking. It's unique and it's recommended to combine the current time with a random number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File path, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"duration"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video duration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File type, usually the file extension")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Path of the video thumbnail, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video download URL. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Size of the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Download URL for the video thumbnail. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Width of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Height of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapShotType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of the thumbnail, usually the file extension")))),(0,n.kt)("h3",{id:"return-results-1"},"Return Results"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package makes the function return a Promise. When calling, use ",(0,n.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," to handle and check the success and failure callbacks.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Success callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failure callback")))),(0,n.kt)("h3",{id:"code-sample-1"},"Code Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createVideoMessageByURL', IMSDK.uuid(), {\n  videoPath: '',\n  duration: 6,\n  videoType: 'mp4',\n  snapshotPath: '',\n  videoUUID: '',\n  videoUrl: '',\n  videoSize: 1024,\n  snapshotUUID: '',\n  snapshotSize: 1024,\n  snapshotUrl: '',\n  snapshotWidth: 1024,\n  snapshotHeight: 1024,\n  snapShotType: 'png',\n})\n  .then((data) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.createVideoMessageByURL({\n  videoPath: string,\n  duration: number,\n  videoType: string,\n  snapshotPath: string,\n  videoUUID: string,\n  videoUrl: string,\n  videoSize: number,\n  snapshotUUID: string,\n  snapshotSize: number,\n  snapshotUrl: string,\n  snapshotWidth: number,\n  snapshotHeight: number,\n  snapShotType: string,\n}, operationID: string): Promise<MessageItem>\n")),(0,n.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for issue tracking. It's unique and it's recommended to combine the current time with a random number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File path, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"duration"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video duration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File type, usually the file extension")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotPath"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Path of the video thumbnail, can be an empty string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video download URL. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"File size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUUID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique ID for the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotSize"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Size of the video thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Download URL for the video thumbnail. If uploaded yourself and sent through ",(0,n.kt)("a",{parentName:"td",href:"/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss"),", enter the remote URL. Otherwise, use an empty string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotWidth"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Width of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapshotHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Height of the thumbnail")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"snapShotType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of the thumbnail, usually the file extension")))),(0,n.kt)("h3",{id:"return-result-3"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on successful call")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,n.kt)("h3",{id:"code-example-3"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.createVideoMessageByURL({\n  videoPath: '',\n  duration: 6,\n  videoType: 'mp4',\n  snapshotPath: '',\n  videoUUID: '',\n  videoUrl: '',\n  videoSize: 1024,\n  snapshotUUID: '',\n  snapshotSize: 1024,\n  snapshotUrl: '',\n  snapshotWidth: 1024,\n  snapshotHeight: 1024,\n  snapShotType: 'png',\n}, 'operationID')\n  .then((data) => {\n    // Success\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failure\n  });\n"))),(0,n.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-6"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static MsgStruct CreateVideoMessageByURL(VideoBaseInfo videoBaseInfo)\n\n")),(0,n.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"videoBaseInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/videoElem"},"VideoBaseInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Video Setting")))),(0,n.kt)("h3",{id:"return-result-4"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/class/message/messageInfo"},"MsgStruct")),(0,n.kt)("td",{parentName:"tr",align:null},"Message Struct")))),(0,n.kt)("h3",{id:"code-example-4"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"var msg = IMSDK.CreateVideoMessageByURL(new VideoBaseInfo(){\n    \n});\n")))))}c.isMDXComponent=!0}}]);