<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62b;</span>
          {{ this.number }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        v-show="showGallary"
        @close="handleGallaryClose"
        :imgs="gallaryImgs"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from '../../../common/gallary/Gallary.vue'
  import FadeAnimation from '../../../common/fade/FadeAnimation.vue'
  export default {
    name: 'DetailBanner',
    data() {
      return {
        showGallary: false,
        imgs: [],
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handleGallaryClose() {
        this.showGallary = false
      },
    },
    components: {
      CommonGallary,
      FadeAnimation,
    },
    props: {
      sightName: String,
      number: Number,
      bannerImg: String,
      gallaryImgs: Array,
    },
  }
</script>

<style lang='stylus' scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 50%

    .banner-img
      width: 100%

    .banner-info
      position: absolute
      display: flex
      right: 0
      bottom: 0
      left: 0
      color: white
      line-height: 0.6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-title
        flex: 1
        font-size: 0.32rem
        padding: 0 0.2rem

      .banner-number
        padding: 0 0.4rem
        height: 0.32rem
        line-height: 0.32rem
        margin-top: 0.14rem
        font-size: 0.32rem

        .banner-icon
          font-size: 0.32rem
</style>