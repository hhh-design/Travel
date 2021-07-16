<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-arrow">&#xe601;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe61c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div >
        <div class="header-right" >
           {{ this.$store.state.city }}
          <span class="iconfont down-arrow">&#xe65a;</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'HomeHeader',
  }
</script>
<style lang='stylus' scoped>
  @import '~@/assets/styles/varibles.styl'

  .header
    line-height: 0.86rem
    display: flex
    background-color: $bgcolor
    color: #fff

    .header-left
      width: 0.64rem
      float: left

      .back-arrow
        text-align: center
        font-size: 0.4rem

    .header-input
      flex: 7
      background: #fff
      height: 0.64rem
      line-height: 0.64rem
      margin-top: 0.12rem
      margin-left: 0.1rem
      padding-left: 0.2rem
      border-radius: 0.1rem
      color: #ccc

    .header-right
      /* width: 1.24rem */
      flex:3
      float: right
      text-align: center
      color: white
      flex-wrap :nowrap
      margin :0 .2rem
      .down-arrow
        font-size: 0.24rem
        margin-left: -0.04rem
</style>
