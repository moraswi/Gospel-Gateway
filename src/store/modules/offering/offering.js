import apiService from "@/http/apiService";

const offering = {
  namespaced: true,

  state: {},

  mutations: {
    // resetState
    resetState(state) {},
  },

  actions: {
    // addOfferingReq
    async addOfferingReq(data) {
      try {
        const response = await apiService.addOffering(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {},
};

export default offering;
