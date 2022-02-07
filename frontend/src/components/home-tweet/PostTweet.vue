<template>
  <div class="flex flex-col pl-5 pr-5 pb-2">
    <!-- block one -->
    <form @submit="submitHandler">
      <div class="flex flex-row p-5 justify-start">
        <!-- avatar -->
        <img class="h-12 w-12 rounded-full" :src="avatar" alt="avatar" />
        <!-- input -->
        <input
          class="ml-5 focus:outline-none w-full lg:text-2xl font-light"
          type="text"
          v-model="body"
          placeholder="What's happening?"
        />
      </div>
      <!-- block two -->
      <div class="flex flex-row justify-between">
        <!-- icons -->
        <div class="flex flex-row lg:ml-20 p-2 items-center justify-between">
          <div>
            <label for="media">
              <img
                class="cursor-pointer h-5 w-5 ml-4"
                src="../../assets/media.png"
                alt="avatar"
              />
            </label>
            <input
              type="file"
              id="media"
              class="hidden"
              v-on:change="addMediaHandler"
            />
          </div>
          <label for="media">
            <img
              class="cursor-pointer h-5 w-5 ml-4"
              src="../../assets/gif.png"
              alt="avatar"
            />
          </label>
          <img
            class="cursor-pointer h-5 w-5 ml-4 hidden lg:block"
            src="../../assets/poll.png"
            alt="avatar"
          />
          <img
            class="cursor-pointer h-5 w-5 ml-4 hidden lg:block"
            src="../../assets/emoji.png"
            alt="avatar"
          />
          <img
            class="cursor-pointer h-5 w-5 ml-4 hidden lg:block"
            src="../../assets/schedule.png"
            alt="clock"
          />
          <img
            class="cursor-pointer h-5 w-5 ml-4 hidden lg:block"
            src="../../assets/location.png"
            alt="clock"
          />
        </div>
        <!-- tweet button -->
        <button
          class="rounded-full text-sm bg-blue font-bold text-white p-2 w-20 h-auto"
          v-if="body !== ``"
        >
          Tweet
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PostTweet",
  data() {
    return {
      body: "",
      tweet_media: "",
      media: {},
      path: "",
      formData: {},
    };
  },
  methods: {
    ...mapActions(["createTweet"]),
    addMediaHandler(e) {
      this.media = e.target.files[0];
    },
    submitHandler(e) {
      e.preventDefault();
      const newTweet = {
        body: this.body,
        tweet_media: this.tweet_media,
        reply_count: 0,
        hearts_count: 0,
        retweet_count: 0,
        created_at: Date.now().toString(),
        updated_at: "",
        user_id: this.user_id.toString(),
        avatar: this.avatar,
        name: this.name,
        username: this.username,
        uploads: this.media,
      };
      this.createTweet(newTweet);
      this.body = "";
    },
  },
  computed: mapGetters(["username", "name", "avatar", "user_id"]),
};
</script>

<style scoped>
@media screen and (min-width: 640px) {
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 1.3rem;
    color: black;
    font-weight: 200;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 1.3rem;
    color: black;
    font-weight: 200;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 1.3rem;
    color: black;
    font-weight: 200;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 1.3rem;
    color: black;
    font-weight: 200;
  }
}
</style>
