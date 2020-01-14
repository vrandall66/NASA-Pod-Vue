<template>
  <div>
    <img :src="current.url" />
    <h2>{{ current.title }}</h2>
    <h4>{{ this.date }}</h4>
    <p>{{ current.explanation }}</p>
  </div>
</template>

<script>
import 'es6-promise/auto';

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
      let formatted = current.date.toLocaleDateString();
      this.date = formatted;
    }
  },
  mounted() {
    this.formatDate();
  }
};
</script>

<style scoped></style>
