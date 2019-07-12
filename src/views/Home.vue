<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header.vue'
import HomeSwiper from '../components/home/Swiper.vue'
import HomeIcons from '../components/home/icons.vue'
import HomeRecommend from '../components/home/Recommend.vue'
import HomeWeekend from '../components/home/Weekend.vue'
export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
