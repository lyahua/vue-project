<template>
<div class="qf-cate-select">
  <el-select
    v-model="cate"
    placeholder="请选择类型"
    @change='onChange'
    :size='size'
    :clearable='clearable'>
    <el-option
      v-for="item in cateArr"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate">
    </el-option>
  </el-select>
</div>
</template>

<script>
import {fetchAllCates} from "@/utils/api.js"
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function() {
    return {
      cate: '',
      cateArr: []
    }
  },
  mounted() {
    this.$nextTick(()=>{
        fetchAllCates().then(res=>{
        console.log('品类列表', res)
        this.cateArr = res.list
        //把value赋值给自己的声明式cate
        this.cate=this.value
        console.log(this.value,"this.value")
      })
    }) 
  },
  methods: {
    onChange() {
      this.$emit("input", this.cate)
      this.$emit("change",this.cate)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
