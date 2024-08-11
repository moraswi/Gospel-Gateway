import apiService from "@/http/apiService";

const event = {
  namespaced: true,

  state: {},

  mutations: {
    // resetState
    resetState(state) {},
  },

  actions: {
    // addEventReq
    async addEventReq(data) {
      try {
        const response = await apiService.addEvent(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {},
};

export default event;
