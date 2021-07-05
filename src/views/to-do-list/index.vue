<template>
  <div>
    <h1>todolist</h1>
    <i>{{$store.state.msg}}</i>
    <br/>
    <input type="text" v-model="toDo" @keyup.enter="confirm"/>
    <div v-for="item in list" :key='item.id'>
      <span v-text="item.text"></span>
      <span>============</span>
      <span v-text="item.id"></span>
      <span>============</span>
      <span @click="remove(item.id)">删除</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
  export default {
    data(){
      return {
        toDo:"",
        // list:[]
      }
    },
    computed:{
      ...mapState("todoModule",["list"])
    },
    methods:{
      ...mapMutations("todoModule",["addTask","deleteHandle"]),
      confirm(){
        // console.log("confirm");
        // this.list.push({id:Date.now(),text:this.toDo})
        // this.toDo=""
        // console.log("list",this.list)

        // this.$store.commit("addTask",this.toDo)
        this.addTask(this.toDo)
        this.toDo=""
      },
      remove(item){
        // this.$store.commit("deleteHandle",item)
        this.deleteHandle(item)
      }
    }
  }
</script>

<style lang="css" scoped>

</style>