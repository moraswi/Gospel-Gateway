const administration = {
  namespaced: true,

  state: {
    showPeopleDialog: false,
    showPeopleMobileDialog: false,
  },

  mutations: {

    setShowPeopleDialog(state, payload) {
      state.showPeopleDialog = payload;
    },

    setShowPeopleMobileDialog(state, payload) {
      state.showPeopleMobileDialog = payload;
    },

    // resetState
    resetState(state) { 
      state.showPeopleDialog = false;
      state.showPeopleMobileDialog = false;
    },
  },

  actions: {},

  getters: {
    // dialog
    getShowPeopleDialog(state) {
      return state.showPeopleDialog;
    },

    getShowPeopleMobileDialog(state) {
      return state.showPeopleMobileDialog;
    },
  },
};

export default administration;
