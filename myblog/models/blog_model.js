var db=require('./db.js');

// exports.sel_all=function(callback){
//     var sql="select * from t_blogs";
//     db.query(sql,[],callback);
// }

exports.sel_id_by_user=function(uid,callback){
    var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
    db.query(sql,[uid],callback);
}

exports.insert_newblog=function(title,content,uid,cid,callback){
    var sql="insert into t_blogs(TITLE,CONTENT,WRITER,CATALOG_ID) values(?,?,?,?)"
    db.query(sql,[title,content,uid,cid],callback);
}

exports.sel_cata=function(uid,callback){
    var sql="select * from t_blog_catalogs where USER_ID=?";
    db.query(sql,[uid],callback);
}