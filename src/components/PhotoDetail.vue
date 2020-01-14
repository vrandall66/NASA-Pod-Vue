<template>
  <div>
    <img :src="current.url" />
  </div>
</template>

<script>
import 'es6-promise/auto';

export default {
  name: 'PhotoDetail',
  props: ['current']
};
</script>

<style scoped></style>
