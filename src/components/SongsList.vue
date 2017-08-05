<template>
  <div class="hello">
    <grid
        :data="songsList"
      :columns="columns">
    </grid>
  </div>
</template>

<script>

  import Grid from './Grid'
  import MusicDataService from '../services/music-data-service'

  export default {
    components: { Grid },
    name: 'songs-list',
    data () {
      return {
        songsList: [],
        columns: {}
      }
    },

    created () {
      this.columns["last_played"] = "Last played"
      this.columns["name"] = "Name"
      this.columns["artist"] = "Artist"
      this.columns["genre"] = "Genre"
      this.columns["stars"] = "Starts"

      const dataService = new MusicDataService();
      dataService.getPlayList().then(response => {
        this.songsList = dataService.getMockedPlayList()
        }
      )
        .catch(e => {
          console.log(e)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
