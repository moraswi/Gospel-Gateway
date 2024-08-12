import apiService from "@/http/apiService";

const event = {
  namespaced: true,

  state: {
    getEventByChurchId: [],
  },

  mutations: {
    setEvent(state, data) {
      state.getEventByChurchId = data;
    },
    // resetState
    resetState(state) {
      state.getEventByChurchId = [];
    },
  },

  actions: {
    // addEventReq
    async addEventReq({}, data) {
      try {
        const response = await apiService.addEvent(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getEventByChurchIdReq
    async getEventByChurchIdReq({ commit }, churchId) {
      try {
        const response = await apiService.getEventByChurchId(churchId);
        commit("setEvent", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteEventReq
    async deleteEventReq({}, eventId) {
      try {
        const response = await apiService.deleteEvent(eventId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getEventByChurchIdReq(state) {
      return state.getEventByChurchId;
    },
  },
};

export default event;
