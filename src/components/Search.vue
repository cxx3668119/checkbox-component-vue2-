<template>
  <div class="search-component">
    <div class="search-input">
      <my-input
        type="number"
        placeholder="请输入分数"
        :value="searchedScore"
        @input.native="setScore"
      ></my-input>
      <my-button-group
        :regulars="regulars"
        :current="currentRegular"
        @click="setCurrentRegular"
      ></my-button-group>
    </div>
    <my-check-box :id="1" :checked="" @click="setChecked">
      <span>小陈</span>
      <span>56分</span>
    </my-check-box>
  </div>
</template>

<script>
import MyButtonGroup from "./MyButtonGroup.vue";
import MyCheckBox from "./MyCheckBox.vue";
import MyInput from "./MyInput.vue";
export default {
  name: "Search",
  components: {
    MyInput,
    MyButtonGroup,
    MyCheckBox,
  },
  data() {
    return {
      searchedScore: 0,
      currentRegular: "up",
      regulars: [
        { regular: "up", text: "以上" },
        { regular: "down", text: "以下" },
      ],
    };
  },
  methods: {
    setScore(e) {
      const _value = e.target.value;
      if (_value.length > 0) {
        this.searchedScore = Number(value);
      }
    },
    setCurrentRegular(regular) {
      this.currentRegular = regular;
      console.log(this.currentRegular);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>