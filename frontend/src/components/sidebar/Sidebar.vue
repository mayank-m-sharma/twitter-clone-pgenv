<template>
  <div
    class="transform transition duration-200 ease-out flex flex-col justify-between lg:w-1/5 border-r border-lighter lg:px-6 px-2 py-2"
  >
    <!-- Upper section | Tabs & Tweet Button div -->
    <div @click="dropdown = false">
      <button
        class="transform transition duration-200 ease-out h-12 w-12 hover:bg-lightblue text-3xl text-blue"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <!-- Tabs with icons -->
      <Tabs v-bind:tabs="tabs" />
      <!-- Tweet button -->
      <button
        class="text-white bg-blue rounded-full font-semibold focus:outlined-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
      >
        <p class="transform transition duration-200 ease-out hidden lg:block">
          Tweet
        </p>
        <i
          class="transform transition duration-200 ease-out lg:hidden fa-solid fa-plus"
        ></i>
      </button>
    </div>
    <!-- Lower Section | Dropdown -->
    <div
      @click="dropdown = true"
      class="transform transition duration-200 ease-out relative lg:w-full mb-3 hover:bg-lightblue rounded-full"
    >
      <button
        class="focus:outlined-none flex items-center justify-between w-full"
      >
        <img
          class="h-10 w-10 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="avatar"
        />
        <div class="hidden lg:block ml-2">
          <p class="text-sm font-bold leading-tight">Mayank Sharma</p>
          <p class="text-sm leading-tight">@mayank_m_sharma</p>
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
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="avatar"
          />
          <div class="ml-2">
            <p class="text-sm font-bold leading-tight">Mayank Sharma</p>
            <p class="text-sm leading-tight">@mayank_m_sharma</p>
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
          @click="dropdown = false"
          class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm"
        >
          Log out @mayank_m_sharma
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  name: "Sidebar",
  components: {
    Tabs,
  },
  data() {
    return {
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home" },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
        { icon: "far fa-bell", title: "Notifications", id: "notifications" },
        { icon: "far fa-envelope", title: "Messages", id: "messages" },
        { icon: "far fa-bookmark", title: "Bookmarks", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
        { icon: "far fa-user", title: "Profile", id: "profile" },
        { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
      ],
      dropdown: false,
    };
  },
};
</script>
