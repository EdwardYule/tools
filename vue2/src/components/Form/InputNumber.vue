<template>
  <div class="input-number">
    <el-input-number
      v-bind="$attrs"
      v-on="$listeners"
      :style="{
        width: inline ? '' : '100%',
      }"
    ></el-input-number>
  </div>
</template>

<script>
import Mixin from "./Mixin.vue";
export default {
  name: "InputNumber",
  mixins: [Mixin],
};
</script>

<style lang="scss" scoped>
.input-number {
}
</style>