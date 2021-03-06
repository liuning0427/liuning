var Blog_model=require('../models/blog_model.js');
var moment=require('moment');

exports.index=function(req,res,next){
    // Blog_model.sel_all(function(err,data){
    //     // console.log(data);
    //     res.render("index_logined.ejs",{
    //         'blogs':data,
    //         'sess':req.session
    //     });
    // })
    
    var uid=req.session.USER_ID;
    Blog_model.sel_id_by_user(uid,function(err,data){
        // console.log(data);
        res.render("index_logined.ejs",{
            'blogs':data,
            'sess':req.session
        })
    })
}

exports.newblog=function(req,res,next){
    var uid=req.session.USER_ID;
    Blog_model.sel_cata(uid,function(err,data){
        res.render("newBlog.ejs",{
            'sess':req.session,
            'catalog':data
        });
    })
}

exports.do_newblog=function(req,res,next){
    var title=req.body.title;
    var content=req.body.content;
    // console.log(title,content);
    var uid=req.session.USER_ID;
    // var date=new Date();
    // var date=moment().format();
    // var date1=date.split('T');
    var cid=req.body.catalog;
    Blog_model.insert_newblog(title,content,uid,cid,function(err,data){
        // console.log(data);
        if(data. affectedRows>0){
            Blog_model.update_blog_count(cid,function(err,data){
                if(data.affectedRows>0){
                    res.redirect('/index');
                }
            })
        }
    })
}


exports.catalog=function(req,res,next){
    var uid=req.session.USER_ID;
    Blog_model.sel_catalog(uid,function(err,data){
        // console.log(data);
        res.render("blogCatalogs.ejs",{
            'cata':data,
            'sess':req.session
        });
    })
}

exports.do_catalog=function(req,res,next){
    var cname=req.body.name;
    var uid=req.session.USER_ID;
    Blog_model.add_catalog(cname,uid,function(err,data){
        if(data.affectedRows>0){
            res.redirect('/catalog');
        }
    })
}