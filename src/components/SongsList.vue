<template>
    <grid
      :data="songsList"
      :columns="columns"
      v-on:select="showDetails($event)">
    </grid>
</template>

<script>

  import Grid from './Grid'

  export default {
    components: {Grid},
    name: 'songs-list',
    props: ['songsList'],
    data () {
      return {
        columns: {}
      }
    },

    created () {
      this.columns['lastPlayed'] = 'Last played'
      this.columns['artist'] = "Artist"
      this.columns['genre'] = 'Genre'
      this.columns['name'] = 'Name'
      this.columns['stars'] = 'Starts'
    },

    methods: {
      showDetails(data){
        this.$emit('showDetails', data)
      }
    }
  }
</script>
