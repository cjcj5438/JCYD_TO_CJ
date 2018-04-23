// CMD
/**
 * require, 去加载别的模块
 * exports, 导出模块
 * module , 就是把很多东西一起导出
 */
define(function (require, exports, module) {
    var a = require('./a')
    a.doSomething()
// 此处略去 100 行
    var b = require('./b')
// 依赖可以就近书写
    b.doSomething()
})
