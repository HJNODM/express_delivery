webpackJsonp([27],{BowH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("tD7u"),n=r("aozt"),s=r.n(n),c={components:{adminOrderList:i.a},data:function(){return{titleList:[{id:1,columnTitle:"发布时间",prop:"createTime",sortable:!0},{id:2,columnTitle:"发布人",prop:"createOrderPeople",sortable:!1},{id:3,columnTitle:"接单人",prop:"courierPeople",sortable:!1}],ReceivedOrder:[]}},created:function(){this.getAllReceiveOrder()},methods:{getAllReceiveOrder:function(){var e=this,t=this.$loading({lock:!0,text:"玩命加载中..."});s.a.get("/admin/allReceiveOrder").then(function(r){var i=r.data;t.close(),"0"==i.status?e.ReceivedOrder=i.result:console.log(i.msg)}).catch(function(e){console.log(e),t.close()})},handleDeleteOrder:function(e){var t=this;this.$confirm("此订单删除无法恢复! 确认删除订单?","完成订单",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消操作"})})}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"allReceiveOrder-page"},[t("person-title",[this._v("当前位置 :: 所有订单 >> "),t("em",[this._v("已接订单")])]),this._v(" "),t("div",{staticClass:"allReceiveOrder-cont"},[t("adminOrderList",{attrs:{userOrder:this.ReceivedOrder,titleList:this.titleList},on:{deleteOrder:this.handleDeleteOrder}})],1)],1)},staticRenderFns:[]};var l=r("C7Lr")(c,o,!1,function(e){r("HEwb")},null,null);t.default=l.exports},HEwb:function(e,t){}});