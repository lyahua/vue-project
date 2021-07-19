<template>
  <div class="detail-page">
    <el-row style="height: 80px">
      <el-col :span="3"></el-col>
      <el-col :span="18" :offset="3">
        <div class="tab-title">
          <img :src="$img.school" alt="logo" style="height:80px;width:100%;"/>
        </div>
      </el-col>
      <el-col :span="3">
        <div @click="goToLogin">
          欢迎：<span v-text="role"></span><br/>
          个人中心
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 18px">
      <el-col :span="3"></el-col>
      <el-col :span="18" :offset="3">
        <div
          class="information-card-container"
          v-for="(item, index) in length"
          :key="index"
        >
          <information-card :good="infoList[3*item-3]"></information-card>
          <information-card :good="infoList[3*item-2]"></information-card>
          <information-card :good="infoList[3*item-1]"></information-card>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18" :offset="3"><button @click="nextPage">下一页</button></el-col>
      <el-col :span="3"></el-col>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <div class="detail-footer">
          <!-- 企业服务 -->
          <div class="enterprise-service" style="width:120px;">
            <div class="enterprise-text">企业服务</div>
            <div class="text">职位搜索</div>
            <div class="text">新闻资讯</div>
            <div class="text">BOSS招聘app</div>
            <div class="text">企业服务</div>
          </div>
          <!-- 企业服务 -->
          <div class="enterprise-service" style="width:120px;">
            <div class="enterprise-text">使用与帮助</div>
            <div class="text">协议与规则</div>
            <div class="text">个人信息政策</div>
            <div class="text">防骗指南</div>
            <div class="text">使用帮助</div>
          </div>
          <!-- 企业服务 -->
          <div class="enterprise-service">
            <div class="enterprise-text">联系我们</div>
            <div class="text">北京华品博正网络科技有限公司</div>
            <div class="text">公司地址：北京市朝阳区朝阳大厦B栋36层308室</div>
            <div class="text">联系电话：010-1237955</div>
            <div class="text">违法和不良信息举报邮箱：12345@163.com</div>
          </div>
           <!-- 企业服务 -->
          <div class="enterprise-service" style="text-align:right">
            <div class="enterprise-text">联系我们</div>
            <div class="text">企业服务和举报热线：300 589 3521</div>
            <div class="text">工作日：8:00-20:00</div>
            <div class="text">休息日：9:30-16:30</div>
            <div class="text">
              <span >关注微博</span>
              <span >微信</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18" :offset="3">
        <div class="copy-right">Copyright © 2021 BOSS直聘京ICP备14013441号-5京ICP证150923号京网文[2020]0399-066 号</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InformationCard from "./components/InformationCard.vue";
import { fetchGoodList } from "@/utils/api.js";

export default {
  components: {
    InformationCard,
  },
  data() {
    return {
      infoList: [],
      page:1,
      role:""
    };
  },
  computed:{
    length(){
      return Math.floor(this.infoList.length/3)
    }
  },
  mounted() {
    console.log("this.$store", this.$store);
    this.init()
    this.role=localStorage.getItem("role")
  },
  methods:{
    init(){
      let params={size:9,page:this.page}
      fetchGoodList(params).then((res) => {
      console.log("res商品列表", res);
      this.infoList=res.list
      console.log("this.infoList",this.infoList)
      });
    },
    nextPage(){
      let params={size:9,page:this.page+1}
      fetchGoodList(params).then((res) => {
      this.infoList=res.list

      console.log("res商品列表", res);
      console.log("this.infoList",this.infoList)
    });
    },
    goToLogin(){
      let token=localStorage.getItem("token")
      if(!token){
        this.$router.history.push("/")
      }else{
        this.$router.history.push("/information-personal")
      }
      
    }
  }
};
</script>

<style scoped>
.detail-page {
  background: rgba(245, 244, 247, 1);
  /* background:red; */
}
.tab-title {
  width: 100%;
  height: 80px;
  background: #fff;
 
}
.employment-information {
  background: #fff;
}
.information-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.detail-footer{
  background: #fff;
  /* margin-bottom:10px; */
  display: flex;
  justify-content: space-between;
}

.enterprise-text{
  font-size: 16px;
  color:rgba(65,74,96, alpha);
  margin:15px 0;
}
.text{
  font-size: 14px;
  color:rgba(141,146,161, alpha);
  line-height: 32px;
}
.copy-right{
  background: #fff;
  padding:15px 0 10px 0;
  text-align: center;
}
</style>