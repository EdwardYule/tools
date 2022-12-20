<template>
  <div id="app">
    <Template @ddd="test"></Template>
    <Button type="warning" @click="test"> ddd </Button>
    <input v-focus />
  </div>
</template>

<script>
import Template from "@/components/Template.vue";
import Button from "@/components/Button.vue";
const counter = function (fn) {
  // 这个写法很好，可以用这个写法来作为防抖节流，这样就不论是什么事件，都可以兼容
  // 唯一的问题是，这个函数需要导出引入，因此可以考虑挂载在某个全局的位置，无需重复引入
  let n = 0;
  return function (...args) {
    console.log(n);
    n = n + 1;
    fn.call(this, ...args);
  };
};

export default {
  name: "app",
  components: {
    Template,
    Button,
  },
  data() {
    return {
      mm: "3"
    }
  },
  methods: {
    test: counter(function(...args){
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
