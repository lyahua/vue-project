<template>
    <el-row>
      <el-col :offset="1" :span="22">
        <div class="qf-goodadd">
            <h1 v-if="id==undefined">就业信息新增</h1>
            <h1 v-else>就业信息编辑</h1>
            <el-form 
            :model="info" 
            :rules="rules" 
            ref="ruleForm" 
            label-width="100px" 
            >
                <el-form-item label="公司名称" prop="compoany">
                    <el-input v-model="info.compoany"></el-input>
                </el-form-item>
                <el-form-item label="职位名称" prop="name">
                    <el-input v-model="info.name"></el-input>
                </el-form-item>
                <el-form-item label="学历" prop="learning">
                    <el-input v-model="info.learning"></el-input>
                </el-form-item>
                <el-form-item label="工作地点" prop="address">
                    <el-input v-model="info.address"></el-input>
                </el-form-item>
                <el-form-item label="公司类型" prop="cate">
                    <CateSelect v-model="info.cate" :clearable="true" size="large"></CateSelect>
                </el-form-item>
                
                <el-form-item label="是否上市" prop="hot">
                    <el-switch v-model="info.hot"></el-switch>
                </el-form-item>
                
                <el-form-item label="职位描述" prop="desc">
                    <el-input type="textarea" v-model="info.desc"></el-input>
                </el-form-item>
                <el-form-item label="薪资" prop="price">
                    <el-input-number
                    v-model="info.price" :min="0" label=""></el-input-number>
                </el-form-item> 
                <el-form-item label="公司图片" prop="img">
                    <el-upload
                    :action="$img.imgUpUrl"
                    list-type="picture-card"
                  
                    :on-success="imgSuccess"
                    :file-list="imgArr"
                    >
                        <i slot="default" class="el-icon-plus"></i>
                        
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" >
                      <span v-if="id==undefined">增加就业信息</span>
                      <span v-else>确认编辑</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import CateSelect from '@/views/information-add/components/CateSelect.vue'
import {fetchGoodInfo,fetchGoodAddOrEdit} from "@/utils/api.js"
    export default {
      
      components:{
          CateSelect
      },
      data() {
        return {
          info: {
            name: '',
            cate: '',
            price:0,
            hot: false,
            img:'',
            desc: '',
            compoany:"",
            address:"",
            learning:""
          },
          imgArr:[],
          rules: {
            name: [
              { required: true, message: '请输入职位名称', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            cate: [
              { required: true, message: '请选择类别', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写职位详情', trigger: 'blur' }
            ],
            
          },
          // 计时器
          timer:null,
          timer2:null
        };
    },
    methods: {
      imgSuccess(response,file,fileList){
        console.log('图片上传成功',response,file,fileList)
        // 当图片上传成功时，把后端返回的url信息赋值给当前表单对象
        this.info.img=response.data.url
        
      },
      submitForm(){
        console.log('商品信息', this.info)
        let info=this.info
        if(this.id!=undefined){
          info.id=this.id
        }
        fetchGoodAddOrEdit(info).then((res)=>{
          console.log("商品上传成功",res)
          if(this.id!=undefined){
            this.$message({
              message:"信息编辑成功",
              type:"success"
            })
            this.timer2=setTimeout(()=>{
              this.$router.replace('/information-manage')
            },1000)
          }else{
            this.$message({
              message:"信息上传成功",
              type:"success"
            })
            this.timer=setTimeout(()=>{
              this.$emit("myevents",false)
            },1000)
          }
           
        })
      }
    
    },
    computed:{
      id(){
        return this.$route.params.id
      }
    },
    mounted(){
      let id=this.id
      console.log("id",id)
      let params={id:this.id}
      if(id!=undefined){
        fetchGoodInfo(params).then(res=>{
          console.log("res商品信息详情",res)
          this.info=res
          this.imgArr = [{name:'',url: this.$img.imgBaseUrl+res.img}]
        })
      }
    },
    beforeDestroy(){
      clearInterval("timer");
      clearInterval("timer2")
    }
      
  }
</script>

<style lang="css" scoped>
  .qf-goodadd{
    width:800px;
    /* max-height:800px; */
    overflow:auto;
    background: #fff;

  }
</style>


