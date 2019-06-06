var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h1>hehe</h1>");
}).listen(3000);

console.log("start"); 