import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)





Vue.config.productionTip = false

// 引入路由配置
import router from "./router/index.js"

// 路由拦截
import "@/router/permit.js"
// 引入vuex
import store from "@/store/index.js"

import img from '@/utils/img'
Vue.prototype.$img=img

//引入moment
import moment from "moment"
Vue.prototype.$moment = moment;//赋值使用

// 引入聊天第三方库
import JwChat from 'jwchat';
Vue.use(JwChat)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
