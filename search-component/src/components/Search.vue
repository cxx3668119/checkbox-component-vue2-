<template>
  <div>
    <my-input
      type="number"
      placeholder="请输入分数"
      :value="searchedScore"
      @input.native="setScore"
    ></my-input>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
export default {
  name: "Search",
  components: {
    MyInput,
  },
  data() {
    return {
      searchedScore: 0,
    };
  },
  methods: {
    setScore(e) {
      const _value = e.target.value;
      if (_value.length > 0) {
        this.searchedScore = Number(value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>