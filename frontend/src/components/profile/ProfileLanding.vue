<template>
  <div class="flex pl-5 pr-5 h-screen lg:w-full">
    <Sidebar :usernameProp="username" />
    <Profile />
    <RightSection />
  </div>
</template>

<script>
import Sidebar from "../sidebar/Sidebar.vue";
import RightSection from "../RightSection.vue";
import Profile from "./Profile.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProfileLanding",
  computed: mapGetters(["username"]),
  components: {
    Sidebar,
    Profile,
    RightSection,
  },
};
</script>

<style></style>
