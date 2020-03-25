var http = require('http'); // create server
var uc = require('upper-case'); // get function upper-case

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("I am a header data scientist"));
  res.end();
}).listen(8080);