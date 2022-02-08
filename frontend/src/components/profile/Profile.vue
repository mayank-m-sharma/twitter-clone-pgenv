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
        <h1 class="text-xl font-bold">{{ name }}</h1>
        <p class="text-sm text-grey">1 Tweet</p>
      </div>
    </div>
    <!-- Profile info section -->
    <div>
      <!-- cover & Avatar -->
      <div class="relative">
        <div class="h-56 w-full bg-lighter"></div>
        <img
          class="h-36 w-36 border-2 border-white rounded-full absolute top-20 mt-10 ml-5"
          :src="`http://localhost:8800/${avatar}`"
          alt="avatar"
        />
        <button
          class="absolute mt-3 right-0 mr-2 btn rounded-full text-sm bg-white font-bold text-black p-2 w-32 h-auto"
        >
          Set up profile
        </button>
      </div>
      <!-- Name username date joined -->
      <div class="flex w-full lg:w-1/2 flex-col mt-16 ml-5">
        <!-- block 1 Name username -->
        <div class="mb-4">
          <h1 class="text-xl font-extrabold">{{ name }}</h1>
          <p class="text-grey">@{{ username }}</p>
        </div>
        <!-- block 2 date joined, following followers count -->
        <div>
          <p class="text-grey">
            <i class="fa-solid mr-2 fa-calendar"></i>
            Joined January 2022
          </p>
          <div class="mt-2 text-sm flex flex-row justify-between">
            <h1 class="text-grey">
              <span class="text-black">49</span> Following
            </h1>
            <h1 class="mr-36 text-grey">
              <span class="text-black">39</span> Follower
            </h1>
          </div>
        </div>
      </div>
      <!-- Tabs -->
      <div class="flex flex-row justify-around mt-8">
        <button class="tabBtn active">Tweets</button>
        <button class="tabBtn">Tweets & replies</button>
        <button class="tabBtn">Media</button>
        <button class="tabBtn">Likes</button>
      </div>
      <div class="border-t-2 border-lightest">
        <TweetSection usernameProps />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TweetSection from "../home-tweet/TweetSection.vue";
export default {
  name: "Profile",
  data() {
    return {
      usernameProps: this.username,
    };
  },
  components: {
    TweetSection,
  },
  computed: mapGetters(["isLoggedIn", "name", "avatar", "username"]),
};
</script>

<style scoped>
.btn {
  border: 1px solid rgb(207, 207, 207);
}
.tabBtn {
  height: 45px;
  color: grey;
  font-weight: 700;
}
.active {
  border-bottom: 4px solid rgb(66, 169, 248);
  color: black;
}
</style>
