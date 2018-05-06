let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let na1me: string = "bob";
na1me = "smith";

let age: number = 37;
let sentence: string =`Hello, my name is ${ name }.I'll be ${ age + 1 } years old next month.`;
let list: number[] = [1, 2, 1];
let list2: Array<number> = [1, 2, 3];

// $(window).on("scroll",function () {
//     window.requestAnimationFrame(scrollHander)
// })
// requestIdleCallback(function someHeavyComputation(deadline) {
//     while (deadline.timeRemaining()>0){
//         doWorkIfNeeded();
//     }
//     if(thereIsMoreWorkToDo){
//         requestIdleCallback(someHeavyComputation)
//     }
// })