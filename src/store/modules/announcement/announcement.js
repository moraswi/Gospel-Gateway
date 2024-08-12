import apiService from "@/http/apiService";

const announcement = {
  namespaced: true,

  state: {
    getAnnouncements: [],
  },

  mutations: {
    setAnnouncements(state, data) {
      state.getAnnouncements = data;
    },
    // resetState
    resetState(state) {
      state.getAnnouncements = [];
    },
  },

  actions: {
    // addAnnouncementReq
    async addAnnouncementReq({}, data) {
      try {
        const response = await apiService.addAnnouncement(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getAnnouncementByChurchIdReq
    async getAnnouncementByChurchIdReq({ commit }, churchId) {
      try {
        const response = await apiService.getAnnouncementByChurchId(churchId);
        commit("setAnnouncements", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getAnnouncementByChurchIdReq(state) {
      return state.getAnnouncements;
    },
  },
};

export default announcement;
