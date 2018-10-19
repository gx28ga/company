module.exports = function(request,response){

    const http = require('http'),
        url=require('url'),
        /*姜迪的 host = '192.168.0.32' ,
        port = '8080';*/
        /*host = '106.15.181.92' ,
        port = '80';*/
        host = '47.100.117.74' ,
        port = '80';
    let pathname = url.parse(request.url).pathname;

    if((request.method==='POST' || request.method==='GET') && typeof response !== 'function') {
        let headers = request.headers;

        const superagent = require('superagent');
        const url = "http://"+host+":"+port+pathname,
            res = response,
            ServerCookie = request.headers.cookie;  // 获取到cookie的字段

        function requireHTTP(_data){
            let data = _data.toString() ,
                query;
            if(request.method==='POST') {
                query = superagent.post(url);
            }else{
                query = superagent.get(url);
            }
            query
                .send(data)
                .set(headers)
                .redirects(0)
                .end(function(err, response){
                    if (err || !response.ok) {
                        //console.log(1)
                        res.send('error');
                    } else {
                        res.set(response.headers);
                        res.send(response.body);
                    }
                });
        }
        request.on("data",function(data) {
            requireHTTP(data)
        });
        requireHTTP({})
    }
};
