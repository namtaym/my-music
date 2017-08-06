<template>
  <div v-if="track" class="details-container">

    <div class="details-header">
      <h2 class="artist">{{track.artist}}</h2>
      <h2 class="name">{{track.name}}</h2>
    </div>
    <div class="details-info">
      <img class="album-img" :src="track.imgUrl" alt=""/>
      <div class="comment-container">
        <div class="comment-header">{{commentHeader}}</div>
        <textarea cols="30" rows="10" v-model="track.comment" v-on:input="saveComment()"></textarea>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'track-details',
    props: ["track"],
    data () {
      return {
        commentHeader: 'Comment'
      }
    },
    methods:{
      saveComment(){
        this.$emit("updateComment", this.track);
      }
    }

  }
</script>

<style scoped>
  .details-container{
    align-items: center;
    text-align: left;
    vertical-align: middle;
  }

  .details-header{

  }
  .artist, .name{
    display: inline-block;
  }
  .name{
    padding: 0 20px;
    font-weight: lighter;
  }

  .details-info{
    display: block;
  }
  .album-img{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
  }

  .comment-container {
    display: inline-block;
    height: 150px;
    padding: 0 44px;
  }
  .comment-header{
    vertical-align: top;
    padding-bottom: 30px;
  }

  textarea{
    display: inline-block;
    width: 500px;
    height: 70%;
  }
</style>
