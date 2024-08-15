import apiService from "@/http/apiService";

const event = {
  namespaced: true,

  state: {
    getEventByChurchId: [],
    updateEvent: {},
  },

  mutations: {
    // setEvent
    setEvent(state, data) {
      state.getEventByChurchId = data;
    },

    // setUpdateEvent
    setUpdateEvent(state, data) {
      state.updateEvent = data;
    },

    // resetState
    resetState(state) {
      state.getEventByChurchId = [];
      state.updateEvent = {};
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

    // updateEventReq
    async updateEventReq({ commit }, data) {
      try {
        const response = await apiService.updateEvent(data);
        commit("setUpdateEvent", response.data);
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
    // getEventByChurchId
    getEventByChurchId(state) {
      return state.getEventByChurchId;
    },

    // getUpdateEvent
    getUpdateEvent(state) {
      return state.updateEvent;
    },
  },
};

export default event;
