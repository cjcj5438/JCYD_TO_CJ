//需求,你要统计一下当前的所有函数谁耗时最长
function test() {
    console.log(2)
}
Function.prototype.before=function (fn) {
    var __self=this;
    return function () {
        fn.apply(this,arguments);
        return __self.apply(this,arguments)
    }
    // fn();
    // __self.after()
    // return __self.apply(this,arguments)
}
Function.prototype.after=function (fn) {
    var __self=this;
    __self.apply(this,arguments);
    fn();
}
test.before(function () {
    console.log(1)
})()
// test.after(function () {
//     console.log(3)
// })


