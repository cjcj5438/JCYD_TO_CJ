// 构建简单服务器
var http = require('http');

http.createServer((req,res)=>{
    //定义 一个返回的  http头
    res.writeHead(200, {'Content-Type': 'text/plan'});
    //发送数据
    res.end('hello word\n');
}).listen(8000);
//服务 运行 后输出一行信息
console.log("server is running....");