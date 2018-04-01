// 请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码

// $.ajax({
//     success:function () {
//         $.ajax({
//             success:function () {
//                 $.ajax({
//                     success:function () {
//                         $.ajax({
//                             success:function () {
//
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

const fetch=()=>{
    new Promise((resolve,reject)=>{
        axios.get("a.php")
            .then(()=>{ resolve("data")})
            .catch(()=>{ reject("err")})
    })
}
async(()=>{
    const result1=await fetch("a.php");
    if (result1=="err"){}
    const result2=await fetch("a.php");
    const result3=await fetch("a.php");
console.log(result1,result2,result3);

})
/*
浏览器有两个发请求的东西
navigator.sendBeacon
fetch
 */