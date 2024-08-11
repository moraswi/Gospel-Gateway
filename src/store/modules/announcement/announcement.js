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
    async addAnnouncementReq({ commit }) {
      // startLoading
      //commit("app/startLoading", null, { root: true });
      try {
        const announcement = await apiService.addAnnouncement();

        return announcement;
      } catch (error) {
        console.log(error);
      } finally {
        // stopLoading
        //  commit("app/stopLoading", null, { root: true });
      }
    },
  },

  getters: {},
};

export default announcement;
