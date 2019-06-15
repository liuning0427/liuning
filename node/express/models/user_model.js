var db=require("./db.js");

exports.insert_data=function(name,pass,callback){
    var sql="insert into user(userName,userPassword) values(?,?)";
    db.query(sql,[name,pass],callback);
}