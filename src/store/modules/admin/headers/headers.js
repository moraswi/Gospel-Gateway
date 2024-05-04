const headers = {
  namespaced: true,

  state: {
    // showMobileAdminSidebar
    showMobileAdminSidebar: false,
  },

  mutations: {

    setShowMobileAdminSidebar(state, payload) {
      state.showMobileAdminSidebar = payload;
    },

    // resetState
    resetState(state) { 
      state.showMobileAdminSidebar = false;
    },
  },

  actions: {},

  getters: {
    getShowMobileAdminSidebar(state) {
      return state.showMobileAdminSidebar;
    },
  },
};

export default headers;
