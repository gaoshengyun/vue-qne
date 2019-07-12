<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="(item, index) in recommendList" :key="item.id" class="item border-bottom">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title"> {{item.title}} </p>
          <p class="item-desc"> {{item.desc}} </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'home-recommend',
  data() {
    return {
      recommendList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1904/10/10ba58a425abc2ada3.img.jpg_200x200_5823f5d2.jpg',
          title:'上海野生动物园',
          desc:'海野生动物园为国家AAAAA级旅游景区。'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1904/10/10ba58a425abc2ada3.img.jpg_200x200_5823f5d2.jpg',
          title:'上海野生动物园',
          desc:'海野生动物园为国家AAAAA级旅游景区。'
        },
        {
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1904/10/10ba58a425abc2ada3.img.jpg_200x200_5823f5d2.jpg',
          title:'上海野生动物园',
          desc:'海野生动物园为国家AAAAA级旅游景区。'
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
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      min-width: 0;
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
      .item-button{
        margin-top: .16rem;
        background: #ff9300;
        color: #fff;
        padding: 0 .2rem;
        border-radius: .06rem;
        line-height: .44rem;
      }
    }
  }
</style>
