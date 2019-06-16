var db=require('./db.js');

exports.insert_data=function(email,pass,callback){
    var sql="insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
    db.query(sql,[email,pass],callback);
}

exports.sel_data=function(email,pass,callback){
    var sql="select * from t_users where (ACCOUNT,PASSWORD) values(?,?)";
    db.query(sql,[email,pass],callback);
}

exports.checkname=function(email,callback){
    var sql="select * from t_users where ACCOUNT=?";
    db.query(sql,[email],callback);
}