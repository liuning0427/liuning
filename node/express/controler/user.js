exports.reg=function(req,res,next){
    res.render("reg.ejs");
}
exports.do_reg=function(req,res,next){
    var name=req.body.username;
    var pass=req.body.userpass;
    console.log(name);
    console.log(pass);
}