<template>
  <div>
    <h1>{{header}}</h1>
    <songs-list></songs-list>
  </div>
</template>

<script>
  import axios from 'axios'
  import SongsList from './SongsList'

  export default {
    components: { SongsList },
    name: 'musicCollection',
    data () {
      return {
        header: "My Collection",
        songsList: []
      }
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
