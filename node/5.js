var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    var urlstr=url.parse(req.url).pathname;
    if(urlstr === '/'){
        paserIndex();
    }else if(urlstr === 'img'){
        parserImg();
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("404");
    }
    
}).listen(3000);
console.log(3000);

function paserIndex(res){
    var readPath=__dirname+"/static/"+url.parse("dns.html").pathname;
    var indexPage=fs.readFileSync(readPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);
}

function parserImg(res){
    var readPath=__dirname+"/static/"+url.parse("6.jpg").pathname;
    var indexImg=fs.readFileSync(readPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexImg);
}