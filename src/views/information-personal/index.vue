<template>
  <div class="information-page" id="information-personal">
    
    <el-row>
      <el-col :span="18" :offset="3">
        <div class="personal-header">
          <div class="personal-left">
            <div class="left-text">首页</div>
            <div class="left-text">首页</div>
            <div class="left-text">首首页页</div>
            <div class="left-text">首页</div>
            <div class="left-text">首页首页</div>
            <div class="left-text">首页首页</div>
            <div class="left-text">首页首页</div>
          </div>
          <div @click="logout">退出登录</div>
        </div>
      </el-col>
    </el-row>
    <div class="dialog-page">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>确认退出登录吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="closeDia">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <el-row>
      <el-col :span="18" :offset="3">
        <div class="tabs-container">
          <el-tabs :tab-position="tabPosition" style="height: 650px;">
            <el-tab-pane label="喜爱列表" v-if="role=='student'||role=='admin'">
              <el-row>
                <el-col :offset="2" :span="20">
                  <div class="love-list-page">
                    <div class="list-item" >
                      <span style="color:blue">公司名称</span>
                      <span>=====</span>
                      <span style="color:blue">公司职位</span>
                      <span>=====</span>
                      <span style="color:blue">薪资</span>
                      <span>=====</span>
                      <span style="color:blue">操作</span>
                    </div>
                    <div class="list-item" v-for="item in loveList" :key="item._id">
                      <span v-text="item.good.compoany"></span>
                      <span>=====</span>
                      <span v-text="item.good.name"></span>
                      <span>=====</span>
                      <span v-text="item.good.price"></span>
                      <span>=====</span>
                      <span @click="deleteLove(item)">删除</span>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="设置密码">
              <div class="setpassword-container">
                <el-row style="margin:20px 0">
                  <el-col :span="4" :offset="2">
                    <div>当前登录的账号</div>
                  </el-col>
                  <el-col :span="10"><span>{{role}}</span></el-col>
                </el-row>
                <el-row>
                  <el-col :span="4" :offset="2">
                    <div>设置登录密码</div>
                  </el-col>
                  <el-col :span="10">
                    <!-- 重置密码表单 -->
                    <el-form ref="form" :model="form" label-width="0">
                      <el-form-item >
                        <el-input v-model="form.password1" show-password placeholder="请输入密码"></el-input>
                      </el-form-item>
                      <el-form-item >
                        <el-input v-model="form.password2" show-password placeholder="请确认密码"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="setPassword">设置密码</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="绑定微信号">
              <el-row style="margin:20px 0">
                <el-col :span="4" :offset="2">
                  <div>当前登录账号</div>
                </el-col>
                <el-col :span="10">
                  <span>{{role}}</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="16" :offset="2">
                  <div>绑定微信后，可以使用微信账号或者注册账号两种方式进行登录</div>
                </el-col>
              </el-row>
              <el-row style="margin:40px 0 20px">
                <el-col :span="4" :offset="2">
                  <div>微信登录</div>
                </el-col>
                <el-col :span="16" align="right">
                  <div><el-button type="primary">立即绑定</el-button></div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="隐私设置" v-if="role=='student'||role=='admin'">
              <div class="privacy-settings">
                <el-row>
                  <el-col :span="10" :offset="1">
                    <h1>隐藏简历设置</h1>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8" :offset="1">
                    <div>对boss隐藏简历</div>
                  </el-col>
                  <el-col :span="6">
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="rgba(159,163,176,1)">
                    </el-switch>
                  </el-col>
                </el-row>
                <el-row style="margin-top:8px">
                  <el-col :span="8" :offset="1">
                    <div>对猎头/中介等经纪人隐藏简历</div>
                  </el-col>
                  <el-col :span="6">
                    <el-switch
                      v-model="value2"
                      active-color="#13ce66"
                      inactive-color="rgba(159,163,176,1)">
                    </el-switch>
                  </el-col>
                </el-row>
                <el-row style="margin:20px 0">
                  <el-col :span="22" :offset="1">
                    <div class="line-privary"></div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="18" :offset="1">
                    <h1>屏蔽公司</h1>
                    <div style="margin-bottom:10px">添加屏蔽公司后，你和这些公司的Boss，都不会被相互推荐，你的查看行为也不会告知对方</div>
                    <el-input v-model="input" placeholder="搜索公司全称、简称、邮箱后缀"></el-input>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常用语" v-if="role=='student'||role=='admin'">
              <el-row style="margin-top:40px">
                <el-col :offset="1" :span="17">
                  <div>常用语</div>
                </el-col>
              </el-row>
              <el-row style="margin:10px 0">
                <el-col :offset="1" :span="17">
                  <div>我可以把我们简历发给您看看吗</div>
                </el-col>
                <el-col :span="5" align="right">
                  <div>
                    <a href="javascript:;">编辑</a>
                    <a href="javascript:;">删除</a>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :offset="1" :span="17">
                  <div>对不起，我觉得该职位不太适合我，祝您早日找到满意的工作人选</div>
                </el-col>
                <el-col :span="5" align="right">
                  <div>
                    <a href="#">编辑</a>
                    <a href="#">删除</a>
                  </div>
                </el-col>
              </el-row>
              <el-row style="margin:10px 0">
                <el-col :offset="1" :span="17">
                  <div>我可以去贵公司面试吗？</div>
                </el-col>
                <el-col :span="5" align="right">
                  <div>
                    <a href="#">编辑</a>
                    <a href="#">删除</a>
                  </div>
                </el-col>
              </el-row>
              <el-row style="margin:20px 0">
                <el-col :span="5" :offset="18" align="right">
                  <div>
                    <a href="javaspcritp:;" style="color:rgba(173,233,255,1)">添加常用语</a>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="个人简历信息" v-if="role=='student'||role=='admin'">
              <!-- 个人简历 -->
              <div >
                <div style="margin:0 auto;">
                  <div style="text-align:center;margin-top:10px;">个人简历</div>
                  <div @click="goEdit">编辑简历</div>
                    <table class="table table-striped table-bordered" align="center" valign="center">
                      <tr>
                        <td class="column" colspan="6">基本信息</td>
                      </tr>
                      <tr>
                        <td class="column">姓名:</td>
                        <td  class="value">
                          <!-- <el-input v-model="name1"></el-input> -->
                          <span v-text="name1" ></span>
                        </td>
                        <td class="column">性别:</td>
                        <td class="value">
                          <!-- <el-input v-model="gender"></el-input> -->
                          <span v-text="gender"></span>
                        </td>
                        <td class="column">出生年月:</td>
                        <td class="value">
                          <!-- <el-input v-model="date"></el-input> -->
                          <span v-text="date"></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="column">民族:</td>
                        <td class="value">
                          汉
                        </td>
                        <td class="column">婚否:</td>
                        <td class="value">
                          否
                        </td>
                        <td class="column">政治面貌:</td>
                        <td class="value">
                          <!-- <el-input v-model="political"></el-input> -->
                          <span v-text="political"></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="column">籍贯:</td>
                        <td class="value">
                          <!-- <el-input v-model="native"></el-input> -->
                          <span v-text="native"></span>
                        </td>
                        <td class="column">学历:</td>
                        <td class="value">
                          <!-- <el-input v-model="schooling"></el-input> -->
                          <span v-text="schooling"></span>
                        </td>
                        <td class="column">现所在地:</td>
                        <td class="value">
                          <!-- <el-input v-model="location"></el-input> -->
                          <span v-text="location"></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="column">毕业院校:</td>
                        <td class="value" colspan="3">
                          <!-- <el-input v-model="school1"></el-input> -->
                          <span v-text="school1"></span>
                        </td>
                        <td class="column">所在专业:</td>
                        <td class="value" >
                          <!-- <el-input v-model="major1"></el-input> -->
                          <span v-text="major1"></span>
                        </td>

                      </tr>
                      <tr>
                        <td class="column">电子邮箱:</td>
                        <td class="value" colspan="3">
                          12345789@163.com
                        </td>
                        <td class="column">手机号码:</td>
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
                        <td class="column">爱好:</td>
                        <td class="value" colspan="5">
                          <!-- <el-input v-model="hobby1"></el-input> -->
                          <span v-text="hobby1"></span>
                        </td>
                      </tr>
                      <tr >
                        <td class="column" >技能:</td>
                        <td class="value" colspan="5" style="text-align:left;">
                          熟练掌握Office软件
                        </td>
                      </tr>
                      <tr>
                        <td class="column">自我评价:</td>
                        <td class="value" colspan="5">
                          自我介绍篇幅不用太长，注意结合简历整体的美观度。自我评价应做到突出自身符合目标岗位要求的“卖点”，避免使用过多的形容词。
                        </td>
                      </tr>
                    </table>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 获取喜爱列表和删除喜爱列表信息接口
import {fetchLoveList,fetchDelLove} from "@/utils/api.js"
// 查询简历列表
import {fetchResumeList} from "@/utils/api.js"
  export default {
    data(){
      return{
         dialogVisible: false,
         // 标签位置左
         tabPosition: 'left',
         // 重置密码表单
         form:{
           password1:'',
           password2:"",
         },
         // 屏蔽公司搜索框
         input:"",
         // switch开关
         value:false,
         value2:false,
         // 当前登录用户
         role:"",
         // 喜爱列表
         loveList:{},

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
         
      }
    },
    methods:{
      logout(){
        this.dialogVisible=true
      },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            console.log("_",_)
           
          })
          // .catch(_ => {});
      },
      closeDia(){
        this.dialogVisible=false
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        this.$router.back()
      },
      //设置密码
      setPassword(){
        console.log("this.from",this.form)
      },
      // 初始化获取喜爱列表
      initLoveList(){
         fetchLoveList().then(res=>{
          // console.log("res喜爱列表",res)
          this.loveList=res;
          this.id=res._id
          console.log("this.loveList",this.loveList)
        })
      },
      // 删除喜爱的岗位
      deleteLove(item){
          this.$confirm(`确认删除 ${item.good.name} 这条喜爱吗？`,"警告",{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(()=>{
            let params={id:item._id};
            fetchDelLove(params).then(()=>{
              // console.log("删除喜爱成功",res);
              this.initLoveList()
              this.$message({
                message:"删除成功",
                type:"success"
              })
            })
          }).catch(()=>{
            this.$message({
              message:"取消删除",
              type:"info"
            })
          })
        
      },
      // 编辑简历页面
      goEdit(){
        this.$router.history.push("/information/resume/"+"6099f248786ea7930c2d0d23")
      }
    },
    mounted(){
      let roles=localStorage.getItem("role")
      this.role=roles
      // 初始化喜爱列表
      this.initLoveList()
      fetchResumeList().then(res=>{
        // console.log("res简历列表",res)
        this.name1=res.list[0].name1
        this.major1=res.list[0].major1
        this.school1=res.list[0].school1
        this.hobby1=res.list[0].hobby1
        this.gender=res.list[0].gender
        this.date=res.list[0].date
        this.political=res.list[0].political
        this.native=res.list[0].native
        this.schooling=res.list[0].schooling
        this.location=res.list[0].location
      })
    }
  }
</script>

<style lang="css" scoped>
.personal-header{
  background: #fff;
  margin-bottom: 20px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.personal-left{
  display: flex;
}
.left-text{
  margin:0 10px;
}
.tabs-container{
  background: #fff;
}
#information-personal>>>.el-tabs__item.is-left{
  text-align: center;
}
#information-personal>>>.el-tabs__item.is-active{
  background: #fff;
}
#information-personal>>>.el-tabs__nav-wrap.is-left{
  background: rgba(248, 249, 251, 1);
}
.line-privary{
  border-bottom: 1px solid #ccc;
}
a{
  text-decoration: none;
  color:rgba(182,185,194,1);
  margin:0 5px;
}
.love-list-page{

}



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