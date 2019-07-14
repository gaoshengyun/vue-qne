<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
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
      hotCities:[],
      letter:''
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
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
}
</script>
<style lang="less" scoped>

</style>
