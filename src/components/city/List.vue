<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button"> {{this.currentCity}} </div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div @click="handleCityClick(item.name)" class="button-wrapper" v-for="(item, index) in hot" :key="item.id">
            <div class="button"> {{item.name}} </div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
            class="item border-bottom" 
            v-for="innerItem in item" :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name:'CityList',
  props:{
    hot:Array,
    cities:Object,
    letter:String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter(){
      if(this.letter){
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick(city){
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/vaiables.less';
  .border-topbottom{
    &:before{
      border-color: #ccc;
    }
    &:after{
      border-color:#ccc
    }
  }
  .border-bottom{
    &:before{
      border-color: #ccc;
    }
  }
  .list{
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title{
      line-height: 0.54rem;
      font-size: 0.26rem;
      background: #eee;
      padding-left: .2rem;
      color: #666;
    }
    .button-list{
      padding: .1rem .6rem .1rem .1rem;
      overflow: hidden;
      .button-wrapper{
        width: 33.33%;
        float: left;
        .button{
          padding: .1rem 0;
          text-align: center;
          margin: .1rem;
          border: .02rem solid #ccc;
          border-radius: .06rem
        }
      }
    }
    .item-list{
      .item{
        line-height: 0.76rem;
        padding-left: .2rem;
      }
    }
  }
  
</style>
