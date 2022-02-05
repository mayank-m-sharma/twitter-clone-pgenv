import axios from "axios";
import router from "../../router/index";
const state = {
  isLoggedIn: false,
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
};

const actions = {
  async loginUser({ commit }, { email, password }) {
    const response = await axios.post("http://localhost:8800/api/users/login", {
      email,
      password,
    });
    const loginStatus = response.data.authStatus.login;
    console.log(loginStatus, this.isLoggedIn);
    commit("setIsLoggedIn", true);
    router.push({ path: "/" });
  },
  logoutUser({ commit }) {
    commit("setIsLoggedIn", false);
  },
};

const mutations = {
  setIsLoggedIn: (state, status) => (state.isLoggedIn = status),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
