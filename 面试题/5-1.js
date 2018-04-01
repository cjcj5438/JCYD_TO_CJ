// ES6 的写法
class A {
    constructor(color){
        this.color=color;
        console.log()
    }
    static hello() {
        console.log('hello world');
    }
}

class B extends A {
    constructor(color){
        super(color)
    }
    sail(){
        console.log(this.color)
    }
}
B.prototype.sail=function () {
    console.log("xxxxxx")
}
const s=new B("red");
console.log(s.sail())//这里为什么会打印xxxx呢? 是因为,方法重写了; 其实class 就是语法糖, 本质并没有脱离js

/*
es6 的新语法的 是怎么实现的;原理
可以babel 编译成es5 的
 */