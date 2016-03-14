
var initreq = require('./initreq.js');
var session = {};

exports.serve = function(req,res){
    var pre = {};
    initreq.initGET(req,pre, function(){
        initreq.initPOST(req,res,pre, function(){
            initreq.initCOOKIE(req,res,pre,function(){
                initreq.initREQUEST(req,res,pre,function(){
                    initreq.initSESSION(req,res,pre,function(){
                        page(req,res,pre, function() {
                            var cookies = [];
                            for ( var c in pre._COOKIE) {
                                cookies.push(c + '=' + pre._COOKIE[c]);
                            }
                            res.setHeader('Set-Cookie', cookies);
                            res.writeHead(200, {'Content-Type': 'text/plain'});
                            res.end(res.content);
                        });
                    });
                });
            });
        });
    });
}


function page(req,res,pre,cb){
    //VARS
    var content = '';   //Store html text in this variable that displays at the end
    
        //CODE GOES HERE
        
        content += '<html><head></head><body>\n';
        content += '<h1>Hello World</h1>\n';
        content += '</body></html>\n';
        
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(content);
    cb();
};