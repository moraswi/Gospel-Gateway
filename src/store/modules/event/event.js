import apiService from "@/http/apiService";

const event = {
  namespaced: true,

  state: {
    getEventByChurchId: [],
    updateEvent: {},

    eventStartDate: "",
    eventEndDate: "",
    eventChurchId: null,
    eventEventName: "",
    eventRecurrence: "",
    eventBranchName: "",
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

    // setEventStartDate
    setEventStartDate(state, data) {
      state.eventStartDate = data;
    },

    // setEventEndDate
    setEventEndDate(state, data) {
      state.eventEndDate = data;
    },

    // setEventChurchId
    setEventChurchId(state, data) {
      state.eventChurchId = data;
    },

    // setEventEventName
    setEventEventName(state, data) {
      state.eventEventName = data;
    },

    // setEventRecurrence
    setEventRecurrence(state, data) {
      state.eventRecurrence = data;
    },

    // setEventBranchNamet
    setEventBranchNamet(state, data) {
      state.eventBranchName = data;
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

    // getEventStartDate
    getEventStartDate(state) {
      return state.eventStartDate;
    },

    // getEventEndDate
    getEventEndDate(state) {
      return state.eventEndDate;
    },

    // getEventChurchId
    getEventChurchId(state) {
      return state.eventChurchId;
    },

    // getEventEventName
    getEventEventName(state) {
      return state.eventEventName;
    },

    // getEventRecurrence
    getEventRecurrence(state) {
      return state.eventRecurrence;
    },

    // getEventBranchNamet
    getEventBranchNamet(state) {
      return state.eventBranchName;
    },
  },
};

export default event;
