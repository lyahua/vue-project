<template>
  <div class="login-page">
    <div class="login-from">
      <h1>登录</h1>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="身份">
          <el-select v-model="form.role" placeholder="请选择身份">
            <el-option label="企业" value="company"></el-option>
            <el-option label="学生" value="student"></el-option>
            <el-option label="管理员" value="admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="username" required>
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>
      <div>没有账号？<span class="reginster-text" @click="goToRegister">立即注册</span></div>
    </div>
  </div>
</template>

<script>
import {fetchLogin} from "@/utils/api.js"
  export default {
     data() {
      return {
        form: {
          role:"",
          username: '',
          password:""
         
        },
        rules: {
          username: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        timer:null
      }
    },
    methods: {
      onSubmit() {
        fetchLogin(this.form).then((res)=>{
          console.log("resLogin",res)
          localStorage.setItem("token",res.token)
          localStorage.setItem("role",res.role)
          // this.$router.back()
          let token=res.token
              if(token){
                this.$message({
                  message:"登录成功",
                  type:"success"
                })
                this.timer=setTimeout(()=>{
                  let roles=localStorage.getItem("role")
                  switch (roles) {
                    case "student":
                      this.$router.replace("/information-detail")
                      break;
                    case "company":
                      this.$router.replace("/information-manage")
                      break;
                    case "admin":
                      this.$router.replace("/information-detail")
                      break;
                    default:
                      break;
                  }
                },1000)
              }
        })
      },
      goToRegister(){
        this.$router.history.push("/register")
      }
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
  }
</script>

<style lang="css" scoped>
.login-page{
  height: 100%;
}
.login-from{
  width:500px;
  background: #fff;
  padding:20px;
  height: 500px;
  border-radius: 8px;
}
.reginster-text{
  color:blue;
  cursor: pointer;
}
</style>