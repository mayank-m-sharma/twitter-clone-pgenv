<template>
  <div>
    <div
      v-bind:key="tweet.id"
      v-for="tweet in allTweets"
      class="flex flex-row p-5 rounded-lg hover:bg-lightest transform transition duration-200 ease-out"
    >
      <!-- Block 1 - Top left avatar Img -->
      <img
        class="h-10 w-10 rounded-full"
        v-bind:src="tweet.avatar"
        alt="avatar"
      />
      <!-- Block 2 -  -->
      <div class="pl-5 flex flex-col justify-between">
        <!-- block 1 - | name username . time posted -->
        <div class="pb-1 flex flex-row w-1/2">
          <p class="font-bold mr-1">{{ tweet.name }}</p>
          <p class="text-sm mr-2">{{ tweet.username }}</p>
          <img
            class="h-1 w-1 mt-2 opacity-1"
            src="../../assets/dot.png"
            alt=""
          />
          <p class="text-sm ml-2">2h</p>
        </div>
        <!-- block 2 - | Tweet paragraph -->
        <p class="pb-3">
          {{ tweet.tweetBody }}
        </p>
        <!-- block 3 - | Tweet media -->
        <div>
          <img
            class="rounded-lg h-full w-full"
            v-bind:src="tweet.tweetMedia"
            alt=""
          />
        </div>
        <!-- block 4 - | Tweet action buttons -->
        <div class="flex flex-row pt-3 pl-12 pr-12 justify-between">
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/reply.png" alt="" />
            <p class="text-sm ml-3 text-grey">32</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/retweet.png" alt="" />
            <p class="text-sm ml-3 text-grey">56.3k</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/heart.png" alt="" />
            <p class="text-sm ml-3 text-grey">18</p>
          </div>
          <div class="flex flex-row justify-between items-center">
            <img class="h-4 w-4" src="../../assets/upload.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TweetSection",
  computed: mapGetters(["allTweets"]),
};
</script>

<style></style>
