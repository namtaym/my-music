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
  .content {
    margin: 10px;
  }
  @media (min-width: 1000px) {
    .content {
      margin: 400px;
    }
}
</style>
