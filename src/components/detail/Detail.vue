<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :number="number"
      :bannerImg="bannerImg"
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <div class="h">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from './components/Banner.vue'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
    },
    data() {
      return {
        list: [],
        number: 0,
        sightName: '',
        bannerImg: '',
        gallaryImgs:[]
      }
    },
    methods: {
      getDetailInfo() {
        axios({
          method: 'get',
          url: 'http://localhost:8081/list?id=',
          params: {
            id: this.$route.params.id,
          },
        }).then((res) => {
          if (res.data.code == '200') {
            let result = res.data.result.details.data
            this.list = result.categoryList //
            this.gallaryImgs = result.gallaryImgs
            this.number = result.gallaryImgs.length //
            this.sightName = result.sightName //
            this.bannerImg = result.bannerImg //
          }
        })
      },
    },
    mounted() {
      this.getDetailInfo()
    },
  }
</script>

<style lang='stylus' scoped>
  .h
    height: 20rem
</style>