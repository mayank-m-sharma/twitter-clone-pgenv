import Vuex from "vuex";
import Vue from "vue";
import tweets from "./modules/tweets";
import users from "./modules/user";
import createPersistedState from "vuex-persistedstate";
// Load Vuex -
Vue.use(Vuex);

// Create Store -
export default new Vuex.Store({
  modules: {
    tweets,
    users,
  },
  plugins: [createPersistedState()],
});
