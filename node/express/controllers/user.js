var User_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
    res.render("reg.ejs");
} 
exports.index=function(req,res,next){
    res.render("index.ejs",{title:"liuning"})
}
exports.do_reg=function(req,res,next){
    var name=req.body.uname;
    var pass=req.body.pass;
    console.log(name); 
    console.log(pass);

    User_model.insert_data(name,pass,function(err,data){
        // console.log(data);
        if(data.affectedRows>0){
            //affectedRows：收到影响的行数
            res
        }
    })
}