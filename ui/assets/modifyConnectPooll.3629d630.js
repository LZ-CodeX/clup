import{A as e}from"./api_clusterManage.8c154fe5.js";import{s as o}from"./staticTools.84335405.js";import{n as t,D as n}from"./index.7fc66993.js";import"./index.dfdb83b1.js";import"./vendor.194c4086.js";import"./bus.d56574c1.js";const r={};var s=t({data:()=>({row:{},sourceList:[],formInfo:{},formInfoRules:{},pool_name:""}),computed:{isUse(){return"detail"===this.row.method}},methods:{submit(t){return new Promise(((r,s)=>{this.$refs.formInfo.validate((i=>{if(i){let i={pool_id:this.row.pool_id,settings:JSON.parse(JSON.stringify(this.formInfo))};"connectCount"===t&&(i.option="connects"),"forwardConnectInfo"===t&&(i.option="fe_infor"),"backConnectInfo"===t&&(i.option="be_infor",delete i.settings.be_dbname),"adjustmentNodes"===t&&(i.option="portals");for(const e in i.settings)String(e).includes("passwd")&&(i.settings[e]=n.ToDbText(i.settings[e]));e.modifyPoolInfo(i).then((e=>{o(this.$t("pfsDilatation.tijiao-chenggong")),r(!0)}),(e=>{s(!1)}))}else console.log(2),s(!1)}))}))},render(){if(this.row=this.$props.dataRow,this.sourceList=this.$props.dataFormInfo,this.sourceList.forEach((e=>{"pwd"===e.type?this.$set(this.formInfo,e.name,n.FromDbText(e.value)):this.$set(this.formInfo,e.name,e.value),Object.prototype.hasOwnProperty.call(this.formInfoRules,e.name)||(this.formInfoRules[String(e.name)]=e.rules||[])})),"detail"===this.row.method){for(const e in this.formInfoRules){if(!this.formInfoRules[e].length)return;this.formInfoRules[e].forEach((e=>{e.required=!1}))}this.$nextTick((()=>{const e=document.querySelectorAll(".el-input-number input");e.length&&e.forEach((e=>{e.setAttribute("readonly",!0)}))}))}}},mounted(){this.render()},watch:{dataFormInfo(e,o){this.render()}},props:["data-form-info","data-row"]},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"box"},[t("el-form",{ref:"formInfo",attrs:{model:e.formInfo,rules:e.formInfoRules,"label-width":"100px"}},[t("el-row",e._l(e.sourceList,(function(o){return t("el-col",{key:o.name,attrs:{span:24}},[t("el-form-item",{attrs:{label:o.cname,prop:o.name}},["text"===o.type||void 0===o.type?[t("el-input",{attrs:{disabled:!!o.disabled&&o.disabled,readonly:e.isUse,placeholder:e.$t("addOrModifyPgHba.qingshuru-neirong",[o.cname])},model:{value:e.formInfo[o.name],callback:function(t){e.$set(e.formInfo,o.name,t)},expression:"formInfo[item.name]"}})]:e._e(),"number"===o.type?[t("el-input-number",{staticClass:"inputNumber",staticStyle:{width:"100%"},attrs:{controls:!1,min:o.min?o.min:0,max:o.max?o.max:Number.MAX_SAFE_INTEGER,placeholder:e.$t("addOrModifyPgHba.qingshuru-neirong",[o.cname])},model:{value:e.formInfo[o.name],callback:function(t){e.$set(e.formInfo,o.name,t)},expression:"formInfo[item.name]"}})]:e._e(),"pwd"===o.type?[t("el-input",{attrs:{readonly:e.isUse,"show-password":"",placeholder:e.$t("addOrModifyPgHba.qingshuru-neirong",[o.cname])},model:{value:e.formInfo[o.name],callback:function(t){e.$set(e.formInfo,o.name,t)},expression:"formInfo[item.name]"}})]:e._e(),"selects"===o.type?[t("el-select",{staticStyle:{width:"50%"},attrs:{disabled:e.isUse,"collapse-tags":"",multiple:"",placeholder:e.$t("ConnectionPoolManagement.qingxuanze-jiedian-liebiao")},model:{value:e.formInfo[o.name],callback:function(t){e.$set(e.formInfo,o.name,t)},expression:"formInfo[item.name]"}},e._l(o.options,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1),t("div",{staticClass:"node_info_class"},e._l(e.formInfo[o.name],(function(o){return t("span",{key:o},[e._v(e._s(o))])})),0),t("div",{staticStyle:{color:"red","margin-top":"10px","word-break":"normal","overflow-wrap":"break-word"}},[e._v(" "+e._s(e.$t("ConnectionPoolManagement.yichujiedianshi-warning"))+" ")])]:e._e()],2)],1)})),1)],1)],1)}),[],!1,i,"0b820f88",null,null);function i(e){for(let o in r)this[o]=r[o]}var a=function(){return s.exports}();export{a as default};
