<template>
  <div class="register-page">
    <div class="login-from">
      <h1>注册</h1>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-select v-model="form.role" placeholder="请选择身份">
            <el-option label="企业" value="company"></el-option>
            <el-option label="学生" value="student"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="password2">
          <el-input v-model="form.password2" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即注册</el-button>
        </el-form-item>
      </el-form>
      <div>已有账号？<span class="login-text" @click="goToRegister">立即登录</span></div>
    </div>
  </div>
</template>

<script>
import {fetchRegister} from "@/utils/api.js"
  export default {
    data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.form.password !== '') {
              this.$refs.form.validateField('checkPass');
            }
            callback();
          }
        };

      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        form: {
          username: '',
          role:"",
          password:"",
          password2:""
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password2: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        
        },
        timer:null
      }
    },
    methods: {
      onSubmit() {
       fetchRegister(this.form).then(res=>{
        console.log("res注册",res)
        let result=res.msg
         switch (result) {
           case "当前用户名已被占用":
             this.$message({
                message: '用户名存在',
                center: true,
                type:"error"
              });
             break;
           case "密码不安全":
             this.$message({
               message:"请输入6-12位由字母和数字组成的密码",
               type:"error"
             })
           break;
           case "注册成功":
              this.$message({
                message: '注册成功，即将跳转登录页面',
                center: true,
                type:"success"
              });
            this.timer=setTimeout(()=>{
              this.$router.history.replace("/")
             },1000)
             
             break;
         
           default:
             break;
         }
       })
      },
      goToRegister(){
        this.$router.history.push("/")
      }
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
  }
</script>

<style lang="css" scoped>
.login-from{
  width:500px;
  background: #fff;
  padding:20px;
  height: 500px;
  border-radius: 8px;
}
.login-text{
  color:blue;
  cursor: pointer;
}
</style>