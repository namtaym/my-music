<template>
  <transition  name="slide-fade">
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
        <i @click="shareOpinion()" class="twitter-icon"><img src="../assets/twitter.png"></i>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>

  export default {
    name: 'track-details',
    props: ["track"],
    data () {
      return {
        commentHeader: 'Comments'
      }
    },
    methods:{
      saveComment(){
        this.$emit("updateComment", this.track);
      },
      shareOpinion(){
        if(this.track.comment && this.track.comment.length) {
          window.open(
            "https://twitter.com/",
            '_blank'
          );
        }
        else {
          alert("Your comment is empty");
        }
      }
    }

  }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    transform: translateX(10px);
    opacity: 0;
  }
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
    font-size: 18px;
  }
  .twitter-icon{
    padding: 30px;
    cursor: pointer;
  }
  textarea{
    font-size: 16px;
    display: inline-block;
    width: 500px;
    height: 70%;
  }
</style>
