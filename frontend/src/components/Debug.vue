<template>
  <div class="debug">
    <!-- DEBUG
    <div>
      <form @submit="submitHandler">
        <input type="text" placeholder="DEBUG" v-model="test" />
        <button>submit</button>
      </form>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Debug",
  data() {
    return {
      test: "",
    };
  },
  methods: {
    ...mapActions(["addTweet"]),
    submitHandler(e) {
      e.preventDefault();
      this.addTweet(this.test);
    },
  },
};
</script>

<style scoped>
.debug {
  background-color: rgb(240, 240, 186);
}
</style>
