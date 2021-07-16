<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- tag的用法 to的动态绑定 -->
      <router-link
        tag="li"
        class="item"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array,
    },
    data() {
      return {}
    },
  }
</script>
<style lang='stylus' scoped>
  @import '~@/assets/styles/mixins.styl'

  .title
    margin-top: 0.2rem
    line-height: 0.8rem
    background: #eee
    text-indent: 0.2rem

  .item
    overflow: hidden
    display: flex
    height: 1.9rem

    .item-img
      height: 1.6rem
      width: 2.5rem
      padding: 0.1rem

    .item-info
      position relative
      flex: 1
      padding: 0.1rem
      min-width: 0
      height 100%
      box-sizing: border-box

      .item-title
        line-height: 0.32rem
        font-size: 0.32rem
        ellipsis()

      .item-desc
        line-height: 0.4rem
        color: #ccc
        /* ellipsis() */
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;

      .item-button
        position absolute
        bottom 0.2rem
        line-height: 0.44rem
        background: #ff9300
        padding: 0 0.2rem
        border-radius: 0.06rem
        color: #fff
</style>
