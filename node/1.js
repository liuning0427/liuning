// console.log("hello world");
// console.log("start");
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },0);
// }
// console.log("end");
console.log(__dirname);

// 输出顺序：start end 5 5 5 5 5
//  对于解释器来说，先执行同步代码，再执行异步代码
// 异步代码--事件循环
// 异步代码执行的条件：当前线程空闲 + 满足触发条件