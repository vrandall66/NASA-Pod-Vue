<template>
  <div>
    <h2>Photo of the Day</h2>
    <PhotoDetail v-bind:current="current" v-bind:loading="loading" />
  </div>
</template>

<script>
import PhotoDetail from '../components/PhotoDetail.vue';
import { getTodaysPhoto } from '../utils/apiCalls/apiCalls';

export default {
  name: 'Home',
  components: {
    PhotoDetail
  },
  data() {
    return {
      current: {},
      displayDate: '',
      loading: true
    };
  },
  methods: {
    async setTodayPhoto() {
      try {
        let photo = await getTodaysPhoto();
        this.current = photo;
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
    this.setTodayPhoto();
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
