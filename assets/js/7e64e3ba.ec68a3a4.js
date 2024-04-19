"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[64864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={},s="OIMWS SDK Server User Guide",p={unversionedId:"gettingStarted/jssdk",id:"gettingStarted/jssdk",title:"OIMWS SDK Server User Guide",description:"OIMWS SDK Server is a server-side program written in Go, designed to handle WebSocket connections and provide instant messaging services. This document aims to guide you through the installation and operation of OIMWS SDK Server, explaining its main features and parameter configurations.",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/jssdk.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/jssdk",permalink:"/guides/gettingStarted/jssdk",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/jssdk.mdx",tags:[],version:"current",lastUpdatedAt:1713520643,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment and Components",permalink:"/guides/gettingStarted/env-comp"},next:{title:"OpenIM Mac Deployment Guide",permalink:"/guides/gettingStarted/mac-deployment-guide"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Execution",id:"execution",level:2},{value:"Parameter Explanation",id:"parameter-explanation",level:3},{value:"Running Example",id:"running-example",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},m="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oimws-sdk-server-user-guide"},"OIMWS SDK Server User Guide"),(0,r.kt)("p",null,"OIMWS SDK Server is a server-side program written in Go, designed to handle WebSocket connections and provide instant messaging services. This document aims to guide you through the installation and operation of OIMWS SDK Server, explaining its main features and parameter configurations."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install OIMWS SDK Server in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Installation via Go Get"),": Run the following command in your terminal to install OIMWS SDK Server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"go get github.com/openim-sigs/oimws/example\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Clone the GitHub Repository"),": Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openim-sigs/oimws/"},"OIMWS GitHub Repository")," to your local environment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/openim-sigs/oimws/\n")),(0,r.kt)("p",{parentName:"li"},"After doing so, please read the README file and execute the program in the ",(0,r.kt)("inlineCode",{parentName:"p"},"example/")," directory."))),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"Before running OIMWS SDK Server, ensure it is correctly installed."),(0,r.kt)("p",null,"Running the program requires configuring some parameters, which you can set through command-line flags. Here is the main function of the program and its parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    // Code omitted for clarity on parameter configuration\n    var sdkWsPort, logLevel *int\n    var openIMWsAddress, openIMApiAddress, openIMDbDir *string\n\n    // Parameter definitions and default values\n    openIMApiAddress = flag.String("openIM_api_address", "http://127.0.0.1:10002", "openIM api listening address")\n    openIMWsAddress = flag.String("openIM_ws_address", "ws://127.0.0.1:10001", "openIM ws listening address")\n    sdkWsPort = flag.Int("sdk_ws_port", 10003, "openIMSDK ws listening port")\n    logLevel = flag.Int("openIM_log_level", 5, "control log output level")\n    openIMDbDir = flag.String("openIMDbDir", "./db", "openIM db dir")\n\n    flag.Parse()\n\n    // Core logic code omitted\n}\n')),(0,r.kt)("h3",{id:"parameter-explanation"},"Parameter Explanation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openIM_api_address"),": The listening address for the openIM API, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:10002"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openIM_ws_address"),": The WebSocket listening address for openIM, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"ws://127.0.0.1:10001"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sdk_ws_port"),": The listening port for openIMSDK WebSocket, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"10003"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openIM_log_level"),": The log output level, default is ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),", which controls the verbosity of the logs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openIMDbDir"),": The directory for the openIM database, default is the ",(0,r.kt)("inlineCode",{parentName:"li"},"./db")," folder in the current directory.")),(0,r.kt)("h3",{id:"running-example"},"Running Example"),(0,r.kt)("p",null,"In the command line, you can modify these parameters by adding flags. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./example -openIM_api_address="http://localhost:10002" -openIM_ws_address="ws://localhost:10001" -sdk_ws_port=10003 -openIM_log_level=4 -openIMDbDir="./data/db"\n')),(0,r.kt)("p",null,"This will start the server and configure the service based on the provided parameters."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"OIMWS SDK Server offers a flexible and powerful platform for handling instant messages and WebSocket connections. By following this guide, you should be able to successfully install and operate OIMWS SDK Server, as well as understand and configure its main parameters. For more advanced configurations and detailed information, refer to the project's GitHub page and related documentation."))}g.isMDXComponent=!0}}]);