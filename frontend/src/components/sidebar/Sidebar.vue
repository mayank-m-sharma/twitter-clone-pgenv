<template>
  <div
    class="transform transition duration-200 ease-out flex flex-col justify-between lg:w-96 border-r border-lighter lg:px-2 px-2 py-2"
  >
    <!-- Upper section | Tabs & Tweet Button div -->
    <div @click="dropdown = false">
      <router-link to="/">
        <button
          class="transform rounded-full transition ml-16 duration-200 ease-out h-12 w-12 hover:bg-lightblue text-3xl text-blue"
        >
          <i class="fab fa-twitter"></i>
        </button>
      </router-link>
      <!-- Tabs with icons -->
      <div class="ml-10">
        <Tabs v-bind:tabs="tabs" />
      </div>
      <!-- Tweet button -->
      <router-link to="/">
        <div class="pl-10 pr-10">
          <button
            class="text-white bg-blue rounded-full font-semibold focus:outlined-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
          >
            <p
              class="transform transition duration-200 ease-out hidden lg:block"
            >
              Tweet
            </p>
            <i
              class="transform transition duration-200 ease-out lg:hidden fa-solid fa-plus"
            ></i>
          </button>
        </div>
      </router-link>
    </div>
    <!-- Lower Section | Dropdown -->
    <div
      @click="dropdown = true"
      class="ml-10 transform transition duration-200 ease-out relative lg:w-full mb-3 hover:bg-lightblue rounded-full"
    >
      <button class="focus:outlined-none flex w-full">
        <div class="flex flex-row items-center">
          <img
            class="h-10 w-10 rounded-full"
            :src="`http://localhost:8800/${avatar}`"
            alt="avatar"
          />
          <div class="hidden lg:block ml-4 mr-8">
            <p class="text-sm font-bold leading-tight">{{ name }}</p>
            <p class="text-sm leading-tight">@{{ username }}</p>
          </div>
        </div>
        <i class="hidden lg:block ml-2 fa-solid fa-ellipsis text-lg"></i>
      </button>
      <!-- dropdown children -->
      <div
        v-if="dropdown === true"
        class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
      >
        <button
          @click="dropdown = false"
          class="focus:outlined-none flex items-center justify-between w-full"
        >
          <img
            class="h-10 w-10 rounded-full"
            v-bind:src="`http://localhost:8800/${avatar}`"
            alt="avatar"
          />
          <div class="ml-2">
            <p class="text-sm font-bold leading-tight">{{ name }}</p>
            <p class="text-sm leading-tight">@{{ username }}</p>
          </div>
          <i class="ml-2 fa-solid fa-check text-blue"></i>
        </button>
        <button
          @click="dropdown = false"
          class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm"
        >
          Add an exisiting account
        </button>
        <button
          @click="logoutHandler"
          class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm"
        >
          Log out @{{ username }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
// import { mapGetters } from "vuex";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Sidebar",
  props: ["usernameProp"],
  methods: {
    ...mapActions(["logoutUser"]),
    logoutHandler() {
      this.logoutUser();
    },
  },
  components: {
    Tabs,
  },
  computed: {
    ...mapGetters(["username", "avatar", "name"]),
  },
  data() {
    return {
      username1: "",
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home", link: "/" },
        {
          icon: "fas fa-hashtag",
          title: "Explore",
          id: "explore",
          link: "/explore",
        },
        {
          icon: "far fa-bell",
          title: "Notifications",
          id: "notifications",
          link: "/notifications",
        },
        {
          icon: "far fa-envelope",
          title: "Messages",
          id: "messages",
          link: "/messages",
        },
        {
          icon: "far fa-bookmark",
          title: "Bookmarks",
          id: "bookmarks",
          link: "/bookmarks",
        },
        {
          icon: "fas fa-clipboard-list",
          title: "Lists",
          id: "lists",
          link: "/lists",
        },
        {
          icon: "far fa-user",
          title: "Profile",
          id: "profile",
          link: `/profile/${this.usernameProp}`,
        },
        { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
      ],
      dropdown: false,
    };
  },
};
</script>
