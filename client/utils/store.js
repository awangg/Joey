import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, jwt) {
      state.token = jwt
    },
    removeToken (state) {
      state.token = ''
    }
  }
})

export default store;