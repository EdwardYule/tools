<template>
  <div class="button">
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped lang="scss">
.button{

}
</style>