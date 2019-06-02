var Person = require("./person.js");
var util = require("util");
function Teacher(){
    Person.call(this);
    util.inherits(Teacher,Person);
}
Teacher.prototype.teaching = function(){
    console.log("教书");
}
module.exports = Teacher