<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name:'CityAlphabet'
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/vaiables.less';
  .list{
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: 0.4rem;
    color: @bgColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item{
      text-align: center;
      line-height: 0.4rem;
    }
  }
  
</style>
