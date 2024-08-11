import apiService from "@/http/apiService";

const churchPlan = {
  namespaced: true,

  state: {},

  mutations: {
    // resetState
    resetState(state) {},
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
  },

  getters: {},
};

export default churchPlan;
