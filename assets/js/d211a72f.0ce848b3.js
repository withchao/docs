"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[37816],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(r),c=a,g=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return r?n.createElement(g,i(i({ref:e},m),{},{components:r})):n.createElement(g,i({ref:e},m))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},86197:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={title:"Callback Before Group Creation",hide_title:!0},p="Callback Before Group Creation",u={unversionedId:"webhooks/group/createBefore",id:"webhooks/group/createBefore",title:"Callback Before Group Creation",description:"Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/webhooks/group/createBefore.mdx",sourceDirName:"webhooks/group",slug:"/webhooks/group/createBefore",permalink:"/restapi/webhooks/group/createBefore",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/group/createBefore.mdx",tags:[],version:"current",lastUpdatedAt:1735178587,formattedLastUpdatedAt:"Dec 26, 2024",frontMatter:{title:"Callback Before Group Creation",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Callback After Group Creation",permalink:"/restapi/webhooks/group/createAfter"},next:{title:"Callback After Group Dissolution",permalink:"/restapi/webhooks/group/disMissGroupAfter"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Scenarios that Trigger This Callback",id:"scenarios-that-trigger-this-callback",level:2},{value:"Timing of Callback",id:"timing-of-callback",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Example Request URL",id:"example-request-url",level:3},{value:"Example Request Package",id:"example-request-package",level:3},{value:"Request Package Field Descriptions",id:"request-package-field-descriptions",level:3},{value:"Example Response Package",id:"example-response-package",level:2},{value:"Allow Creation",id:"allow-creation",level:3},{value:"Response Package Field Descriptions",id:"response-package-field-descriptions",level:2}],s={toc:d},c="wrapper";function g(t){var{components:e}=t,r=i(t,["components"]);return(0,n.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){a(t,e,r[e])}))}return t}({},s,r),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"callback-before-group-creation"},"Callback Before Group Creation"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The App\u2019s business server can use this callback to review requests from users to create groups. The server can either allow the request, reject it, or modify it as needed."),(0,n.kt)("h2",{id:"important-notes"},"Important Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enable this callback, configure the callback URL and activate the corresponding protocol switch. For configuration details, refer to the ",(0,n.kt)("a",{parentName:"li",href:"../introduction"},"Callback Introduction")," document."),(0,n.kt)("li",{parentName:"ul"},"The callback is initiated from the OpenIM Server to the App backend as an HTTP/HTTPS POST request."),(0,n.kt)("li",{parentName:"ul"},"The App business server must respond within the timeout period.")),(0,n.kt)("h2",{id:"scenarios-that-trigger-this-callback"},"Scenarios that Trigger This Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Group creation requests from an App user through the client."),(0,n.kt)("li",{parentName:"ul"},"Group creation requests from an App admin via REST API.")),(0,n.kt)("h2",{id:"timing-of-callback"},"Timing of Callback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggered ",(0,n.kt)("strong",{parentName:"li"},"before")," the OpenIM Server prepares to create the group.")),(0,n.kt)("h2",{id:"interface-description"},"Interface Description"),(0,n.kt)("h3",{id:"example-request-url"},"Example Request URL"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CallbackCommand")," here is: ",(0,n.kt)("inlineCode",{parentName:"p"},"callbackBeforeCreateGroupCommand")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackBeforeCreateGroupCommand?contenttype=json\n")),(0,n.kt)("h3",{id:"example-request-package"},"Example Request Package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "callbackBeforeCreateGroupCommand",\n  "groupID": "12345",\n  "groupName": "MyGroup",\n  "notification": "Welcome to MyGroup!",\n  "introduction": "This is a group for discussing example topics.",\n  "faceURL": "http://example.com/path/to/face/image.png",\n  "ownerUserID": "user123",\n  "createTime": 1673048592000,\n  "memberCount": 10,\n  "ex": "Extra data",\n  "status": 1,\n  "creatorUserID": "user123",\n  "groupType": 1,\n  "needVerification": 1,\n  "lookMemberInfo": 1,\n  "applyMemberFriend": 0,\n  "notificationUpdateTime": 1673048592000,\n  "notificationUserID": "user456",\n  "initMemberList": [\n    {\n      "userID": "user789",\n      "roleLevel": 60\n    },\n    {\n      "userID": "user101112",\n      "roleLevel": 20\n    }\n  ]\n}\n')),(0,n.kt)("h3",{id:"request-package-field-descriptions"},"Request Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback command for pre-group creation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier for the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notification"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group notification message.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"introduction"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group introduction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL for the group\u2019s icon.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the group owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp for when the group was created (in ms).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,n.kt)("td",{parentName:"tr",align:null},"uint32"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of members in the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional data field.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the group creator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupType"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group type, fixed at 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"needVerification"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether verification is needed to join the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lookMemberInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether group members\u2019 information is visible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"applyMemberFriend"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether members can add each other as friends.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notificationUpdateTime"),(0,n.kt)("td",{parentName:"tr",align:null},"int64"),(0,n.kt)("td",{parentName:"tr",align:null},"Timestamp for when the notification was last updated (in ms).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notificationUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the person who updated the notification.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"List of initial group members, each with userID and roleLevel fields.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList.userID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the initial group member.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"initMemberList.roleLevel"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Role level of the initial group member.")))),(0,n.kt)("h2",{id:"example-response-package"},"Example Response Package"),(0,n.kt)("h3",{id:"allow-creation"},"Allow Creation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": 0,\n    "groupID": "G001",\n    "groupName": "MyGroup",\n    "notification": "Welcome to MyGroup!",\n    "introduction": "A group for discussions",\n    "faceURL": "http://example.com/groupface.png",\n    "ownerUserID": "user01",\n    "ex": "Some extra data",\n    "status": 1,\n    "creatorUserID": "user02",\n    "groupType": 1,\n    "needVerification": 0,\n    "lookMemberInfo": 1,\n    "applyMemberFriend": 1\n}\n')),(0,n.kt)("h2",{id:"response-package-field-descriptions"},"Response Package Field Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates if the callback was executed correctly. ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," means success.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errCode"),(0,n.kt)("td",{parentName:"tr",align:null},"5001"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error code, ranging between 5000-9999. Set if ",(0,n.kt)("inlineCode",{parentName:"td"},"actionCode")," is not 0 or ",(0,n.kt)("inlineCode",{parentName:"td"},"nextCode")," is 1.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,n.kt)("td",{parentName:"tr",align:null},"Simple error message for the custom error code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,n.kt)("td",{parentName:"tr",align:null},"Detailed error information for the custom error code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Next action code, set to ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to halt further action if actionCode is ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier for the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notification"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Notification or announcement for the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"introduction"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Group introduction.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"faceURL"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"URL for the group\u2019s icon or image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the group owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ex"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional data or information.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group status.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"User ID of the person creating the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupType"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Group type, fixed at 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"needVerification"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether verification is needed to join the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lookMemberInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether group members\u2019 information is visible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"applyMemberFriend"),(0,n.kt)("td",{parentName:"tr",align:null},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether members can add each other as friends.")))))}g.isMDXComponent=!0}}]);