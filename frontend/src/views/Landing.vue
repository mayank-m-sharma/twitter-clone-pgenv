<template>
  <div class="ml-5 mr-5">
    <div class="flex h-screen w-full">
      <Sidebar />
      <Home />
      <RightSection />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from "../components/sidebar/Sidebar.vue";
import Home from "../components/home-tweet/Home.vue";
import RightSection from "../components/RightSection.vue";
export default {
  name: "Landing",
  components: {
    Sidebar,
    Home,
    RightSection,
  },
};
</script>
