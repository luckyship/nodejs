// const buf1 = Buffer.alloc(10);

// const buf2 = Buffer.alloc(10,1);

// const buf3 = Buffer.allocUnsafe(10);

// const buf4 = Buffer.from([1,2,3]);

// const buf5 = Buffer.from('test');

// const buf6 = Buffer.from('test','latin-1');

// for(var i = 1; i<7;i++){
// 	console.log(buf1);
// }

var bin = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var sub = bin.slice(2);

sub[0] = 0x65;
console.log(bin);