<template>
  <div>
  <h1>{{header}}</h1>
    <songs-list v-on:showDetails="showDetails($event)" :songsList="songsList"></songs-list>
    <track-details :track="selectedTrack" v-on:updateComment="updateComment($event)"></track-details>
  </div>
</template>

<script>
  import SongsList from './SongsList'
  import TrackDetails from './TrackDetails'
  import MusicDataService from '../services/music-data-service'
  import TrackViewModel from '../view-models/track-view-model'
  import TrackDetailsViewModel from '../view-models/track-details-view-model'

  export default {
    components: { SongsList, TrackDetails },
    name: 'musicCollection',
    data () {
      return {
        header: "My Music",
        songsList: [] ,
        selectedTrack: undefined
      }
    },
    created() {
      const dataService = new MusicDataService()
      dataService.getPlayList().then(response => {
      this.songsList = dataService.getMockedPlayList().map(item => {
        return new TrackViewModel(item.artist, item.genre, item.last_played, item.name, item.stars);
      })
     }
    )
    .catch(e => {
      console.log(e)
    })
    },
    methods: {
      showDetails(data){
        this.selectedTrack = new TrackDetailsViewModel(data);
      },
      updateComment(track){
        const dataService = new MusicDataService();
        dataService.saveComment(track.comment, track.id);
      }
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
