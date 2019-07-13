<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '../components/city/Header.vue'
import CitySearch from '../components/city/Search.vue'
import CityList from '../components/city/List.vue'
import CityAlphabet from '../components/city/Alphabet.vue'
export default {
  name:'city',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities:{},
      hotCities:[]
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
}
</script>
<style lang="less" scoped>

</style>
