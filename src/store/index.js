import Vue from "vue";
import Vuex from "vuex";
import dashboard from "./modules/dashboard/dashboard.js";
import event from "./modules/event/event.js";
import church from "./modules/church/church.js";
import churchPlan from "./modules/churchPlan/churchPlan.js";
import offering from "./modules/offering/offering.js";
import user from "./modules/user/user.js";
import announcement from "./modules/announcement/announcement.js";
import header from "./modules/header/header.js";
import branch from "./modules/branch/branch.js";
import app from "./modules/app.js";
import serviceProgram from "./modules/serviceProgram/serviceProgram.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    dashboard,
    event,
    church,
    churchPlan,
    offering,
    user,
    announcement,
    header,
    branch,
    app,
    serviceProgram
  },

  plugins: [createPersistedState()],
});
