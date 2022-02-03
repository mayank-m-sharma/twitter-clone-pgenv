<template>
  <div class="w-1/2 p-3 h-full overflow-y-scroll">
    <!-- Home Section -->
    <div class="px-5 cursor-pointer pt-4 flex items-center justify-between">
      <h1 class="text-xl font-bold">Home</h1>
      <img class="h-6 w-6" src="../../assets/sparkle.png" alt="" />
    </div>
    <!-- Post Tweet Section -->
    <PostTweet />
    <!-- Tweet Section -->
    <TweetSection />
  </div>
</template>

<script>
import PostTweet from "./PostTweet.vue";
import TweetSection from "./TweetSection.vue";
export default {
  name: "Home",
  components: {
    PostTweet,
    TweetSection,
  },
};
</script>

<style></style>
