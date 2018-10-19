const express = require('express'),
    path = require('path'),
    app = express(),
    nunjucks = require('nunjucks'),
    fs = require('fs');

// log request URL:
let env = nunjucks.configure(path.resolve(__dirname, './server/views'), {
    autoescape: false,
    trimBlocks : true,
    lstripBlocks : true,
    express: app
});

app.set('view engine', 'njk');
app.locals.reload = true;
require('./server/routes')(app,env);
require('./server/controllers/common/global');
require('./server/controllers/common/filter')(env);

// add "reload" to express, see: https://www.npmjs.com/package/reload
let reload = require('reload');
let http = require('http');



let server = http.createServer((request, response)=>{
    /*const T = require('./server/controllers/common/tool');
    T.getUserAgent(request,response)*/
    app(request, response)
});
reload(server, app);

server.listen(3004,function(){
    /*bs.init({
        open: false,
        ui: false,
        notify: false,
        proxy: 'localhost:3000',
        files: ['./server/views/!**'],
        port: 3000
    });*/
    console.log('App (dev) is now running on port 3004!');
});
