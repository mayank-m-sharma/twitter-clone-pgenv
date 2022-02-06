<template>
  <div>
    <Debug />
    <div
      v-bind:key="tweet.created_at"
      v-for="tweet in allTweets"
      class="flex flex-row pt-5 pb-5 pl-8 pr-8 rounded-lg hover:bg-lightest transform transition duration-200 ease-out"
    >
      <!-- Block 1 - Top left avatar Img -->
      <img
        class="h-10 w-10 rounded-full"
        v-bind:src="tweet.avatar"
        alt="avatar"
      />
      <!-- Block 2 -  -->
      <div class="pl-5 flex flex-col w-full justify-between">
        <!-- block 1 - | name username . time posted -->
        <div class="pb-1 flex flex-row w-1/2 content-center">
          <p class="font-bold mr-1">{{ tweet.name }}</p>
          <p class="text-sm mr-2">@{{ tweet.username }}</p>
          <img
            class="h-1 w-1 opacity-1 dot"
            src="../../assets/dot.png"
            alt=""
          />
          <p class="text-sm ml-2 hours">2h</p>
        </div>
        <!-- block 2 - | Tweet paragraph -->
        <p class="pb-3">
          {{ tweet.body }}
        </p>
        <!-- block 3 - | Tweet media -->
        <div>
          <img
            class="rounded-lg img h-full w-full"
            v-if="tweet.tweet_media !== ``"
            v-bind:src="tweet.tweet_media"
            alt=""
          />
        </div>
        <!-- block 4 - | Tweet action buttons -->
        <div class="flex flex-row pt-3 pl-12 pr-12 justify-between">
          <div
            class="flex flex-row justify-between items-center cursor-pointer"
          >
            <img class="h-4 w-4" src="../../assets/reply.png" alt="" />
            <p class="text-sm ml-3 text-grey">{{ tweet.reply_count }}</p>
          </div>
          <div
            class="flex flex-row justify-between items-center cursor-pointer"
          >
            <img class="h-4 w-4" src="../../assets/retweet.png" alt="" />
            <p class="text-sm ml-3 text-grey">{{ tweet.retweet_count }}</p>
          </div>
          <div
            class="flex flex-row justify-between items-center cursor-pointer"
          >
            <img class="h-4 w-4" src="../../assets/heart.png" alt="" />
            <p class="text-sm ml-3 text-grey">{{ tweet.hearts_count }}</p>
          </div>
          <div
            class="flex flex-row justify-between items-center cursor-pointer"
          >
            <img class="h-4 w-4" src="../../assets/upload.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <p class="text-md ml-4 p-5 text-center cursor-pointer text-blue">
      Show more
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Debug from "../Debug.vue";
export default {
  name: "TweetSection",
  components: {
    Debug,
  },
  methods: {
    ...mapActions(["fetchTweets"]),
  },
  computed: mapGetters(["allTweets"]),
  created() {
    this.fetchTweets();
  },
};
</script>

<style scoped>
.dot {
  margin-top: 10px;
  opacity: 0.5;
}
.hours {
  margin-top: 2px;
}
</style>
