const state = {
  user: {},
  lastname: "",
};

const getters = {
  user: (state) => state.user,
  lastname: (state) => state.lastname,
};

const actions = {
  setUser({ commit, payload }) {
    commit("setterUser", payload);
  },
};

const mutations = {
  setterUser: (state, user) => (state.user = user),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
