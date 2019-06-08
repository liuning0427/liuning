var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    // console.log(url.parse(req.url));
    // var data=url.parse(req.url).query;
    // var arr = data.split("=");
    // console.log(arr);
    var readPath=__dirname+'/'+url.parse("1.html").pathname;
    // console.log(readPath);
    var indexPage=fs.readFileSync(readPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);
}).listen(3000);
console.log(3000);