var path = require('path');
var cache = {};

function store(key,value){
	cache[path.normalize(key)] = value;
}

store('foo//baz//../bar',1);
console.log(cache);