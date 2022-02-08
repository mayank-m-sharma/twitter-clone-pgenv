<template>
  <div class="flex pl-5 pr-5 h-screen w-full">
    <Sidebar />
    <Profile />
    <RightSection />
  </div>
</template>

<script>
import Sidebar from "../sidebar/Sidebar.vue";
import RightSection from "../RightSection.vue";
import Profile from "./Profile.vue";
export default {
  name: "ProfileLanding",
  components: {
    Sidebar,
    Profile,
    RightSection,
  },
};
</script>

<style></style>
