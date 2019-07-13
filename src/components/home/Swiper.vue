<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(item, index) of list" :key="item.id">
        <img class="swpier-img" :src="item.imgUrl"></img>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'home-swiper',
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
}
</script>
<style lang="less" >
  
  .wrapper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    .swiper-pagination-bullet-active{
      background: #fff;
    }
    .swpier-img{
      width: 100%;
    }
  }
  
</style>
