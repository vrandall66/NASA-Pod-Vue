<template>
  <div>
    <h2>Photo from</h2>
    <PhotoDetail />
  </div>
</template>

<script>
import PhotoDetail from '../components/PhotoDetail.vue';

export default {
  name: 'PreviousPhoto',
  components: {
    PhotoDetail
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
