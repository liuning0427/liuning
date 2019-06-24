var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            parse(req,res);
            break;
        default:
            res.writeHead(404,{"Content":"text/plain"});
            res.end("none");
    }
}).listen(3000);

console.log(123);

function goIndex(res){
    var pathname=__dirname+"/static/"+url.parse("index.html").pathname;
    var page=fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{"Content":"text/html"});
    res.end(page);
}

function parse(req,res){
    req.setEncoding("utf8");
    var postData="";
    req.addListener("data",function(post){
        postData+=post
    })
    req.addListener("end",function(){
        console.log(postData);
    })
}