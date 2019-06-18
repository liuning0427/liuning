var User_model=require("../models/user_model")

exports.reg=function(req,res,next){
    res.render("reg.ejs");
}
exports.do_reg=function(req,res,next){
    var email=req.body.email;
    var pass=req.body.pwd;

    console.log(email);
    console.log(pass);

    User_model.insert_data(email,pass,function(err,data){
        // console.log(data);
        if(data.affectedRows>0){
            res.redirect("/login");
        }
    });
}

exports.checkname=function(req,res,next){
    var email=req.body.value;
    User_model.checkname(email,function(err,data){
        if(data.length>0){
            res.send("success");
        }else{
            res.send("error");
        }
    })
}


exports.login=function(req,res,next){
    res.render("login.ejs");
}
exports.do_login=function(req,res,next){
    var email=req.body.email;
    var pass=req.body.pwd;

    // console.log(email,pass);
    User_model.sel_data(email,pass,function(err,data){
        // console.log(data);
        if(data.length>0){
            req.session=data[0];
            res.redirect('/');
        }
    })
}

exports.index=function(req,res,next){
    res.render("index1.ejs");
}