var fs = require('fs'),
	src = 'counter.js',
	dst = 'app.js',
	rs = fs.createReadStream(src),
	ws = fs.createWriteStream(dst);

rs.on('data',function(chunk){
	if(ws.write(chunk) === false){
		re.pause();
	}
});

rs.on('end',function(){
	ws.end();
})

ws.on('drain',function(){
	re.resume();
})
