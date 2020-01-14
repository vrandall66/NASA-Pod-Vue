<template>
  <div>
    <img :src="photo.url" class="image" />
    <h3>{{ photo.date }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo']
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
