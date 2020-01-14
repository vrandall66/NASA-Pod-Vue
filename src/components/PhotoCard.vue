<template>
  <div>
    <img :src="photo.url" />
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo']
};
</script>

<style scoped></style>
