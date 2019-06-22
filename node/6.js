var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    // console.log(url.parse(req.url).pathname);//取到url地址/之后
    var str=url.parse(req.url).pathname;
    switch(str){
        case '/':
            parseIndex();
            break;
        case '/img':
            parseImg();
            break;
        default:
            res.writeHead(404,{"Content":"text/plain"});
            res.end("none");
    }
}).listen(3000);

function parseIndex(res){
    //找到文件路径
    var readPath=__dirname+'/static/'+url.parse("dns.html").pathname;
    var indexPage=fs.readFileSync(readPath,"utf-8");
    res.writeHead(200,{"Content":"text/html"});
    res.end(indexPage);
}

function parseImg(res){

}