/**
 * Created by 机械革命 on 2017/5/15.
 */
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '是mid,不是cid',
    'mid':8837
});

var options = {
    hostname:'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=7f5f4341-593e-476c-bbdd-0a08a1723247; imooc_isnew_ct=1491823271; UM_distinctid=15c012d8ff8e0-0c8c4da6abe2ff-6a191178-15f900-15c012d8ff91a5; CNZZDATA1261110065=841133193-1494664467-null%7C1494664467; PHPSESSID=2nm6eivc7ofaucpgac6ur01oe1; loginstate=1; apsid=VjYTE4M2E3MWJlMDUzNDM3Y2UwYWM5ODgxMjcyNjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzYwMTg1NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADk5NzkxNjZjZTA4NTUzZDk0NzljYTQ4ZWExZDk1NjNlYRgZWWEYGVk%3DMW; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1494667121,1494816842; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1494816856; imooc_isnew=2; cvde=59191854a5548-13',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest',
    }
}

var req = http.request(options,function(res){
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(chunk);
    })
    res.on('end',function(){
        console.log("评论完毕");
    })

})
req.on('error',function(e){
    console.log("error" + e.message);
})
req.write(postData);
req.end();




