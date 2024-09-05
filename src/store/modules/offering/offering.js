import apiService from "@/http/apiService";

const offering = {
  namespaced: true,

  state: {
    selectedOfferingId: null,
    getOfferingByBranchId: [],
    updateOffering: {},

    amount: null,
    date: "",
    description: "",
    transactionType: "",
    branchId: null,
    createdat: "",
    updatedat: "",
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

    // setAmount
    setAmount(state, data) {
      state.amount = data;
    },

    // setDate
    setDate(state, data) {
      state.date = data;
    },

    // setDescription
    setDescription(state, data) {
      state.description = data;
    },

    // setTransactionType
    setTransactionType(state, data) {
      state.transactionType = data;
    },

    // setBranchId
    setBranchId(state, data) {
      state.branchId = data;
    },

    // setCreatedat
    setCreatedat(state, data) {
      state.createdat = data;
    },

    // setUpdatedat
    setUpdatedat(state, data) {
      state.updatedat = data;
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

    // getAmount
    getAmount(state) {
      return state.amount;
    },

    // getDate
    getDate(state) {
      return state.date;
    },

    // getDescription
    getDescription(state) {
      return state.description;
    },

    // getTransactionType
    getTransactionType(state) {
      return state.transactionType;
    },

    // getBranchId
    getBranchId(state) {
      return state.branchId;
    },

    // getCreatedat
    getCreatedat(state) {
      return state.createdat;
    },

    // getUpdatedat
    getUpdatedat(state) {
      return state.updatedat;
    },
  },
};

export default offering;
