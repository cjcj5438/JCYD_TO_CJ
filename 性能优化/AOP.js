//需求,你要统计一下当前的所有函数谁耗时最长
function test() {
    console.log(2)
    return "test init me";
}
Function.prototype.before=function (fn) {
    var __self=this;
    return function () {
        // this指向了调用函数
        fn.apply(this,arguments);
       return __self.apply(__self,arguments)
    }
}
Function.prototype.after=function (fn) {
    var __self=this;
    return function () {
        var result=__self.apply(__self, arguments);
        // __self.apply(__self, arguments);
        fn.apply(this, arguments);
        debugger
        return result;
    }
}
//挂载self=>
test.before(function () {
    console.log(1)
}).after(function () {
    console.log(3)
})()
// test.after(function () {
//     console.log(3)
// })


