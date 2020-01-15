<template>
  <div class="NavBar__div--container">
    <h1 class="NavBar__h1--title">Daily Dose of Science</h1>
    <div class="NavBar__div--link-container">
      <router-link to="/">Today's Photo</router-link>
      <router-link to="/photos-of-the-month">This Month's Photos</router-link>
    </div>
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

<style scoped>
.NavBar__div--container {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}

.NavBar__h1--title {
  padding: 1% 0% 1% 1%;
}

.NavBar__div--link-container {
  
}
</style>
