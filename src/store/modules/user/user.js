import apiService from "@/http/apiService";

const user = {
  namespaced: true,

  state: {
    logIn: JSON.parse(localStorage.getItem("logIn")) || {},
    getAllUsers: [],
    updateUser: {},
  },

  mutations: {
    // setLogin
    setLogin(state, data) {
      state.logIn = data;
      localStorage.setItem("logIn", JSON.stringify(data));
    },

    // setAllUsers
    setAllUsers(state, data) {
      state.getAllUsers = data;
    },

    // setUpdateUser
    setUpdateUser(state, data) {
      state.updateUser = data;
    },

    // resetState
    resetState(state) {
      state.logIn = {};
      state.getAllUsers = [];
      state.updateUser = {};
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

    // updateUserReq
    async updateUserReq({ commit }, data) {
      try {
        const response = await apiService.updateUser(data);
        commit("setUpdateUser", response.data);
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

    // getUpdateUserReq
    getUpdateUserReq(state) {
      return state.updateUser;
    },
  },
};

export default user;
