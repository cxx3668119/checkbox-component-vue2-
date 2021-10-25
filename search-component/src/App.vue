<template>
  <div id="app">
    <!-- <demo /> -->
    <Search :data="students"></Search>
  </div>
</template>

<script>
// import Demo from './components/Demo.vue'
import Search from "./components/Search.vue";
import students from "./data/students";

export default {
  name: "App",
  components: {
    // Demo
    Search,
  },
  data() {
    return {
      students,
    };
  },
};
</script>

<style lang="scss">
</style>