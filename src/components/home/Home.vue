<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './header/Header'
  import HomeSwiper from './swiper/Swiper'
  import HomeIcon from './icons/Icons'
  import HomeRecommend from './recommend/Recommend.vue'
  import HomeWeekend from './weekend/Weekends.vue'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcon,
      HomeRecommend,
      HomeWeekend,
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      }
    },
    methods: {
      getList: function () {
        axios({
          method: 'get',
          url: 'http://localhost:8081/list',
        })
          .then((res) => {
            console.log(res.data.result)
            if (res.data.code == '200') {
              let result = res.data.result
              this.swiperList = result.swiperList
              this.iconList = result.iconList
              this.recommendList = result.recommendList
              this.weekendList = result.weekendList
            }
          })
          .catch((err) => console.log(err))
      },
    },
    mounted() {
      console.log('mounted');
      this.getList()
    },
    activated(){
      console.log('activated');
    }
  }
</script>
