<template>
    <div id="information-manage-page">
        <el-row align="middle" type="flex" style="margin:10px 0">
            <el-col :span="6" align="left" :offset="1">
              <div style="display:flex;align-items:center">
                <div style="margin-right:10px;width:100px">名称搜索:</div>
                <el-input v-model="input"  placeholder="请输入职位名称"></el-input>
              </div>
            </el-col>
            <el-col :span="7">
               <div style="display:flex;align-items:center">
                <div style="margin: 0 10px 0 20px;">类别搜索:</div>
                <CateSelect clearable @change="myEventsHandle"></CateSelect>
              </div>
            </el-col>
            <el-col :span="4" align="center">
               <el-button type="primary" @click="searchText" icon="el-icon-search">搜索</el-button>
               <el-button type="primary" @click="resetText" icon="el-icon-refresh-left">重置</el-button>
            </el-col>
            <el-col :span="5" align="right">
               
            </el-col>
        </el-row>

        <el-row>
          <el-col :span="6" :offset="1">
             <div>
               <el-button type="primary" icon="el-icon-plus"  @click="drawer = true" style="margin-right:20px">新增</el-button>
               <el-dropdown>
                <el-button type="primary" v-show="currentChoose">
                  批量操作<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                  <el-dropdown-item  icon="el-icon-delete">删除</el-dropdown-item>
                  <el-dropdown-item disabled icon="el-icon-setting">合并</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
             </div>
          </el-col>
        </el-row>
        <el-row style="margin:20px 0">
          <el-col :span="22" :offset="1">
            <div class="message">
              已选择 
              <span v-text="currentChoose" style="color:blue;margin:0 5px" v-if="currentChoose"></span>
              <span style="color:red;margin:0 5px" v-else>0</span>
               项
              <a href="javascript:;" style="margin-left:30px;text-decoration:none"  @click="toggleSelection()">清空</a>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="22" :offset="1">
            <div class="qf-goodlist">
              <el-table
                :data="good.list"
                style="width: 100%;"
                height="600px"
                stripe
                highlight-current-row
                border
                @selection-change="handleSelectionChange"
                @select-all="handleSelectAll"
                ref="multipleTable"
               
                >
                <el-table-column
                type="selection"
                align="center"
                >
                </el-table-column>
                <el-table-column
                  type="index"
                  align="center"
                  label="序号"
                >
                </el-table-column>
                <el-table-column
                prop="compoany"
                label="公司名称"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="职位名称"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="desc"
                label="职位描述"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="price"
                label="薪资(K)"
                align="center"
                >
                </el-table-column>
                <el-table-column
                prop="cate"
                label="公司类型"
                align="center"
                >
                  <template slot-scope="scope">
                    <span v-text="scope.row.cate=='tourism'?'旅游':''"></span>
                    <span v-text="scope.row.cate=='service'?'服务业':''"></span>
                    <span v-text="scope.row.cate=='medical'?'医疗':''"></span>
                    <span v-text="scope.row.cate=='technology'?'技术':''"></span>
                    <span v-text="scope.row.cate=='design'?'设计':''"></span>
                    <span v-text="scope.row.cate=='sales'?'销售':''"></span>
                    <span v-text="scope.row.cate=='management'?'管理':''"></span>
                    <span v-text="scope.row.cate=='production'?'生产制造':''"></span>
                    <span v-text="scope.row.cate=='other'?'其它':''"></span>
                  </template>
                </el-table-column>
                
                <el-table-column
                prop="img"
                label="公司图片"
                align="center"
                >
                  <template slot-scope="scope">
                    <img :src="$img.imgBaseUrl+scope.row.img" alt="" />
                  </template>
                </el-table-column>

                <el-table-column
                prop="hot"
                label="是否上市"
                align="center"
                >
                  <template slot-scope="scope">
                    <span v-text="scope.row.hot?'是':'否'"></span>
                  </template>
                </el-table-column>

                <el-table-column 
                label="操作"
                align="center"
                >
                  <template slot-scope="scope">
                    <el-button
                      size="large"
                      type="primary"
                       icon="el-icon-edit" 
                       circle
                      @click="handleEdit( scope.row)"
                    ></el-button>
                    <el-button
                      size="large"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      @click="handleDelete(scope.row)"></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
        

        <el-row type="flex" style="margin:10px 0">
            <el-col :span="22" :offset="1" align="right">
                <div>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[ 5,8, 10, 20]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    background
                    :total="good.total">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
        
        <el-row>
          <el-col>
            <el-drawer
              :visible.sync="drawer"
              :direction="direction"
              size="65%"
            >
              <InformationAdd @myevents="onMy"></InformationAdd>
            </el-drawer>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import {fetchGoodList,fetchGoodDel} from "@/utils/api.js"
import InformationAdd from "@/views/information-add/index.vue"
import CateSelect from "@/views/information-add/components/CateSelect.vue"
    export default {
          data() {
            return {
                good:{},
                input:"",
                filter:{
                  text:'',
                  cate:'',
                  size:"5",
                  page:1,
                  hot:"",
                  date:''
                },
                // 抽屉相关
                drawer: false,
                direction: 'rtl',
                //多选
                multipleSelection: [],
                // 当前选中了几个
                currentChoose:""
              }
          },
          components:{
            InformationAdd,
            CateSelect
          },
          mounted(){
           fetchGoodList(this.filter).then(res=>{
              console.log('商品列表',res);
              this.good=res;
            })
          },
          methods:{
            init(){
              fetchGoodList(this.filter).then(res=>{
              console.log('商品列表',res);
              this.good=res;
              })
            },
            // textFilter(val){
            //   console.log("val",val)
            //   this.filter.text=val
            //   this.init()
            // },
            searchText(){
              // console.log("this.value",this.input)
              if(!this.input){
                this.$message({
                  message:"请输入职位名称",
                  type:"error"
                })
              }else{
                this.filter.text=this.input;
                this.init()
              }
             
            },
            resetText(){
              this.input=null
              this.filter.text=null
              this.filter.cate=null
              this.init()
            },
            handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
              this.filter.size=val
              this.init()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.filter.page=val
                this.init()
            },
            // skipToAdd(){
            //   this.$router.history.push('/information-add/0')
            // },
            //删除方法
            handleDelete(item){
              console.log('item',item)
              this.$confirm(`确认删除 ${item.name} 信息吗`)
              .then(()=> {
                fetchGoodDel({id:item._id}).then(()=>{
                this.init()
                })
              })
              .catch(()=> {});
              
            },
            //编辑方法
            handleEdit(item){
              console.log("item",item)
              this.$router.history.push("/information-add/"+item._id)
            },
            //抽屉方法
            onMy(val){
              this.drawer=val
            },
            // 多选方法
            handleSelectionChange(val) {
              this.multipleSelection = val;
              // console.log("val>>>",val)
              this.currentChoose=val.length
            },
            // 清空已选中的
             toggleSelection(rows) {
              if (rows) {
                rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
                });
              } else {
                this.$refs.multipleTable.clearSelection();
              }
              
            },
            // 当用户手动勾选全选 Checkbox 时触发的事件
            handleSelectAll(selection){
              console.log("selection",selection)
            },
            // 类别回传
            myEventsHandle(val){
              console.log("val",val)
              this.filter.cate=val
              this.init()
            }
          },
         
    }
</script>

<style lang="css" scoped >
#information-manage-page{
  background: #fff;
  overflow: hidden;
  margin:0 15px;
}
  .qf-goodlist{
    overflow:auto;
    height:600px;
  }
  .cell{
      width:150px;
      height:150px;
    }
  img{
      width:100%;
      }
  #information-manage-page>>>.el-table thead{
    background: orange;
    color:orange
  }

  /* 消息框 */
  .message{
    border:1px solid rgba(145,213,255, 1);
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: rgba(230,247,255, 1);
    padding:5px 20px;
    box-sizing: border-box;
  }

  /* 抽屉 */
 #information-manage-page>>>.el-drawer__header{
   margin-bottom:0;
   padding-top:0
  }
  #information-manage-page>>>.el-drawer__body{
    overflow: auto;
  }
</style>