function Person(){
    this.eating = function(){
        console.log("吃饭");
    }
    this.sleeping = function(){
        console.log("睡觉");
    }
}
module.exports = Person;