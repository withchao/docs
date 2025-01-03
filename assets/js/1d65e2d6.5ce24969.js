"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[98112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),g=r,u=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});n(67294);var a=n(3905);const r=n.p+"assets/images/admin-a8f308c39b20d55e0c99886a1848349a.jpg";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Monitoring and Alert System",sidebar_position:6},m=void 0,d={unversionedId:"gettingStarted/admin",id:"gettingStarted/admin",title:"Monitoring and Alert System",description:"Component Description",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/admin.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/admin",permalink:"/guides/gettingStarted/admin",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/admin.mdx",tags:[],version:"current",lastUpdatedAt:1735877494,formattedLastUpdatedAt:"Jan 3, 2025",sidebarPosition:6,frontMatter:{title:"Monitoring and Alert System",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"k8s Deployment",permalink:"/guides/gettingStarted/k8s-deployment"},next:{title:"Cluster Deployment Instructions",permalink:"/guides/gettingStarted/cluster"}},p={},c=[{value:"Component Description",id:"component-description",level:2},{value:"Configuration File Description",id:"configuration-file-description",level:2},{value:"Logging into the Admin Backend",id:"logging-into-the-admin-backend",level:2},{value:"Logging into Grafana",id:"logging-into-grafana",level:2},{value:"Adding Prometheus Data Source",id:"adding-prometheus-data-source",level:2},{value:"Importing a Custom Dashboard",id:"importing-a-custom-dashboard",level:2},{value:"Importing node-exporter&#39;s Dashboard",id:"importing-node-exporters-dashboard",level:2},{value:"Alert Configuration File Explanation",id:"alert-configuration-file-explanation",level:2},{value:"Alarm Experience",id:"alarm-experience",level:2},{value:"Logging System",id:"logging-system",level:2}],g={toc:c},u="wrapper";function f(e){var{components:t}=e,s=l(e,["components"]);return(0,a.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"component-description"},"Component Description"),(0,a.kt)("p",null,"When deploying with Docker Compose, the following components will be automatically deployed. For source code deployment, these components must be manually enabled in docker-compose.yaml."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"openim-admin"),(0,a.kt)("td",{parentName:"tr",align:null},"Admin backend providing a monitoring page entry."),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically enabled in Docker and source code deployments.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring system component for collecting and storing metric data."),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically enabled in Docker deployments; manual enablement required for source code deployments.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alertmanager"),(0,a.kt)("td",{parentName:"tr",align:null},"Component for managing and sending alerts."),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically enabled in Docker deployments; manual enablement required for source code deployments.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"grafana"),(0,a.kt)("td",{parentName:"tr",align:null},"Dashboard component for displaying monitoring data."),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically enabled in Docker deployments; manual enablement required for source code deployments.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node-exporter"),(0,a.kt)("td",{parentName:"tr",align:null},"Collects node (e.g., server) metric information."),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically enabled in Docker deployments; manual enablement required for source code deployments.")))),(0,a.kt)("h2",{id:"configuration-file-description"},"Configuration File Description"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File Name"),(0,a.kt)("th",{parentName:"tr",align:null},"File Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Modification Items"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/config.yaml"),(0,a.kt)("td",{parentName:"tr",align:null},"OpenIM service configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"prometheus.enable: true indicates enabling")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/prometheus.yml"),(0,a.kt)("td",{parentName:"tr",align:null},"Prometheus configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"No modifications required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/instance-down-rules.yml"),(0,a.kt)("td",{parentName:"tr",align:null},"Alert rules"),(0,a.kt)("td",{parentName:"tr",align:null},"Two default rules configured (instance_down, database_insert_failure_alerts)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/alertmanager.yml"),(0,a.kt)("td",{parentName:"tr",align:null},"Alert management configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"Sender and recipient email information must be configured")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/email.tmpl"),(0,a.kt)("td",{parentName:"tr",align:null},"Email alert template"),(0,a.kt)("td",{parentName:"tr",align:null},"Default email template, modifiable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config/templates/prometheus-dashboard.yaml"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom dashboard"),(0,a.kt)("td",{parentName:"tr",align:null},"No modifications required")))),(0,a.kt)("h2",{id:"logging-into-the-admin-backend"},"Logging into the Admin Backend"),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://ip:11002")," in the browser to access the admin backend. This IP is the server OPENIM_IP; ensure your browser can access it. The default username and password are both chatAdmin."),(0,a.kt)("img",{src:r,width:"700",alt:"admin"}),(0,a.kt)("h2",{id:"logging-into-grafana"},"Logging into Grafana"),(0,a.kt)("p",null,"First, log into the admin backend, then click the data monitoring menu on the left, enter the default username (admin) and password (admin) to log into Grafana."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(96994).Z,width:"1920",height:"868"})),(0,a.kt)("h2",{id:"adding-prometheus-data-source"},"Adding Prometheus Data Source"),(0,a.kt)("p",null,"As shown below, enter the URL of the Prometheus data source: ",(0,a.kt)("a",{parentName:"p",href:"http://172.28.0.1:19090"},"http://172.28.0.1:19090"),' (19090 is the default Prometheus port) and click "Save and Test" to save.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(16587).Z,width:"2880",height:"1397"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(25920).Z,width:"2856",height:"1434"})),(0,a.kt)("h2",{id:"importing-a-custom-dashboard"},"Importing a Custom Dashboard"),(0,a.kt)("p",null,"Click the import button as shown below to import the dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(63983).Z,width:"1917",height:"714"})),(0,a.kt)("p",null,"Copy the content from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-server/tree/main/config/templates/prometheus-dashboard.yaml"},"https://github.com/openimsdk/open-im-server/tree/main/config/templates/prometheus-dashboard.yaml")," into the area shown below, then click the load button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(8386).Z,width:"1512",height:"853"})),(0,a.kt)("p",null,"Select your Data Source and job, customize metric information as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(9890).Z,width:"1912",height:"860"})),(0,a.kt)("h2",{id:"importing-node-exporters-dashboard"},"Importing node-exporter's Dashboard"),(0,a.kt)("p",null,"Enter 1860 to import, or find other node-exporter dashboard views on the official website (",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/"},"https://grafana.com/grafana/dashboards/"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(28132).Z,width:"1120",height:"790"})),(0,a.kt)("p",null,"node-exporter metric information, as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(24846).Z,width:"1913",height:"793"})),(0,a.kt)("h2",{id:"alert-configuration-file-explanation"},"Alert Configuration File Explanation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Email Alert Architecture Diagram"),": The Prometheus component loads the ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-down-rules.yml")," file for alert rules, sending qualifying alert information to the Alertmanager component. Alertmanager loads the ",(0,a.kt)("inlineCode",{parentName:"p"},"alertmanager.yml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"email.tmpl")," files, sending emails using configured alert email information and templates.\n",(0,a.kt)("img",{alt:"PC Web Interface",src:n(46345).Z,width:"1086",height:"304"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"prometheus.yml File Explanation"),": Mainly used to configure the path of the alert rules file, alert management service address, and IP addresses for monitoring data capture. Default settings usually require no modification."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# Alertmanager configuration\nalerting:\nalertmanagers:\n- static_configs:\n- targets: ['172.28.0.1:19093']\n\n# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.\nrule_files:\n  - \"instance-down-rules.yml\"\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"instance-down-rules.yaml File Explanation"),": By default, two email alert rules are implemented (instance_down, database_insert_failure_alerts). To add more alert rules, they can be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-down-rules.yml")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'groups:\n- name: instance_down  # Alert Rule One: Triggers if a monitoring module crashes for over a minute\n  rules:\n    - alert: InstanceDown\n      expr: up == 0\n      for: 1m\n      labels:\n        severity: critical\n      annotations:\n        summary: "Instance {{ $labels.instance }} down"\n        description: "{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 1 minutes."\n\n- name: database_insert_failure_alerts # Alert Rule Two: Triggers if there\'s an increase in msg_insert_redis_failed_total and msg_insert_mongo_failed_total\n  rules:\n    - alert: DatabaseInsertFailed\n      expr: (increase(msg_insert_redis_failed_total[5m]) > 0) or (increase(msg_insert_mongo_failed_total[5m]) > 0)\n      for: 1m\n      labels:\n        severity: critical\n      annotations:\n        summary: "Increase in MsgInsertRedisFailedCounter or MsgInsertMongoFailedCounter detected"\n        description: "Either MsgInsertRedisFailedCounter or MsgInsertMongoFailedCounter has increased in the last 5 minutes, indicating failures in message insert operations to Redis or MongoDB, maybe the redis or mongodb is crash."\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"alertmanager.yml File Explanation"),": Modify the sender and receiver email configuration information to receive alert messages. To implement alerts through DingTalk, WeChat Work, or other means, you need to rewrite ",(0,a.kt)("inlineCode",{parentName:"p"},"alertmanager.yml"),". Official documentation for the alert management module can be referred to here: ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"https://prometheus.io/docs/alerting/latest/alertmanager/")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"global:\n  resolve_timeout: 5m\n  smtp_from: alert@openim.io # Alert sending email\n  smtp_smarthost: smtp.163.com:465 # SMTP address for sending email\n  smtp_auth_username: alert@openim.io # Email authorization username, usually same as smtp_from\n  smtp_auth_password: YOURAUTHPASSWORD # Email authorization code\n  smtp_require_tls: false\n  smtp_hello: openim alert\n\ntemplates:\n  - /etc/alertmanager/email.tmpl # Email template\n\nroute:\n  group_by: ['alertname']\n  group_wait: 5s\n  group_interval: 5s\n  repeat_interval: 5m\n  receiver: email\nreceivers:\n  - name: email\n    email_configs:\n      - to: 'alert@example.com' # Receiving alert email\n        html: '{{ template \"email.to.html\" . }}'\n        headers: { Subject: \"[OPENIM-SERVER]Alarm\" }# Email title\n        send_resolved: true\n")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Email Template File email.tmpl Explanation: This file is in HTML format. The alarm management module will fill in the variable information inside it, and then render it into an HTML format file for email sending. It can be rewritten according to your needs:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{{ define "email.to.html" }}\n{{ range .Alerts }}\n\x3c!-- Begin of OpenIM Alert --\x3e\n<div style="border:1px solid #ccc; padding:10px; margin-bottom:10px;">\n    <h3>OpenIM Alert</h3>\n    <p><strong>Alert Program:</strong> Prometheus Alert</p>\n    <p><strong>Severity Level:</strong> {{ .Labels.severity }}</p>\n    <p><strong>Alert Type:</strong> {{ .Labels.alertname }}</p>\n    <p><strong>Affected Host:</strong> {{ .Labels.instance }}</p>\n    <p><strong>Affected Service:</strong> {{ .Labels.job }}</p>\n    <p><strong>Alert Subject:</strong> {{ .Annotations.summary }}</p>\n    <p><strong>Trigger Time:</strong> {{ .StartsAt.Format "2006-01-02 15:04:05" }}</p>\n</div>\n\x3c!-- End of OpenIM Alert --\x3e\n{{ end }}\n{{ end }}\n')),(0,a.kt)("h2",{id:"alarm-experience"},"Alarm Experience"),(0,a.kt)("p",null,"You can manually trigger the instancedown alarm rule. If you have deployed OpenIM from source code, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"make stop")," command to stop the openim-server service. Wait for more than 5 minutes, and you will receive an alarm email as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PC Web Interface",src:n(81836).Z,width:"775",height:"682"})),(0,a.kt)("h2",{id:"logging-system"},"Logging System"),(0,a.kt)("p",null,"If OpenIM service is deployed in a k8s environment using the helm chart method, you can view the logs of all OpenIM services through Grafana. Currently, binary and Docker deployments do not integrate the Loki logging collection component. To experience the Loki logging collection function, please use the helm chart deployment.\nFor more details, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/helm-charts/blob/main/docs/user-guide-zh.md"},"https://github.com/openimsdk/helm-charts/blob/main/docs/user-guide-zh.md")))}f.isMDXComponent=!0},46345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert2-d82df995fc7f9cf2a8462a6ed18bab5a.png"},81836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert6-6524d6c82941769762152a11726c7834.png"},63983:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard-bab5c385a6dbac9f919f494a94e2a49a.png"},8386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard2-249cfe565b44bbf0eb8924889d858248.png"},9890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard3-277e7f05ed345b5b6c869324aec5d34f.png"},28132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard4-f79d3516a843e6b86da396a9744beb7d.png"},24846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dashboard5-9db1fd21b30ff25567bb80788c0e8071.png"},16587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/database-8ebb85b286a5e7509f08fc18aadac189.png"},25920:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/database2-6dc1ae4114d3282c1de06e2dcbd176e4.png"},96994:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login1-278e0f0b8e78be0dedab061ee7a60ab0.png"}}]);