webpackJsonp([24],{"9Wlw":function(e,t){},zN3x:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("gUGA"),n=r.n(o),s=r("LHyU"),i=r("aozt"),a=r.n(i),l={data:function(){return{historyOrder:[],currentPage:1,pageSize:10,totalOrder:0,showPagination:!0,rightOptBtn:"historyBtn",titleList:[{id:1,columnTitle:"完成时间",prop:"completedData",sortable:!0},{id:2,columnTitle:"价格(元)",prop:"Price",sortable:!0},{id:3,columnTitle:"类型",prop:"goodsTpye",sortable:!1},{id:4,columnTitle:"数量",prop:"goodsNumber",sortable:!0}]}},components:{wokerOrderList:s.a},mounted:function(){this.gehistoryOrderList()},methods:{gehistoryOrderList:function(){var e=this,t=this.$loading({lock:!0,text:"玩命加载中..."});a.a.get("/wokers/historyOrder?size="+this.pageSize+"&page="+this.currentPage).then(function(r){var o=r.data;t.close(),"0"==o.status?(e.historyOrder=o.result.historyOrder,e.totalOrder=n()(o.result.totalOrder),e.totalOrder<=e.pageSize&&(e.showPagination=!1)):console.log(o.msg)}).catch(function(e){console.log(e)})},handleDeleteOrder:function(e){var t=this;this.$confirm("此订单删除无法恢复! 确认删除订单?","完成订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var r=t.$loading({lock:!0,text:"玩命加载中..."});a.a.post("/wokers/deleteHistoryOrder",{orderId:e.orderId}).then(function(e){var o=e.data;r.close(),"0"==o.status?(t.$message({type:"success",message:"删除成功!"}),t.gehistoryOrderList()):t.$message({type:"error",message:o.msg})}).catch(function(e){r.close(),console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})},handleCurrentChange:function(e){this.currentPage=e,this.gehistoryOrderList()}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wokerHistoryOrder"},[r("person-title",[e._v("当前位置 :: 我的订单 >> "),r("em",[e._v("历史订单")])]),e._v(" "),r("div",{staticClass:"wokerHistoryOrder-cont"},[r("wokerOrderList",{attrs:{userOrder:e.historyOrder,rightOptBtn:e.rightOptBtn,titleList:e.titleList},on:{deleteOrder:e.handleDeleteOrder}})],1),e._v(" "),r("div",{staticClass:"pageination-oder"},[e.showPagination?r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"pager-count":5,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.totalOrder},on:{"current-change":e.handleCurrentChange}}):e._e()],1)],1)},staticRenderFns:[]};var d=r("C7Lr")(l,c,!1,function(e){r("9Wlw")},null,null);t.default=d.exports}});