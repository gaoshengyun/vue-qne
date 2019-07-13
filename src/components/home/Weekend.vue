<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="(item, index) in list" :key="item.id" class="item border-bottom">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title"> {{item.title}} </p>
          <p class="item-desc"> {{item.desc}} </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'home-weekend',
  props:{
    list:Array
  }
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/mixin.less';
  .title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item{
    .item-img-wrapper{
      height: 0;
      overflow: hidden;
      padding-bottom: 37.09%;
      .item-img{
        width: 100%;
      }
    }
    .item-info{
      padding: .1rem;
      .item-title{
        line-height: .54rem;
        font-size: 0.32rem;
        .ellipsos();
      }
      .item-desc{
        line-height: 0.4rem;
        color: #ccc;
        .ellipsos();
      }
    }
  }
</style>
