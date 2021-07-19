import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from "@/views/index.js"
// import InformationDetail from "@/views/information-detail/index.vue"
// import InformationTable from "@/views/information-table/index.vue"
// import InformationDetailList from "@/views/information-detail-list/index.vue"


// const routes=[
//   {
//     path:"/information-detail", // 就业信息展示模块
//     name:"InformationDetail",
//     component:InformationDetail
//   },
//   {
//     path:"/information-table",  // 表格测试
//     name:"InformationTable",
//     component:InformationTable
//   },
//   {
//     path:"/information-detail-list",  // 就业信息详情模块
//     name:"InformationDetailList",
//     component:InformationDetailList
//   }
// ]


import Login from "@/views/information-detail/components/Login.vue"
import Register from "@/views/information-detail/components/Register.vue"

const arr=[];
  routes.map(ele=>{
    arr.push({path:ele.path,component:ele.component,meta:ele.meta,name:ele.name})
  })


console.log("arr",arr)

export default new VueRouter({
  routes:[
  ...arr,
  { path: '/', components: {login:Login},name:"Login"},
  {path:"/register",components: {login:Register},name:"Register"},
  { path: '/*', redirect: '/' }
 ]
})
