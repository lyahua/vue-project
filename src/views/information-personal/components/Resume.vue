<template>
  <div>
    <div style="margin:0 auto;">
        <div style="text-align:center;margin-top:10px;">个人简历</div>
        <table class="table table-striped table-bordered" align="center" valign="center">
          <tr>
            <td class="column" colspan="6">基本信息</td>
          </tr>
          <tr>
            <td class="column">姓名</td>
            <td  class="value">
              <el-input v-model="name1"></el-input>
              <!-- <span v-text="name1" v-else></span> -->
            </td>
            <td class="column">性别</td>
            <td class="value">
              <el-input v-model="gender"></el-input>
            </td>
            <td class="column">出生年月</td>
            <td class="value">
              <el-input v-model="date"></el-input>
            </td>
          </tr>
          <tr>
            <td class="column">民族</td>
            <td class="value">
              汉
            </td>
            <td class="column">婚否</td>
            <td class="value">
              否
            </td>
            <td class="column">政治面貌</td>
            <td class="value">
              <el-input v-model="political"></el-input>
            </td>
          </tr>
          <tr>
            <td class="column">籍贯</td>
            <td class="value">
              <el-input v-model="native"></el-input>
            </td>
            <td class="column">学历</td>
            <td class="value">
              <el-input v-model="schooling"></el-input>
            </td>
            <td class="column">现所在地</td>
            <td class="value">
              <el-input v-model="location"></el-input>
            </td>
          </tr>
          <tr>
            <td class="column">毕业院校</td>
            <td class="value" colspan="3">
              <el-input v-model="school1"></el-input>
            </td>
            <td class="column">所在专业</td>
            <td class="value" >
              <el-input v-model="major1"></el-input>
            </td>

          </tr>
          <tr>
            <td class="column">电子邮箱</td>
            <td class="value" colspan="3">
              12345789@163.com
            </td>
            <td class="column">手机号码</td>
            <td class="value" >
              17870235656
            </td>
          </tr>
          <tr>
            <td class="column" colspan="6">教育经历</td>
          </tr>
          <tr>
            <td class="value" colspan="2">起止时间</td>
            <td class="value" colspan="2">毕业院校/教育机构</td>
            <td class="value" colspan="2">专业/课程</td>
          </tr>
          <tr>
            <!-- 起止时间 -->
            <td class="value" colspan="2">
              2018-09 ~ 2019-07
            </td>
            <!-- 毕业院校 -->
            <td class="value" colspan="2">
              bili简历科技有限公司
            </td>
            <!-- 专业 -->
            <td class="value" colspan="2">
              UI设计
            </td>
          </tr>
         
          <tr>
            <td class="column">爱好</td>
            <td class="value" colspan="5">
              <el-input v-model="hobby1"></el-input>
            </td>
          </tr>
          <tr >
            <td class="column" >技能</td>
            <td class="value" colspan="5" style="text-align:left;">
              熟练掌握Office软件
            </td>
          </tr>
          <tr>
            <td class="column">自我评价</td>
            <td class="value" colspan="5">
              自我介绍篇幅不用太长，注意结合简历整体的美观度。自我评价应做到突出自身符合目标岗位要求的“卖点”，避免使用过多的形容词。
            </td>
          </tr>
        </table>
    </div>
    <el-row style="margin:10px 0">
      <el-col style="text-align:center"><el-button @click="submitResume">提交简历</el-button></el-col>
    </el-row>
    
  </div>
</template>

<script>
import {fetchAddResume,fetchResumeDetail} from "@/utils/api.js"
  export default {
    data(){
      return{
        // 姓名
        name1:"",
        // 专业
        major1:"",
        // 学校
        school1:"",
        // 爱好
        hobby1:"",
        // 性别
        gender:"",
        // 出生年月
        date:"",
        // 民族
        // national:"",
        //婚否
        // bol:"",
        // 政治面貌
        political:"",
        // 籍贯
        native:"",
        // 学历
        schooling:"",
        // 所在地
        location:"",
        //电子邮箱
        // email:"",
        //手机号码
        // mobile:"",
        //起止时间
        // time:"",
        //毕业院校
        // gradeSchool:"",
        // 专业
        // major2:"",
        // 技能
        // skill:"",
        // 自我评价
        // self:""
      }
    },
    computed:{
      id:function(){
       return this.$route.params.id
      } 
    },
    mounted(){
      let id=this.id
      let params={id:this.id}
      if(id!=0){
        fetchResumeDetail(params).then(res=>{
          console.log("res信息详情",res)
            this.name1=res.name1
            this.major1=res.major1
            this.school1=res.school1
            this.hobby1=res.hobby1
            this.gender=res.gender
            this.date=res.date
            this.political=res.political
            this.native=res.native
            this.schooling=res.native
            this.location=res.location
        })
      }
    },
    methods:{
      submitResume(){
        let params={
          name1:this.name1,
          major1:this.major1,
          school1:this.school1,
          hobby1:this.hobby1,
          gender:this.gender,
          date:this.date,
          political:this.political,
          native:this.native,
          schooling:this.schooling,
          location:this.location
        };
        if(this.id!=0){
          params.id=this.id
        }
        fetchAddResume(params).then(res=>{
          console.log("res新增简历",res)
          this.$router.history.replace("/information-personal")
        })
        // console.log("params",params)
      }
    }
  }
</script>

<style lang="css" scoped>
.table{
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
    display: table;
    width: 100%;
    max-width: 100%;
    width: 800px;
    margin:0 auto;
  }
  .table td{
    text-align:center;
    vertical-align:middle;
    font-size: 14px;
    font-family: 'Arial Normal', 'Arial';
    color: #333333;
    padding: 8px 12px;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  *{
    margin: 0px;
    padding: 0px;
  }
  .column{
    width:30px;
    height:30px;
    border:1px solid #333;
    background: #f1f1f1;
  }
  .value{
    width:70px;
    height:30px;
    border:1px solid #333;
  }

</style>