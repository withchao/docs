"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[42805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Unity",hide_title:!0,sidebar_position:2},c=void 0,u={unversionedId:"quickstart/unity",id:"quickstart/unity",title:"Unity",description:"\ud83d\ude80\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/unity.mdx",sourceDirName:"quickstart",slug:"/quickstart/unity",permalink:"/zh-Hans/sdks/quickstart/unity",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/unity.mdx",tags:[],version:"current",lastUpdatedAt:1727160122,formattedLastUpdatedAt:"2024\u5e749\u670824\u65e5",sidebarPosition:2,frontMatter:{title:"Unity",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/zh-Hans/sdks/quickstart/android"},next:{title:"Flutter",permalink:"/zh-Hans/sdks/quickstart/flutter"}},s={},p=[{value:"\ud83d\ude80\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u521b\u5efaUnity\u5de5\u7a0b\uff0c\u514b\u9686open-im-sdk-unity  \u5230Assets\u76ee\u5f55",id:"1-\u521b\u5efaunity\u5de5\u7a0b\u514b\u9686open-im-sdk-unity--\u5230assets\u76ee\u5f55",level:3},{value:"2. \u5f15\u7528\u547d\u540d\u7a7a\u95f4",id:"2-\u5f15\u7528\u547d\u540d\u7a7a\u95f4",level:3},{value:"3. \u521d\u59cb\u5316",id:"3-\u521d\u59cb\u5316",level:3},{value:"4. \u8bbe\u7f6e\u76d1\u542c\u5668",id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668",level:3},{value:"5. \u767b\u5f55",id:"5-\u767b\u5f55",level:3},{value:"6. \u6ce8\u9500",id:"6-\u6ce8\u9500",level:3},{value:"7. \u9000\u51fa",id:"7-\u9000\u51fa",level:3}],d={toc:p},f="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\ud83d\ude80\u4f7f\u7528 Demo"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-unity-demo.git"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIM SDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u521b\u5efaunity\u5de5\u7a0b\u514b\u9686open-im-sdk-unity--\u5230assets\u76ee\u5f55"},"1. \u521b\u5efaUnity\u5de5\u7a0b\uff0c\u514b\u9686",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/openimsdk/open-im-sdk-unity.git"},"open-im-sdk-unity"),"  \u5230Assets\u76ee\u5f55"),(0,r.kt)("h3",{id:"2-\u5f15\u7528\u547d\u540d\u7a7a\u95f4"},"2. \u5f15\u7528\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"using open_im_sdk;\n")),(0,r.kt)("h3",{id:"3-\u521d\u59cb\u5316"},"3. \u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"var suc = IMSDK.InitSDK(IMConfig config,IConnCallBack connCallBack);\n")),(0,r.kt)("h3",{id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668"},"4. \u8bbe\u7f6e\u76d1\u542c\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"// \u4f1a\u8bdd\u76d1\u542c\nIMSDK.SetConversationListener(conversation);\n// \u597d\u53cb\u76d1\u542c\nIMSDK.SetFriendShipListener(friendship);\n// \u7fa4\u7ec4\u76d1\u542c\nIMSDK.SetGroupListener(group);\n\n")),(0,r.kt)("h3",{id:"5-\u767b\u5f55"},"5. \u767b\u5f55"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5148\u8bbe\u7f6e\u76d1\u542c\u5668\u540e\u767b\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"IMSDK.Login(string uid, string token, OnSucOrError cb)\n")),(0,r.kt)("h3",{id:"6-\u6ce8\u9500"},"6. \u6ce8\u9500"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"IMSDK.Logout(string uid, string token, OnSucOrError cb)\n")),(0,r.kt)("h3",{id:"7-\u9000\u51fa"},"7. \u9000\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},"IMSDK.UnInitSDK();\n")))}m.isMDXComponent=!0}}]);