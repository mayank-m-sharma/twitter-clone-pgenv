<template>
  <!-- Right section | Search Twitter | What's Happening -->
  <div
    class="hidden lg:block w-1/3 border-l border-lighter h-full py-2 px-6 overflow-y-scroll relative"
  >
    <div class="mb-5">
      <input
        type="text"
        placeholder="    Search Twitter"
        class="pl-12 rounded-full w-full p-3 bg-lighter text-sm"
        v-bind:class="{ bgWhite: bgWhite }"
        @focus="bgWhite = true"
        @blur="bgWhite = false"
      />
      <!-- <i
        class="fa-thin fa-magnifying-glass absolute left-0 top-4 ml-12 text-sm text-light"
      ></i> -->
      <img
        class="h-5 w-5 absolute left-0 top-0 mt-5 ml-12"
        src="../assets/search.png"
        alt=""
        v-bind:class="{ hiddenSearchBlack: bgWhite }"
      />
      <img
        class="h-5 w-5 absolute left-0 top-0 mt-5 ml-12"
        src="../assets/searchBlue.png"
        alt=""
        v-bind:class="{ hiddenSearchBlue: !bgWhite }"
      />
    </div>
    <!-- What's Happening Block -->
    <div class="w-full mt-2 mb-5 rounded-lg bg-lightest">
      <p class="p-3 text-lg font-bold">What's happening</p>
      <div
        v-bind:key="happening.id"
        v-for="happening in happenings"
        class="flex flex-row mr-5 mb-5 items-center cursor-pointer hover:bg-lighter transform transition duration-200 ease-out"
      >
        <div class="pl-4 pr-4 flex flex-col">
          <p class="text-sm text-grey">{{ happening.category }}</p>
          <p class="text-sm font-bold">
            {{ happening.title }}
          </p>
          <p>
            <span class="text-xs text-grey">Trending with: </span>
            <span class="text-xs text-blue"
              >#nirmalasitharaman, #budget2022</span
            >
          </p>
        </div>
        <img class="rounded-lg h-16 w-16" v-bind:src="happening.image" />
      </div>
      <span class="text-md ml-4 pb-5 cursor-pointer text-blue">Show more</span>
    </div>
    <!-- Who to follow block -->
    <div class="pl-4 pr-4 h-auto w-full rounded-lg bg-lightest">
      <p class="p-3 text-lg font-bold">Who to follow</p>
      <div
        v-bind:key="follower.key"
        v-for="follower in followRecomendation"
        class="flex flex-row items-center mb-5 justify-between transform transition duration-200 ease-out cursor-pointer hover:bg-lighter rounded-full h-auto"
      >
        <div class="flex flex-row">
          <img
            class="h-12 w-12 mr-5 rounded-full"
            v-bind:src="follower.avatar"
            alt="image"
          />
          <div class="flex flex-col items-center">
            <p class="font-bold">{{ follower.name }}</p>
            <p class="text-grey font-light">{{ follower.username }}</p>
          </div>
        </div>
        <button
          class="rounded-full text-sm bg-black font-bold text-white p-2 w-20 h-auto"
        >
          Follow
        </button>
      </div>
      <span class="text-md ml-4 pb-5 cursor-pointer text-blue">Show more</span>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSection",
  data() {
    return {
      bgWhite: false,
      happenings: [
        {
          id: 1,
          category: "IPL 2022 LIVE",
          title: "IPL 2022: Full auction list of 590 players announced",
          trendingWith: ["Bairstow", "IPL Auction"],
          image:
            "https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=240x240",
        },
        {
          id: 2,
          category: "IPL 2022 LIVE",
          title: "IPL 2022: Full auction list of 590 players announced",
          trendingWith: ["Bairstow", "IPL Auction"],
          image:
            "https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=240x240",
        },
        {
          id: 3,
          category: "Politics LIVE",
          title: "#BudgetBytes",
          trendingWith: ["NirmalaSitharaman", "unicorn"],
          image:
            "https://pbs.twimg.com/semantic_core_img/1487929260807319553/XKmFDRXI?format=jpg&name=240x240",
        },
        {
          id: 4,
          category: "IPL 2022 LIVE",
          title: "IPL 2022: Full auction list of 590 players announced",
          trendingWith: ["Bairstow", "IPL Auction"],
          image:
            "https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=240x240",
        },
        {
          id: 5,
          category: "IPL 2022 LIVE",
          title: "IPL 2022: Full auction list of 590 players announced",
          trendingWith: ["Bairstow", "IPL Auction"],
          image:
            "https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=240x240",
        },
      ],
      followRecomendation: [
        {
          id: 1,
          name: "1inch Network",
          username: "@1inch",
          avatar:
            "https://pbs.twimg.com/profile_images/1481298453661691904/FdP7AvEl_400x400.jpg",
          following: false,
        },
        {
          id: 2,
          name: "Kunal Shah",
          username: "@kunalshah1",
          avatar:
            "https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=240x240",
          following: false,
        },
        {
          id: 3,
          name: "Solana",
          username: "@solana",
          avatar:
            "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg",
          following: false,
        },
        {
          id: 4,
          name: "Polkadot",
          username: "@polkadot",
          avatar:
            "https://pbs.twimg.com/profile_images/1471096119182700550/KTxlFVah_400x400.jpg",
          following: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.bgWhite {
  background-color: white;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgb(65, 61, 61);
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: rgb(65, 61, 61);
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: rgb(65, 61, 61);
}
:-moz-placeholder {
  /* Firefox 18- */
  color: rgb(65, 61, 61);
}
.hiddenSearchBlack {
  visibility: hidden;
}
.hiddenSearchBlue {
  visibility: hidden;
}
</style>
