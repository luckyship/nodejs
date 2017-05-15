/**
 * Created by 机械革命 on 2017/5/15.
 */
var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'ie':'utf-8',
    'kw':'柯南',
    'fid':'339',
    'tid':'5114030236',
    'vcode_md5':'',
    'floor_num':'104',
    'rich_text':'1',
    'tbs':'aaadd4c4afcd8d731494828310',
    'content':'哈哈',
    'basilisk':'1',
    'files':'[]',
    'mouse_pwd':'125,116,122,96,117,126,117,121,69,125,96,124,96,125,96,124,96,125,96,124,96,125,96,124,96,125,96,124,69,125,116,116,125,123,69,125,122,124,124,96,117,124,124,14948283139760',
    'mouse_pwd_t':'1494828313976',
    'mouse_pwd_isclick':'0',
    '__type__':'reply',
    });

var options = {
    hostname:'tieba.baidu.com',
    port: 80,
    path: '/f/commit/post/add',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':'502',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'TIEBA_USERTYPE=13f77af854ac096f8ec28501; bdshare_firstime=1436627926104; FP_UID=9c00524d5d333e5b909c6a0f83e0ed4b; Hm_lvt_287705c8d9e2073d13275b18dbd746dc=1491791280,1491791395,1494211251; TIEBAUID=a0f7532867004a505b4bba0a; BAIDUID=AF430CC9E3700F902BA829160B3911E0:FG=1; BDUSS=QxRkU0NHlPdnFjWnBvb0l3RGZER00yTEhvSmY5QmE0Sy1kMX5aNkJ1QWVDenBaSVFBQUFBJCQAAAAAAAAAAAEAAABGot1Rs6zIuzAxMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5-ElkefhJZNm; STOKEN=804436f580f75497dbf3a44136a7cbce2fe20806c48d143a71524e8e4fbe68fd; BIDUPSID=1FFE33E296E590A998684AADE0A63ABA; PSTM=1494385807; MCITY=-315%3A; pgv_pvi=1885398016; BDRCVFR[S4-dAuiWMmn]=I67x6TjHwwYf0; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; PSINO=2; H_PS_PSSID=1431_21098; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; bottleBubble=1; 1373479494_FRSVideoUploadTip=1; BCLID=9785029520359065138; BDSFRCVID=HdtsJeC62xT250vZytktbnfNReK5wI5TH6-bGAGMhnAT6y7gg6T_EG0PfU8g0Ku-_9isogKKL2OTHmoP; H_BDCLCKID_SF=tJ4OVIPKfCvbfP0kKPQO5JD_Ml0X5-RLHD7XVhnebPOkeq8CDR7xD6QQ5R68-PnJKDoh2foHWK5bOD52y5DV-x-FQPc32fonJjKf0b0KQU7psIJMbl_WbT8U5ecdq4ceaKviah4-BMb1DJ7Me4bK-TryDHDjtf5; LONGID=1373479494; wise_device=0',
        'Host':'tieba.baidu.com',
        'Origin':'https://tieba.baidu.com',
        'Referer':'https://tieba.baidu.com/p/5114030236?pn=2',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest',
    }
}

var req = http.request(options,function(res){
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
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




