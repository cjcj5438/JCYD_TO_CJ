// 请描述你理解的函数式编程，并书写如下代码结果。如何将函数式编程 应用到你的项目中呢？

//首先创建一个基本的容器,
var Container = function (x) {
    this.__value = x;
};
Container.of = x => new Container(x);
//容器编程函子呢加 一个 map; map上面有一个of 的方法,是为了避免太像面向对象编程; 然后我们 接收一个这样的值
//一个容器变成函子呢.通过变形关系 变成另一个容器
Container.prototype.map = function (f) {
    return Container.of(f(this.__value))
};
//一个容器.通过变形关系 变成另一个容器.然后接收变形关系;
Container.of(3).map(x => x + 1).map(x => 'Result is ' + x);

//
