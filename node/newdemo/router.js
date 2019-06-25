//路由
var parseDns=require("./parse-dns");
var mainIndex=require("./main-index");

exports.router=function(req,res,pathname){
    // console.log("haha");
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            parseDns(req,res);
            break;
        default:
            res.writeHead(404,{'Content':"text/plain"});
            res.end("none");
    }
}