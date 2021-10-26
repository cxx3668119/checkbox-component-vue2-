<template>
  <div class="my-check-box">
    <label :for="id" class="my-check-box-label">
      <input type="checkbox" name="" :id="id" @click="doCheck" />
      <span class="icon"></span>
    </label>
    <span class="text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyCheckBox",
  props: {
    id: Number | String,
  },
  methods: {
    doCheck() {
      this.$emit("click", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-check-box {
  display: inline-block;

  .my-check-box-label {
    display: inline-block;
    position: relative;
    width: 12px;
    height: 12px;
    border: 1px solid #333;
    border-radius: 50%;
    margin-right: 5px;

    input {
      visibility: hidden;

      &:checked + .icon {
        display: block;
      }
    }

    .icon {
      display: none;
      position: absolute;
      top: 3px;
      left: 3px;
      width: 6px;
      height: 6px;
      background-color: blue;
      border-radius: 50%;
    }
  }
}
</style>