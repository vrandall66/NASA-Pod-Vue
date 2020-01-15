<template>
  <div class="NavBar__div--container">
    <h1 class="NavBar__h1--title">Daily Dose of Science</h1>
    <div class="NavBar__div--link-container">
      <router-link to="/"
        ><button class="NavBar__button--navLink">
          Today's Photo
        </button></router-link
      >
      <router-link to="/photos-of-the-month"
        ><button class="NavBar__button--navLink">
          This Month's Photos
        </button></router-link
      >
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
* {
  box-sizing: border-box;
}

.NavBar__div--container {
  display: flex;
  justify-content: space-between;
}

.NavBar__h1--title {
  font-size: 400%;
  padding: 1% 0% 1% 1%;
}

.NavBar__div--link-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1% 6% 1% 1%;
  width: 30%;
}

.NavBar__button--navLink {
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.356);
  font-size: 100%;
  height: 60%;
  margin: 4%;
  padding: 2%;
  width: 125%;
}

.NavBar__button--navLink:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.25s;
}
</style>
