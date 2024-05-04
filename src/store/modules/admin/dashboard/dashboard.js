const dashboard = {
  namespaced: true,

  state: {
    // showStatisticsDialog
    showStatisticsDialog: false,
    showStatisticsMobileDialog: false,
    dashboardStep: 1,
  },

  mutations: {

    setShowStatisticsDialog(state, payload) {
      state.showStatisticsDialog = payload;
    },

    setShowStatisticsMobileDialog(state, payload) {
      state.showStatisticsMobileDialog = payload;
    },

    setDashboardStep(state, payload){
      state.dashboardStep = payload
    },

    // resetState
    resetState(state) { 
      state.showStatisticsDialog = false;
      state.showStatisticsMobileDialog = false;
      state.dashboardStep = 1;

    },
  },

  actions: {},

  getters: {
    getShowStatisticsDialog(state) {
      return state.showStatisticsDialog;
    },

    getShowStatisticsMobileDialog(state) {
      return state.showStatisticsMobileDialog;
    },

    getDashboardStep(state){
      return state.dashboardStep;
    }
  },
};

export default dashboard;
