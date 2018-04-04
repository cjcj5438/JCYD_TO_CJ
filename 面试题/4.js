//写出输出值，并解释为什么
function test(m) {
    m = {v: 5}
}

var m = {k: 30};
test(m);
console.log(m.v);


/*
题前先看这段代码
var s1 = {a: 1};
var s2 = s1;
s2.b = 2;
console.log(s1);//{a: 1, b: 2}
console.log(s2);//{a: 1, b: 2}
为什么我操作s2 会影响到了s1 呢?
是因为对象都是`按引用传递`; 这里要用栈和堆的关系来解释
 */
/*
回到这道题   函数里的参数是按值传递的, 这里m是对象.那又怎么理解呢?
这里的值是一样的.对象的引用地址是一样的; 那这道题m对象是重写了对. 他们的引用地址就变了
var m1 = {v: 5};
var m2 = m1;
var m2 = {v: 5, q: 30};
console.log(m1);
console.log(m2)
这段代码可可以帮助理解
 */
