import apiService from "@/http/apiService";

const branch = {
  namespaced: true,

  state: {
    branchByBranchId: [],
    branchByChurchId: [],
    updateBranch: {},
  },

  mutations: {
    // setBranchByBranchId
    setBranchByBranchId(state, data) {
      state.branchByBranchId = data;
    },

    // setBranchByChurchId
    setBranchByChurchId(state, data) {
      state.branchByChurchId = data;
    },

    // setUpdateBranch
    setUpdateBranch(state, data) {
      state.updateBranch = data;
    },

    // resetState
    resetState(state) {
      state.branchByBranchId = [];
      state.branchByChurchId = [];
    },
  },

  actions: {
    // addBranchReq
    async addBranchReq({}, data) {
      try {
        const response = await apiService.addBranch(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getBranchByBranchReq
    async getBranchByBranchReq({ commit }, branchId) {
      try {
        const response = await apiService.getBranchByBranchId(branchId);
        commit("setBranchByBranchId", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getBranchByChurchIdReq
    async getBranchByChurchIdReq({ commit }, churchId) {
      try {
        const response = await apiService.getBranchByChurchId(churchId);
        commit("setBranchByChurchId", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // updateBranchReq
    async updateBranchReq({ commit }, data) {
      try {
        const response = await apiService.updateBranch(data);
        commit("setUpdateBranch", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteBranchReq
    async deleteBranchReq({}, branchId) {
      try {
        const response = await apiService.deleteBranch(branchId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getBranchByBranch
    getBranchByBranch(state) {
      return state.branchByBranchId;
    },

    // getBranchByChurchId
    getBranchByChurchId(state) {
      return state.branchByChurchId;
    },

    // getUpdateBranch
    getUpdateBranch(state) {
      return state.updateBranch;
    },
  },
};

export default branch;
