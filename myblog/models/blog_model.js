var db=require('./db.js');


exports.sel_id_by_user=function(uid,callback){
    var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
    db.query(sql,[uid],callback);
}

exports.insert_newblog=function(title,content,uid,cid,callback){
    var sql="insert into t_blogs(TITLE,CONTENT,WRITER,CATALOG_ID) values(?,?,?,?)"
    db.query(sql,[title,content,uid,cid],callback);
}

exports.update_blog_count=function(cid,callback){
    var sql="update t_blog_catalogs set BLOG_COUNT=BLOG_COUNT+1 where CATALOG_ID=?";
    db.query(sql,[cid],callback);
}

exports.sel_cata=function(uid,callback){
    var sql="select * from t_blog_catalogs where USER_ID=?";
    db.query(sql,[uid],callback);
}

exports.sel_catalog=function(uid,callback){
    var sql="select * from t_blog_catalogs where USER_ID=?";
    db.query(sql,[uid],callback);
}

exports.add_catalog=function(cname,uid,callback){
    var sql="insert into t_blog_catalogs(NAME,USER_ID) values(?,?)";
    db.query(sql,[cname,uid],callback);
}