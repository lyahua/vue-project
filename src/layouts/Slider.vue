<template>
  <div class="slider" >
    <div class="route-box" v-for="item in routes" :key="item.id">
      <router-link
      :to="item.path" 
      v-text="item.meta.text"
      tag="div"
      active-class="on"
      :exact="false"
      v-if="!item.isNotNav&&item.meta.role.indexOf(roles)!==-1"
      >
      </router-link>
    </div>
  </div>
</template>




<script>
import routes from "@/views/index.js"
  export default {
    data(){
      return {
        routes,
        roles:""
      }
    },
    mounted(){
      let role=localStorage.getItem("role");
      console.log("role",role)
      this.roles=role;
      console.log("this.routers",this.routes)
    }
  }
</script>

<style lang="css" scoped>
.slider{
  position: absolute;
  top:0;
  left:0;
  width:150px;
  bottom:0;
  background:#ccc;
}
.slider .route-box>div{
  text-align: center;
  line-height: 32px;
}
.on{
  background:orange
}
</style>