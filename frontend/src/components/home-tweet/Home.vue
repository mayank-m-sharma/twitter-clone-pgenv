<template>
  <div class="w-1/2 h-full overflow-y-scroll">
    <!-- Home Section -->
    <div class="px-5 pt-3 flex items-center justify-between">
      <h1 class="text-xl font-bold">Home</h1>
      <img class="h-6 w-6" src="../../assets/sparkle.png" alt="" />
    </div>
    <!-- Post Tweet Section -->
    <PostTweet />
  </div>
</template>

<script>
import PostTweet from "./PostTweet.vue";
export default {
  name: "Home",
  components: {
    PostTweet,
  },
};
</script>

<style></style>
