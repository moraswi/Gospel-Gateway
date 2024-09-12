import apiService from "@/http/apiService";

const header = {
  namespaced: true,

  state: {
    showMobileAdminSidebar: false,
  },

  mutations: {
    // setSelectedOfferingId
    setShowMobileAdminSidebar(state, data) {
      state.showMobileAdminSidebar = data;
    },

    // resetState
    resetState(state) {
      this.showMobileAdminSidebar = false;
    },
  },

  actions: {},

  getters: {
    // getShowMobileAdminSidebar
    getShowMobileAdminSidebar(state) {
      return state.showMobileAdminSidebar;
    },
  },
};

export default header;
