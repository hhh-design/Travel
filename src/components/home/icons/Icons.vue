<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(p, index) of pages" :key="index">
        <div class="icon" v-for="item of p" :key="item.id">
          <div class="iconImage">
            <img class="imgContent" :src="item.imgUrl" />
          </div>
          <div class="iconWord">{{ item.desc }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array,
    },
    data() {
      return {
        swiperOptions: {
          autoplsy: false,
        },
      }
    },
    computed: {
      pages() {
        let page = []
        this.list.forEach((item, index) => {
          let num = Math.floor(index / 8)
          if (!page[num]) {
            page[num] = []
          }
          page[num].push(item)
        })
        return page
      },
    },
  }
</script>
<style lang='stylus' scoped>
  @import '~@/assets/styles/mixins.styl'

  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icons
    margin-top: 0.1rem

    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%

      .iconImage
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0.44rem
        box-sizing: border-box
        padding: 0.1rem

        .imgContent
          display: block
          margin: 0 auto
          height: 100%

      .iconWord
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 0.44rem
        line-height: 0.44rem
        text-align: center
        ellipsis()
</style>