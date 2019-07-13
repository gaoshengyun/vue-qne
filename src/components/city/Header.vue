<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name:'CityHeader'
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/vaiables.less';
  .header{
    height: .86rem;
    line-height: 0.86rem;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .32rem;
    position: relative;
    .header-back{
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
