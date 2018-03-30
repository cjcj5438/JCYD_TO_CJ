// 1.请写出弹出值，并解释为什么
/*
+function 中+ 号标识符 就是自调函数的写法 只是执行速度快慢的问题
 */
+function () {
    alert(a);
    a();
    var a = function () {
        console.log(1)
    }

    function a() {
        console.log(2)
    }

    alert(a)  //function () {console.log(1)}
    a();
    /*
        解读 line> var c=d=a;
         首先函数分解 d=a; 这里a复制给了d ,因为d 每声明 所以d 指向 window作用域
         var c;
         c=d 到这步c声明在函数内部;导致外部那不到

     */
    var c = d = a;
}();
alert(d)
alert(c)