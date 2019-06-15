var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host :'localhost',
    user:'root',
    password:'admin',
    database:'ning'
})
//一个小错误，没有写上密码的时候会报错

exports.query=function(sql,params,callback){
    pool.query(sql,params,function(error,results,fields){
        if(error) throw error;
        callback(error,results);
    })
}