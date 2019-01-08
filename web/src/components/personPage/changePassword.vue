<template>
    <div class="changePassword-page">
        <person-title>当前位置 :: 个人中心 >> <em>修改密码</em></person-title>
        <div class="changePassword-cont">
            <div class="from-cont">
                <div class="password-input">
                    <el-input v-model="passwordFrom.oldPassword" :type='inputType' 
                        placeholder="原密码"></el-input>
                    <i class="toggle el-icon-view"
                        :class="{'color':passwordFrom.oldPassword ===''}"
                        @click="changeInputType"></i>
                </div>
                <div class="password-input">
                    <el-input v-model="passwordFrom.newPassword" :type='inputType'  
                        placeholder="新密码"></el-input>
                    <i class="toggle el-icon-view"
                        :class="{'color':passwordFrom.oldPassword ===''}"
                        @click="changeInputType"></i>
                </div>
                <div class="password-input">
                    <el-input v-model="passwordFrom.agNewPassword" :type='inputType' 
                        @keydown="handleChangePassword"
                        placeholder="再次输入新密码"></el-input>
                    <i class="toggle el-icon-view"
                        :class="{'color':passwordFrom.oldPassword ===''}"
                        @click="changeInputType"></i>
                </div>
                <el-button class="change" 
                    type="primary" plain
                    @click="handleChangePassword">确认修改</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputType:'password',
            passwordFrom : {
                oldPassword : '',
                newPassword : '',
                agNewPassword : ''
            }
        }
    },
    mounted() {
         window.onkeydown = (e)=>{
            let key = window.event.keyCode;
            if(key==13){
                this.handleChangePassword();
            }
        }
    },
    methods: {
        testFrom(){
            let from = this.passwordFrom;
            return (from.oldPassword === "") && '原密码不能为空!' ||
                    (from.newPassword === "") && '新密码不能为空!' ||
                    (from.agNewPassword === "") && '请再次输入新密码!' ||
                    (from.agNewPassword !== from.newPassword) && '两次密码不一样!' || '';
        },
        changeInputType(){
            this.inputType=(this.inputType=='password')?'text':'password';
        },
        handleChangePassword(){
            let tip = this.testFrom();
            if(tip === ''){
                axios.post(router,data).then(response=>{
                    let res = response.data; 
                    if(res.status=='0'){
                
                    }else{
                
                     }
                }).catch(err=>{
                    console.log(err);
                 }); 
            }else{
                this.$message({
                    message: tip,
                    type: 'error'
                });
            }
            
        }
    },
    destroyed() {
       window.onkeydown = null;
    }
}
</script>

<style lang="scss" scoped>
.changePassword-page{
    position: relative;
}
.changePassword-cont{
    position: relative;
    margin: 5rem auto 0;
    width: 50%;
    .el-input{
        margin-bottom: 1rem;
    }
    .change{
        margin-top: 1.5rem;
    }
}
.from-cont{
    .password-input{
        position: relative;
    }
    .toggle.el-icon-view{
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        top: 40%;
        transform: translate(0,-50%);
        right: 0.2rem;
    }
    .toggle.color{
            color: #ccc;
    }
}
</style>

