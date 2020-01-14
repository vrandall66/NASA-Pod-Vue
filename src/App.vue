<template>
  <div id="app">
    <NavBar />
    <PhotoDetail v-bind:current="current" v-bind:date="displayDate" />
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
      monthsPhotos: [],
      displayDate: ''
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
        let today = this.getTodaysDate();
        let currentMonthAndYear = this.getMonthAndYear();
        let photos = await getPotdRange(`${currentMonthAndYear}-01`, today);
        this.monthsPhotos = photos;
      } catch (error) {
        null;
      }
    },
    getTodaysDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      this.displayDate = `${mm}/${dd}/${yyyy}`;
      return `${yyyy}-${mm}-${dd}`;
    },
    getMonthAndYear() {
      let today = new Date();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}`;
    }
  },
  mounted() {
    this.setTodayPhoto();
    this.setMonthlyPhotos();
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
