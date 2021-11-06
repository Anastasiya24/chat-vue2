import { GET_MESSAGES_LIST, ADD_NEW_MESSAGE } from '../actions.type';
import { SET_MESSAGES_LIST, SET_NEW_MESSAGE } from '../mutations.type';
import { requestGetMessagesList, requestAddNewMessage } from './service';

const state = {
  list: '',
};

const getters = {
  messages(state) {
    return state.list;
  },
};

const actions = {
  [GET_MESSAGES_LIST]({ commit }) {
    requestGetMessagesList(commit);
  },
  [ADD_NEW_MESSAGE]({ commit }, payload) {
    requestAddNewMessage(commit, payload);
  },
};

const mutations = {
  [SET_MESSAGES_LIST](state, payload) {
    state.list = payload;
  },
  [SET_NEW_MESSAGE](state, payload) {
    const list = Array.from(state.list);
    list.push(payload);
    state.list = list;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
