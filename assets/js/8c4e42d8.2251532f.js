"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[35880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},u="getJoinedGroupList",p={unversionedId:"api/group/getJoinedGroupList",id:"api/group/getJoinedGroupList",title:"getJoinedGroupList",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/group/getJoinedGroupList.mdx",sourceDirName:"api/group",slug:"/api/group/getJoinedGroupList",permalink:"/sdks/api/group/getJoinedGroupList",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/getJoinedGroupList.mdx",tags:[],version:"current",lastUpdatedAt:1711794081,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"inviteUserToGroup",permalink:"/sdks/api/group/inviteUserToGroup"},next:{title:"searchGroups",permalink:"/sdks/api/group/searchGroups"}},s={},m=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Signature",id:"function-signature",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Results",id:"return-results",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Signature",id:"function-signature-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Results",id:"return-results-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Signature",id:"function-signature-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Results",id:"return-results-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Signature",id:"function-signature-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Results",id:"return-results-3",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Function Signature",id:"function-signature-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Results",id:"return-results-4",level:3},{value:"Code Example",id:"code-example-4",level:3},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example-5",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Code Example",id:"code-example-6",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Tabs"),g=d("TabItem"),k={toc:m},N="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getjoinedgrouplist"},"getJoinedGroupList"),(0,a.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Fetch the list of groups you've joined.")),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If a joined group has been disbanded, it won't appear in the returned list.")),(0,a.kt)(c,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-signature"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Future<List<GroupInfo>> getJoinedGroupList({String? operationID})\n")),(0,a.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-results"},"Return Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},"List<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"GroupInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful return")))),(0,a.kt)("h3",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    List<GroupInfo> list = await OpenIM.iMManager.groupManager.getJoinedGroupList();\n    // todo\n"))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-signature-1"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)getJoinedGroupListWithOnSuccess:(nullable OIMGroupsInfoCallback)onSuccess\n                                onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,a.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-results-1"},"Return Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"OIMGroupInfo")," ","*",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Successful return")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed return")))),(0,a.kt)("h3",{id:"code-example-1"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n[OIMManager.manager getJoinedGroupListWithOnSuccess:^(NSArray<OIMGroupInfo *> * _Nullable groupsInfo) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n"))),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-signature-2"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\n    public void getJoinedGroupList(OnBase<List<GroupInfo>> callBack)\n\n")),(0,a.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callBack"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"<List<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"GroupInfo"),">>"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback Interface")))),(0,a.kt)("h3",{id:"return-results-2"},"Return Results"),(0,a.kt)("h3",{id:"code-example-2"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\nOpenIMClient.getInstance().groupManager.getJoinedGroupList(new OnBase<List<GroupInfo>>() {\n            @Override\n            public void onError(int code, String error) {\n\n            }\n\n            @Override\n            public void onSuccess(List<GroupInfo> data) {\n\n            }\n        });\n\n"))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-signature-3"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.getJoinedGroupList(operationID?: string): Promise<WsResponse<GroupItem[]>>\n")),(0,a.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"return-results-3"},"Return Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"GroupItem"),"[]>",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Joined group list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed call callback")))),(0,a.kt)("h3",{id:"code-example-3"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n// or\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.getJoinedGroupList()\n  .then(({ data }) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-signature-4"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('getJoinedGroupList', operationID: string): Promise<GroupItem[]>\n")),(0,a.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used to locate issues, should be unique, recommend using current time and a random number")))),(0,a.kt)("h3",{id:"return-results-4"},"Return Results"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package makes the function Promise-based. When calling, use ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," to determine and handle successful and failed callbacks.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"GroupItem"),"[]",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Joined group list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Failed call callback")))),(0,a.kt)("h3",{id:"code-example-4"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('getJoinedGroupList', IMSDK.uuid())\n  .then((data) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.getJoinedGroupList(operationID: string): Promise<GroupItem[]>\n")),(0,a.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, keep unique, suggest using current time and random number")))),(0,a.kt)("h3",{id:"return-result"},"Return Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/group/groupInfo"},"GroupItem"),"[]",">"),(0,a.kt)("td",{parentName:"tr",align:null},"Joined group list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,a.kt)("h3",{id:"code-example-5"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\n OpenIMSDKRN.getJoinedGroupList('operationID')\n  .then((data) => {\n    // Successful call\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Failed call\n  });\n"))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"public static void GetJoinedGroupList(OnLocalGroupList cb)\n\n")),(0,a.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/sdks/callback/OnLocalGroupList"},"OnLocalGroupList")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback")))),(0,a.kt)("h3",{id:"return-result-1"},"Return Result"),(0,a.kt)("h3",{id:"code-example-6"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nIMSDK.GetJoinedGroupList((list,errCode,errMsg)=>{\n\n});\n\n")))))}b.isMDXComponent=!0}}]);