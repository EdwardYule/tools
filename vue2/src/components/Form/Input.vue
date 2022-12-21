<template>
  <div class="input">
    <el-input v-bind="$attrs" v-on="$listeners"></el-input>
  </div>
</template>

<script>
export default {
  name: "Input",
};
</script>

<style lang="scss" scoped>
.input {
}
</style>