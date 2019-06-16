var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host :'localhost',
    user:'root',
    password:'admin',
    database:'myblog'
})

exports.query=function(sql,params,callback){
    pool.query(sql,params,function(error,results,fields){
        if(error) throw error;
        callback(error,results);
    })
}