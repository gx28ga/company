module.exports = function (app) {
    let express = require('express'),
        router = express.Router();


    router.get('/', function(req, res) {
        res.render('index');
    });

    app.use('/', router);
    app.use(function(request,response,next){
        const req = require('./request');
        req(request,response)
    })
    app.get("*", function(request, response) {
        response.redirect("/");
    });
    //app.use('/page2', require('./page2'));
};
