<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe601;</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'cityHeader',
  }
</script>

<style lang='stylus' scoped>
  @import '~@/assets/styles/varibles.styl'

  .header
    position: relative
    overflow: hidden
    height: 0.86rem
    line-height: 0.86rem
    text-align: center
    color: #fff
    background: $bgcolor
    font-size: 0.32rem

    .header-back
      position: absolute
      top: 0
      left: 0
      width: 0.64rem
      text-align: center
      font-size: 0.4rem
      color: white
</style>
