<template>
  <div id="app">
    <NavBar />
    <PhotoDetail v-bind:current="current" />
  </div>
</template>

<script>
import 'es6-promise/auto';
import NavBar from './components/NavBar.vue';
import PhotoDetail from './components/PhotoDetail.vue';
import { getTodaysPhoto } from './utils/apiCalls/apiCalls.js';

export default {
  name: 'app',
  components: {
    NavBar,
    PhotoDetail
  },
  data() {
    return {
      current: {}
    };
  },
  methods: {
    async setTodayPhoto() {
      try {
        let photo = await getTodaysPhoto();
        this.current = photo;
      } catch (error) {
        null;
      }
    }
  },
  mounted() {
    this.setTodayPhoto();
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
