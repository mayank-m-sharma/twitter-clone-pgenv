import Vuex from "vuex";
import Vue from "vue";
import tweets from "./modules/tweets";

// Load Vuex -
Vue.use(Vuex);

// Create Store -
export default new Vuex.Store({
  modules: {
    tweets,
  },
});
