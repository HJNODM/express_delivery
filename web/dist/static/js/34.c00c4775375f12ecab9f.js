webpackJsonp([34],{gRP6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("1t+5"),o=s("aozt"),n=s.n(o),l={components:{joinUsApply:i.a},data:function(){return{titleList:[{id:1,columnTitle:"处理时间",prop:"handleTime",sortable:!0},{id:2,columnTitle:"账号",prop:"userId",sortable:!1}],historyApplyList:[]}},created:function(){this.getHistoryApply()},methods:{getHistoryApply:function(){var t=this,e=this.$loading({lock:!0,text:"玩命加载中..."});n.a.get("/admin/joinUsHistoryApply").then(function(s){var i=s.data;e.close(),"0"==i.status?t.historyApplyList=i.result:t.$message({message:i.msg,type:"error",duration:2e3,showClose:!0})}).catch(function(t){console.log(t)})},handleDeleteHistoryApply:function(t){var e=this,s=this.$loading({lock:!0,text:"玩命加载中..."});n.a.get("/admin/DeleteHistoryApply?userId="+t.userId).then(function(t){var i=t.data;s.close(),"0"==i.status?(e.$message({message:"删除记录成功!",type:"success",duration:3e3,showClose:!0}),e.getHistoryApply()):e.$message({message:i.msg,type:"error",duration:3e3,showClose:!0})}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"joinUsHistoryApply-page"},[e("person-title",[this._v("当前位置 :: 加入我们 >> "),e("em",[this._v("申请列表")])]),this._v(" "),e("div",{staticClass:"joinUsHistoryApply-page-cont"},[e("joinUsApply",{attrs:{titleList:this.titleList,userList:this.historyApplyList,showBalance:!1,isHistoryApply:!0},on:{DeleteHistoryApply:this.handleDeleteHistoryApply}})],1)],1)},staticRenderFns:[]};var a=s("C7Lr")(l,r,!1,function(t){s("xuK4")},null,null);e.default=a.exports},xuK4:function(t,e){}});