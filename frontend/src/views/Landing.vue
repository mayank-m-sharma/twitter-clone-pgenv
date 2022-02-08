<template>
  <div>
    <div v-if="isLoggedIn" class="flex pl-5 pr-5 h-screen w-full">
      <Sidebar :usernameProp="username" />
      <Home />
      <RightSection />
    </div>
    <div v-else class="flex w-full h-screen">
      <!-- Light Block -->
      <div class="hidden lg:block w-3/5">
        <img
          class="w-full h-full img"
          src="https://techcrunch.com/wp-content/uploads/2019/10/fake-twitter-accounts1.png"
          alt=""
        />
      </div>
      <!-- Right Block -->
      <div>
        <div class="h-12 w-12 text-3xl text-blue">
          <i class="pt-10 pl-12 text-5xl fab fa-twitter"></i>
        </div>
        <div class="pt-10 pl-10">
          <h1 class="text-6xl ml-2 pt-14 pb-14 font-extrabold">
            Happening now
          </h1>
          <p class="text-3xl ml-2 font-extrabold">Join Twitter today .</p>
        </div>
        <!-- Action Buttons block -->
        <div class="pt-12 w-1/2 ml-20 flex flex-col items-center">
          <div class="pb-2">
            <button
              class="text-black btnSignIn border-grey rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-lightest"
            >
              <p>
                <i class="fab ico mr-2 fa-apple"></i>
                Sign up with Apple
              </p>
            </button>
          </div>
          <div>
            <p>or</p>
          </div>
          <div class="pt-2">
            <router-link to="/signup">
              <button
                class="text-white bg-blue rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-darkblue"
              >
                <p>Sign up with email</p>
              </button>
            </router-link>
          </div>
        </div>
        <!-- Already have an account -->
        <div class="pt-10 pl-10">
          <p class="ml-2 font-bold">Already have an account?</p>
          <div class="pt-4">
            <router-link to="/login">
              <button
                class="text-blue btnSignIn border-grey rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-lightest"
              >
                <p>Sign in</p>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from "../components/sidebar/Sidebar.vue";
import Home from "../components/home-tweet/Home.vue";
import RightSection from "../components/RightSection.vue";
import { mapGetters } from "vuex";
export default {
  name: "Landing",
  components: {
    Sidebar,
    Home,
    RightSection,
  },
  computed: mapGetters(["isLoggedIn", "username"]),
};
</script>

<style>
.btnSignIn {
  border: 1px solid;
}
.ico {
  font-size: 20px;
}
</style>
