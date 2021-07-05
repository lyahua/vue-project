<template>
  <div>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18" :offset="3"><h1>信息详情页面</h1></el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18" :offset="3">
        <div class="detail-list-container">
          <h3>职位描述</h3>
          <div>工作职责</div>
          <div>1.根据交互设计移动端/PC前端高保真设计进行编码交付</div>
          <div>2.根据产品业务流程及交互逻辑设计并按质量要求高质量编码交付</div>
          <div>3.按照规范，进行相关业务方案初稿设计和讨论</div>
          <div>4.参与UI组件库、控件库等产品的前端模块设计和编码交付</div>
          <div>
            5.积极参与团队新型技术研究和调研，定期输出技术栈成果，跟进应用到具体项目的实时计划并进行编码交付
          </div>
          <div>6.移动端有丰富的前端设计经验，有混合APP开发经验者优先</div>
          <!--  -->
          <div>任职要求</div>
          <div>1.计算机及相关专业本科及以上学历，3年或以上前端开发工作经验</div>
          <div>⒉.熟练掌握HTML5、JavaScript、csS3等前端开发技术</div>
          <div>3.有React Native、Flutter、Vue混合项目开发优先</div>
          <div>
            4.对Web标准和兼容性有良好认识，有构建高性能网站和应用相关经验5.对前端的性能优化、开发调试、漏洞处理等有深入理解及实践
          </div>
          <div>6.逻辑分析能力强，善于沟通，有良好的沟通能力和团队合作能力</div>
          <div v-text="infoDetail.desc"></div>
          <div v-text="infoDetail._id"></div>
          <img :src="$img.imgBaseUrl+infoDetail.img"  alt="img" style="width:200px;height:200px;"/>
          <br/>

          <el-button type="primary" @click="addLove">加入喜爱</el-button>

          <el-button type="primary" @click="goToChat">和企业继续沟通</el-button>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchGoodInfo,fetchAddLove } from "@/utils/api.js";
export default {
  data(){
    return{
      infoDetail:{}
    }
  },
  mounted() {
    let id = this.$route.params.id;
    console.log("id", id);
    let params = { id: id };
    fetchGoodInfo(params).then((res) => {
      console.log("res信息详情", res);
      this.infoDetail=res;
    console.log('this.infoDetail',this.infoDetail)

    });

  },
  methods:{
    addLove(){
      let params={good_id:this.infoDetail._id,num:1}
      fetchAddLove(params).then(res=>{
        console.log("res加入喜爱",res)
        this.$message({
          message:"加入喜爱成功",
          type:"success"
        })
      })
    },
    goToChat(){
      this.$router.history.push("/information/chat/"+this.$route.params.id)
    }
  }
};
</script>

<style lang="css" scoped>
</style>