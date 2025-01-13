import{n as t,_ as e}from"./index.b4e70f3f.js";import"./vendor.194c4086.js";import{s as i}from"./staticTools.84335405.js";import{A as s}from"./api_clusterManage.788b7961.js";import"./index.dfdb83b1.js";import"./bus.d56574c1.js";const a={};var n=t({name:"HAManage",components:{OperCluster:()=>e((()=>import("./OperCluster.72755b99.js")),["assets/OperCluster.72755b99.js","assets/OperCluster.3234b22b.css","assets/polarDbComputerRoomConfig.955a47ab.js","assets/polarDbComputerRoomConfig.c4d81c89.css","assets/api_clusterManage.788b7961.js","assets/index.dfdb83b1.js","assets/vendor.194c4086.js","assets/bus.d56574c1.js","assets/verificationRules.bef90446.js","assets/staticTools.84335405.js","assets/index.b4e70f3f.js","assets/index.738ab243.css","assets/clusterInfo.098607a8.js","assets/clusterInfo.7c62c11d.css","assets/taskLog.95f9a65c.js","assets/baseInfo.139b0e47.css"])},data:()=>({filters:{name:""},total:0,page:1,size:20,loading:!1,rows:[],showMistakeVisible:!1,mistakeContent:"",needToFirstPage:!1,multipleChoicIDArr:[]}),watch:{"filters.name"(t,e){t!=e&&""!=t&&(this.needToFirstPage=!0)}},methods:{batchOnClusters(){this.$confirm(this.$t("HAManage.piliang-shangxian-m",[this.multipleChoicIDArr.join("、"),this.multipleChoicIDArr.join("、")]),this.$t("index.ti-shi"),{confirmButtonText:this.$t("dbList.shi"),cancelButtonText:this.$t("dbList.fou"),type:"warning",dangerouslyUseHTMLString:!0}).then((()=>{let t={cluster_id_list:this.multipleChoicIDArr};this.loading=!0,s.batchOnlineCluster(t).then((()=>{this.loading=!1,this.showList(),i(this.$t("ModifyCluster.shangxian-cenggong"))}),(t=>this.loading=!1))})).catch((t=>{this.loading=!1}))},batchOffClusters(){this.$confirm(this.$t("HAManage.piliang-lixian-m",[this.multipleChoicIDArr.join("、"),this.multipleChoicIDArr.join("、")]),this.$t("index.ti-shi"),{confirmButtonText:this.$t("dbList.shi"),cancelButtonText:this.$t("dbList.fou"),type:"warning",dangerouslyUseHTMLString:!0}).then((()=>{let t={cluster_id_list:this.multipleChoicIDArr};this.loading=!0,s.batchOfflineCluster(t).then((()=>{this.loading=!1,this.showList(),i(this.$t("ModifyCluster.lixian-chenggong"))}),(t=>this.loading=!1))})).catch((t=>{this.loading=!1}))},multipleChoicClusters(t){this.multipleChoicIDArr=t.map((t=>t.cluster_id))},tableRowClassName:({row:t,rowIndex:e})=>e%2!=0?"warning-row":"success-row",handleSizeChange(t){this.size=t,this.needToFirstPage=!0,this.showList()},handleCurrentChange(t){this.page=t,this.showList()},handleSearch(){this.showList()},showList:function(){let t=this;this.needToFirstPage&&(this.page=1),1==this.page&&(this.total=0);let e={page_size:t.size,page_num:t.page};""!==t.filters.name&&(e.filter=t.filters.name),t.loading=!0,s.getClusterList(e).then((function(e){t.loading=!1,t.needToFirstPage=!1,e&&e.rows&&(t.total=e.total,t.rows=e.rows),t.$nextTick((()=>{t.$emit("btnHidden")}))}),(function(e){t.loading=!1}))},showDetailView:function(t,e){let i={page_size:this.size,page_num:this.page,cluster_id:e.cluster_id,cluster_name:e.cluster_name,cluster_type:e.cluster_type,state:e.state};this.$refs.OperCluster.openDialog(i)},onCluter:function(t,e){let i=this,a="";this.$confirm(this.$t("HAManage.queren-jiang-message")+e.cluster_id+this.$t("HAManage.shangxianma"),this.$t("index.ti-shi"),{type:"warning",closeOnClickModal:!1}).then((()=>{i.loading=!0;let t={cluster_id:e.cluster_id};s.online(t).then((function(){i.loading=!1,i.showList()}),(function(t){i.loading=!1,i.$message.closeAll(),i.showMistakeVisible=!0,console.log("err = "+t.response.data);let e=t.response.data;for(let i=0;i<e.length;i++)a+="<p>&#X3000;"+e[i]+"</p>";console.log(e[0]),i.mistakeContent=a}))})).catch((t=>{}))},offCluter:function(t,e){let i=this;this.$confirm(this.$t("HAManage.queren-jiang-message")+e.cluster_id+this.$t("HAManage.lixianma"),this.$t("index.ti-shi"),{type:"warning",closeOnClickModal:!1}).then((()=>{i.loading=!0;let t={cluster_id:e.cluster_id};s.offline(t).then((function(){i.loading=!1,i.showList()}),(function(t){i.loading=!1}))})).catch((()=>{}))},delCluter:function(t,e){let i=this;this.$confirm(this.$t("HAManage.queren-jiang-del-message")+e.cluster_id+this.$t("HAManage.shanchuma"),this.$t("index.ti-shi"),{type:"warning",closeOnClickModal:!1}).then((()=>{i.loading=!0;let t={cluster_id:e.cluster_id};s.delete(t).then((function(){i.loading=!1;let t=Math.ceil((i.total-1)/i.size),e=i.page>t?t:i.page;i.page=e<1?1:e,i.showList()}),(function(t){i.loading=!1}))})).catch((()=>{}))}},mounted:function(){this.showList()}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{staticClass:"warp"},[i("el-col",{staticClass:"warp-breadcrum",attrs:{span:24}},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("span",[t._v(t._s(t.$t("HAManage.HA-guanli")))])])],1)],1),i("el-col",{staticClass:"warp-main",attrs:{span:24}},[i("el-form",{staticClass:"demo-form-inline",staticStyle:{display:"inline-block"},attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[i("el-form-item",{staticStyle:{width:"100%"}},[i("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:t.$t("HAManage.qingshuru-jiqun-message")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name "}},[i("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.showList},slot:"append"},[t._v(t._s(t.$t("dbList.shou-suo")))])],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("Public.question"),placement:"top"}},[i("i",{staticClass:"el-icon-question",staticStyle:{"margin-left":"5px"}})])],1)],1),i("div",{staticStyle:{float:"right","margin-top":"6px"}},[i("el-button",{staticClass:"normal el-icon-refresh-right",on:{click:t.showList}},[t._v(" "+t._s(t.$t("resourceManagement.shua-xin")))]),i("el-button",{attrs:{disabled:0===t.multipleChoicIDArr.length,type:"primary",size:"small"},on:{click:t.batchOnClusters}},[t._v(" "+t._s(t.$t("HAManage.shang-xian")))]),i("el-button",{attrs:{disabled:0===t.multipleChoicIDArr.length,type:"normal",size:"small"},on:{click:t.batchOffClusters}},[t._v(" "+t._s(t.$t("dashboard.li-xian")))])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"row-class-name":t.tableRowClassName,data:t.rows,border:"","element-loading-text":t.$t("Public.ping-ming-jia-zai-zhong")},on:{"selection-change":t.multipleChoicClusters}},[i("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),i("el-table-column",{attrs:{prop:"display_state",label:t.$t("dbList.zhuang-tai"),"header-align":"center",align:"left",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.state?i("i",{staticClass:"el-icon-success green"},[i("span",{staticClass:"statefont"},[t._v(" "+t._s(e.row.display_state))])]):0===e.row.state?i("i",{staticClass:"el-icon-success"},[i("span",{staticClass:"statefont"},[t._v(" "+t._s(e.row.display_state))])]):-1===e.row.state?i("i",{staticClass:"el-icon-error red"},[i("span",{staticClass:"statefont"},[t._v(" "+t._s(e.row.display_state))])]):4===e.row.state?i("span",{staticClass:"statefont"},[i("i",{staticClass:"el-icon-loading green"}),t._v(" "+t._s(e.row.display_state))]):i("span",{staticClass:"statefont"},[i("i",{staticClass:"el-icon-success red"}),t._v(" Failed")])]}}])}),i("el-table-column",{attrs:{prop:"cluster_id",label:t.$t("dbList.jiqun-id"),align:"center",width:"100px"}}),i("el-table-column",{attrs:{prop:"cluster_type",label:t.$t("HAManage.gaokeyong-leixing"),align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.cluster_type?i("span",[t._v(" "+t._s(t.$t("HAManage.liufuzhi")))]):2===e.row.cluster_type?i("span",[t._v(" "+t._s(t.$t("HAManage.gongxiang-cipan")))]):11===e.row.cluster_type?i("span",[t._v(" "+t._s(t.$t("HAManage.polardb-gongxiang-cunchu")))]):21===e.row.cluster_type?i("span",[t._v(" "+t._s(t.$t("HAManage.patroni-jiqun")))]):t._e()]}}])}),i("el-table-column",{attrs:{prop:"cluster_name",label:t.$t("resourceManagement.jiqun-mingchen"),align:"center","min-width":"100px","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"vip",label:"VIP",align:"center","min-width":"130px"}}),i("el-table-column",{attrs:{prop:"handle",label:t.$t("dbList.cao-zuo"),align:"center","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-link",{staticClass:"detail",attrs:{size:"mini"},on:{click:function(i){return t.showDetailView(e.$index,e.row)}}},[t._v(t._s(t.$t("BackupPlanManage.xiangqing")))]),21!=e.row.cluster_type?i("span",[i("span",{staticStyle:{color:"rgb(218 220 224)","font-size":"12px"}},[t._v("|")]),1===e.row.state?i("el-link",{staticClass:"offLine",attrs:{size:"mini"},on:{click:function(i){return t.offCluter(e.$index,e.row)}}},[t._v(t._s(t.$t("dashboard.li-xian")))]):0===e.row.state||-1===e.row.state?i("el-link",{staticClass:"onLine",attrs:{size:"mini"},on:{click:function(i){return t.onCluter(e.$index,e.row)}}},[t._v(t._s(t.$t("HAManage.shang-xian")))]):t._e()],1):t._e()]}}])})],1),i("div",{staticClass:"block",staticStyle:{float:"right"}},[i("el-pagination",{ref:"pagination",attrs:{layout:"total, sizes, prev, pager, next, jumper",total:t.total,"page-sizes":[20,30,40,50,100]},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"text-align":"left"},attrs:{title:t.$t("HAManage.fasheng-cuowu"),visible:t.showMistakeVisible,"close-on-click-modal":!1,"element-loading-text":t.$t("Public.ping-ming-jia-zai-zhong"),width:"50%"},on:{"update:visible":function(e){t.showMistakeVisible=e}}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("div",{domProps:{innerHTML:t._s(t.mistakeContent)}})])],1)],1),i("oper-cluster",{ref:"OperCluster",on:{refreshTable:t.showList}})],1)}),[],!1,l,"6cf313a2",null,null);function l(t){for(let e in a)this[e]=a[e]}var o=function(){return n.exports}();export{o as default};
