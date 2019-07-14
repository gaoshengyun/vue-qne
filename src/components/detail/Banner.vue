<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_600x330_ee602103.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">蜈支洲岛(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe691;</span>
          6
        </div>
      </div>
    </div>
    <common-gallary 
      :imgs="imgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
      >
      </common-gallary>
  </div>
</template>
<script>
import CommonGallary from '../../common/gallary/gallary.vue'
export default {
  name:'DetailBanner',
  data() {
    return {
      imgs:['http://img1.qunarzz.com/sight/p0/1811/ad/ad528c7f644df6bca3.img.jpg_350x240_0c7387fc.jpg','http://img1.qunarzz.com/sight/p0/1811/1a/1a54f960eff65c59a3.img.jpg_350x240_27015c75.jpg'],
      showGallary:false
    }
  },
  components:{
    CommonGallary
  },
  methods: {
    handleBannerClick(){
      this.showGallary = true
    },
    handleGallaryClose(){
      this.showGallary = false
    }
  },
}
</script>
<style lang="less" scoped>
  .banner{
    overflow: hidden;
    position: relative;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.6rem;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
      .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number{
        padding: 0 .4rem;
        margin-top: .14rem;
        line-height: .32rem;
        height: .32rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.8);
        font-size: 0.24rem;
        .banner-icon{
          font-size: .24rem;
        }
      }
    }
  }
</style>
