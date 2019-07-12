<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="(item, index) in recommendList" :key="item.id" class="item border-bottom">
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
  data() {
    return {
      recommendList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title:'上海必打卡',
          desc:'中西合璧，现代和传统各有各的精彩'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title:'上海必打卡',
          desc:'中西合璧，现代和传统各有各的精彩'
        },
        {
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title:'上海必打卡',
          desc:'中西合璧，现代和传统各有各的精彩'
        },
      ]
    }
  },
}
</script>
<style lang="less" scoped>
  @import '../../assets/styles/mixin.less';
  .title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
  }
  .item{
    .item-img-wrapper{
      height: 0;
      overflow: hidden;
      padding-bottom: 33.9%;
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
