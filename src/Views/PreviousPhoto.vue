<template>
  <div>
    <h2>Photo from {{ date }}</h2>
    <PreviousPhotoDetail v-bind:photo="photo" />
  </div>
</template>

<script>
import PreviousPhotoDetail from '../components/PreviousPhotoDetail.vue';

export default {
  name: 'PreviousPhoto',
  components: {
    PreviousPhotoDetail
  },
  props: ['photo', 'date']
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
