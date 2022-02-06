import axios from "axios";
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
    // console.log(data);
    commit("setTweets", data);
  },
  async createTweet(
    { dispatch },
    {
      user_id,
      body,
      tweet_media,
      created_at,
      updated_at,
      reply_count,
      retweet_count,
      hearts_count,
    }
  ) {
    const response = await axios.post("http://localhost:8800/api/tweets", {
      user_id,
      body,
      tweet_media,
      created_at,
      updated_at,
      reply_count,
      retweet_count,
      hearts_count,
    });
    if (response.data.msg === "tweetcreated") {
      dispatch("fetchTweets");
    }
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
