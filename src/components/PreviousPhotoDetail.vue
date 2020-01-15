<template>
  <div class="PreviousPhotoDetail" v-bind:photo="{ date }">
    <img :src="photo.url" class="image" />
    <div>
      <h2>{{ photo.title }}</h2>
      <h4>{{ photo.date }}</h4>
      <p class="explanation">{{ photo.explanation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousPhotoDetail',
  props: ['photo', 'date']
};
</script>

<style scoped>
.PreviousPhotoDetail {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1%;
  padding: 1% 2%;
  width: 100%;
}

.image {
  max-height: 50%;
  max-width: 50%;
  padding-right: 2%;
}

.explanation {
  padding: 2% 1%;
  width: 100%;
}
</style>
