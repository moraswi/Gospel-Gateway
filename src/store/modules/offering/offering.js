import apiService from "@/http/apiService";

const offering = {
  namespaced: true,

  state: {
    selectedOfferingId: null,
    getOfferingByBranchId: [],
    updateOffering: {},
  },

  mutations: {
    // setSelectedOfferingId
    setSelectedOfferingId(state, id) {
      state.selectedOfferingId = id;
    },

    // setOffering
    setOffering(state, data) {
      state.getOfferingByBranchId = data;
    },

    // setUpdateOffering
    setUpdateOffering(state, data) {
      state.updateOffering = data;
    },

    // resetState
    resetState(state) {
      state.getOfferingByBranchId = [];
    },
  },

  actions: {
    // addOfferingReq
    async addOfferingReq({}, data) {
      try {
        const response = await apiService.addOffering(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getOfferingByBranchIdReq
    async getOfferingByBranchIdReq({ commit }, branchId) {
      try {
        const response = await apiService.getOfferingByBranchId(branchId);
        commit("setOffering", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // updateOfferingReq
    async updateOfferingReq({ commit }, data) {
      try {
        const response = await apiService.updateOffering(data);
        commit("setUpdateOffering", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteOfferingReq
    async deleteOfferingReq({}, offeringId) {
      try {
        const response = await apiService.deleteOffering(offeringId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getSelectedOfferingId
    getSelectedOfferingId(state) {
      return state.selectedOfferingId;
    },
    // getOfferingByBranchId
    getOfferingByBranchId(state) {
      return state.getOfferingByBranchId;
    },

    // getUpdateOffering
    getUpdateOffering(state) {
      return state.updateOffering;
    },
  },
};

export default offering;
