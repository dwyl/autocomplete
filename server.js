var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);
  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());
  }
  response.end('hello world!');

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
