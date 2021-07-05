import Route from "./index.js"
import { Message } from 'element-ui';
// console.log("message",Message)

console.log("Route",Route)
Route.beforeEach((to,form,next)=>{
  let role=localStorage.getItem("role")
  console.log("to",to)
  if(role&&role!="undefined"){
    if(to.meta.role.indexOf(role)!==-1){
      next()
    }else{
      // next({name:"Login"});
      Message.success({
        type:"error",
        message:"没有权限"
      })
      next(Route.back())
      console.log("没有权限")
    }
   console.log(to.meta.role.indexOf(role))
  }else{
    if(to.name==="Login"||to.name==="Register"){
      next(); // 确认进入
    }else{
      next({name:"Login"}); // 确认进入路由
    }
    
  }
  console.log("form",form);
  console.log("next()",next())
  // next()
})