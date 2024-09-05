import apiService from "@/http/apiService";

const churchPlan = {
  namespaced: true,

  state: {
    selectedChurchPlanId: null,
    getChurchPlanByBranchId: [],
    updateChurchPlan: {},

    churchPlanTitle: "",
    churchPlanDescription: "",
    churchPlanContact: "",
    churchPlanDate: "",
  },

  mutations: {
    // setSelectedChurchPlanId
    setSelectedChurchPlanId(state, id) {
      state.selectedChurchPlanId = id;
    },

    // setChurchPlan
    setChurchPlan(state, data) {
      state.getChurchPlanByBranchId = data;
    },

    // setUpdateChurchPlan
    setUpdateChurchPlan(state, data) {
      state.updateChurchPlan = data;
    },

    // setChurchPlanDescription
    setChurchPlanTitle(state, data) {
      state.churchPlanTitle = data;
    },

    // setChurchPlanDescription
    setChurchPlanDescription(state, data) {
      state.churchPlanDescription = data;
    },

    // setChurchPlanContact
    setChurchPlanContact(state, data) {
      state.churchPlanContact = data;
    },

    // setChurchPlanDate
    setChurchPlanDate(state, data) {
      state.churchPlanDate = data;
    },

    // resetState
    resetState(state) {
      state.getChurchPlanByBranchId = [];
      state.churchPlanTitle = "";
      state.churchPlanDescription = "";
      state.churchPlanContact = "";
      state.churchPlanDate = "";
    },
  },

  actions: {
    // addChurchPlanReq
    async addChurchPlanReq({}, data) {
      try {
        const response = await apiService.addChurchPlan(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getChurchPlanByBranchIdReq
    async getChurchPlanByBranchIdReq({ commit }, branchId) {
      try {
        const response = await apiService.getChurchPlanByBranchId(branchId);
        commit("setChurchPlan", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // updateChurchPlanReq
    async updateChurchPlanReq({ commit }, data) {
      try {
        const response = await apiService.updateChurchPlan(data);
        commit("setUpdateChurchPlan", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteChurchPlanReq
    async deleteChurchPlanReq({}, churchPlanId) {
      try {
        const response = await apiService.deleteChurchPlan(churchPlanId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getSelectedOfferingId
    getSelectedChurchPlanId(state) {
      return state.selectedChurchPlanId;
    },
    // getChurchPlanByBranchId
    getChurchPlanByBranchId(state) {
      return state.getChurchPlanByBranchId;
    },

    // getUpdateChurchPlan
    getUpdateChurchPlan(state) {
      return state.updateChurchPlan;
    },

    // getChurchPlanTitle
    getChurchPlanTitle(state) {
      return state.churchPlanTitle;
    },

    // getChurchPlanDescription
    getChurchPlanDescription(state) {
      return state.churchPlanDescription;
    },

    // getChurchPlanContact
    getChurchPlanContact(state) {
      return state.churchPlanContact;
    },

    // getChurchPlanDate
    getChurchPlanDate(state) {
      return state.churchPlanDate;
    },
  },
};

export default churchPlan;
