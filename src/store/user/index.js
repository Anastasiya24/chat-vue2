import { GET_USER_NAME, EDIT_USER_NAME } from '../actions.type';
import { SET_USER_NAME, EDIT_USER } from '../mutations.type';
import { requestGetUserName, requestEditUser } from './service';

const state = {
  name: '',
};

const getters = {
  name(state) {
    return state.name;
  },
};

const actions = {
  [GET_USER_NAME]({ commit }) {
    requestGetUserName(commit);
  },
  [EDIT_USER_NAME]({ commit }, payload) {
    requestEditUser(commit, payload);
  },
};

const mutations = {
  [SET_USER_NAME](state, payload) {
    state.name = payload;
  },
  [EDIT_USER](state, payload) {
    state.name = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
