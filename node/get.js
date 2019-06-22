var http=require("http");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(req,res){
    /*console.log(url.parse(req.url).query);//返回?后面的字符串
    console.log(url.parse(req.url).pathname);//返回/后面以及？之前的字符串
    console.log(req.method);//显示是以什么方式提交
    console.log(req.headers);*/

    var urlstr=url.parse(req.url).query;
    var urlobj=querystring.parse(urlstr);
    res.writeHead(200,{"Content":"text/plain"});
    res.end(urlobj.name);
    console.log(urlobj);
}).listen(3000);

console.log(3000);