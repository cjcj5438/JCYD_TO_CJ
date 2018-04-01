// 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。 
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
// Cruze子 类实现父类颜色是红色，价格是140000,
// 售卖方法实现输出如下语句：将 红色的Cruze 买给了小王价格是14万。（


/*
什么叫构造函数. 就是函数在声明的那一刻,真正在执行的函数 就叫构造函数
 */
function Car(color) {
    this.color=color;
    // constructor:又充当了类,又充当了自己
}
Car.prototype.sail=function () {
    console.log(this.color)
}

/*
__proto__ 指向的是 car.prototype;只是呢__proto__不让用.只能用car.prototype
 */


/*
// 在这里我们Car.call  和 new Car  此时 执行了两次 Car  ;所以不建议这样写 ;那有什么解决方法呢?
function BMW(color) {
    Car.call(this,color);
}
BWM.prototype = new Car();
 */

// 办法:  start
function BMW(color) {
    this.color=color;
}
var __proto = Object.create(Car.prototype);//创建一个父类 副本
__proto.constructor=BMW;//然后修改constructor 的指向
BMW.prototype=__proto;
//end

var s = new BMW("yellow");
console.log(s.sail())






















// class Car {
//     constructor(color, price) {
//         this.color = color;
//         this.price = price;
//     }
//     sell() {
//         console.log(`${this.color}的${this.price}的车`)
//     }
// }
//
// class Cruze extends Car {
//     // constructor() {
//     //     super()
//     // }
//     sell(name){
//         console.log(`将${this.color}的Cruze 买给了${name}价格是${this.price}的车`)
//     }
// }
// const cruze=new Cruze("red","140000");
// cruze.sell("小王")

