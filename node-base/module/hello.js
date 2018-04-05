//模块的主要逻辑
function Hello() {
    var name;
    this.setName=function (arg) {
        name=arg;
    };
    this.sayHello=function () {
        console.log('hello' + name);
    }
}
//模块导出
module.exports=Hello;