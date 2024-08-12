import apiService from "@/http/apiService";

const offering = {
  namespaced: true,

  state: {
    getOfferingByBranchId: [],
  },

  mutations: {
    // setOffering
    setOffering(state, data) {
      state.getOfferingByBranchId = data;
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
    // getOfferingByBranchId
    getOfferingByBranchId(state) {
      return state.getOfferingByBranchId;
    },
  },
};

export default offering;
