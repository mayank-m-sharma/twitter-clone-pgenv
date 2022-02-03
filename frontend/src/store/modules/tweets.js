const state = {
  tweets: [
    {
      id: 1,
      name: "Kunal Shah",
      username: "@kunalshah1",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      tweetMedia:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      replyCount: 32,
      retweetCount: 54300,
      heartsCount: 18600,
      timestamp: "2h",
      tweetBody:
        "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
    },
    {
      id: 2,
      name: "Ravish Jha",
      username: "@rravish",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      tweetMedia:
        "https://media.istockphoto.com/photos/cute-kitten-licking-glass-table-with-copy-space-picture-id1293763250?b=1&k=20&m=1293763250&s=170667a&w=0&h=zcK63xxkMVX-ca0d5laTsDxauVUMH62F71MKcbqaGnI=",
      replyCount: 32,
      retweetCount: 54300,
      heartsCount: 18600,
      timestamp: "2h",
      tweetBody:
        "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
    },
    {
      id: 3,
      name: "Anita Mittal",
      username: "@mittalanita",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      tweetMedia:
        "https://c.tenor.com/3a_P4RHq2zUAAAAM/mera-expertise-bilkul-nahi-hai-shark-tank.gif",
      replyCount: 32,
      retweetCount: 54300,
      heartsCount: 18600,
      timestamp: "2h",
      tweetBody:
        "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
    },
    {
      id: 1,
      name: "Kunal Shah",
      username: "@kunalshah1",
      avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      tweetMedia:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      replyCount: 32,
      retweetCount: 54300,
      heartsCount: 18600,
      timestamp: "2h",
      tweetBody:
        "US to deploy troops to Eastern Europe as tensions continue between Russia and Ukraine",
    },
  ],
};

const getters = {
  allTweets: (state) => state.tweets,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
