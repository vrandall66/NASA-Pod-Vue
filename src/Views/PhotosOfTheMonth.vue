<template>
  <div>
    <h1>Photos of the Month</h1>
    <MonthContainer v-bind:photos="monthsPhotos" />
  </div>
</template>

<script>
import MonthContainer from '../components/MonthContainer.vue';
import { getPotdRange } from '../utils/apiCalls/apiCalls';
import { getTodaysDate, getMonthAndYear } from '../utils/helpers/helpers.js';

export default {
  name: 'PhotosOfTheMonth',
  components: {
    MonthContainer
  },
  data() {
    return {
      monthsPhotos: []
    };
  },
  methods: {
    async setMonthlyPhotos() {
      try {
        let today = getTodaysDate();
        let currentMonthAndYear = getMonthAndYear();
        let photos = await getPotdRange(`${currentMonthAndYear}-01`, today);
        this.monthsPhotos = photos;
      } catch (error) {
        null;
      }
    }
  },
  mounted() {
    this.setMonthlyPhotos();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
