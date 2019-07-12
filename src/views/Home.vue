<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header.vue'
import HomeSwiper from '../components/home/Swiper.vue'
import HomeIcons from '../components/home/icons.vue'
export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
