var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
})