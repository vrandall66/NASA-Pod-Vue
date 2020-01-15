import Vue from 'vue';
import Router from 'vue-router';
import Home from './src/Views/Home.vue';
import PhotosOfTheMonth from './src/Views/PhotosOfTheMonth.vue';
import PreviousPhoto from './src/Views/PreviousPhoto.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photos-of-the-month',
      name: 'month',
      component: PhotosOfTheMonth
    },
    {
      path: '/photo/:date',
      name: 'previous',
      component: PreviousPhoto,
      props: true
    }
  ]
});
