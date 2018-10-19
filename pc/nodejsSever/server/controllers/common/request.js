module.exports = function(request,response){
    const http = require('http'),
	    superagent = require('superagent'),
        URL = require('url'),
        /*host = '192.168.0.245' ,
        port = '8888';*/
	    host = 'pc-test.duorongcf.com' ,
	    port = '80';
     /*   host = '47.100.117.74' ,
        port = '8081';*/

	let pathname = URL.parse(request.url).pathname;

	let headers = request.headers;
	const url = "http://"+host+":"+port+pathname,
		res = response;

	if((request.method=='POST' || request.method=='GET') && typeof response !== 'function'){

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
		    /*.set(headers)*/
		    .set("accept",'application/json, text/javascript, *!/!*; q=0.01')
		    .set("content-type",'application/json;charset=UTF-81')
		    .redirects(0)
		    .end(function(err, response){
			    if (!response.ok) {
				    res.send('接口请求异常error');
			    } else {
				    //res.set(response.headers);  无法登录了
				    res.send(response.body);
			    }
		    });
	    }
	    request.on("data",function(data) {
		    requireHTTP(data)
	    });
    }else{
        /*let opt = {
            host: host,
            port: port,
            method: 'POST',
            path: pathname,
            headers: {
                accept: 'application/json, text/javascript, *!/!*; q=0.01',
                'content-type': 'application/json;charset=UTF-8',
            }
        };

        let req = http.request(opt, (res)=>{
            res.setEncoding('utf8');
            res.on('data',chunk=>{
                content += chunk;
            }).on("end", function () {
                response(null,content)
            });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
        req.end();*/

        let query ,
	        data = request.data || {},
	        method = String(request.method || "POST").toLocaleUpperCase() ,
	        headers = {
		        accept: 'application/json, text/javascript, *!/!*; q=0.01',
		        'content-type': 'application/json;charset=UTF-8',
		        /*cookie:"Hm_lvt_f7c570071c5e4a0cf001fac7a2152cae=1503889423,1505093406; Hm_lpvt_f7c570071c5e4a0cf001fac7a2152cae=1505727915; JSESSIONID=7E81A5180F0ED05CC9C5DA88845D535D"*/
	        };

		if(method==='POST') {
			query = superagent.post(url);
		}else{
			query = superagent.get(url);
		}
		query
		.send(data)
		.set(headers)
		/*.set('Cookie',headers.cookie)*/
		.redirects(0)
		.end(function(err, response){
			//query.set('Cookie', response.headers['set-cookie']);
			res(null,response.body);
		});

    }
};
