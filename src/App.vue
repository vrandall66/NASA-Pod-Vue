<template>
  <div id="app">
    <NavBar />
    <router-view> </router-view>
  </div>
</template>

<script>
import 'es6-promise/auto';
import NavBar from './components/NavBar.vue';
import Home from './Views/Home.vue';
import PhotosOfTheMonth from './Views/PhotosOfTheMonth.vue';

export default {
  name: 'app',
  components: {
    Home,
    NavBar,
    PhotosOfTheMonth
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
