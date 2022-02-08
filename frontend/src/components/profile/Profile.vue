<template>
  <div class="w-1/2 h-full overflow-y-scroll">
    <!-- Profile Header Section -->

    <div
      class="px-5 border-b-2 border-lighter cursor-pointer pt-2 flex items-center"
    >
      <router-link to="/">
        <i class="fa-solid fa-arrow-left mr-8"></i
      ></router-link>
      <div class="mb-2">
        <h1 class="text-xl font-bold">{{ userProfileInfo[0].name }}</h1>
        <p class="text-sm text-grey">{{ userTweets.length }} Tweet</p>
      </div>
    </div>
    <!-- Profile info section -->
    <div>
      <!-- cover & Avatar -->
      <div class="relative">
        <div class="h-56 w-full bg-lighter"></div>
        <img
          class="shadow-lg h-36 w-36 border-2 border-white rounded-full absolute top-20 mt-12 ml-5"
          :src="`http://localhost:8800/${userProfileInfo[0].avatar}`"
          alt="avatar"
        />
        <button
          v-if="this.$route.params.username === username"
          class="absolute mt-3 right-0 mr-2 btn rounded-full text-sm bg-white font-bold text-black p-2 w-32 h-auto"
        >
          Set up profile
        </button>
        <button
          class="absolute mt-3 right-0 mr-2 btn rounded-full text-sm bg-white font-bold text-black p-2 w-32 h-auto"
          v-else
        >
          Different User
        </button>
      </div>
      <!-- Name username date joined -->
      <div class="flex w-full lg:w-1/2 flex-col mt-16 ml-5">
        <!-- block 1 Name username -->
        <div class="mb-4">
          <h1 class="text-xl font-extrabold">{{ userProfileInfo[0].name }}</h1>
          <p class="text-grey">@{{ userProfileInfo[0].username }}</p>
        </div>
        <!-- block 2 date joined, following followers count -->
        <div>
          <p class="text-base text-grey">
            <i class="fa-solid fa-calendar"></i>
            Joined January 2022
          </p>
          <div class="mt-2 text-sm flex flex-row justify-between">
            <h1 class="text-grey">
              <span class="text-black font-semibold">{{
                userFollowing.length
              }}</span>
              Following
            </h1>
            <h1 class="mr-36 text-grey">
              <span class="text-black font-semibold">{{
                userFollower.length
              }}</span>
              Follower
            </h1>
          </div>
        </div>
      </div>
      <!-- Tabs -->
      <div class="flex flex-row justify-around mt-5">
        <button
          class="tabBtn first active transform transition duration-200 ease-out"
        >
          Tweets
        </button>
        <button class="tabBtn transform transition duration-200 ease-out">
          Tweets & replies
        </button>
        <button class="tabBtn transform transition duration-200 ease-out">
          Media
        </button>
        <button class="tabBtn last transform transition duration-200 ease-out">
          Likes
        </button>
      </div>
      <div class="border-t-2 border-lightest">
        <TweetSection :usernameProps="usernameProps" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TweetSection from "../home-tweet/TweetSection.vue";
export default {
  computed: mapGetters([
    "username",
    "userProfileInfo",
    "userFollowing",
    "userFollower",
    "userTweets",
  ]),
  name: "Profile",
  methods: {
    ...mapActions(["getUserProfile"]),
  },
  created() {
    this.getUserProfile(this.$route.params.username);
  },
  data() {
    return {
      usernameProps: this.avatar,
      usernameURL: this.$route.query.username,
    };
  },
  components: {
    TweetSection,
  },
};
</script>

<style scoped>
.btn {
  border: 1px solid rgb(207, 207, 207);
}
.tabBtn {
  padding-left: 20px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  color: grey;
  font-weight: 700;
  margin: auto;
}

.tabBtn:hover {
  background-color: rgb(213, 213, 213);
}
.active {
  border-bottom: 4px solid rgb(66, 169, 248);
  color: black;
}
</style>
