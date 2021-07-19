<template>
  <div id="app">
    <router-view name="login" v-if='$route.path==="/"||$route.path==="/register"'></router-view>
    <Layout v-else></Layout>
  </div>
</template>

<script>

import Layout from "@/layouts/Layout.vue"

export default {
  name: 'App',
  components:{
    Layout,
  },
  watch:{
     $route: function(to, from) {
      console.log('url发生了变化', to, from)
    }
  }
}
</script>

<style>
  html,body{
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
  }
  #app{
    height: 100%;
    width:100%;
  }
</style>
