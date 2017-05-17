/**
 * Created by 机械革命 on 2017/5/11.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('hello,node.js');
    res.end();
}).listen(1200);


http.createServer(function(req,res){
	var body = [];
	console.log("method: "+req.method);
	console.log("headers: "+req.headers);
	req.on('data',function(chunk){
		body.push(chunk);
	})

	req.on('end',function(){
		body = Buffer.concat(body);
		console.log("body"+body.toString());
	});
}).listen(3000);

//服务端原样将客户端请求体的数据返回给客户端
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	req.on('data',function(chunk){
		res.write(chunk);
	})

	req.on('end',function(){
		res.end();
	})
}).listen(80);


//客户端请求
var option = {
	hostname:'www.example.com',
	port:80,
	path:'/upload',
	methon:'POST',
	headers:{
		'Content-Type':'application/x-www/form-urlencoded'
	}
}

var request = http.request(option,function(res){

})

request.write('Hello World!');
request.end();

http.get('http://www.example.com/',function(response){
	    var body = [];
    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});