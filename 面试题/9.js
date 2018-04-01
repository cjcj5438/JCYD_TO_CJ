//请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(10分)
var a="abc";
// console.log([...a].map((item)=>console.log(item)))
console.log(Array.from("abc"))
console.log([...a])
console.log(Array.prototype.slice.call(a))
console.log(a.split(""))
