<template>
  <div>
    <h2 class="div__h2--title">Photos from</h2>
    <MonthContainer v-bind:photos="monthsPhotos" v-bind:loading="loading" />
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
      monthsPhotos: [],
      loading: true
    };
  },
  methods: {
    async setMonthlyPhotos() {
      try {
        let today = getTodaysDate();
        let currentMonthAndYear = getMonthAndYear();
        let photos = await getPotdRange(`${currentMonthAndYear}-01`, today);
        this.monthsPhotos = photos;
        this.setLoading();
      } catch (error) {
        null;
      }
    },
    setLoading() {
      this.loading = !this.loading;
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

.div__h2--title {
  padding-top: 2%;
}
</style>
