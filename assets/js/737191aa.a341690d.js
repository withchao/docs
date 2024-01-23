"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[45749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,g=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={},l="OpenIM Mac Deployment Guide",c={unversionedId:"gettingStarted/mac-deployment-guide",id:"gettingStarted/mac-deployment-guide",title:"OpenIM Mac Deployment Guide",description:"This comprehensive guide provides detailed instructions for deploying OpenIM on Mac, including both source code and Docker deployment methods.",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/mac-deployment-guide.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/mac-deployment-guide",permalink:"/guides/gettingStarted/mac-deployment-guide",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/mac-deployment-guide.mdx",tags:[],version:"current",lastUpdatedAt:1705993612,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OIMWS SDK Server User Guide",permalink:"/guides/gettingStarted/jssdk"},next:{title:"Nginx Domain Configuration",permalink:"/guides/gettingStarted/nginxDomainConfig"}},m={},s=[{value:"Preliminary Environment Setup",id:"preliminary-environment-setup",level:2},{value:"Source Code Deployment",id:"source-code-deployment",level:2},{value:"Deploying openim-server",id:"deploying-openim-server",level:3},{value:"Deploying openim-chat",id:"deploying-openim-chat",level:3},{value:"Docker Deployment",id:"docker-deployment",level:2}],d={toc:s},u="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openim-mac-deployment-guide"},"OpenIM Mac Deployment Guide"),(0,r.kt)("p",null,"This comprehensive guide provides detailed instructions for deploying OpenIM on Mac, including both source code and Docker deployment methods."),(0,r.kt)("h2",{id:"preliminary-environment-setup"},"Preliminary Environment Setup"),(0,r.kt)("p",null,"Before initiating the deployment process, ensure a clean working environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"New Directory"),": It's recommended to start in a fresh directory to avoid conflicts."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Process Check"),": Run the following commands to ensure no conflicting processes are running:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ps -ef | grep openim")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ps -ef | grep chat")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Docker Container Check"),": Use ",(0,r.kt)("inlineCode",{parentName:"li"},"docker ps")," to verify the absence of any related containers.")),(0,r.kt)("h2",{id:"source-code-deployment"},"Source Code Deployment"),(0,r.kt)("h3",{id:"deploying-openim-server"},"Deploying openim-server"),(0,r.kt)("p",null,"Deploying from source can be slightly more complex due to differences in Docker's network configurations between Mac and Linux."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cloning and Preparing the Repository"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'git clone https://github.com/openimsdk/open-im-server\ncd open-im-server\nexport OPENIM_IP="Your IP" # Optional for cloud servers\nmake init # Generate configuration files\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configuring Kafka Logic"),": Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, specifically the Kafka settings:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Original:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"- KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092,EXTERNAL://${DOCKER_BRIDGE_GATEWAY:-172.28.0.1}:${KAFKA_PORT:-19094}\n"))),(0,r.kt)("li",{parentName:"ul"},"Updated:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"- KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092,EXTERNAL://127.0.0.1:${KAFKA_PORT:-19094}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Starting the Service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"docker compose up -d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Final Configurations"),": Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"config/config.yaml")," to replace all instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"172.28.0.1")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'vim config/config.yaml -c "%s/172\\.28\\.0\\.1/127.0.0.1/g" -c "wq"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Launching openim-server"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"make start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verification"),": Check the service status:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"make check\n")),(0,r.kt)("p",{parentName:"li"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note"),": It's best to wait five minutes before performing the check to avoid any false negatives."))),(0,r.kt)("h3",{id:"deploying-openim-chat"},"Deploying openim-chat"),(0,r.kt)("p",null,"There are several methods to deploy openim-chat, including source code and Docker."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returning to the Parent Directory"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"cd ..\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source Code Deployment"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone https://github.com/openimsdk/chat\ncd chat\nmake init # Generate configuration files\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Setting Up MySQL"),": If MySQL is not already deployed, follow these steps:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'docker run -d \\\n  --name mysql \\\n  -p 13306:3306 \\\n  -p 3306:33060 \\\n  -v "$(pwd)/components/mysql/data:/var/lib/mysql" \\\n  -v "/etc/localtime:/etc/localtime" \\\n  -e MYSQL_ROOT_PASSWORD="openIM123" \\\n  --restart always \\\n  mariadb:10.6\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configuring openim-chat"),": Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"config/config.yaml")," as before, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"172.28.0.1")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Starting openim-chat"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"make start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verification"),": Check for the following processes to confirm successful launch:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"make check\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accessing the Web Interface"),": Navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:11001"},"http://127.0.0.1:11001")," in your browser. Verification method of reading ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openim.io/guides/gettingStarted/quickTestServer"},"this a validation document")))),(0,r.kt)("h2",{id:"docker-deployment"},"Docker Deployment"),(0,r.kt)("p",null,"For deploying OpenIM using Docker, refer to the instructions provided at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-docker"},"OpenIM Docker GitHub Repository"),". Follow the steps outlined there for a seamless Docker-based deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/openimsdk/openim-docker\ncd openim-docker\nexport OPENIM_IP="Your IP"\nmake init\ndocker compose up -d \ndocker compose logs -f openim-server\ndocker compose logs -f openim-chat\n')))}g.isMDXComponent=!0}}]);