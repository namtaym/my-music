<template>
  <div class="hello">
    <grid
      :data="songsList"
      :columns="columns"
      v-on:select="showDetails($event)">
    </grid>
  </div>
</template>

<script>

  import Grid from './Grid'

  export default {
    components: {Grid},
    name: 'songs-list',
    props: ["songsList"],
    data () {
      return {
        columns: {}
      }
    },

    created () {
      this.columns["lastPlayed"] = "Last played"
      this.columns["artist"] = "Artist"
      this.columns["genre"] = "Genre"
      this.columns["name"] = "Name"
      this.columns["stars"] = "Starts"
    },

    methods: {
      showDetails(data){
        this.$emit('showDetails', data)
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
