import axios from "axios";
import router from "../../router/index";
const state = {
  isLoggedIn: false,
  name: "",
  avatar: "",
  username: "",
  user_id: "",
};

const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  name: (state) => state.name,
  avatar: (state) => state.avatar,
  username: (state) => state.username,
  user_id: (state) => state.user_id,
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
      commit("setUserId", response.data.id);
      router.push({ path: "/" });
    }
  },
  logoutUser({ commit }) {
    commit("setIsLoggedIn", false);
  },
  async registerUser({ commit }, { name, username, avatar, email, password }) {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    const response = await axios({
      method: "post",
      url: "http://localhost:8800/api/users/register",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    const loginStatus = response.data.authStatus.login;
    const newUser = response.data;
    console.log(response.data);
    if (loginStatus === "success") {
      commit("setName", newUser.name);
      commit("setUsername", newUser.username);
      commit("setAvatar", newUser.avatar);
      commit("setIsLoggedIn", true);
      commit("setUserId", newUser.id);
      router.push({ path: "/" });
    }
  },
};

const mutations = {
  setIsLoggedIn: (state, status) => (state.isLoggedIn = status),
  setName: (state, name) => (state.name = name),
  setUsername: (state, username) => (state.username = username),
  setAvatar: (state, avatar) => (state.avatar = avatar),
  setUserId: (state, user_id) => (state.user_id = user_id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
