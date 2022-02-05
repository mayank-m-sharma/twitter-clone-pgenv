import axios from "axios";
import router from "../../router/index";
const state = {
  isLoggedIn: false,
  name: "",
  avatar: "",
  username: "",
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  name: (state) => state.name,
  avatar: (state) => state.avatar,
  username: (state) => state.username,
};

const actions = {
  async loginUser({ commit }, { email, password }) {
    const response = await axios.post("http://localhost:8800/api/users/login", {
      email,
      password,
    });
    const loginStatus = response.data.authStatus.login;
    if (loginStatus === "success") {
      commit("setName", response.data.name);
      commit("setUsername", response.data.username);
      commit("setAvatar", response.data.avatar);
      commit("setIsLoggedIn", true);
      router.push({ path: "/" });
    }
  },
  logoutUser({ commit }) {
    commit("setIsLoggedIn", false);
  },
  async registerUser({ commit }, { name, username, avatar, email, password }) {
    const response = await axios.post(
      "http://localhost:8800/api/users/register",
      {
        name,
        email,
        username,
        password,
        avatar,
      }
    );
    const loginStatus = response.data.authStatus.login;
    const newUser = response.data;
    console.log(response.data);
    if (loginStatus === "success") {
      commit("setName", newUser.name);
      commit("setUsername", newUser.username);
      commit("setAvatar", newUser.avatar);
      commit("setIsLoggedIn", true);
      router.push({ path: "/" });
    }
  },
};

const mutations = {
  setIsLoggedIn: (state, status) => (state.isLoggedIn = status),
  setName: (state, name) => (state.name = name),
  setUsername: (state, username) => (state.username = username),
  setAvatar: (state, avatar) => (state.avatar = avatar),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
