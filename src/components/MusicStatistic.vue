<template>
  <div>
    <h1>{{header}}</h1>
    <h2>Genre</h2>
    <pie-chart :chart-data="statisticInfoByGenre"></pie-chart>
  <!--  <h2>Stars</h2>
    <pie-chart :chartData="statisticInfoByStars"></pie-chart>-->
  </div>
</template>

<script>
  import MusicDataService from '../services/music-data-service'
  import StatisticInfoModel from '../view-models/statistic-info-model'
  import PieChart from './PieChart'

  export default {
    components: { PieChart },
    name: 'musicStatistics',
    data () {
      return {
        header: "Your Music Statistics",
        songsList: [] ,
        statisticInfoByGenre: [],
        statisticInfoByStars: [],
      }
    },

    created(){
      const dataService = new MusicDataService()
     dataService.getPlayList().then(response => {
       let songsList = response;
       this.statisticInfoByStars = new StatisticInfoModel(songsList,'stars').info;
       this.statisticInfoByGenre = new StatisticInfoModel(songsList,'genre').info;
      })
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
