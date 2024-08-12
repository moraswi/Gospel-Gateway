import apiService from "@/http/apiService";

const user = {
  namespaced: true,

  state: {
    logIn: JSON.parse(localStorage.getItem("logIn")) || {},
  },

  mutations: {
    // setLogin
    setLogin(state, data) {
      state.logIn = data;
      localStorage.setItem("logIn", JSON.stringify(data));
    },

    // resetState
    resetState(state) {
      state.logIn = {};
    },
  },

  actions: {
    // logInReq
    async logInReq({ commit }, data) {
      try {
        const response = await apiService.logIn(data);
        // const token = response.data.token;
        // localStorage.setItem("token", token);
        commit("setLogin", response.data);
        return response;
      } catch (error) {
        console.log("setLogin", error);
      }
    },

    // registerUserReq
    async registerUserReq(data) {
      try {
        const response = await apiService.registerUser(data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getUserDetails(state) {
      return state.logIn;
    },
  },
};

export default user;
