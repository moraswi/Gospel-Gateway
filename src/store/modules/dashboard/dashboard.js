import apiService from "@/http/apiService";

const dashboard = {
  namespaced: true,

  state: {
    // showStatisticsDialog add
    showStatisticsDialog: false,

    // showStatisticsDialog add
    showStatisticsEditDialog: false,

    // showStatisticsDialog add
    showStatisticsDeleteDialog: false,

    // dashboardStep
    dashboardStep: 1,

    // statistics
    statistics:{},
  },

  mutations: {

    // setShowStatisticsDialog
    setShowStatisticsDialog(state, payload) {
      state.showStatisticsDialog = payload;
    },

    // setShowStatisticsEditDialog
    setShowStatisticsEditDialog(state, payload) {
      state.showStatisticsEditDialog = payload;
    },

    // setShowStatisticsDeleteDialog
    setShowStatisticsDeleteDialog(state, payload) {
      state.showStatisticsDeleteDialog = payload;
    },
    
    // setDashboardStep
    setDashboardStep(state, payload){
      state.dashboardStep = payload;
    },

    // setStatistics
    setStatistics(state, payload){
      state.statistics = payload;
    },

    // resetState
    resetState(state) { 
      state.showStatisticsDialog = false;
      state.showStatisticsEditDialog = false;
      state.showStatisticsDeleteDialog = false;
      state.dashboardStep = 1;
      state.statistics = {};
    },
  },

  actions: {
        // getStatisticsReq
        async getStatisticsReq({ commit }, {branchId, churchId}) {
          try {
 
            const response = await apiService.getStatistics(branchId, churchId);
            console.log(response)
            console.log(response.data)
          
            commit("setStatistics", response.data);
            return response;
          } catch (error) {
            console.log(error);
          }
        },
  },

  getters: {

    // getShowStatisticsDialog
    getShowStatisticsDialog(state) {
      return state.showStatisticsDialog;
    },

    // getShowStatisticsEditDialog
    getShowStatisticsEditDialog(state) {
      return state.showStatisticsEditDialog;
    },

    // getShowStatisticsDeleteDialog
    getShowStatisticsDeleteDialog(state) {
      return state.showStatisticsDeleteDialog;
    },

    // getDashboardStep
    getDashboardStep(state){
      return state.dashboardStep;
    },

    // getStatistics
    getStatistics(state){
      return state.statistics;
    }
  },
};

export default dashboard;
