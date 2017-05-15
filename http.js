/**
 * Created by 机械革命 on 2017/5/11.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('hello,node.js');
    res.end;
}).listen(2015);