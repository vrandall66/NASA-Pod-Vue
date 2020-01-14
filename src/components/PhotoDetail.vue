<template>
  <div class="PhotoDetail">
    <img :src="current.url" class="image" />
    <h2>{{ current.title }}</h2>
    <h4>{{ this.date }}</h4>
    <p class="explanation">{{ current.explanation }}</p>
  </div>
</template>

<script>
import 'es6-promise/auto';

export default {
  name: 'PhotoDetail',
  props: ['current', 'date'],
  data() {
    return {
      date: ''
    };
  },
  methods: {
    formatDate() {
      let formatted = current.date.toLocaleDateString();
      this.date = formatted;
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
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.image {
  width: 70%;
}

.explanation {
  width: 90%;
}
</style>