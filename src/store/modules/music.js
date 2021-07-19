import {fetchQqMusic} from "@/utils/api.js"

const musicModule={
  namespaced:true,
  state:{
    musicList:[]
  },
  getters:{},
  mutations:{
     //搜索音乐事件
     searchMusic(state,payload){
      state.musicList=payload
    }
  },
  actions:{
      //后端得到的数据通过mutations
      getMusic(store,payload){
        fetchQqMusic(payload).then(res=>{
          store.commit("searchMusic",res.song.list)
        })
      }
  }
}

export default musicModule