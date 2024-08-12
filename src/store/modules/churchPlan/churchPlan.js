import apiService from "@/http/apiService";

const churchPlan = {
  namespaced: true,

  state: {
    getChurchPlanByBranchId: [],
  },

  mutations: {
    setChurchPlan(state, data) {
      state.getChurchPlanByBranchId = data;
    },

    // resetState
    resetState(state) {
      state.getChurchPlanByBranchId = [];
    },
  },

  actions: {
    // addChurchPlanReq
    async addChurchPlanReq(data) {
      try {
        const response = await apiService.addChurchPlan(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getChurchPlanByBranchIdReq
    async getChurchPlanByBranchIdReq({ commit }, branchId) {
      try {
        const response = await apiService.getChurchPlanByBranchId(branchId);
        commit("setChurchPlan", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getChurchPlanByBranchId
    getChurchPlanByBranchId(state) {
      return state.getChurchPlanByBranchId;
    },
  },
};

export default churchPlan;
