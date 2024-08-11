import apiService from "@/http/apiService";

const church = {
  namespaced: true,

  state: {},

  mutations: {
    // resetState
    resetState(state) {},
  },

  actions: {
    // addChurchReq
    async addChurchReq(data) {
      try {
        const response = await apiService.addChurch(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {},
};

export default church;
