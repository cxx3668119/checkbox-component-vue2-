<template>
  <div class="my-buttom">
    <button class="['my-btn',type,{active:active}]"></button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      default: "primary",
      validator(value) {
        return ["primary", "success", "danger", "waring"].includes(value);
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
/**
  primary blue 
  success green
  danger  red
  warning orange
*/

.my-btn {
  &.primary {
    background-color: rgb(63, 63, 255);
    color: #fff;
  }

  &.success {
    background-color: rgb(98, 248, 111);
    color: #fff;
  }

  &.danger {
    background-color: rgb(248, 79, 79);
    color: #fff;
  }

  &.warning {
    background-color: rgb(255, 136, 0);
    color: #333;
  }

  &.active {
    background-color: #fff;
    color: #333;
  }
}
</style>