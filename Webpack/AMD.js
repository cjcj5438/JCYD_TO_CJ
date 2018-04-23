// AMD 默认推荐的是
define(['./a', './b'], function (a, b) {
    // 依赖必须一开始就写好
    a.doSomething()
// 此处略去 100 行
    b.doSomething()
})
