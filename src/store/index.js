import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from "./modules/admin/dashboard/dashboard.js";
import headers from "./modules/admin/headers/headers.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    dashboard,
    headers,
  }
})
