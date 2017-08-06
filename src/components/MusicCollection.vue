<template>
  <div>

    <transition appear name="flip" mode="out-in">
      <h1>{{header}}<span class="chart-icon" @click="showStatistics()" title="Show Music Statistics"><img
        src="../assets/chart-pie.png" alt=""></span></h1>
    </transition>

    <error-message v-if="serverError"></error-message>

    <transition appear name="slide-fade" mode="out-in">
      <songs-list v-if="songsList" v-on:showDetails="showDetails($event)" :songsList="songsList"></songs-list>
    </transition>

    <track-details v-if="selectedTrack" :track="selectedTrack"
                   v-on:updateComment="updateComment($event)"></track-details>
  </div>
</template>

<script>
  import SongsList from './SongsList'
  import TrackDetails from './TrackDetails'
  import MusicDataService from '../services/music-data-service'
  import TrackViewModel from '../view-models/track-view-model'
  import TrackDetailsViewModel from '../view-models/track-details-view-model'
  import ErrorMessage from './ErrorMessage.vue'

  export default {
    components: {SongsList, TrackDetails, ErrorMessage},
    name: 'musicCollection',
    data () {
      return {
        header: "My Music",
        songsList: undefined,
        selectedTrack: undefined,
        serverError: false
      }
    },
    created() {
      const dataService = new MusicDataService()
      dataService.getPlayList().then(response => {
          this.songsList = response.data.map(item => {
            return new TrackViewModel(item.artist, item.genre, item.last_played, item.name, item.stars)
          })
        }
      ).catch(e => {
        this.serverError = true
      })
    },
    methods: {
      showDetails(data){
        this.selectedTrack = new TrackDetailsViewModel(data)
      },
      updateComment(track){
        const dataService = new MusicDataService()
        dataService.saveComment(track.comment, track.id)
      },
      showStatistics(){
        this.$router.push('statistic')
      }
    }
  }
</script>

<style scoped>

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
