<template>
  <div>
    <div>
      <div class="infor-card1" @click="goToDetail">
        <div class="job-title-container">
          <div class="job-title">
            <div class="job-title-text" >职位：{{good.name}}</div>
            <div class="job-salary" >薪资：<span style="color:rgba(253,114,64,1)">{{good.price}}K</span></div>
          </div>
          <div class="job-title-age">
            <span>{{good.address}}</span> | <span>{{good.learning}}</span>
          </div>
        </div>
        <div class="bottom-text">
          <img :src="$img.imgBaseUrl+good.img"  alt="img" style="width:45px;height:45px;"/>
          <span>{{good.compoany}}</span>
          <span style="margin:0 5px">|</span>
          <span v-if="good.hot">已上市</span>
          <span v-else>末上市</span>
        </div>
        <div>发布时间：{{$moment(good.create_time).format("YYYY-MM-DD HH:MM:SS")}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// var moment = require('moment');
// console.log("moment",moment)

export default {
  props:{
    good:{
      type:Object
    }
  },
  data(){
    return{
      timer:null
    }
  },
  methods:{
    goToDetail(){
      console.log("clcik")
      let token=localStorage.getItem("token")
      console.log("token",token)
      if(!token){
        this.$message({
          message:"还没登录，即将跳转登录页面",
          type:"warning"
        })
        this.timer=setTimeout(()=>{
          this.$router.history.push("/login")
        },1000)
      }else{
        this.$router.history.push("/information-detail-list/"+this.good._id)
      }
      
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }

};
</script>

<style lang="css" scoped>
.infor-card1{
  background:#fff;
  margin:10px 0px;
  line-height: 30px;
  width:330px;
  box-sizing: border-box;
  padding:0 5px;
}
.bottom-text{
  display: flex;
  align-items: center;
}
</style>