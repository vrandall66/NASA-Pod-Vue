<template>
  <div class="PhotoDetail">
    <img :src="current.url" class="image" />
    <div>
      <h2>{{ current.title }}</h2>
      <h4>{{ this.date }}</h4>
      <p class="explanation">{{ current.explanation }}</p>
    </div>
  </div>
</template>

<script>
import { formatTodaysDate } from '../utils/helpers/helpers.js';

export default {
  name: 'PhotoDetail',
  props: ['current'],
  data() {
    return {
      date: ''
    };
  },
  methods: {
    formatDate() {
      let todaysDate = formatTodaysDate();
      this.date = todaysDate;
    }
  },
  mounted() {
    this.formatDate();
  }
};
</script>

<style scoped>
.PhotoDetail {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1% 2%;
  width: 100%;
}

.image {
  width: 75%;
  padding-right: 2%;
}

.explanation {
  padding: 2% 1%;
  width: 100%;
}
</style>
