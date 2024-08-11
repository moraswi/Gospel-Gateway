import apiService from "@/http/apiService";

const announcement = {
  namespaced: true,

  state: {},

  mutations: {
    // resetState
    resetState(state) {},
  },

  actions: {
    // addAnnouncementReq
    async addAnnouncementReq(data) {
      try {
        const response = await apiService.addAnnouncement(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {},
};

export default announcement;
