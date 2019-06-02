var util = require("util");
var Animal = require("./animal.js");

function Duck(){
    Animal.call(this);
    util.inherits(Duck, Animal);
    this.say = function(){
        console.log("gaga");
    }
}

module.exports = Duck;