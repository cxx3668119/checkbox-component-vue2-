<template>
  <div>
    <input :placeholder="placeholder" :type="type" :value="value" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    type: {
      validator(value) {
        return ["text", "password", "number", "email"].includes(value);
      },
    },
    placeholder: {
      String,
    },
    value: {
      type: String | Number,
    },
  },
  methods: {
    // setValue(e) {
    //   const _value = e.target.value;
    //   if (_value.length > 0) {
    //     this.$emit("input", _value);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>