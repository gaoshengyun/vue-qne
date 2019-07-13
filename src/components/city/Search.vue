<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name:'CitySearch'
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/vaiables.less';
  .search{
    height: 0.72rem;
    background: @bgColor;
    padding: 0 .1rem;
    .search-input{
      height: 0.63rem;
      line-height: 0.62rem;
      width: 100%;
      text-align: center;
      border-radius: .06rem;
      color: #666;
      padding: 0 .1rem;
      box-sizing: border-box;
    }
  }
</style>
