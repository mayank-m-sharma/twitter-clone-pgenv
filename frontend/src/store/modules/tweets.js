const state = {
  tweets: [],
};

const getters = {
  allTweets: (state) => state.tweets,
};

const actions = {
  async fetchTweets({ commit }) {
    const response = await fetch("http://localhost:8800/api/tweets");
    const data = await response.json();
    console.log(data);
    commit("setTweets", data);
  },
};

const mutations = {
  setTweets: (state, tweets) => (state.tweets = tweets),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
