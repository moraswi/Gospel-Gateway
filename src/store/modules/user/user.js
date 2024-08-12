import apiService from "@/http/apiService";

const user = {
  namespaced: true,

  state: {
    logIn: JSON.parse(localStorage.getItem("logIn")) || {},
    getAllUsers: [],
  },

  mutations: {
    // setLogin
    setLogin(state, data) {
      state.logIn = data;
      localStorage.setItem("logIn", JSON.stringify(data));
    },

    setAllUsers(state, data) {
      state.getAllUsers = data;
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

    // getAllUsersReq
    async getAllUsersReq({ commit }) {
      try {
        const response = await apiService.getAllUsers();
        commit("setAllUsers", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    // deleteUserReq
    async deleteUserReq({}, userId) {
      try {
        const response = await apiService.deleteUser(userId);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    // getUserDetails
    getUserDetails(state) {
      return state.logIn;
    },

    // getAllUsers
    getAllUsersReq(state) {
      return state.getAllUsers;
    },
  },
};

export default user;
