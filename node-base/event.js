// 引入Event模块创建eventEmitter 对象
const events = require('events');
const eventEmitter=new events.EventEmitter();

//绑定 时间处理函数
const Handler= function (){
    console.log('connected 被调用了');
}
eventEmitter.on('connection', Handler)// 完成 这里写handler  而不是hander()

//触发事件
eventEmitter.emit('connection');
console.log("程序执行完毕");
