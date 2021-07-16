<template>
  <div class="alphabet">
    <div
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cityAlphabet',
    props: {
      cities: Object,
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      },
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null,
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      },
    },
  }
</script>

<style lang='stylus' scoped>
  @import '~@/assets/styles/varibles.styl'

  .alphabet
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    width: 0.3rem
    height: 100%
    top: 0.5rem
    right: 0

    .item
      line-height: 0.4rem
      text-align: center
      color: $bgcolor
</style>