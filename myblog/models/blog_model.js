var db=require('./db.js');

exports.sel_all=function(callback){
    var sql="select * from t_blogs";
    db.query(sql,[],callback);
}