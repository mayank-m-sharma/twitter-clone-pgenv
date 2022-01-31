<template>
  <div class="flex container h-screen w-full">
    <Sidebar />
    <Home />
    <RightSection />
  </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from "../components/sidebar/Sidebar.vue";
import Home from "../components/Home.vue";
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
