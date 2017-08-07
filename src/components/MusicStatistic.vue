<template>
  <div>
    <transition appear name="flip" mode="out-in">
      <h1>{{header}}<span class="chart-icon" @click="backToPlayList()" title="Back to My Music"><img
        src="../assets/undo.png" alt=""></span></h1>
    </transition>
    <error-message v-if="serverError"></error-message>

    <div class="chart-container" v-if="!serverError">
      <h2>Genre</h2>
      <pie-chart :chart-data="statisticInfoByGenre"></pie-chart>
    </div>
    <div class="chart-container" v-if="!serverError">
      <h2>Stars</h2>
      <pie-chart :chartData="statisticInfoByStars"></pie-chart>
    </div>
  </div>
</template>

<script>
  import MusicDataService from '../services/music-data-service'
  import StatisticInfoModel from '../view-models/statistic-info-model'
  import PieChart from './PieChart'
  import ErrorMessage from './ErrorMessage.vue'
  const dataService = new MusicDataService()

  export default {
    components: {PieChart, ErrorMessage},
    name: 'musicStatistics',
    data () {
      return {
        header: 'Your Music Statistics',
        songsList: [],
        statisticInfoByGenre: [],
        statisticInfoByStars: [],
        serverError: false
      }
    },
    created(){
      dataService.getPlayList().then(response => {
        let songsList = response.data
        this.statisticInfoByStars = new StatisticInfoModel(songsList, 'stars').info
        this.statisticInfoByGenre = new StatisticInfoModel(songsList, 'genre').info
      }).catch(e => {
        this.serverError = true
      })
    },
    methods: {
      backToPlayList(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .chart-container {
    width: 300px;
    display: inline-block;
  }
</style>
