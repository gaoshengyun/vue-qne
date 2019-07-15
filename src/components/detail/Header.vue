<template>
  <div>
    <router-link 
      tag="div" 
      to="/" 
      class="header-abs"
      v-show="showAbs"  
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div 
      class="header-fixed" 
      v-show="!showAbs" 
      :style="opcaityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailHeader',
  data() {
    return {
      showAbs : true,
      opcaityStyle:{
        opacity:0
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
        
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll(){
      const top = document.documentElement.scrollTop
      console.log(top)
      if(top > 60){
        
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opcaityStyle = {
          opacity
        }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  },
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/vaiables.less';
  .header-abs{
    position: absolute;
    left: .2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: .4rem;
    text-align: center;
    line-height: 0.8rem;
    background: rgba(0,0,0,.8);
    .header-abs-back{
      color: #fff;
      font-size: .4rem;
    }
  }
  
  .header-fixed{
    height: .86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .32rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
