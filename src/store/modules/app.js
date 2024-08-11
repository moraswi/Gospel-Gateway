const app = {
  namespaced: true,

  state: {
    // loading
    loading: false,
  },

  mutations: {
    // setLoading
    setLoading(state, payload) {
      state.loading = payload;
    },

    // startLoading
    startLoading(state) {
      state.loading = true;
    },

    // stopLoading
    stopLoading(state) {
      // loading
      state.loading = false;
    },

    // resetState
    resetState(state) {
      // loading
      state.loading = false;
    },
  },

  actions: {
    // startLoading
    startLoading({ commit }) {
      commit("setLoading", true);
    },

    // stopLoading
    stopLoading({ commit }) {
      commit("setLoading", false);
    },
  },

  getters: {},
};

export default app;
