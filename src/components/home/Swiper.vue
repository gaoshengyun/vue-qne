<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="item.id">
        <img class="swpier-img" :src="item.imgUrl"></img>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'home-swiper',
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc62e131afb380e98e4beac33e751c6c.jpg_750x200_2e248116.jpg'
        },
        {
          id:'0002',
          imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a4c27b0a5fc1d9e9e620225869089b12.jpg_750x200_e4720428.jpg'
        }
      ]
    }
  },
}
</script>
<style lang="less" >
  
  .wrapper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.66%;
    .swiper-pagination-bullet-active{
      background: #fff;
    }
    .swpier-img{
      width: 100%;
    }
  }
  
</style>
