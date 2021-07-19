import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import musicModule from "./modules/music.js"
import todoModule from "./modules/todo.js"

export default new Vuex.Store({
  state:{
    msg:"1235vuex",
  },
  getters:{},
  mutations:{
  
   
  },
  actions:{
  
  },
  modules:{
    musicModule,
    todoModule
  }
})