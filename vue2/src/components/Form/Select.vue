<template>
  <div class="select">
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
      :style="{
        width: inline ? '' : '100%',
      }"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import Mixin from "./Mixin.vue";
export default {
  name: "Select",
  mixins: [Mixin],
  props: {
    options: Array,
  },
};
</script>

<style lang="scss" scoped>
.select {
}
</style>