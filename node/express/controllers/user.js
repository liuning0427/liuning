var User_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
    res.render("reg.ejs");
} 
exports.index=function(req,res,next){
    res.render("index.ejs",{title:"liuning"})
}
exports.login=function(req,res,next){
    res.render("login.ejs");
}
exports.do_reg=function(req,res,next){
    var name=req.body.uname;
    var pass=req.body.pass;
    console.log(name); 
    console.log(pass);

    //验证用户是否重名
    User_model.checkName(name,function(err,data){
        // console.log(data);
        if(data.length>0){
            res.send("用户名已存在")
        }else{
            User_model.insert_data(name,pass,function(err,data){
                // console.log(data);
                if(data.affectedRows>0){
                    //affectedRows：收到影响的行数
                    res.redirect("/login");
                }else{
                    res.writeHead(200,{"Content-type":"text/html"});
                    res.end("注册失败");
                }
            });
        }
    })
}