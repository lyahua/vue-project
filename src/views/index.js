import InformationDetail from "@/views/information-detail/index.vue"
import InformationTable from "@/views/information-table/index.vue"
import InformationDetailList from "@/views/information-detail-list/index.vue"
import ToDoList from "@/views/to-do-list/index.vue"
import Music from "@/views/music/index.vue"
import InformationManage from "@/views/information-manage/index.vue"
import InformationAdd from "@/views/information-add/index.vue"
// import Login from "@/views/information-detail/components/Login.vue"
// import Register from "@/views/information-detail/components/Register.vue"
import InformationPersonal from "@/views/information-personal/index.vue"
import Chat from "@/views/information-detail-list/components/Chat.vue"
import Resume from "@/views/information-personal/components/Resume.vue"
// import Test from "@/views/test/index.vue"


const routes=[
  {
    id:10,
    path:"/information-detail", // 就业信息展示模块
    name:"InformationDetail",
    component:InformationDetail,
    meta:{
      text:"就业信息展示模块",
      role:["admin","student"]
    }
  },
  {
    id:12,
    path:"/information-detail-list/:id",  // 就业信息详情模块
    name:"InformationDetailList",
    component:InformationDetailList,
    isNotNav:true,
    meta:{
      text:"就业信息详情模块",
      role:["admin","student"]
    }
  },
  {
    id:20,
    path:"/information/chat/:id", // 聊天页面
    name:"Chat",
    component:Chat,
    meta:{
      text:'聊天页面',
      role:["admin","student"]
    }
  },
  {
    id:21,
    path:"/information/resume/:id", // 简历页面
    name:"Resume",
    component:Resume,
    meta:{
      text:"个人简历页面",
      role:["admin","student"]
    }
  },
  {
    id:15,
    path:"/information-manage",
    name:"InformationManage",
    component:InformationManage, //表格信息
    meta:{
      text:"就业信息管理",
      role:["admin","company"]
    }
  },
  {
    id:16,
    path:"/information-add/:id",
    name:"InformationAdd",
    component:InformationAdd,
    isNotNav:true,
    meta:{
      text:"就业信息新增页面",
      role:["admin","company"]
    }
  },
  // {
  //   id:17,
  //   path:"/", // 登录
  //   name:"Login",
  //   component:Login,
  //   text:'登录',
  //   isNotNav:true
  // },
  // {
  //   id:19,
  //   path:"/register",
  //   name:"Register",// 注册
  //   component:Register,
  //   text:"注册",
  //   isNotNav:true
  // },
  {
    id:18,
    path:"/information-personal", // 个人中心页面
    name:"InformationPersonal",
    component:InformationPersonal,
    meta:{
      text:"个人中心",
      role:["admin","student","company"]
    }
  },
  // {
  //   id:18,
  //   path:"/test", // 个人中心页面
  //   name:"Test",
  //   component:Test,
  //   meta:{
  //     text:"测试",
  //     role:["admin","student","company"]
  //   }
  // },
  {
    id:11,
    path:"/information-table",  // 表格测试
    name:"InformationTable",
    component:InformationTable,
    text:"表格测试",
    isNotNav:true
  },

  {
    id:13,
    path:"/to-do-list",
    name:"ToDoList",
    component:ToDoList,
    text:"ToDoList",
    isNotNav:true
  },
  {
    id:14,
    path:"/music",
    name:"Music",
    component:Music,
    text:"音乐列表",
    isNotNav:true
  }
]

export default routes