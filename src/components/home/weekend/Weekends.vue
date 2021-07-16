<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="itemImgWrapper">
          <img class="itemImg" :src="item.imgUrl" />
        </div>
        <div class="itemInfo">
          <p class="itemTitle">{{ item.title }}</p>
          <p class="itemDesc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeekend',
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
    line-height: 0.8rem
    background: #eee
    text-indent: 0.2rem

  .itemImgWrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%

    .itemImg
      width: 100%

  .itemInfo
    padding: 0.1rem

    .itemTitle
      line-height: 0.32rem
      font-size: 0.32rem
      ellipsis()

    .itemDesc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
</style>
