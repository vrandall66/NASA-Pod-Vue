<template>
  <div>
    <div v-for="photo in photos" v-bind:key="photo.date">
      <PhotoCard v-bind:photo="photo" />
    </div>
  </div>
</template>

<script>
import PhotoCard from './PhotoCard.vue';
export default {
  name: 'MonthContainer',
  components: {
    PhotoCard
  },
  props: ['photos']
};
</script>

<style scoped></style>
