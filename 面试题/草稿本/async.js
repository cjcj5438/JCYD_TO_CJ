async  function test() {
    console.log("hellp")
    await sleep(2000);
    console.log("word");
}
function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms))
}
test()