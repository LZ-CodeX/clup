import{P as t}from"./index.dfdb83b1.js";import{H as a}from"./vendor.194c4086.js";import{n as e}from"./index.00f40289.js";import"./bus.d56574c1.js";var s=a=>t("/api/v1/get_dashboard",a),i=a=>t("/api/v1/get_clup_host_list",a);const n={};var l=e({name:"dashboard",data:()=>({loading:!1,clup_table_loading:!1,clusterTotal:0,clusterOnline:0,clusterOffline:0,clusterAbnormal:0,pmTotal:0,pmNormal:0,pmError:0,dbTotal:0,dbStartup:0,dbStop:0,dbAbnormal:0,clupHostList:[]}),methods:{showList:function(){let t=this;t.loading=!0,s().then((function(a){t.loading=!1,t.clusterOnline=a.cluster_stats.Online,t.clusterOffline=a.cluster_stats.Offline,t.clusterAbnormal=a.cluster_stats.Failed+a.cluster_stats.Reparing+a.cluster_stats.Failover,t.clusterCreateFaild=a.cluster_stats.CREATE_FAILD,t.clusterTotal=t.clusterOnline+t.clusterOffline+t.clusterAbnormal+t.clusterCreateFaild,t.dbTotal=a.db_stats.total,t.dbStartup=a.db_stats.startup,t.dbStop=a.db_stats.stop,t.dbAbnormal=a.db_stats.abnormal,t.dbFailed=a.db_stats.failed,t.pmError=a.host_stats.abnormal,t.pmNormal=a.host_stats.normal,t.pmTotal=t.pmError+t.pmNormal,t.myEcharts(1),t.myEcharts(2),t.myEcharts(3)}),(function(a){t.loading=!1}))},jumpNavigation:function(t){this.$router.push({path:t,query:{}})},alarmDetail:function(t,a,e){console.log(t),this.$router.push({path:"/alarmManage",query:{}})},myEcharts(t){const e=this;var s="main";let i=e.clusterTotal,n="{point.name}: <b>{point.y}</b>",l="{series.name}: <b>{point.y}</b>",o=["#4dd3b9","#909399","#FFA558","#FF0000"],r=[[this.$t("dashboard.zai-xian"),e.clusterOnline],[this.$t("dashboard.yi-chang"),e.clusterAbnormal],[this.$t("dashboard.li-xian"),e.clusterOffline],[this.$t("BackupDataManage.shibai"),e.clusterCreateFaild]];2==t&&(s="main1",i=e.dbTotal,o=["#4dd3b9","#909399","#FFA558","#FF0000"],r=[[this.$t("dashboard.zheng-chang"),e.dbStartup],[this.$t("dashboard.wei-zhi"),e.dbAbnormal],[this.$t("dbList.ting-zhi"),e.dbStop],[this.$t("BackupDataManage.shibai"),e.dbFailed]]),3==t&&(s="main2",i=e.pmTotal,o=["#4dd3b9","#FF0000"],r=[[this.$t("dashboard.zheng-chang"),e.pmNormal],[this.$t("dashboard.yi-chang"),e.pmError]]),0==i&&(n="{point.name}",l="",o=["#4dd3b9"],r=[[this.$t("dashboard.zanwu-shuju"),1]]),a.chart(s,{chart:{spacing:[20,0,20,0]},title:{floating:!0,text:this.$t("dashboard.zong-shu")+i},colors:o,tooltip:{pointFormat:l},credits:{enabled:!1},legend:{labelFormatter:function(){let t=":"+this.options.y;return"暂无数据"!=this.name&&"No data available"!=this.name||(t=""),this.name+t}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",size:140,showInLegend:!0,dataLabels:{enabled:!1,format:n,style:{color:a.theme&&a.theme.contrastTextColor||"black"},allowPointSelect:!0,cursor:"pointer"},point:{events:{}}}},series:[{type:"pie",name:this.$t("dashboard.zhan-bi"),innerSize:"70%",data:r}]},(function(t){var a=t.series[0].center[1],e=parseInt(t.title.styles.fontSize);t.setTitle({y:a+e/2})}))},getClupHostList:function(){let t=this;t.clup_table_loading=!0,i().then((function(a){t.clupHostList=a,t.clup_table_loading=!1}))},showPage:function(){this.showList(),this.getClupHostList()}},mounted:function(){window.location.href.split("?")[1],this.showPage()}},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{attrs:{gutter:12}},[e("el-col",{staticClass:"noBackground-dark",staticStyle:{"min-width":"100%",background:"#fff"},attrs:{span:24}},[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:12,"element-loading-text":t.$t("Public.ping-ming-jia-zai-zhong")}},[e("el-col",{attrs:{span:8}},[e("el-card",[e("div",{staticStyle:{"text-align":"center","font-size":"20px",cursor:"pointer"},on:{click:function(a){return t.jumpNavigation("/clusterDefine")}}},[t._v(t._s(t.$t("dashboard.jiqun_gailan")))]),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"main"}})])],1),e("el-col",{attrs:{span:8}},[e("el-card",[e("div",{staticStyle:{"text-align":"center","font-size":"20px",cursor:"pointer"},on:{click:function(a){return t.jumpNavigation("/dbLists")}}},[t._v(t._s(t.$t("dashboard.shili_gailan")))]),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"main1"}})])],1),e("el-col",{attrs:{span:8}},[e("el-card",[e("div",{staticStyle:{"text-align":"center","font-size":"20px",cursor:"pointer"},on:{click:function(a){return t.jumpNavigation("/AgentStatusView")}}},[t._v(t._s(t.$t("dashboard.zhuji_xinxi_gialan")))]),e("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"main2"}})])],1)],1)],1),e("el-col",{staticStyle:{"min-width":"100%","margin-top":"10px"},attrs:{span:24}},[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.clup_table_loading,expression:"clup_table_loading"}],attrs:{"element-loading-text":t.$t("Public.ping-ming-jia-zai-zhong")}},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{staticStyle:{"text-align":"center","font-size":"20px"}},[t._v("Clup")]),e("div",[[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.clup_table_loading,expression:"clup_table_loading"}],staticStyle:{width:"100%",border:"1px solid #f5f7fa"},attrs:{data:t.clupHostList,"element-loading-text":t.$t("Public.ping-ming-jia-zai-zhong")}},[e("el-table-column",{attrs:{prop:"host",label:t.$t("dashboard.zhu-ji"),align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[null!==s.url?e("el-link",{staticClass:"buttonText",attrs:{href:s.url,target:"_blank",type:"primary",underline:!1}},[t._v(t._s(s.host))]):e("span",{staticClass:"buttonText",attrs:{type:"primary"}},[t._v(t._s(s.host))])]}}])}),e("el-table-column",{attrs:{prop:"port",label:t.$t("dashboard.duan-kou"),align:"center"}}),e("el-table-column",{attrs:{prop:"clup",label:"Clup",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[!0===a.row.clup?e("i",{staticClass:"el-icon-success green"},[e("span",{staticClass:"statefont"},[t._v(" running")])]):!1===a.row.clup?e("i",{staticClass:"el-icon-warning red"},[e("span",{staticClass:"statefont"},[t._v(" down")])]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"csumdb",label:"Csumdb",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[!0===a.row.csumdb?e("i",{staticClass:"el-icon-success green"},[e("span",{staticClass:"statefont"},[t._v(" running")])]):!1===a.row.csumdb?e("i",{staticClass:"el-icon-warning red"},[e("span",{staticClass:"statefont"},[t._v(" down")])]):t._e()]}}])})],1)]],2)])],1)],1)],1)}),[],!1,o,"4f1c308c",null,null);function o(t){for(let a in n)this[a]=n[a]}var r=function(){return l.exports}();export{r as default};
