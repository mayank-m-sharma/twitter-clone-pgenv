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
      uploads,
    }
  ) {
    const formData = new FormData();
    formData.append("media", uploads);
    formData.append("body", body);
    formData.append("user_id", user_id);
    formData.append("tweet_media", tweet_media);
    formData.append("created_at", created_at);
    formData.append("updated_at", updated_at);
    formData.append("reply_count", reply_count);
    formData.append("retweet_count", retweet_count);
    formData.append("hearts_count", hearts_count);

    const response = await axios({
      method: "post",
      url: "http://localhost:8800/api/tweets",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
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
