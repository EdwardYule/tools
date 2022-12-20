import Vue from 'vue'

const directives = Vue.directive;
const newDirectives = function (id, definition) {
  // 这种方法只能修改到自定义的指令，并不能影响到原有的指令，比如v-bind，v-on等等
  // 没办法达到全局修改指令的目的
  directives.call(this, id, definition);
};
Vue.directive = newDirectives;

// 这种方法固然可以修改全局的监听事件，但影响太大，灵活性太小，作用有限
const on = Vue.prototype.$on;
const newOn = function (...args) {
  on.call(this, ...args);
}
Vue.prototype.$on = newOn;