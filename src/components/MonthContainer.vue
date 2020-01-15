<template>
  <div>
    <div v-if="loading === true">
      <img v-bind:src="require('../assets/Eclipse.gif')" class="image" />
    </div>
    <div class="MonthContainer__div--container" v-if="photos">
      <div
        v-for="photo in photos"
        v-bind:key="photo.date"
        class="div--image-container"
      >
        <PhotoCard
          v-bind:photo="photo"
          v-on:click.native="navigate(photo, photo.date)"
          class="PhotoCard"
        />
      </div>
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
  overflow: scroll;
  padding: 2%;
}
.div--image-container {
  display: inline-block;
  margin-bottom: 9%;
  width: 100%;
}

.image {
  align-self: center;
}

.PhotoCard {
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
}

.PhotoCard:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0.85;
  transition: 0.25s;
}
</style>
