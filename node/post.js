var http=require("http");
var url=require("url");
var fs=require("fs");

http.crestServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            resIndex(res);
            break;
        case '/add':
            resAdd();
            break;
        default:
            res.writeHead(404,{"Content":"text/plain"});
            res.end("none");
    }
}).listen(3000);

console.log(123);