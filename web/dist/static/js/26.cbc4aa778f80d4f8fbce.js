webpackJsonp([26],{DhMI:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("1t+5"),o=t("mtWM"),a=t.n(o),n={components:{joinUsApply:i.a},data:function(){return{titleList:[{id:1,columnTitle:"申请时间",prop:"applyTime",sortable:!0},{id:2,columnTitle:"名字",prop:"userName",sortable:!1},{id:3,columnTitle:"账号",prop:"userId",sortable:!1}],applyList:[]}},created:function(){this.getApplyList()},methods:{getApplyList:function(){var e=this,s=this.$loading({lock:!0,text:"玩命加载中..."});a.a.get("/admin/joinUsApplyList").then(function(t){var i=t.data;s.close(),"0"==i.status?e.applyList=i.result:e.$message({message:i.msg,type:"error",duration:2e3,showClose:!0})}).catch(function(e){console.log(e)})},handleAgreeApply:function(e){var s=this,t=this.$loading({lock:!0,text:"玩命加载中..."});a.a.post("/admin/agreeJoinUsApply",{userId:e.userId}).then(function(e){var i=e.data;t.close(),"0"==i.status?(s.$message({message:"处理成功! 已通过该申请.",type:"success",duration:3e3,showClose:!0}),s.getApplyList()):s.$message({message:i.msg,type:"error",duration:3e3,showClose:!0})}).catch(function(e){console.log(e)})},handleDisAgreeApply:function(e){var s=this,t=this.$loading({lock:!0,text:"玩命加载中..."});a.a.post("/admin/disagreeJoinUsApply",{userId:e.userId}).then(function(e){var i=e.data;t.close(),"0"==i.status?(s.$message({message:"处理成功! 已拒绝该申请.",type:"success",duration:3e3,showClose:!0}),s.getApplyList()):s.$message({message:i.msg,type:"error",duration:3e3,showClose:!0})}).catch(function(e){console.log(e)})}}},l={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"joinUsApply-page"},[s("person-title",[this._v("当前位置 :: 加入我们 >> "),s("em",[this._v("申请列表")])]),this._v(" "),s("div",{staticClass:"joinUsApply-page-cont"},[s("joinUsApply",{attrs:{titleList:this.titleList,userList:this.applyList,showBalance:!1,isApply:!0},on:{agreeApply:this.handleAgreeApply,disAgreeApply:this.handleDisAgreeApply}})],1)],1)},staticRenderFns:[]};var p=t("VU/8")(n,l,!1,function(e){t("flFv")},null,null);s.default=p.exports},flFv:function(e,s){}});