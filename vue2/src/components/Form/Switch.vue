<template>
  <div class="switch">
    <el-switch v-bind="$attrs" v-on="$listeners"></el-switch>
  </div>
</template>

<script>
export default {
  name: "VSwitch",
};
</script>

<style lang="scss" scoped>
.switch {
  text-align: left;
}
</style>