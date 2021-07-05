const todoModule={
  namespaced:true,
  state:{
    list:[],
  },
  getters:{},
  mutations:{
      //增加事件
      addTask(state,payload){
        // console.log("state,payload",state,payload)
        state.list.push({id:Date.now(),text:payload});
        
      },
      // 删除事件
      deleteHandle(state,payload){
        // console.log("state,payload",state,payload)
        // state.list.filter(function(ele,index){
        //   console.log("ele,index",ele,index)
        //   state.list=ele.id!=payload
        // })
      state.list = state.list.filter(ele=>ele.id!==payload)

      },
  },
  actions:{}
}

export default todoModule