import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  count: 1,
};

const getters = {
  getCounter(val) {
    return val;
  },
};

const mutations = {
  increase(state, payload) {
    state.count += payload.count;
  },
};

const actions = {
  getList(context) {
    context.commit('increase', { count: 2 });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
