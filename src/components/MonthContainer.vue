<template>
  <div class="MonthContainer__div--container">
    <img
      v-if="loading === true"
      v-bind:src="require('../assets/Eclipse.gif')"
      class="image"
    />
    <div
      v-if="photos"
      v-for="photo in photos"
      v-bind:key="photo.date"
      class="div--image-container"
    >
      <PhotoCard
        v-bind:photo="photo"
        v-on:click.native="navigate(photo, photo.date)"
      />
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
  props: ['photos', 'loading'],
  methods: {
    navigate(photo, date) {
      this.$router.push({
        name: 'previous',
        params: { photo, date },
        props: photo,
        date
      });
    }
  }
};
</script>

<style scoped>
.MonthContainer__div--container {
  column-count: 4;
  column-gap: 2%;
  padding: 2%;
}
.div--image-container {
  display: inline-block;
  width: 100%;
}
</style>
