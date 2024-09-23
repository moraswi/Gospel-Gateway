import apiService from "@/http/apiService";

const serviceProgram = {
  namespaced: true,

  state: {
    getServcieProgram: [],
  },

  mutations: {
    // setServcieProgram
    setServcieProgram(state, data) {
      state.getServcieProgram = data;
    },

    // resetState
    resetState(state) {
      state.getServcieProgram = [];
    },
  },

  actions: {
    // AddServcieProgramReq
    async addServcieProgramReq({}, data) {
      try {
        const response = await apiService.addServiceProgram(data)
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // getServiceProgramByBranchIdReq
    async getServiceProgramByBranchIdReq({commit}, branchId){
        try {
            const response = await apiService.getServiceProgramByBranchId(branchId);
            commit("setServcieProgram", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

  },

  getters: {
    // getServiceProgramByBranchIdReq
    getServiceProgramByBranchIdReq(state) {
      return state.getServcieProgram;
    },

  },
};

export default serviceProgram;
