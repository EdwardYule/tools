<template>
  <div id="app">
    <Button type="warning" @click="doSomething"> throttle </Button>
    <Button type="warning" @click="doSomething2"> debounce </Button>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { throttle, debounce, counter } from "@/plugins/decorator.js";

export default {
  name: "app",
  components: {
    Button,
  },
  data() {
    return {
      mm: "3",
    };
  },
  methods: {
    // 这里用装饰器模式来修饰函数
    // 这个写法很好，用这个写法来作为防抖节流，这样就不论是什么事件，都可以兼容
    // 唯一的问题是，这个函数需要导出引入，因此可以考虑挂载在某个全局的位置，无需重复引入
    // 尝试挂载在window下面，然而理论上可行，实践上却走不通
    // 因为编译器并不知道你在window下面注册了函数，所以还是不要用这种方法
    // 使用装饰器模式还有另一个好处，就是你可以像写函数式代码一样，嵌套功能
    doSomething: counter(throttle(function (...args) {
      console.log(this.mm);
      console.log(args);
    })),
    doSomething2: counter(debounce(function (...args) {
      console.log(this.mm);
      console.log(args);
    })),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
