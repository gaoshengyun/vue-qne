<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) in imgs" :key="index"
        >
          <img class="gallary-img" :src="item"></img>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      
    </div>
  </div>
</template>
<script>
export default {
  name:'CommonGallary',
  props:{
    imgs:{
      type:Array,
      default:() => []
    }
  },
  data() {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationType : 'fraction',
        observer:true,
        observeParents:true
      }
    }
  },
  methods: {
    handleGallaryClick(){
      this.$emit('close')
    }
  },
}
</script>
<style lang="less" scoped>
  .container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .swiper-container{
        overflow: inherit;
      }
      .gallary-img{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
