<template>
  <div id="app">
    <Button type="warning" @click="doSomething"> throttle </Button>
    <Button type="warning" @click="doSomething2"> debounce </Button>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { throttle, debounce } from "@/plugins/decorator.js";

export default {
  name: "app",
  components: {
    Button,
  },
  data() {
    return {
      mm: "3"
    }
  },
  methods: {
    // 这里用装饰器模式来修饰函数
    // 这个写法很好，用这个写法来作为防抖节流，这样就不论是什么事件，都可以兼容
    // 唯一的问题是，这个函数需要导出引入，因此可以考虑挂载在某个全局的位置，无需重复引入
    doSomething: throttle(function(...args){
      console.log(this.mm);
      console.log(args);
    }),
    doSomething2: debounce(function(...args){
      console.log(this.mm);
      console.log(args);
    }),
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
