import{n as a,_ as t}from"./index.73971a8d.js";import{b as e}from"./bus.d56574c1.js";import"./vendor.194c4086.js";const o={};var n=a({name:"HAlog",components:{logInformation:()=>t((()=>import("./logInformation.f0c26962.js")),["assets/logInformation.f0c26962.js","assets/logInformation.fa4fe75f.css","assets/api_publicComponent.c4201f33.js","assets/index.dfdb83b1.js","assets/vendor.194c4086.js","assets/bus.d56574c1.js","assets/taskLog.5848c085.js","assets/modifyReplInfo.c2596852.css","assets/index.73971a8d.js","assets/index.5b75357e.css"])},props:{},data:()=>({activeName:"logInformation",Permission_repu:!1}),watch:{},methods:{},mounted(){e.$on("Permission_repu",(a=>{this.Permission_repu=a}))}},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-row",{staticClass:"warp"},[e("el-col",{staticClass:"warp-breadcrum",attrs:{span:24}},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("span",[a._v(a._s(a.$t("publicLogComponent.renwu-xinxi")))])])],1)],1),e("el-col",{staticClass:"warp-main",attrs:{span:24}},[e("el-tabs",{model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:a.$t("taskLog.rizhi-xinxi"),name:"logInformation"}})],1),e(a.activeName,{tag:"component"})],1)],1)}),[],!1,r,"98d94314",null,null);function r(a){for(let t in o)this[t]=o[t]}var s=function(){return n.exports}();export{s as default};
