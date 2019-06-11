var http=require("http");
var url=require("url");

http.createServer(function(req,res){
    console.log(url.parse(req.url).query);//返回?后面的字符串
    console.log(url.parse(req.url).pathname);//返回/后面以及？之前的字符串
    console.log(req.method);
    console.log(req.headers);
}).listen(3000);

console.log(3000);