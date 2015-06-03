/**
 * Created by Ivan_Kauryshchanka on 6/3/2015.
 */
var customModule =  require('./custom-module');
var newCustomModule = new customModule();
var http = require('http');
var url = require('url');
var queryString = require('querystring');

var server = http.createServer(requestHandler);
function requestHandler(req,res) {
    var parseUrlObj = url.parse(req.url),
        parseQuery = queryString.parse(parseUrlObj.query);
    if(parseUrlObj.pathname === '/action'){
       if(parseQuery.method === 'copy'){
           newCustomModule.save(parseQuery.filename);
       }else if(parseQuery.method === 'delete'){
           newCustomModule.delete(parseQuery.filename);
       }
    } else if(parseUrlObj.pathname === '/'){
        newCustomModule.index();
    }
    res.end('Run server');
}

server.listen(3000, function(){
    console.log("Server listening on: http://localhost:%s", 3000);
});
