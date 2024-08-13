import apiService from "@/http/apiService";

const announcement = {
  namespaced: true,

  state: {
    getAnnouncements: [],
    updateAnnouncement: {},
  },

  mutations: {
    // setAnnouncements
    setAnnouncements(state, data) {
      state.getAnnouncements = data;
    },

    // setUpdateAnnouncement
    setUpdateAnnouncement(state, data) {
      state.updateAnnouncement = data;
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

    // updateAnnouncementReq
    async updateAnnouncementReq({ commit }, data) {
      try {
        const response = await apiService.updateAnnouncement(data);
        commit("setUpdateAnnouncement", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteAnnouncementReq
    async deleteAnnouncementReq({}, announcementId) {
      try {
        const response = await apiService.deleteAnnouncement(announcementId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getAnnouncementByChurchId
    getAnnouncementByChurchId(state) {
      return state.getAnnouncements;
    },

    // updateAnnouncement
    updateAnnouncement(state) {
      return state.updateAnnouncement;
    },
  },
};

export default announcement;
