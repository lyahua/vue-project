<template>
  <div class="layout">
    <Slider ></Slider>
    <Content></Content> 
  </div>
</template>

<script>
import Slider from "@/layouts/Slider.vue";
import Content from "@/layouts/Content.vue"
  export default {
  components:{
    Slider,
    Content,
  },
  }
</script>

<style lang="css" scoped>
.layout{
  height: 100%;
}
</style>