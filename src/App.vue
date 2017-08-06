<template>
  <div id="app" class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Muli');
#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body{
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: 'Roboto', sans-serif;
  }

  h1, h2 {
    font-weight: bolder;
    font-family: 'Comfortaa', cursive;
  }
  .chart-icon{
    margin: 10px;
    cursor: pointer;
  }

  .content {
    margin: 10px;
  }

  @media (min-width: 1000px) {
    .content {
      margin: 400px;
    }

    /*for animation*/
    .slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
      transform: translateX(10px);
      opacity: 0;
    }

    .flip-enter-active {
      transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }

    .flip-leave-active {
      transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .flip-enter, .flip-leave-to {
      transform: scaleY(0) translateZ(0);
      opacity: 0;
    }
}
</style>
