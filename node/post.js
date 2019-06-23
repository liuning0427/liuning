var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");

http.createServer(function(req,res){
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

function resIndex(res){
    var pathname=__dirname+"/static/"+url.parse("index.html").pathname;
    var indexpage=fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{"Content":"text/html"});
    res.end(indexpage);
}

function resAdd(req,res){
    var postData="";
    req.setEncoding("utf8");
    req.addListener("data",function(post){
        postData += post;
    })
    req.addListener("end",function(){
        var param=querystring.parse(postData);
        var str=param.uname;
        res.writeHead(200,{"Content":"text/html"});
        res.end(str);
    })
}