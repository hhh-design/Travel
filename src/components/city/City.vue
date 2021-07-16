<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
  import axios from 'axios'
  import cityHeader from './components/Header.vue'
  import citySearch from './components/Search.vue'
  import cityList from './components/List.vue'
  import cityAlphabet from './components/Alphabet.vue'
  export default {
    name: 'City',
    components: {
      cityHeader,
      citySearch,
      cityList,
      cityAlphabet,
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: '',
      }
    },
    methods: {
      getCityInfo() {
        axios({
          method: 'get',
          url: 'http://localhost:8081/list',
          
        })
          .then((res) => {
            if (res.data.code == '200') {
              let result = res.data.result
              this.cities = result.cities
              this.hotCities = result.hotCities
            }
          })
          .catch((err) => console.log(err))
      },
      handleLetterChange(letter) {
        this.letter = letter
      },
    },
    mounted() {
      this.getCityInfo()
    },
  }
</script>

<style scoped>
</style>