<template>
  <div id="app">
    <NavBar />
    <PhotoDetail v-bind:current="current" />
    <MonthContainer v-bind:photos="monthsPhotos" />
  </div>
</template>

<script>
import 'es6-promise/auto';
import NavBar from './components/NavBar.vue';
import PhotoDetail from './components/PhotoDetail.vue';
import MonthContainer from './components/MonthContainer.vue';
import { getTodaysPhoto, getPotdRange } from './utils/apiCalls/apiCalls.js';

export default {
  name: 'app',
  components: {
    NavBar,
    PhotoDetail,
    MonthContainer
  },
  data() {
    return {
      current: {},
      monthsPhotos: []
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
    },
    async setMonthlyPhotos() {
      try {
        let photos = await getPotdRange('2019-01-01', '2019-01-13');
        this.monthsPhotos = photos;
      } catch (error) {
        null;
      }
    }
  },
  mounted() {
    this.setTodayPhoto();
    this.setMonthlyPhotos();
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
