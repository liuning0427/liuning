async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1');
}
async function async2(){
    console.log('async2');
}
console.log("script start");
setTimeout(function(){
    console.log("settimeout");
},0) 
async1();
new Promise(function(resolve){
    console.log("promise1");
    resolve();
}).then(function(){
    console.log('promise2');
})
console.log('script end');

process.nextTick(function(){
    console.log('nexttick');
})