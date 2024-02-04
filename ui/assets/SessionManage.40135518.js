var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;"undefined"!=typeof require&&require;import{A as l}from"./api_dbManage.40e399a2.js";import{D as n}from"./DynamicRefresh.a173e29c.js";import{n as o}from"./index.7fc66993.js";import"./index.dfdb83b1.js";import"./vendor.194c4086.js";import"./bus.d56574c1.js";const r={};var c=o({name:"SessionManage",data:()=>({needToFirstPage:!1,sortRule:{prop:null,order:null},tabData:"",hide_col_list:[],isFirstLoad:!1,selectValue:"",stateFilter:["active","idle in transaction","idle in transaction (aborted)","fastpath function call","disabled","NULL"],activeFilters:[{text:"active",value:"active"},{text:"idle",value:"idle"},{text:"idle in transaction",value:"idle in transaction"},{text:"idle in transaction (aborted)",value:"idle in transaction (aborted)"},{text:"fastpath function call",value:"fastpath function call"},{text:"disabled",value:"disabled"},{text:"NULL",value:"NULL"}],watiTypeFiltersLIst:[],watiTypeFilters:[{text:"LWLock",value:"LWLock"},{text:"Lock",value:"Lock"},{text:"BufferPin",value:"BufferPin"},{text:"Activity",value:"Activity"},{text:"Extension",value:"Extension"},{text:"Client",value:"Client"},{text:"IPC",value:"IPC"},{text:"Timeout",value:"Timeout"},{text:"IO",value:"IO"},{text:"NULL",value:"NULL"}],backendTypeFiltersLIst:["client backend"],backendTypeFilters:[{text:"autovacuum launcher",value:"autovacuum launcher"},{text:"autovacuum worker",value:"autovacuum worker"},{text:"logical",value:"logical"},{text:"replication launcher",value:"replication launcher"},{text:"logical replication worker",value:"logical replication worker"},{text:"parallel worker",value:"parallel worker"},{text:"background writer",value:"background writer"},{text:"client backend",value:"client backend"},{text:"checkpointer",value:"checkpointer"},{text:"startup",value:"startup"},{text:"walreceiver",value:"walreceiver"},{text:"walsender",value:"walsender"},{text:"walwriter",value:"walwriter"},{text:"NULL",value:"NULL"}],loading:!1,total:0,page:1,size:20,oldpage:1,noData:{},dbHostMsg:{},dbListForLoop:{},sessionRows:[],colData:[{title:"进程ID",istrue:!0},{title:"状态",istrue:!0},{title:"数据库名",istrue:!0},{title:"用户名",istrue:!0},{title:"应用程序",istrue:!0},{title:"客户端地址",istrue:!0},{title:"客户端主机名",istrue:!1},{title:"客户端端口",istrue:!0},{title:"进程开始时间",istrue:!1},{title:"事务开始时间",istrue:!0},{title:"SQL开始时间",istrue:!0},{title:"状态改变时间",istrue:!1},{title:"等待事件类型",istrue:!1},{title:"等待事件",istrue:!0},{title:"运行SQL",istrue:!0},{title:"进程顶层事务ID",istrue:!1},{title:"进程xmin",istrue:!1},{title:"进程类型",istrue:!0}],checkBoxGroup:[],checkedColumns:[],isShowComponents:!1,isDynamicRefresh:!1,timerList:[]}),components:{DynamicRefresh:n},watch:{selectValue:function(e){const t=this;let i={};for(let a=0;a<t.dbListForLoop.length;a++)e==t.dbListForLoop[a].db_id&&(i=t.dbListForLoop[a]);t.isFirstLoad?(this.needToFirstPage=!0,t.getDBListFn(i)):t.isFirstLoad=!0,this.clearTimer()},stateFilter:function(e){this.needToFirstPage=!0,this.getSessionList()},backendTypeFiltersLIst:function(e){this.needToFirstPage=!0,this.getSessionList()},checkedColumns(e,t){let i=this.checkBoxGroup.filter((t=>!e.includes(t)));localStorage.setItem(this.rows,JSON.stringify(i)),this.colData.filter((e=>{-1!=i.indexOf(e.title)?e.istrue=!1:e.istrue=!0}))}},mounted(){this.colData.forEach(((e,t)=>{this.checkBoxGroup.push(e.title),e.istrue&&this.checkedColumns.push(e.title)})),this.checkedColumns=this.checkedColumns;let e=this.rows;null!=e&&(this.checkedColumns=this.checkedColumns.filter((t=>!e.includes(t)))),void 0!==this.$route.query.data&&void 0!==this.$route.query.data.db_id?this.getDBListFn(this.$route.query.data):this.getDBListFn()},methods:{switchDynamicRefreshDialog(){this.isShowComponents=!0},onDynamicRefresh(e){let{refresh_interval:t,keep_time:i}=e;this.isDynamicRefresh=!0;const a=setInterval((()=>{this.getSessionList()}),t);this.timerList.push(a);const s=setTimeout((()=>{this.clearTimer()}),i);this.timerList.push(s)},offDynamicRefresh(){this.clearTimer()},clearTimer(){this.isDynamicRefresh=!1,this.timerList.length&&(this.timerList.forEach((e=>{clearInterval(e)})),this.timerList=[])},checkall(e){const t=this;let i=[];if(1==e){for(let e=0;e<t.activeFilters.length;e++)i.push(t.activeFilters[e].value);t.stateFilter=i}else if(2==e){for(let e=0;e<t.backendTypeFilters.length;e++)i.push(t.backendTypeFilters[e].value);t.backendTypeFiltersLIst=i}},uncheckall(e){const t=this;1==e?t.stateFilter=[]:2==e&&(t.backendTypeFiltersLIst=[])},filterFunHandle(e){const t=this;"allchecked"===e?t.colData.forEach(((e,i)=>{t.checkedColumns.push(e.title)})):"cancel"===e&&(this.checkedColumns=[])},sortChange(e){const t=this;var i=[];if(null!=e.order){i=[];for(let a=0;a<t.sessionRows.length;a++)null===t.sessionRows[a][e.prop]?i.push(t.sessionRows[a]):i.unshift(t.sessionRows[a]);t.sessionRows=i}null==e.order&&(t.sessionRows,t.tabData),t.$nextTick((()=>{t.$emit("btnHidden")})),t.sortChange.order=e.order,t.sortChange.prop=e.prop},tableRowClassName:({row:e,rowIndex:t})=>t%2!=0?"warning-row":"success-row",handleSizeChange(e){this.size=e,this.oldpage=this.page,this.needToFirstPage=!0,this.getSessionList()},handleCurrentChange(e){this.page=e,this.oldpage=this.page,this.getSessionList()},copy(e){this.$message({message:this.$t("SessionManage.yichenggong-fuzhi-message"),type:"success"})},onError(e){this.$message.error(this.$t("SessionManage.fuzhi-dao-jianqie-message"))},getDBListFn(e){const t=this;t.loading=!0,t.sessionRows=[],l.getInstanceList().then((function(i){t.loading=!1;let a={};t.dbListForLoop=i.rows,t.dbListForLoop.unshift({db_state:0,db_id:!1}),void 0===e?(a=t.dbListForLoop.find((e=>!1===e.db_id)),t.dbHostMsg=a,t.selectValue=t.dbHostMsg.db_id):(t.selectValue=e.db_id,t.dbHostMsg=e),t.getSessionList()}),(function(e){t.loading=!1}))},clearFilter(){this.$refs.filterTable.clearilFilter()},getSessionList(){const e=this;e.needToFirstPage&&(e.page=1),1==e.page&&(e.total=0);const n=((e,l)=>{for(var n in l||(l={}))i.call(l,n)&&s(e,n,l[n]);if(t)for(var n of t(l))a.call(l,n)&&s(e,n,l[n]);return e})({page_num:e.page,page_size:e.size},!1!==e.dbHostMsg.db_id&&{db_id:e.dbHostMsg.db_id});if(e.backendTypeFiltersLIst.length>0){let t="";for(let i=0;i<e.backendTypeFiltersLIst.length;i++)0==i?t=e.backendTypeFiltersLIst[i]:t+=","+e.backendTypeFiltersLIst[i];n.backend_type=t}if(e.stateFilter.length>0){let t="";for(let i=0;i<e.stateFilter.length;i++)0==i?t=e.stateFilter[i]:t+=","+e.stateFilter[i];n.state=t}e.loading=!0,l.getDBSession(n).then((function(t){e.loading=!1,e.needToFirstPage=!1,e.sessionRows=t.rows,e.tabData=t.rows,null!=e.sortRule.order&&e.sortChange(e.sortRule),e.total=t.total,e.hide_col_list=t.hide_col_list,e.$refs.pagination,e.$nextTick((()=>{e.$emit("btnHidden")}))}),(function(t){e.sessionRows=[],e.loading=!1}))},CancelSubmit(e,t){let i=this;this.$confirm(this.$t("SessionManage.queren-quxiao-jincheng")+t.pid+this.$t("SessionManage.ma"),this.$t("index.ti-shi"),{type:"warning",closeOnClickModal:!1}).then((()=>{i.loading=!0;let e={db_id:i.dbHostMsg.db_id,pid:t.pid};l.cancelBackend(e).then((function(){i.loading=!1,i.getSessionList()}),(function(e){i.loading=!1}))})).catch((()=>{}))},TerminateSubmit(e,t){let i=this;this.$confirm(this.$t("SessionManage.queren-quxiao-jincheng")+t.pid+this.$t("SessionManage.ma"),this.$t("index.ti-shi"),{type:"warning",closeOnClickModal:!1}).then((()=>{i.loading=!0;let e={db_id:i.dbHostMsg.db_id,pid:t.pid};l.terminateBackend(e).then((function(){i.loading=!1,i.getSessionList()}),(function(e){i.loading=!1}))})).catch((()=>{}))},recleI18nFunc(e){return this.$t("SessionManage."+e)?this.$t("SessionManage."+e):e}},beforeDestroy(){this.clearTimer()}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{staticClass:"warp"},[i("el-form",[i("el-form-item",[i("el-select",{staticStyle:{width:"170px"},attrs:{filterable:"",placeholder:e.$t("createDatabasePage.qing-xuan-ze")},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.dbListForLoop,(function(t,a){return i("el-option",{key:a,attrs:{label:t.db_id?t.host+":"+t.port:"csumdb",value:t.db_id}},[t.db_id?i("el-tooltip",{staticClass:"item",attrs:{"open-delay":1e3,effect:"dark",content:t.host+":"+t.port,placement:"top"}},[t.db_id?i("span",[e._v(" "+e._s(t.host+":"+t.port))]):e._e()]):i("span",[e._v(" csumdb ")])],1)})),1),i("div",{staticStyle:{float:"right"}},[e.isDynamicRefresh?i("el-button",{attrs:{type:"warning"},on:{click:e.offDynamicRefresh}},[e._v(" "+e._s(e.$t("SessionManage.gaunbi-dongtai-shuaxin"))+" ")]):i("el-button",{attrs:{type:"primary"},on:{click:e.switchDynamicRefreshDialog}},[e._v(" "+e._s(e.$t("SessionManage.kaiqi-dongtai-shuaxin"))+" ")]),i("el-button",{staticClass:"normal el-icon-refresh-right",on:{click:e.getSessionList}},[e._v(" "+e._s(e.$t("resourceManagement.shua-xin")))]),i("el-popover",{attrs:{placement:"right",title:e.$t("dbList.xuanze-xuyao-xianshi-delie"),trigger:"click",width:"155"}},[i("el-checkbox-group",{staticStyle:{overflow:"hidden"},attrs:{size:"mini"},model:{value:e.checkedColumns,callback:function(t){e.checkedColumns=t},expression:"checkedColumns"}},[e._l(e.checkBoxGroup,(function(t){return i("el-checkbox",{key:t,staticStyle:{float:"left"},attrs:{label:t,value:t}},[e._v(e._s(e.recleI18nFunc(t)))])})),i("div",{staticStyle:{float:"left","margin-top":"10px"}},[i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.filterFunHandle("allchecked")}}},[e._v(e._s(e.$t("dbList.quan-xuan"))+" ")]),i("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.filterFunHandle("cancel")}}},[e._v(e._s(e.$t("dbList.quxiao-quanxuan")))])],1)],2),i("el-button",{attrs:{slot:"reference",type:"primary",size:"small",plain:""},slot:"reference"},[i("i",{staticClass:"el-icon-arrow-down el-icon-menu"}),e._v(e._s(e.$t("dbList.shai-xuan")))])],1)],1)],1)],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"100%"},attrs:{"default-sort":e.sortRule,"row-class-name":e.tableRowClassName,data:e.sessionRows,border:"","empty-text":e.$t("SessionManage.zanwu-shuju"),"element-loading-text":e.$t("Public.zhengzai-jiazai")},on:{"sort-change":e.sortChange}},[e.colData[0].istrue?i("el-table-column",{attrs:{prop:"pid",label:e.$t("SessionManage.jinchengID"),align:"center",width:"100px",fixed:""}}):e._e(),e.colData[1].istrue?i("el-table-column",{attrs:{prop:"state",label:e.$t("dbList.zhuang-tai"),align:"left","header-align":"center",width:"100",fixed:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[i("el-dropdown",{attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.$t("dbList.zhuang-tai"))),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e._l(e.activeFilters,(function(t){return i("div",{key:t.value,staticStyle:{display:"block",padding:"0 5px"}},[i("el-checkbox-group",{model:{value:e.stateFilter,callback:function(t){e.stateFilter=t},expression:"stateFilter"}},[i("el-checkbox",{attrs:{label:t.text,value:t.value}},[e._v(e._s(t.text))])],1)],1)})),i("div",[i("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:function(t){return e.checkall(1)}}},[e._v(e._s(e.$t("dbList.quan-xuan")))]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.uncheckall(1)}}},[e._v(e._s(e.$t("dbList.quxiao-quanxuan")))])],1)],2)],1)]}},{key:"default",fn:function(t){return["active"===t.row.state?i("span",[i("i",{staticClass:"el-icon-loading"}),e._v(" "+e._s(t.row.state))]):"idle in transaction"===t.row.state?i("span",[i("i",{staticClass:"el-icon-remove orange"}),e._v(" "+e._s(t.row.state))]):"idle"===t.row.state?i("span",[i("i",{staticClass:"el-icon-remove"}),e._v(" "+e._s(t.row.state))]):i("span",[e._v(e._s(t.row.state))])]}}],null,!1,2993613920)}):e._e(),e.colData[2].istrue&&-1==e.hide_col_list.indexOf("datname")?i("el-table-column",{attrs:{prop:"datname",sortable:"",label:e.$t("SessionManage.shujuku-ming"),align:"center",width:"130px","show-overflow-tooltip":""}}):e._e(),e.colData[3].istrue&&-1==e.hide_col_list.indexOf("usename")?i("el-table-column",{attrs:{prop:"usename",sortable:"",label:e.$t("SessionManage.yonghu-ming"),width:"120px",align:"center"}}):e._e(),e.colData[4].istrue&&-1==e.hide_col_list.indexOf("application_name")?i("el-table-column",{attrs:{prop:"application_name",sortable:"",label:e.$t("SessionManage.yingyong-chengxu"),width:"120px",align:"center","show-overflow-tooltip":""}}):e._e(),e.colData[5].istrue&&-1==e.hide_col_list.indexOf("client_addr")?i("el-table-column",{attrs:{prop:"client_addr",sortable:"",label:e.$t("SessionManage.kehuduan-dizhi"),align:"center",width:"130px","show-overflow-tooltip":""}}):e._e(),e.colData[6].istrue&&-1==e.hide_col_list.indexOf("client_hostname")?i("el-table-column",{attrs:{prop:"client_hostname",sortable:"",label:e.$t("SessionManage.kehuduan-zhujiming"),align:"center",width:"140px","show-overflow-tooltip":""}}):e._e(),e.colData[7].istrue&&-1==e.hide_col_list.indexOf("client_port")?i("el-table-column",{attrs:{prop:"client_port",sortable:"",label:e.$t("SessionManage.kehudaun-duankou"),align:"center",width:"110px"}}):e._e(),e.colData[8].istrue&&-1==e.hide_col_list.indexOf("backend_start")?i("el-table-column",{attrs:{prop:"backend_start",sortable:"",label:e.$t("SessionManage.jincheng-kaishi-shijian"),align:"center",width:"150px"}}):e._e(),e.colData[9].istrue&&-1==e.hide_col_list.indexOf("xact_start")?i("el-table-column",{attrs:{prop:"xact_start",sortable:"",label:e.$t("SessionManage.shiwu-kaishi-shijian"),align:"center",width:"160px","show-overflow-tooltip":""}}):e._e(),e.colData[10].istrue&&-1==e.hide_col_list.indexOf("query_start")?i("el-table-column",{attrs:{prop:"query_start",sortable:"",label:e.$t("SessionManage.SQL-kaishi-shijian"),align:"center",width:"150px","show-overflow-tooltip":""}}):e._e(),e.colData[11].istrue&&-1==e.hide_col_list.indexOf("state_change")?i("el-table-column",{attrs:{prop:"state_change",sortable:"",label:e.$t("SessionManage.zhuangtai-gaibian-shijian"),align:"center",width:"160px","show-overflow-tooltip":""}}):e._e(),e.colData[12].istrue&&-1==e.hide_col_list.indexOf("filterWaitEventType")?i("el-table-column",{attrs:{"column-key":"filterWaitEventType",prop:"wait_event_type",filters:e.watiTypeFilters,"filtered-value":e.watiTypeFiltersLIst,label:e.$t("SessionManage.dengdai-shijian-leixing"),align:"center",width:"140px","show-overflow-tooltip":""}}):e._e(),e.colData[13].istrue&&-1==e.hide_col_list.indexOf("wait_event")?i("el-table-column",{attrs:{prop:"wait_event",sortable:"",label:e.$t("SessionManage.dengdai-shijian"),align:"left","header-align":"center",width:"150px","show-overflow-tooltip":""}}):e._e(),e.colData[14].istrue&&-1==e.hide_col_list.indexOf("query")?i("el-table-column",{attrs:{prop:"query",label:e.$t("SessionManage.yunxing-SQL"),align:"left","header-align":"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[i("div",{staticStyle:{"overflow-y":"auto","white-space":"pre-wrap"},attrs:{slot:"content"},slot:"content"},[i("pre",{staticClass:"tooltipPre"},[e._v(e._s(t.row.query))])]),i("div",{staticStyle:{overflow:"hidden",width:"100%"}},[i("div",{staticStyle:{overflow:"hidden",width:"80%",float:"left","white-space":"nowrap","text-overflow":"ellipsis"}},[e._v(e._s(t.row.query))]),t.row.query?i("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.row.query,expression:"scope.row.query",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copy,expression:"copy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{display:"inline-block","margin-left":"10px",cursor:"pointer",float:"left",margin:"left:4px",color:"blue"}},[e._v(" "+e._s(e.$t("SessionManage.fuzhi")))]):e._e()])])]}}],null,!1,3564749807)}):e._e(),e.colData[15].istrue&&-1==e.hide_col_list.indexOf("backend_xid")?i("el-table-column",{attrs:{prop:"backend_xid",sortable:"",label:e.$t("SessionManage.jincheng-dingceng-message"),align:"center",width:"220px","show-overflow-tooltip":""}}):e._e(),e.colData[16].istrue&&-1==e.hide_col_list.indexOf("backend_xmin")?i("el-table-column",{attrs:{prop:"backend_xmin",sortable:"",label:e.$t("SessionManage.jincheng-xmin"),align:"center",width:"120px","show-overflow-tooltip":""}}):e._e(),e.colData[17].istrue&&-1==e.hide_col_list.indexOf("backend_type")?i("el-table-column",{attrs:{prop:"backend_type",label:e.$t("SessionManage.jincheng-leixing"),align:"left","header-align":"center",width:"150px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[i("el-dropdown",{attrs:{trigger:"click"}},[i("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.$t("SessionManage.jincheng-leixing"))),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e._l(e.backendTypeFilters,(function(t){return i("div",{key:t.value,staticStyle:{display:"block",padding:"0 5px"}},[i("el-checkbox-group",{model:{value:e.backendTypeFiltersLIst,callback:function(t){e.backendTypeFiltersLIst=t},expression:"backendTypeFiltersLIst"}},[i("el-checkbox",{attrs:{label:t.text,value:t.value}},[e._v(e._s(t.text))])],1)],1)})),i("div",[i("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:function(t){return e.checkall(2)}}},[e._v(e._s(e.$t("dbList.quan-xuan")))]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.uncheckall(2)}}},[e._v(e._s(e.$t("dbList.quxiao-quanxuan")))])],1)],2)],1)]}}],null,!1,541326561)}):e._e(),i("el-table-column",{attrs:{prop:"detail",label:e.$t("dbList.cao-zuo"),align:"center","min-width":"190px",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{staticClass:"cancel",on:{click:function(i){return e.CancelSubmit(t.$index,t.row)}}},[e._v(e._s(e.$t("index.qu-xiao")))]),i("span",{staticStyle:{color:"rgb(218 220 224)","font-size":"12px"}},[e._v("|")]),i("el-link",{staticClass:"kill",on:{click:function(i){return e.TerminateSubmit(t.$index,t.row)}}},[e._v(e._s(e.$t("SessionManage.qiangzhi-zhongzhi")))])]}}])})],1),i("div",{staticClass:"block",staticStyle:{float:"right"}},[i("el-pagination",{ref:"pagination",attrs:{layout:"total, sizes, prev, pager, next, jumper",total:e.total,"page-sizes":[10,20,30,40,50,100],"page-size":20},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e.isShowComponents?i("DynamicRefresh",{attrs:{"is-show":e.isShowComponents},on:{confirm:e.onDynamicRefresh,"update:isShow":function(t){e.isShowComponents=t},"update:is-show":function(t){e.isShowComponents=t}}}):e._e()],1)}),[],!1,d,"12473568",null,null);function d(e){for(let t in r)this[t]=r[t]}var u=function(){return c.exports}();export{u as default};
