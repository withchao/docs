"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[43856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const o={title:"\u96c6\u7fa4\u90e8\u7f72-kubernetes",sidebar_position:6},p="\u96c6\u7fa4\u90e8\u7f72-kubernetes -\u5f85\u5b8c\u5584",m={unversionedId:"gettingStarted/k8s-deployment",id:"gettingStarted/k8s-deployment",title:"\u96c6\u7fa4\u90e8\u7f72-kubernetes",description:"OpenIM Server \u90e8\u7f72",source:"@site/docs/guides/gettingStarted/k8s-deployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/k8s-deployment",permalink:"/zh-Hans/guides/gettingStarted/k8s-deployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/k8s-deployment.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"2025\u5e741\u67083\u65e5",sidebarPosition:6,frontMatter:{title:"\u96c6\u7fa4\u90e8\u7f72-kubernetes",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u90e8\u7f72-\u6e90\u7801",permalink:"/zh-Hans/guides/gettingStarted/cluster"},next:{title:"\u5feb\u901f\u9a8c\u8bc1",permalink:"/zh-Hans/guides/gettingStarted/quickTestServer"}},s={},d=[{value:"OpenIM Server \u90e8\u7f72",id:"openim-server-\u90e8\u7f72",level:2},{value:"\u8d44\u6e90\u8981\u6c42",id:"\u8d44\u6e90\u8981\u6c42",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u539f\u751f\u90e8\u7f72",id:"\u539f\u751f\u90e8\u7f72",level:3},{value:"\u8fdb\u5165\u76ee\u6807\u76ee\u5f55",id:"\u8fdb\u5165\u76ee\u6807\u76ee\u5f55",level:4},{value:"\u90e8\u7f72\u914d\u7f6e\u548c\u4f9d\u8d56",id:"\u90e8\u7f72\u914d\u7f6e\u548c\u4f9d\u8d56",level:4},{value:"\u8bbe\u7f6e Secret",id:"\u8bbe\u7f6e-secret",level:4},{value:"Redis\uff1a",id:"redis",level:4},{value:"Mongo\uff1a",id:"mongo",level:3},{value:"<strong>Minio\uff1a</strong>",id:"minio",level:3},{value:"<strong>Kafka\uff1a</strong>",id:"kafka",level:3},{value:"\u5e94\u7528 Secrets",id:"\u5e94\u7528-secrets",level:3},{value:"\u5e94\u7528\u6240\u6709\u914d\u7f6e",id:"\u5e94\u7528\u6240\u6709\u914d\u7f6e",level:3},{value:"\u8fd0\u884c\u6240\u6709 Deployment \u548c Service",id:"\u8fd0\u884c\u6240\u6709-deployment-\u548c-service",level:3},{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",level:3},{value:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9",id:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9",level:3},{value:"\u6ce8\u610f\u4e8b\u9879\uff1a",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"OpenIM Chat \u90e8\u7f72",id:"openim-chat-\u90e8\u7f72",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u90e8\u7f72 OpenIM Chat",id:"\u90e8\u7f72-openim-chat",level:3},{value:"\u4fee\u6539 ConfigMap",id:"\u4fee\u6539-configmap",level:3},{value:"\u8bbe\u7f6e secret",id:"\u8bbe\u7f6e-secret-1",level:3},{value:"Redis:",id:"redis-1",level:4},{value:"Mongo:",id:"mongo-1",level:4},{value:"\u5e94\u7528 Secrets",id:"\u5e94\u7528-secrets-1",level:3},{value:"\u5e94\u7528\u914d\u7f6e\u548c\u670d\u52a1",id:"\u5e94\u7528\u914d\u7f6e\u548c\u670d\u52a1",level:3},{value:"\u542f\u52a8 Chat \u90e8\u7f72",id:"\u542f\u52a8-chat-\u90e8\u7f72",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9",id:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879\uff1a",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3}],u={toc:d},c="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(c,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u96c6\u7fa4\u90e8\u7f72-kubernetes--\u5f85\u5b8c\u5584"},"\u96c6\u7fa4\u90e8\u7f72-kubernetes -\u5f85\u5b8c\u5584"),(0,a.kt)("h1",{id:"deployment-\u90e8\u7f72"},"Deployment \u90e8\u7f72"),(0,a.kt)("h2",{id:"openim-server-\u90e8\u7f72"},"OpenIM Server \u90e8\u7f72"),(0,a.kt)("h3",{id:"\u8d44\u6e90\u8981\u6c42"},"\u8d44\u6e90\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU"),"\uff1a2 \u6838\u5fc3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5185\u5b58"),"\uff1a4 GiB"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u78c1\u76d8\u4f7f\u7528"),"\uff1a20 GiB\uff08\u5728\u8282\u70b9\u4e0a\uff09")),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u786e\u4fdd\u60a8\u5df2\u7ecf\u90e8\u7f72\u4e86\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redis"),(0,a.kt)("li",{parentName:"ul"},"MongoDB"),(0,a.kt)("li",{parentName:"ul"},"Kafka"),(0,a.kt)("li",{parentName:"ul"},"MinIO")),(0,a.kt)("h3",{id:"\u539f\u751f\u90e8\u7f72"},"\u539f\u751f\u90e8\u7f72"),(0,a.kt)("h4",{id:"\u8fdb\u5165\u76ee\u6807\u76ee\u5f55"},"\u8fdb\u5165\u76ee\u6807\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./deployments/deploy/\n")),(0,a.kt)("h4",{id:"\u90e8\u7f72\u914d\u7f6e\u548c\u4f9d\u8d56"},"\u90e8\u7f72\u914d\u7f6e\u548c\u4f9d\u8d56"),(0,a.kt)("p",null,"\u66f4\u65b0\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-config.yml")," \u914d\u7f6e\u6620\u5c04\u3002",(0,a.kt)("strong",{parentName:"p"},"\u60a8\u53ef\u4ee5\u67e5\u9605\u5b98\u65b9\u6587\u6863\u83b7\u53d6\u66f4\u591a\u8be6\u60c5\u3002")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-config.yml")," \u4e2d\uff0c\u60a8\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"discovery.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.namespace"),"\uff1a\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u66f4\u6539\u4e3a\u60a8\u7684 namespace\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mongodb.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address"),"\uff1a\u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 MongoDB \u5730\u5740\u6216 Mongo \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database"),"\uff1a\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u6570\u636e\u5e93\u540d\u79f0\uff08\u9700\u8981\u4e8b\u5148\u521b\u5efa\u6570\u636e\u5e93\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authSource"),"\uff1a\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u7528\u6237\u8ba4\u8bc1\u6e90\u6570\u636e\u5e93\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"authSource")," \u662f\u6307\u5b9a\u4e0e\u7528\u6237\u51ed\u8bc1\u5173\u8054\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u9700\u8981\u5728\u8be5\u6570\u636e\u5e93\u4e2d\u521b\u5efa\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"kafka.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address"),"\uff1a\u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 Kafka \u5730\u5740\u6216 Kafka \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"redis.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address"),"\uff1a\u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 Redis \u5730\u5740\u6216 Redis \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"minio.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"internalAddress"),"\uff1a\u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 MinIO \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"externalAddress"),"\uff1a\u8bbe\u7f6e\u4e3a\u60a8\u5df2\u66b4\u9732\u7684 MinIO \u5916\u90e8\u5730\u5740\u3002")),(0,a.kt)("h4",{id:"\u8bbe\u7f6e-secret"},"\u8bbe\u7f6e Secret"),(0,a.kt)("p",null,"Secret \u662f\u4e00\u4e2a\u5305\u542b\u5c11\u91cf\u654f\u611f\u6570\u636e\u7684\u5bf9\u8c61\u3002\u4f8b\u5982\u5bc6\u7801\u548c\u5bc6\u94a5\u3002Secret \u7c7b\u4f3c\u4e8e ConfigMaps",(0,a.kt)("strong",{parentName:"p"},"\u3002")),(0,a.kt)("h4",{id:"redis"},"Redis\uff1a"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-secret.yml")," \u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 Redis \u5bc6\u7801\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-redis-secret\n  ...\ndata:\n  redis-password: b3BlbklNMTIz # update to your redis password encoded in base64, if need empty, you can set to ""\n')),(0,a.kt)("h3",{id:"mongo"},"Mongo\uff1a"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo-secret.yml")," \u6587\u4ef6\u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo_openim_username")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo_openim_password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-mongo-secret\ntype: Opaque\ndata:\n  mongo_openim_username: b3BlbklN # update to your mongo username encoded in base64, if need empty, you can set to "" (this user credentials need in authSource database)\n  mongo_openim_password: b3BlbklNMTIz # update to your mongo password encoded in base64, if need empty, you can set to ""\n')),(0,a.kt)("h3",{id:"minio"},(0,a.kt)("strong",{parentName:"h3"},"Minio\uff1a")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"minio-secret.yml")," \u6587\u4ef6\u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"minio-root-user")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"minio-root-password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 MinIO ",(0,a.kt)("inlineCode",{parentName:"p"},"accessKeyID")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"secretAccessKey"),"\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-minio-secret\ntype: Opaque\ndata:\n  minio-root-user: cm9vdA== # update to your minio accessKeyID encoded in base64, if need empty, you can set to ""\n  minio-root-password: b3BlbklNMTIz # update to your minio secretAccessKey encoded in base64, if need empty, you can set to ""\n')),(0,a.kt)("h3",{id:"kafka"},(0,a.kt)("strong",{parentName:"h3"},"Kafka\uff1a")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka-secret.yml")," \u6587\u4ef6\u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka-password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 Kafka \u5bc6\u7801\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-kafka-secret\ntype: Opaque\ndata:\n  kafka-password: '' # update to your kafka password encoded in base64, if need empty, you can set to \"\"\n")),(0,a.kt)("h3",{id:"\u5e94\u7528-secrets"},"\u5e94\u7528 Secrets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f redis-secret.yml -f minio-secret.yml -f mongo-secret.yml -f kafka-secret.yml\n")),(0,a.kt)("h3",{id:"\u5e94\u7528\u6240\u6709\u914d\u7f6e"},"\u5e94\u7528\u6240\u6709\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./openim-config.yml\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterRile.yml")," \u6765\u4e3a\u9ed8\u8ba4\u670d\u52a1\u8d26\u6237\u521b\u5efa\u96c6\u7fa4\u89d2\u8272\u7ed1\u5b9a\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"openim-config.yml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"discovery.yml")," \u6587\u4ef6\u4e2d\u4fee\u6539\u547d\u540d\u7a7a\u95f4\uff0c\u6539\u53d8 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.namespace")," \u4e3a\u60a8\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"strong"},"clusterRole.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./clusterRole.yml\n")),(0,a.kt)("h3",{id:"\u8fd0\u884c\u6240\u6709-deployment-\u548c-service"},"\u8fd0\u884c\u6240\u6709 Deployment \u548c Service"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728\u90e8\u7f72\u4e3b\u8981\u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u50cf MinIO\u3001Redis \u548c Kafka \u8fd9\u6837\u7684\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\u5df2\u7ecf\u8fd0\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply \\\n  -f openim-api-deployment.yml \\\n  -f openim-api-service.yml \\\n  -f openim-crontask-deployment.yml \\\n  -f openim-rpc-user-deployment.yml \\\n  -f openim-rpc-user-service.yml \\\n  -f openim-msggateway-deployment.yml \\\n  -f openim-msggateway-service.yml \\\n  -f openim-push-deployment.yml \\\n  -f openim-push-service.yml \\\n  -f openim-msgtransfer-service.yml \\\n  -f openim-msgtransfer-deployment.yml \\\n  -f openim-rpc-conversation-deployment.yml \\\n  -f openim-rpc-conversation-service.yml \\\n  -f openim-rpc-auth-deployment.yml \\\n  -f openim-rpc-auth-service.yml \\\n  -f openim-rpc-group-deployment.yml \\\n  -f openim-rpc-group-service.yml \\\n  -f openim-rpc-friend-deployment.yml \\\n  -f openim-rpc-friend-service.yml \\\n  -f openim-rpc-msg-deployment.yml \\\n  -f openim-rpc-msg-service.yml \\\n  -f openim-rpc-third-deployment.yml \\\n  -f openim-rpc-third-service.yml\n")),(0,a.kt)("h3",{id:"\u8ba4\u8bc1"},"\u8ba4\u8bc1"),(0,a.kt)("p",null,"\u5728\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u68c0\u6d4b\u5df2\u90e8\u7f72\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Check the status of all pods\nkubectl get pods\n\n# Check the status of services\nkubectl get svc\n\n# Check the status of deployments\nkubectl get deployments\n\n# View all resources\nkubectl get all\n")),(0,a.kt)("h3",{id:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9"},"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ./")),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e3a\u90e8\u7f72\u4f7f\u7528\u4e86\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u5728 kubectl \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"-n <namespace> "),"\u53c2\u6570\u3002")),(0,a.kt)("h2",{id:"openim-chat-\u90e8\u7f72"},"OpenIM Chat \u90e8\u7f72"),(0,a.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5df2\u90e8\u7f72 OpenIM Server \u53ca\u5176\u4f9d\u8d56\u9879\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Redis"),(0,a.kt)("li",{parentName:"ul"},"MongoDB"),(0,a.kt)("li",{parentName:"ul"},"Kafka"),(0,a.kt)("li",{parentName:"ul"},"MinIO"))),(0,a.kt)("li",{parentName:"ul"},"\u66b4\u9732 OpenIM Server \u7684\u76f8\u5e94\u670d\u52a1\u548c\u7aef\u53e3\u3002")),(0,a.kt)("h3",{id:"\u90e8\u7f72-openim-chat"},"\u90e8\u7f72 OpenIM Chat"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Chat \u4f9d\u8d56\u4e8e OpenIM Server\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5148\u90e8\u7f72 OpenIM Server\u3002")),(0,a.kt)("p",null,"\u8fdb\u5165\u76ee\u6807\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd deployments/deploy\n")),(0,a.kt)("h3",{id:"\u4fee\u6539-configmap"},"\u4fee\u6539 ConfigMap"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"chat-config.yml")," \u6587\u4ef6\u4ee5\u5339\u914d\u60a8\u7684\u73af\u5883\u3002\u91cd\u70b9\u5173\u6ce8\u4ee5\u4e0b\u5b57\u6bb5\uff1a\n",(0,a.kt)("strong",{parentName:"p"},"discovery.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes.namespace"),": \u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u66f4\u6539\u4e3a\u60a8\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mongodb.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"address"),"\uff1a\u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 MongoDB \u5730\u5740\u6216 Mongo \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database"),"\uff1a\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u6570\u636e\u5e93\u540d\u79f0\uff08\u9700\u8981\u4e8b\u5148\u521b\u5efa\u6570\u636e\u5e93\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"authSource"),"\uff1a\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u7528\u6237\u8ba4\u8bc1\u6e90\u6570\u636e\u5e93\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"authSource")," \u662f\u6307\u5b9a\u4e0e\u7528\u6237\u51ed\u8bc1\u5173\u8054\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u9700\u8981\u5728\u8be5\u6570\u636e\u5e93\u4e2d\u521b\u5efa\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"redis.yml"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"address"),": \u8bbe\u7f6e\u4e3a\u5df2\u90e8\u7f72\u7684 Redis \u5730\u5740\u6216 Redis \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"share.yml")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openIM.apiURL"),": \u4fee\u6539\u4e3a\u60a8\u7684 IM Server API \u5730\u5740\u6216\u4f7f\u7528\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"openim-api")," \u670d\u52a1\u540d\u79f0\u548c\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openIM.secret"),": \u4e0e IM Server ",(0,a.kt)("inlineCode",{parentName:"li"},"share.secret")," \u503c\u76f8\u540c\u3002")),(0,a.kt)("h3",{id:"\u8bbe\u7f6e-secret-1"},"\u8bbe\u7f6e secret"),(0,a.kt)("p",null,"Secret \u662f\u4e00\u4e2a\u5305\u542b\u5c11\u91cf\u654f\u611f\u6570\u636e\u7684\u5bf9\u8c61\u3002\u4f8b\u5982\u5bc6\u7801\u548c\u5bc6\u94a5\u3002Secret \u7c7b\u4f3c\u4e8e ConfigMaps\u3002"),(0,a.kt)("h4",{id:"redis-1"},"Redis:"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-secret.yml")," \u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 Redis \u5bc6\u7801\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-redis-secret\ntype: Opaque\ndata:\n  redis-password: b3BlbklNMTIz # update to your redis password encoded in base64, if need empty, you can set to ""\n')),(0,a.kt)("h4",{id:"mongo-1"},"Mongo:"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo-secret.yml")," \u6587\u4ef6\u4e2d\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo_openim_username")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo_openim_password")," \u7684\u503c\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u60a8\u7684 MongoDB \u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u9700\u8fdb\u884c base64 \u7f16\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: openim-mongo-secret\ntype: Opaque\ndata:\n  mongo_openim_username: b3BlbklN # update to your mongo username encoded in base64, if need empty, you can set to "" (this user credentials need in authSource database)\n  mongo_openim_password: b3BlbklNMTIz # update to your mongo password encoded in base64, if need empty, you can set to ""\n')),(0,a.kt)("h3",{id:"\u5e94\u7528-secrets-1"},"\u5e94\u7528 Secrets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f redis-secret.yml -f mongo-secret.yml\n")),(0,a.kt)("h3",{id:"\u5e94\u7528\u914d\u7f6e\u548c\u670d\u52a1"},"\u5e94\u7528\u914d\u7f6e\u548c\u670d\u52a1"),(0,a.kt)("p",null,"\u90e8\u7f72\u914d\u7f6e\u548c\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f chat-config.yml -f openim-admin-api-service.yml -f openim-chat-api-service.yml -f openim-admin-rpc-service.yml -f openim-chat-rpc-service.yml\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-chat-\u90e8\u7f72"},"\u542f\u52a8 Chat \u90e8\u7f72"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f openim-chat-api-deployment.yml -f openim-admin-api-deployment.yml -f openim-chat-rpc-deployment.yml -f openim-admin-rpc-deployment.yml\n")),(0,a.kt)("h2",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u9a8c\u8bc1\u90e8\u7f72\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Check the status of all pods\nkubectl get pods\n\n# Check the status of services\nkubectl get svc\n\n# Check the status of deployments\nkubectl get deployments\n\n# View all resources\nkubectl get all\n\n")),(0,a.kt)("h3",{id:"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9-1"},"\u6e05\u9664\u6240\u6709\u90e8\u7f72\u5185\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ./")),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879-1"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e3a\u90e8\u7f72\u4f7f\u7528\u4e86\u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u5728 kubectl \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"-n <namespace> "),"\u53c2\u6570\u3002")))}k.isMDXComponent=!0}}]);