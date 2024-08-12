import apiService from "@/http/apiService";

const church = {
  namespaced: true,

  state: {
    churches: [],
  },

  mutations: {
    setChurch(state, data) {
      state.churches = data;
    },

    // resetState
    resetState(state) {
      state.churches = [];
    },
  },

  actions: {
    // addChurchReq
    async addChurchReq(data) {
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
  },

  getters: {
    getAllChurches(state) {
      return state.churches;
    },
  },
};

export default church;
