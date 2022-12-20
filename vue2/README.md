# vue2

## 原则

  为了方便功能的移植，所有的功能最好都做成插件的形式

## 开发计划

### 尝试添加一个全局的修饰符，可以实现防抖节流

``` javascript
@click.throttle="doSomething"
@input.throttle="doSomething"
```

  失败。本想通过拦截Vue.directive函数，来实现全局指令的修改，发现只能修改自定义的指令，对于Vue自带的比如v-on，v-bind指令无效。Vue内部应该不是使用Vue.directive函数来注册bind和on的。要么就是找出Vue内部如何注册原生指令的，要么就换个方式。

### 新的自定义指令，但是这样就不能对所有的事件生效

  比如需要单独写一个新的click，新的input，这样也是比较麻烦

### 看看能不能从$on中得到一些线索

  $on灵活性不够，只能判断事件名，其他的无从判断

### 直接使用函数

``` javascript
import throttle from "./utils";
export default {
  methods: {
    doSomething: throttle(function(){
      console.log(this);
    })
  }
}
```

经权衡，这种方法反而是最实用的。首先，不会全局性的破坏任何功能，原本的click照常可以使用，并且，不管是input也好，click也好，所有的事件都可以使用。唯一美中不足的是，每次使用需要重复的引入，可以再想办法解决这一点。
