/*
 大家在开发node的时候,都知道异步的嵌套非常麻烦;有人叫回调地狱  有人叫回调黑洞,请问如何解决这个问题
 $.get("data.json", function (res) {
     $.get(res.url, function (res) {
         $.get(res.url, function (res) {
             $.get(res.url, function (res) {
                console.log(res)
             })
         })
     })
 })
 */
//
async function run() {
    const res=await $.get("data.json");
    const  res1=await $.get(res["url"]);
    const  res2=await $.get(res1["url"]);
    const  res3=await $.get(res2["url"]);
    const  res4=await $.get(res3["url"]);
    console.log(res4)
}
run();