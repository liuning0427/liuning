var db=require('./db.js');

exports.insert_data=function(email,pass,name,callback){
    var sql="insert into t_users(ACCOUNT,PASSWORD,NAME) values(?,?,?)";
    db.query(sql,[email,pass,name],callback);
}

exports.sel_data=function(email,pass,callback){
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[email,pass],callback);
}

exports.checkname=function(email,callback){
    var sql="select * from t_users where ACCOUNT=?";
    db.query(sql,[email],callback);
} 