<template>
  <div class="flex flex-col pl-5 pr-5 pb-2">
    <!-- block one -->
    <div class="flex flex-row p-5 justify-start">
      <!-- avatar -->
      <img
        class="h-12 w-12 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar"
      />
      <!-- input -->
      <input
        class="ml-5 focus:outline-none w-full lg:text-2xl font-light"
        type="text"
        placeholder="What's happening?"
      />
    </div>
    <!-- block two -->
    <div class="flex flex-row justify-between">
      <!-- icons -->
      <div class="flex flex-row lg:ml-20 items-center justify-between">
        <img
          class="cursor-pointer h-5 w-5 ml-4"
          src="../../assets/media.png"
          alt="avatar"
        />
        <img
          class="cursor-pointer h-5 w-5 ml-4"
          src="../../assets/gif.png"
          alt="avatar"
        />
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
      >
        Tweet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTweet",
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
