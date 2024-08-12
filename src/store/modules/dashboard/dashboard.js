const dashboard = {
  namespaced: true,

  state: {
    // showStatisticsDialog add
    showStatisticsDialog: false,

    // showStatisticsDialog add
    showStatisticsEditDialog: false,

    // showStatisticsDialog add
    showStatisticsDeleteDialog: false,

    dashboardStep: 1,
  },

  mutations: {

    setShowStatisticsDialog(state, payload) {
      state.showStatisticsDialog = payload;
    },

    setShowStatisticsEditDialog(state, payload) {
      state.showStatisticsEditDialog = payload;
    },

    setShowStatisticsDeleteDialog(state, payload) {
      state.showStatisticsDeleteDialog = payload;
    },
    
    setDashboardStep(state, payload){
      state.dashboardStep = payload
    },

    // resetState
    resetState(state) { 
      state.showStatisticsDialog = false;
      state.showStatisticsEditDialog = false;
      state.showStatisticsDeleteDialog = false;
      state.dashboardStep = 1;
    },
  },

  actions: {},

  getters: {
    getShowStatisticsDialog(state) {
      return state.showStatisticsDialog;
    },

    getShowStatisticsEditDialog(state) {
      return state.showStatisticsEditDialog;
    },

    getShowStatisticsDeleteDialog(state) {
      return state.showStatisticsDeleteDialog;
    },

    getDashboardStep(state){
      return state.dashboardStep;
    }
  },
};

export default dashboard;
