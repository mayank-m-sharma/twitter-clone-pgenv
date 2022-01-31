<template>
  <div>
    <button
      v-bind:key="tab.id"
      v-for="tab in tabs"
      class="focus:outlined-none flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3"
    >
      <i :class="tab.icon" class="text-2xl mr-4 text-left"></i>
      <p class="hidden lg:block text-lg font-semibold text-left">
        {{ tab.title }}
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: ["tabs"],
};
</script>

<style></style>
