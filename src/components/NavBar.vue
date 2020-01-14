<template>
  <div>
    <h1>Daily Dose of Science</h1>
    <router-link to="/">Today's Photo</router-link>
    <router-link to="/photos-of-the-month">This Month's Photos</router-link>
  </div>
</template>

<script>
export default {
  components: {
    name: 'NavBar'
  },
  data: function() {
    return {
      date: null
    };
  }
};
</script>

<style></style>
