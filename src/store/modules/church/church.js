import apiService from "@/http/apiService";

const church = {
  namespaced: true,

  state: {
    churches: [],
    updateChurch: {},
  },

  mutations: {
    // setChurch
    setChurch(state, data) {
      state.churches = data;
    },

    // setUpdateChurch
    setUpdateChurch(state, data) {
      state.updateChurch = data;
    },

    // resetState
    resetState(state) {
      state.churches = [];
    },
  },

  actions: {
    // addChurchReq
    async addChurchReq({}, data) {
      try {
        const response = await apiService.addChurch(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getAllChurchesReq
    async getAllChurchesReq({ commit }) {
      try {
        const response = await apiService.getAllChurches();
        commit("setChurch", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // updateChurchReq
    async updateChurchReq({ commit }, data) {
      try {
        const response = await apiService.updateChurch(data);
        commit("setUpdateChurch", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteChurchReq
    async deleteChurchReq({}, churchId) {
      try {
        const response = await apiService.deleteChurch(churchId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getAllChurches
    getAllChurches(state) {
      return state.churches;
    },

    // updateChurch
    updateChurch(state) {
      return state.updateChurch;
    },
  },
};

export default church;
