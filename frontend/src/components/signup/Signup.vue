<template>
  <div class="border-2 mainBlock">
    <div
      class="bg-white rounded-xl lg:w-3/5 m-auto mt-20 border-2 shadow-lg relative"
    >
      <router-link to="/">
        <i
          class="text-xl fa-solid top-2 left-3 absolute fa-xmark cursor-pointer"
        ></i>
      </router-link>
      <div class="text-center">
        <i class="text-3xl mt-2 text-blue fab fa-twitter"></i>
        <h1 class="mt-5 text-xl font-bold">Sign up to Twitter</h1>
        <!-- Main Block -->
        <form @submit="signupHandler">
          <div class="flex">
            <!-- LEFT block -->
            <div
              class="pt-10 w-1/2 border-lighter mb-2 border-r-2 flex flex-col items-center"
            >
              <div class="pt-2">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                  class="border-2 rounded-md inp mb-3"
                />
                <input
                  type="text"
                  placeholder="Username"
                  v-model="username"
                  class="border-2 rounded-md inp mb-3"
                />
                <input
                  type="text"
                  placeholder="Email"
                  v-model="email"
                  class="border-2 rounded-md inp mb-3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  class="border-2 rounded-md inp mb-3"
                />
              </div>
            </div>
            <!-- RIGHT -->
            <div class="lg:w-1/2 flex flex-col items-center mt-10">
              <img class="h-32 w-32 rounded-full" :src="avatar" alt="" />

              <div>
                <input
                  type="text"
                  placeholder="Profile Image URL"
                  v-model="avatar"
                  class="border-2 mt-2 rounded-md inp mb-3"
                />
              </div>
            </div>
          </div>
          <div class="pt-2 pb-4">
            <button
              class="text-black bg-white btnSignIn border-grey rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-lightest"
            >
              <p>CREATE ACCOUNT</p>
            </button>
          </div>
        </form>
        <!-- FORM END -->
        <div class="mb-2">
          <p class="text-grey">
            Already have an account ?
            <router-link to="/login"
              ><span class="text-blue hover:underline">Login</span></router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      name: "",
      avatar:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
    };
  },

  methods: {
    signupHandler(e) {
      e.preventDefault();
      const userDetails = {
        email: this.email,
        password: this.password,
        username: this.username,
        avatar: this.avatar,
        name: this.name,
      };
      this.registerUser(userDetails);
    },
    ...mapActions(["registerUser"]),
  },
};
</script>
