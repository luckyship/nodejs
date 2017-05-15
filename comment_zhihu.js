/**
 * Created by 机械革命 on 2017/5/15.
 */
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '呵呵'
});

var options = {
    hostname:'www.zhihu.com',
    port: 80,
    path: '/r/answers/23080560/comments',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/plain, */*',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/json',
        'Cookie':'_za=ed0a02e9-a7c2-46ef-996d-07db090a1a2a; udid="ABCASxcfmAmPTqOi-3BjYCyOe5B2OLw5MLw=|1457607520"; d_c0="ADCA_WHhowmPTrInWEsExcCpY81Luq7HMP4=|1458396650"; _zap=7e896c0f-1f78-4b9c-940c-159b69104020; _ga=GA1.2.1512296455.1443760573; q_c1=4560b96964784576adf478c4de7f8905|1492834221000|1443760530000; r_cap_id="ZDIzZDUwMDY4YTVmNDI3YzlkMGY2ZjBiMWUxNTFmNzc=|1493638433|6b0725b7950a22aedf930132303299956bc2a8db"; cap_id="YmViYjA2NTJlNmFiNDg0OGFiM2JmYWIzZDdiNzc4MjM=|1493638433|72f7147ccce3b582ad7db19d17fd8658ab6c49eb"; _xsrf=ed65c464fc52355b5e62437b0f598fd3; aliyungf_tc=AQAAAPugKnMRcg0Awoxges914L5uLqD4; acw_tc=AQAAAMyMfyFeMQ4Awoxgem5f0n00GGAw; __utma=51854390.1512296455.1443760573.1494678086.1494817713.45; __utmb=51854390.0.10.1494817713; __utmc=51854390; __utmz=51854390.1493641384.38.4.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.100--|2=registration_date=20160227=1^3=entry_date=20151002=1; renren_tag_0526=isTag; z_c0=Mi4wQUNDQVRxNVdpQWtBTUlEOVllR2pDUmNBQUFCaEFsVk5QS291V1FEWlAyeXEySmkwTElfckdQZzFUYVpFaXZlZWpB|1494817787|4e23bf600b72c93be838448fee609c14b6094ac8',
        'Host':'www.zhihu.com',
        'Origin':'https://www.zhihu.com',
        'Referer':'https://www.zhihu.com/collection/103348604',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest',
        'X-Xsrftoken':'ed65c464fc52355b5e62437b0f598fd3',
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
console.log(postData.length);




