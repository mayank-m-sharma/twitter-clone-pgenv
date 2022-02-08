import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../components/Login.vue";
import Signup from "../components/signup/Signup.vue";
import Profile from "../components/profile/ProfileLanding.vue";
import store from "../store/index";
Vue.use(VueRouter);

const isLoggedIn = store.getters["user/isLoggedIn"];
console.log(isLoggedIn);
const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
