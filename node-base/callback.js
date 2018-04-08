// 阻塞代码 ; 就是同步函数
/*
var fs = require('fs');
var data = fs.readFileSync('data.txt');
console.log(data.toString())
 */

// 非阻塞代码  node里面基本大部分都是异步函数
var fs = require("fs");
fs.readFile('data.txt',function (err, data) {
    if(err){
        return console.error(err)
    }
    console.log(data.toString())
})