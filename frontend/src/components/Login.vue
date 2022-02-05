<template>
  <div class="border-2 mainBlock">
    <div
      class="bg-white rounded-xl lg:w-1/3 m-auto mt-20 border-2 shadow-lg relative"
    >
      <router-link to="/">
        <i
          class="text-xl fa-solid top-2 left-3 absolute fa-xmark cursor-pointer"
        ></i>
      </router-link>
      <div class="text-center">
        <i class="text-3xl mt-2 text-blue fab fa-twitter"></i>
        <h1 class="mt-5 w-1/2 text-xl font-bold customTxt">
          Sign in to Twitter
        </h1>
        <div class="pt-10 w-1/2 m-auto flex flex-col items-center">
          <div class="pb-2">
            <button
              class="text-black btnSignIn border-grey rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-lightest"
            >
              <p>
                <i class="fab ico mr-2 fa-apple"></i>
                Sign in with Apple
              </p>
            </button>
          </div>
          <div>
            <p>or</p>
          </div>
          <div class="pt-2">
            <form @submit="loginHandler">
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
              <div class="pt-2 pb-5">
                <button
                  class="text-white bg-black rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-grey"
                >
                  <p>Login</p>
                </button>
              </div>
              <div class="pt-2 pb-4">
                <button
                  class="text-black bg-white btnSignIn border-grey rounded-full font-semibold focus:outlined-none h-10 w-80 p-2 hover:bg-lightest"
                >
                  <p>Forget Password ?</p>
                </button>
              </div>
            </form>
            <div class="mb-20">
              <p class="text-grey">
                Don’t have an account?
                <router-link to="/"
                  ><span class="text-blue hover:underline"
                    >Sign up</span
                  ></router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    loginHandler(e) {
      e.preventDefault();
      const userCred = {
        email: this.email,
        password: this.password,
      };
      this.loginUser(userCred);
    },
    ...mapActions(["loginUser"]),
  },
};
</script>

<style>
.inp {
  width: 310px;
  padding: 10px;
}

.mainBlock {
  height: 100vh;
  background-color: rgb(123, 123, 123);
  border: 1px solid rgb(123, 123, 123);
}
.customTxt {
  margin-left: 50px;
}
@media (max-width: 600px) {
  .customTxt {
    margin: auto;
  }
}
</style>
