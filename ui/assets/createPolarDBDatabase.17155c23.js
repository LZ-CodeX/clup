import{n as e,D as t,_ as a}from"./index.73971a8d.js";import{A as i}from"./api_dbManage.817ad416.js";import{d as r,a as s,e as n}from"./verificationRules.dffd2894.js";import"./vendor.194c4086.js";import"./index.dfdb83b1.js";import"./bus.d56574c1.js";const o={};var l=e({name:"baseInfo",data(){return{language:"",loading_pgdata:!1,loadingOsInfo:!1,loading_port:!1,loading_version:!1,os_uid_disabled:!1,os_uid:0,mostCommonlyUsedRow:[],commonlyUsedRow:[],commonlyRow:[],iscanpush:!1,loading:!1,active:0,isValidateName_create:"",curHostOptions:[],pg_bin_path_list:[],memMax:2048,cupMemMax:32,createDbFormVisible:!1,createDbFormRules:{instance_type:[{required:!0,trigger:"change"}],instance_name:[{message:this.$t("defineDatabasePage.qingshuru-shujujku-mingcheng"),trigger:"blur"}],host:[{required:!0,message:this.$t("createDatabasePage.qingxuanze-zhuji-IP"),trigger:"change"}],port:[{required:!0,message:this.$t("createDatabasePage.qingshuru-duankouhao"),trigger:"blur"},{required:!0,validator:r,trigger:"blur"},{type:"number",message:this.$t("defineDatabasePage.duankou-bixuwei-shuzizhi")}],pg_bin_path:[{required:!0,message:this.$t("createDatabasePage.bixu-xuanze-youxiao-raunjianmulu"),trigger:"blur"}],pgdata:[{required:!0,message:this.$t("defineDatabasePage.qingshuru-shuju-mulu"),trigger:"blur"},{required:!0,validator:s,trigger:"blur"},{required:!0,validator:(e,t,a)=>{if(""===t)a(new Error(this.$t("verificationRules.qingshuru-shuji-mulu")));else{if(!this.createDbForm.host)return a(this.$t("createDatabasePage.xuanzezhuji-kechakan-message"));{let e={host:this.createDbForm.host,pgdata:t};this.loading_pgdata=!0,i.checkTheDirIsEmpty(e).then((e=>(this.loading_pgdata=!1,1==e.is_empty?a():0==e.is_empty?a(new Error(this.$t("verificationRules.gaishuju-mulu-m"))):a(new Error(e.err_msg)))),(e=>(this.loading_pgdata=!1,a(new Error(this.$t("verificationRules.jiancha-qingqiu-chucuo"))))))}}},trigger:"submit"}],os_user:[{required:!0,message:this.$t("createDatabasePage.yunxing-shujuku-yonghu-message"),trigger:"blur"}],os_uid:[{required:!0,message:this.$t("createDatabasePage.yunxing-yunhu-UID-message"),trigger:"blur"},{type:"number",message:this.$t("createDatabasePage.UID-bixuwei-zhuzizhi")}],db_user:[{required:!0,message:this.$t("createDatabasePage.HA-guanli-yonghu-message"),trigger:"blur"}],db_pass:[{required:!0,message:this.$t("defineDatabasePage.DB-zhongde-mima-placeholder"),trigger:"blur"}],mem_size:[{required:!0,message:this.$t("createDatabasePage.qingshuru-neicun-daxiao"),trigger:"blur"},{type:"number",message:this.$t("createDatabasePage.neicun-bixuei-shuzizhi")}],conn_cnt:[{required:!0,message:this.$t("createDatabasePage.qingshuru-lianjieshu-daxiao"),trigger:"blur"},{required:!0,validator:(e,t,a)=>{if(""!==t)return t<20||t>1e4?a(new Error(this.$t("createDatabasePage.lianjie-fanwewi"))):a();a(new Error(this.$t("createDatabasePage.qingshuru-lianjieshu")))},trigger:"blur"},{type:"number",message:this.$t("createDatabasePage.lianjieshu-bixuwei-shuzizhi")}]},createDbForm:{instance_type:"localStorage",pg_user:"postres",os_user:"pg1922",instance_name:"",port:1922,pgdata:"/data/pg1922"},createDBconfigForm:{},createDBconfigFormList:[],createDBconfigFormDict:{},byteUnitDict:{B:"",kB:"kB",MB:"MB",GB:"GB",TB:"TB"},timeUnitDict:{ms:"ms",s:"s",min:"min",h:"h",d:"d"},createDBconfigFormRules:{},pgUser:"",pfsDiskNmaeFrom:null,isFormat:!1}},components:{sharedDiskSettings:()=>a((()=>import("./sharedDiskSettings.86b32242.js")),["assets/sharedDiskSettings.86b32242.js","assets/sharedDiskSettings.d9996a4f.css","assets/api_clusterManage.30301838.js","assets/index.dfdb83b1.js","assets/vendor.194c4086.js","assets/bus.d56574c1.js","assets/verificationRules.dffd2894.js","assets/staticTools.300b8913.js","assets/index.73971a8d.js","assets/index.5b75357e.css"])},filters:{filterContent(e,t){let a=[];return 1!==e.state&&a.push("cn"===t?"agent异常":"agent exceptions"),e.mem_size<64&&a.push("cn"===t?"该主机剩余内存小于了所需内存的最小值":"The remaining memory on this host is less than the minimum amount of memory required"),a.join("、")}},watch:{},props:{databaselistData:{required:!0},createType:{required:!0}},mounted(){const e=this;e.language=localStorage.getItem("language_clup"),e.createDbFormRules.os_user.push({required:!0,validator:e.validOsUser,trigger:"blur"}),e.createDbFormRules.port.push({required:!0,validator:e.validDbPort,trigger:"submit"}),e.createDbFormRules.os_uid.push({required:!0,validator:e.validOsUid,trigger:"blur"}),e.createDbFormRules.host.push({required:!0,validator:e.validHost,trigger:"change"}),e.createDbFormRules.pg_bin_path.push({required:!0,validator:e.validPgBinPath,trigger:"change"}),i.getPgFamilyInfo().then((function(t){e.pgUser=t.pg_family_user,e.createDbDialog()}))},methods:{isAllowNextStep(e){console.log("格式化"+e),this.isFormat=e},receivePFSDiskNmaeFrom(e){console.log(e),this.pfsDiskNmaeFrom=JSON.parse(JSON.stringify(e)),this.active++},getResource(e){this.createDbForm.pgdata&&this.$refs.createDbForm.validateField("pgdata"),this.createDbForm.pg_bin_path&&this.$refs.createDbForm.validateField("pg_bin_path")},SelectChange(e){this.$refs.createDBconfigForm.validateField(e)},calcUnitValue(e){if(null==e)return 1;if(""===e)return 1;if("B"===e)return 1;if("kB"===e)return 1024;if("MB"===e)return 1048576;if("GB"===e)return 1073741824;if("TB"===e)return 1099511627776;if("ms"===e)return 1;if("s"===e)return 1e3;if("min"===e)return 6e4;if("h"===e)return 36e5;if("d"===e)return 864e5;throw new Error(this.$t("createDatabasePage.wuxiao-danwei")+e)},validateRange(e,t,a){console.log("rule is "),console.log(e);var i=this.createDBconfigFormDict[e.field];if("listen_addresses"!=e.field){if(null==t||""==t)return"archive_command"==e.field?void a():void a(new Error(this.$t("createDatabasePage.bixu-shuru-yigezhi")));if(console.log("itemdata is "),console.log(i),null!=i.min_val||null!=i.max_val){var r=this.createDBconfigForm[e.field].unit,s=1;null!=r?s=this.calcUnitValue(r):r="";var o,l=0;if(3==i.setting_type||4==i.setting_type?(l=parseFloat(t.val),console.log("value="+t.val+",unit="+r+", unitValue="+s),o=t.val):(l=parseFloat(t),o=t,console.log("value="+t+",unit="+r+", unitValue="+s)),isNaN(l))a(new Error(this.$t("createDatabasePage.qingshuru-shuzi")));else{var c=0,g=0,m=!0;"-∞"!=(c=null==i.min_val?"-∞":parseFloat(i.min_val))&&l*s<c&&(m=!1),"∞"!=(g=null==i.max_val?"∞":parseFloat(i.max_val))&&l*s>g&&(m=!1),console.log("minValue="+c+", maxValue="+g),m||a(new Error(this.$t("createDatabasePage.shuru-dezhi")+o+r+this.$t("createDatabasePage.chaoguo-fanwei")+c+", "+g+"]")),a()}}else a()}else n(e,t,a)},retrievePgInitConf(){const e=this;e.loading=!0;let t={version:e.createDbForm.version};i.getInitDbConf(t).then((function(t){for(var a in e.createDBconfigForm={},e.createDBconfigForm)delete e.createDBconfigForm[a];for(let r in t.setting_list)if(e.createDBconfigFormDict[t.setting_list[r].setting_name]=t.setting_list[r],e.createDBconfigFormRules[t.setting_list[r].setting_name]=[{required:!0,validator:e.validateRange,trigger:"blur"}],3===t.setting_list[r].setting_type||4===t.setting_list[r].setting_type){let a="";a=t.setting_list[r].unit,"track_activity_query_size"==t.setting_list[r].setting_name&&""==t.setting_list[r].unit&&(a="B");let i=Number(t.setting_list[r].val);"min_wal_size"==t.setting_list[r].setting_name&&(i=2,a="GB"),"max_wal_size"==t.setting_list[r].setting_name&&(i=4,a="GB"),e.$set(e.createDBconfigForm,t.setting_list[r].setting_name,{val:i,unit:a})}else{let a=t.setting_list[r].val;"shared_preload_libraries"==t.setting_list[r].setting_name&&(a="polar_vfs,polar_worker,pg_stat_statements"),e.$set(e.createDBconfigForm,t.setting_list[r].setting_name,a)}let i=t.setting_list;i=e.sortData(i),e.mostCommonlyUsedRow=[],e.commonlyUsedRow=[],e.commonlyRow=[];for(let r=0;r<i.length;r++)1==i[r].common_level&&e.mostCommonlyUsedRow.push(i[r]),2==i[r].common_level&&e.commonlyUsedRow.push(i[r]),3==i[r].common_level&&e.commonlyRow.push(i[r]);e.createDBconfigFormList=e.mostCommonlyUsedRow,e.loading=!1}),(function(t){e.loading=!1}))},nextfun(){const e=this;let t="shareStorage"===this.createDbForm.instance_type;switch(e.active){case 0:this.$refs.createDbForm.validate((a=>{a&&(e.active++,e.iscanpush=!0,e.retrievePgInitConf(),e.iscanpush=!1,t&&e.$refs.sharedDiskSettings.firstNextStep(e.createDbForm))}));break;case t?1:-1:e.$refs.sharedDiskSettings.successNextStep();break;case t?2:1:this.$refs.createDBconfigForm.validate((t=>{t&&(e.createDBconfigFormList=e.commonlyUsedRow,e.active++)}));break;case t?3:2:this.$refs.createDBconfigForm.validate((t=>{t&&(e.createDBconfigFormList=e.commonlyRow,e.active++)}))}},lastfun(){const e=this;e.iscanpush=!0;let t="shareStorage"===this.createDbForm.instance_type;(t?4==e.active:3==e.active)?(e.active--,e.createDBconfigFormList=e.commonlyUsedRow):(t?3==e.active:2==e.active)?(e.active--,e.createDBconfigFormList=e.mostCommonlyUsedRow):(t?1==e.active||2==e.active:1==e.active)&&e.active--,e.iscanpush=!1},validateNameFn(e,t){this.databaselistData.find((t=>t.instance_name===e))?this["isValidateName_"+t]=!0:this["isValidateName_"+t]=!1},validOsUser(e,t,a){const r=this;if(""==r.createDbForm.os_user)return void a();let s={host:r.createDbForm.host,user:t};r.loadingOsInfo=!0,i.checkOsUserExists(s).then((e=>{r.loadingOsInfo=!1,0==e.err_code?0==e.exists?(r.os_uid_disabled=!1,r.createDbForm.create_os_user=!0,r.createDbForm.os_uid&&r.$refs.createDbForm.validateField("os_uid"),a()):(r.os_uid_disabled=!0,r.createDbForm.create_os_user=!1,r.$refs.createDbForm.clearValidate("os_uid"),r.$set(r.createDbForm,"os_uid",e.exists),a()):a(new Error(e.err_msg))}),(function(e){a(new Error(e)),r.loadingOsInfo=!1}))},validDbPort(e,t,a){const r=this;if(""==r.createDbForm.port)return void a();let s={host:r.createDbForm.host,port:r.createDbForm.port};r.loading_port=!0,i.checkPortIsUsed(s).then((e=>{r.loading_port=!1,0==e.err_code?0==e.is_used?a():a(new Error(this.$t("verificationRules.gaiduankou-yibei-m"))):a(new Error(e.err_msg))}),(function(e){return r.loading_port=!1,a(new Error(this.$t("verificationRules.jiancha-qingqiu-chucuo")))}))},validOsUid(e,t,a){const r=this;if(""==r.createDbForm.os_uid)return void a();if(r.os_uid_disabled)return void a();let s={host:r.createDbForm.host,os_uid:t};r.loadingOsInfo=!0,i.checkOsUidExists(s).then((e=>{r.loadingOsInfo=!1,0==e.err_code?0==e.exists||r.os_uid_disabled?a():a(new Error(this.$t("createDatabasePage.yonghu-uid")+t+this.$t("createDatabasePage.yicunzai"))):a(new Error(e.err_msg))}),(function(e){a(new Error(e)),r.loadingOsInfo=!1}))},validHost(e,t,a){const r=this;if(""==r.createDbForm.host)return void a();let s={host:r.createDbForm.host};r.loading_pg_bin_path_list=!0,i.getPgBinPathList(s).then((e=>{r.loading_pg_bin_path_list=!1,r.pg_bin_path_list=e,a()}),(function(e){a(new Error(e)),r.loading_pg_bin_path_list=!1}))},validPgBinPath(e,t,a){const r=this;if(""==r.createDbForm.host)return void a();let s={host:r.createDbForm.host,pg_bin_path:r.createDbForm.pg_bin_path};r.loading_version=!0,i.getPgBinVersion(s).then((e=>{0==e.err_code?(this.$set(r.createDbForm,"version",e.version),a()):a(new Error(e.err_msg)),r.loading_version=!1}),(function(e){r.loading_version=!1,a(new Error(e))}))},sortData:e=>(e.sort((function(e,t){return e.order_id<t.order_id?-1:e.order_id>t.order_id?1:0})),e),createDbDialog:function(){const e=this;this.createDbFormVisible=!0,e.loading=!0,i.getDBHostList().then((function(t){let a="";if(0===t.length)e.$message({type:"warning",message:e.$t("createStreamReplicationCluster.shujuku-suozai-m")});else{e.curHostOptions=t;let i=t.find((e=>e.mem_size>=64&&1===e.state));i&&(a=i.ip,e.memMax=i.mem_size)}i.getPgFamilyInfo().then((function(t){e.createDbForm={instance_type:"localStorage",host:a,db_user:t.pg_family_user,os_user:t.pg_family_user},e.loading=!1}))}),(function(t){e.loading=!1}))},closeDiaLog:function(){this.$emit("close-form")},createDbSubmit:function(){let e=this;!0!==e.isValidateName_create?this.$refs.createDBconfigForm.validate((t=>{t&&e.submitFunc()})):e.$message({type:"error",message:this.$t("defineDatabasePage.mingcheng-yibei-shiyong")})},submitFunc(){const e=this;e.$emit("refresh-form");let a=Object.assign({},e.createDBconfigForm),r=[];for(let t in a)a[t].unit?r.push({setting_name:t,val:a[t].val,unit:a[t].unit}):r.push({setting_name:t,val:a[t]});let s="shareStorage"===e.createDbForm.instance_type?e.pfsDiskNmaeFrom:{},n=Object.assign({},this.createDbForm,{setting_list:r},s);n.db_pass=t.ToDbText(n.db_pass),n.port=Number(n.port),n.db_type=11,e.loading=!0,i.createPolarDb(n).then((function(t){e.loading=!1,e.$refs.createDbForm.resetFields(),e.createDbFormVisible=!1,e.$emit("close-form"),e.$emit("open-task",t.task_id)}),(function(t){e.loading=!1,e.$emit("down-form")}))}}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{overflow:"hidden"},attrs:{"element-loading-text":e.$t("Public.ping-ming-jia-zai-zhong")}},[a("el-steps",{staticStyle:{"margin-bottom":"20px"},attrs:{active:e.active,"finish-status":"success","align-center":""}},[a("el-step",{attrs:{title:e.$t("createDatabasePage.xuanze-shujuku")}}),"shareStorage"===e.createDbForm.instance_type?[a("el-step",{attrs:{title:e.$t("createPolardbCluster.gongxiangcipan-peizhi")}}),a("el-step",{attrs:{title:e.$t("createDatabasePage.changyong-canshu-peizhi")}}),a("el-step",{attrs:{title:e.$t("createDatabasePage.yiban-canshu-peizhi")}}),a("el-step",{attrs:{title:e.$t("createDatabasePage.qita-canshu-peizhi")}})]:[a("el-step",{attrs:{title:e.$t("createDatabasePage.changyong-canshu-peizhi")}}),a("el-step",{attrs:{title:e.$t("createDatabasePage.yiban-canshu-peizhi")}}),a("el-step",{attrs:{title:e.$t("createDatabasePage.qita-canshu-peizhi")}})]],2),a("el-row",[a("el-col",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active===0"}]},[a("el-form",{ref:"createDbForm",attrs:{model:e.createDbForm,"label-width":"160px",rules:e.createDbFormRules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("createPolarDBDatabase.shili-leixing"),prop:"instance_type"}},[a("el-radio-group",{model:{value:e.createDbForm.instance_type,callback:function(t){e.$set(e.createDbForm,"instance_type",t)},expression:"createDbForm.instance_type"}},[a("el-radio",{attrs:{label:"localStorage"}},[e._v(" "+e._s(e.$t("createPolarDBDatabase.bendi-cunchu"))+" ")]),a("el-radio",{attrs:{label:"shareStorage"}},[e._v(" "+e._s(e.$t("createPolarDBDatabase.gongxiang-cunchu"))+" ")])],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{class:{"is-error":e.isValidateName_create},attrs:{label:e.$t("dbList.shujuku-mingcheng"),prop:"instance_name"}},[a("div",{staticClass:"demo-input-suffix"},[a("el-input",{attrs:{placeholder:e.$t("defineDatabasePage.qingshuru-shujujku-mingcheng")},on:{change:function(t){return e.validateNameFn(e.createDbForm.instance_name,"create")}},model:{value:e.createDbForm.instance_name,callback:function(t){e.$set(e.createDbForm,"instance_name",t)},expression:"createDbForm.instance_name"}},[e.isValidateName_create?a("i",{staticClass:"red el-input__icon el-icon-error",staticStyle:{"font-size":"14px"},attrs:{slot:"suffix"},slot:"suffix"}):e._e()])],1),e.isValidateName_create?a("div",{staticClass:"el-form-item__error"},[e._v(e._s(e.$t("defineDatabasePage.yibei-shiyong-message")))]):e._e()])],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dbList.suozai-zhuji"),prop:"host"}},[a("el-select",{staticStyle:{width:"100%",float:"left"},attrs:{filterable:"",placeholder:e.$t("defineDatabasePage.qingxuanze-shujiku-message")},on:{change:e.getResource},model:{value:e.createDbForm.host,callback:function(t){e.$set(e.createDbForm,"host",t)},expression:"createDbForm.host"}},e._l(e.curHostOptions,(function(t){return a("el-option",{key:t.hid,attrs:{label:t.ip,value:t.ip,disabled:1!==t.state||t.mem_size<64}},[a("el-tooltip",{staticClass:"item",attrs:{placement:"top",disabled:1===t.state&&t.mem_size>=64,effect:"dark",content:e._f("filterContent")(t.state,e.language)}},[a("div",{staticStyle:{overlow:"hiedden"}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.ip))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.hostname))])])])],1)})),1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("createDatabasePage.shujuku-ruanjian"),prop:"pg_bin_path"}},[a("el-select",{staticStyle:{width:"100%",float:"left"},attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:e.$t("createDatabasePage.qingxuanze-shujuku-ruanjian")},model:{value:e.createDbForm.pg_bin_path,callback:function(t){e.$set(e.createDbForm,"pg_bin_path",t)},expression:"createDbForm.pg_bin_path"}},e._l(e.pg_bin_path_list,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,placement:"top",effect:"dark",content:e.$t("createStandbyPage.shujuku-ruanjian-lujing")}},[a("div",{staticStyle:{overlow:"hiedden"}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t))])])])],1)})),1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:e.$t("licManager.ban-ben"),"label-width":"60px",prop:"version"}},[a("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_version,expression:"loading_version"}],staticStyle:{width:"100%",float:"left"},attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0)",disabled:""},model:{value:e.createDbForm.version,callback:function(t){e.$set(e.createDbForm,"version",t)},expression:"createDbForm.version"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("defineDatabasePage.shuju-duankou"),prop:"port"}},[a("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_port,expression:"loading_port"}],attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0)",placeholder:e.$t("defineDatabasePage.shuju-duankou-placeholder")},model:{value:e.createDbForm.port,callback:function(t){e.$set(e.createDbForm,"port",e._n(t))},expression:"createDbForm.port"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("defineDatabasePage.shuju-mulu"),prop:"pgdata"}},[a("el-input",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_pgdata,expression:"loading_pgdata"}],attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0)",placeholder:e.$t("defineDatabasePage.shuju-mulu-placeholder")},model:{value:e.createDbForm.pgdata,callback:function(t){e.$set(e.createDbForm,"pgdata",t)},expression:"createDbForm.pgdata"}})],1)],1)],1),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingOsInfo,expression:"loadingOsInfo"}],attrs:{"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0)"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("createDatabasePage.caozuo-xitong-yonghu"),prop:"os_user"}},[a("el-input",{attrs:{placeholder:e.pgUser},model:{value:e.createDbForm.os_user,callback:function(t){e.$set(e.createDbForm,"os_user",t)},expression:"createDbForm.os_user"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:e.$t("createDatabasePage.chuangjian-caozuoxitong-yonghu"),prop:"create_os_user"}},[a("el-switch",{attrs:{disabled:""},model:{value:e.createDbForm.create_os_user,callback:function(t){e.$set(e.createDbForm,"create_os_user",t)},expression:"createDbForm.create_os_user"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("createDatabasePage.caozuoxitong-yonghu-UID"),prop:"os_uid"}},[a("el-input",{attrs:{placeholder:e.$t("createDatabasePage.shuru-yonghu-UID"),disabled:e.os_uid_disabled},model:{value:e.createDbForm.os_uid,callback:function(t){e.$set(e.createDbForm,"os_uid",e._n(t))},expression:"createDbForm.os_uid"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("defineDatabasePage.DB-zhongde-yonghu"),prop:"db_user"}},[a("el-input",{attrs:{placeholder:e.pgUser},model:{value:e.createDbForm.db_user,callback:function(t){e.$set(e.createDbForm,"db_user",t)},expression:"createDbForm.db_user"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("defineDatabasePage.DB-zhongde-mima"),prop:"db_pass"}},[a("el-input",{attrs:{autocomplete:"new-password",placeholder:e.$t("defineDatabasePage.DB-zhongde-mima-placeholder"),"show-password":""},model:{value:e.createDbForm.db_pass,callback:function(t){e.$set(e.createDbForm,"db_pass",t)},expression:"createDbForm.db_pass"}})],1)],1)],1)],1)],1),"shareStorage"===e.createDbForm.instance_type?a("el-col",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}]},[a("sharedDiskSettings",{ref:"sharedDiskSettings",on:{success:e.receivePFSDiskNmaeFrom,isFormat:e.isAllowNextStep}})],1):e._e(),a("el-col",{directives:[{name:"show",rawName:"v-show",value:"shareStorage"===e.createDbForm.instance_type?e.active>=2:e.active>=1,expression:"createDbForm.instance_type === 'shareStorage'?active>=2:active>=1"}]},[a("el-form",{ref:"createDBconfigForm",staticStyle:{"overflow-y":"auto","max-height":"480px",width:"110%","min-width":"1120px"},attrs:{model:e.createDBconfigForm,"label-width":"254px",rules:e.createDBconfigFormRules}},[a("el-row",e._l(e.createDBconfigFormList,(function(t,i){return a("el-col",{key:i,attrs:{span:10}},[1==t.setting_type?a("el-form-item",{attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-input",{attrs:{placeholder:e.$t("createDatabasePage.qingshuru-neirong")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],callback:function(t){e.$set(e.createDBconfigForm,e.createDBconfigFormList[i].setting_name,t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name]"}})],1)],1):e._e(),2==t.setting_type?a("el-form-item",{attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-select",{staticStyle:{width:"100%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qing-xuan-ze")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],callback:function(t){e.$set(e.createDBconfigForm,e.createDBconfigFormList[i].setting_name,t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name]"}},[a("el-option",{attrs:{label:"off",value:"off"}}),a("el-option",{attrs:{label:"on",value:"on"}})],1)],1)],1):e._e(),3==t.setting_type?a("el-form-item",{staticStyle:{clear:"both"},attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,disabled:!t.notes,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-input",{staticStyle:{width:"70%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qingshuru-neirong")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name].val,callback:function(t){e.$set(e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],"val",t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name].val"}})],1),a("el-select",{staticStyle:{width:"30%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qing-xuan-ze")},on:{change:function(a){return e.SelectChange(t.setting_name)}},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name].unit,callback:function(t){e.$set(e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],"unit",t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name].unit"}},e._l(e.byteUnitDict,(function(e,t){return a("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1):e._e(),4==t.setting_type?a("el-form-item",{staticStyle:{clear:"both"},attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,disabled:!t.notes,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-input",{staticStyle:{width:"70%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qingshuru-neirong")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name].val,callback:function(t){e.$set(e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],"val",t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name].val"}})],1),a("el-select",{staticStyle:{width:"30%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qing-xuan-ze")},on:{change:function(a){return e.SelectChange(t.setting_name)}},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name].unit,callback:function(t){e.$set(e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],"unit",t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name].unit"}},e._l(e.timeUnitDict,(function(e,t){return a("el-option",{key:e,attrs:{label:e,value:t}})})),1)],1):e._e(),5==t.setting_type?a("el-form-item",{attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,disabled:!t.notes,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-select",{staticStyle:{width:"100%",float:"left"},attrs:{placeholder:e.$t("createDatabasePage.qing-xuan-ze")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],callback:function(t){e.$set(e.createDBconfigForm,e.createDBconfigFormList[i].setting_name,t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name]"}},e._l(t.enumvals,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1):e._e(),6==t.setting_type?a("el-form-item",{attrs:{label:t.setting_name,prop:t.setting_name}},[a("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,disabled:!t.notes,effect:"dark",content:t.notes,placement:"top-end"}},[a("el-input",{attrs:{placeholder:e.$t("createDatabasePage.qingshuru-neirong")},model:{value:e.createDBconfigForm[e.createDBconfigFormList[i].setting_name],callback:function(t){e.$set(e.createDBconfigForm,e.createDBconfigFormList[i].setting_name,t)},expression:"createDBconfigForm[createDBconfigFormList[index].setting_name]"}})],1)],1):e._e()],1)})),1)],1)],1)],1),a("div",{staticClass:"dialog-footer",staticStyle:{float:"right","margin-top":"10px"},attrs:{slot:"footer"},slot:"footer"},["shareStorage"===e.createDbForm.instance_type?[a("el-button",{nativeOn:{click:function(t){return e.closeDiaLog(t)}}},[e._v(e._s(e.$t("index.qu-xiao")))]),e.active>=1?a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:e.lastfun}},[e._v(e._s(e.$t("createDatabasePage.shang-yi-bu")))]):e._e(),a("el-tooltip",{attrs:{disabled:e.isFormat||1!==e.active,placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.$t("createPolardbCluster.jiancecipanming-tongguo-m")))]),a("span",{staticStyle:{"margin-left":"10px"}},[e.active<4?a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:e.iscanpush||!e.isFormat&&1===e.active},on:{click:e.nextfun}},[e._v(e._s(e.$t("createDatabasePage.xia-yi-bu"))+" ")]):e._e()],1)]),4==e.active?[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.createDbSubmit}},[e._v(e._s(e.$t("defineDatabasePage.ti-jiao")))])]:e._e()]:[a("el-button",{nativeOn:{click:function(t){return e.closeDiaLog(t)}}},[e._v(e._s(e.$t("index.qu-xiao")))]),e.active>=1?a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:e.lastfun}},[e._v(e._s(e.$t("createDatabasePage.shang-yi-bu")))]):e._e(),e.active<3?a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:e.iscanpush},on:{click:e.nextfun}},[e._v(e._s(e.$t("createDatabasePage.xia-yi-bu"))+" ")]):e._e(),3==e.active?[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.createDbSubmit}},[e._v(e._s(e.$t("defineDatabasePage.ti-jiao")))])]:e._e()]],2)],1)}),[],!1,c,"51e8c48a",null,null);function c(e){for(let t in o)this[t]=o[t]}var g=function(){return l.exports}();export{g as default};
