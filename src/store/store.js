import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current: {},
    monthPhotos: []
  },
  mutations: {
    setCurrent(state, newCurrent) {
      state.current = newCurrent;
    }
  },
  getters: {
    current: state => state.current
  }
});
