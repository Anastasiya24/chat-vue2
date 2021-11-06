import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import messages from './messages';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    messages,
  },
});

export default store;
