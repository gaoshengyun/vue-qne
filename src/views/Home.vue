<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/home/Header.vue'
import HomeSwiper from '../components/home/Swiper.vue'
import HomeIcons from '../components/home/icons.vue'
import HomeRecommend from '../components/home/Recommend.vue'
import HomeWeekend from '../components/home/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      swiperList: [],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>
