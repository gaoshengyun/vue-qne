<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header.vue'
import HomeSwiper from '../components/home/Swiper.vue'
export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper
  }
}
</script>
