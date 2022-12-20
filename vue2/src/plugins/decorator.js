export const counter = function (fn) {
  let n = 1;
  return function (...args) {
    console.log(n);
    n = n + 1;
    fn.call(this, ...args);
  };
};

export const throttle = function(fn, delay = 1000){
  let date = new Date();
  return function(...args){
    const now = new Date()
    if(now - date > delay){
      fn.call(this, ...args);
      date = now;
    }
  }
}

export const debounce = function(fn, delay = 1000){
  // 这里有个小问题可以讨论
  // 防抖是要立即触发，还是延迟触发呢？
  // 或者应该这么问？防抖的意义是什么呢？
  // 场景应该是这样子的：
  // 用户点击，不小心点多了一下，往往是很快地点了
  // 这个时候，我们要的应该是第一个点击，而不是第二个
  // 因此，防抖的意义，就是防止用户手抖
  // 我们在网上经常能看到使用settimeout的防抖实现
  // 我觉得settimeout有两点不好，第一，立即触发是普遍的需求，使用settimeout实现不够合理
  // 第二，settimeout即使设置0延时，也不是立即触发
  let date = new Date();
  return function(...args){
    const now = new Date();
    if(now - date > delay){
      fn.call(this, ...args);
    }
    date = now;
  }
}

// 对比以上我们可以看到，防抖和节流的代码竟然可以如此相似，这也是为什么他们经常被放到一起比较
// 区别只是在于闭包变量date赋值为now的时候，时机不同