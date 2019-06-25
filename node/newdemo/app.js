//入口文件
var http=require("http");
var url=require("url");
var router=require("./router.js")

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    router.router(req,res,pathname);
}).listen(3000);

console.log("gogogo!");