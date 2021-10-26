<template>
  <div class="my-menu" v-show="show">
    <my-check-box
      v-for="item of data"
      :key="item.id"
      :id="item.id"
      :checked="computedChecked(item.id)"
      @click="setChecked(item.id)"
    >
      <span>{{ item.name }}</span>
      <span>{{ item.score }}</span>
    </my-check-box>
  </div>
</template>

<script>
import MyCheckBox from "./MyCheckBox.vue";
export default {
  components: { MyCheckBox },
  props: {
    checkedData: Array,
    data: Array,
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setChecked(id) {
      this.$emit(
        "click",
        this.data.find((item) => item.id === id)
      );
    },
    computedChecked(id) {
      // console.log(this.checkedData);
      return this.checkedData.some((item) => item.id === id);
    },
  },
};
</script>

<style></style>
