<template>
  <div class="button">
    <!-- 这个点击事件不支持修饰符吧？ -->
    <el-button v-bind="$attrs" @click="onClick">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
import { throttle, debounce } from "@/plugins/decorator.js";
export default {
  name: "Button",
  props: {
    decorator: String, // throttle, debounce
  },
  methods: {
    onClick(...args) {
      if(this.decorator == 'throttle'){
        return this.onThrottleClick(...args);
      }
      if(this.decorator == 'debounce'){
        return this.onDebounceClick(...args);
      }
      this.$emit("click", ...args);
    },
    // 这里用装饰器模式来修饰函数
    // 这个写法很好，用这个写法来作为防抖节流，这样就不论是什么事件，都可以兼容
    // 唯一的问题是，这个函数需要导出引入，因此可以考虑挂载在某个全局的位置，无需重复引入
    // 尝试挂载在window下面，然而理论上可行，实践上却走不通
    // 因为编译器并不知道你在window下面注册了函数，所以还是不要用这种方法
    // 使用装饰器模式还有另一个好处，就是你可以像写函数式代码一样，嵌套功能
    onThrottleClick: throttle(function (...args) {
      this.$emit("click", ...args);
    }),
    onDebounceClick: debounce(function (...args) {
      this.$emit("click", ...args);
    }),
  },
};
</script>

<style scoped lang="scss">
.button {
}
</style>