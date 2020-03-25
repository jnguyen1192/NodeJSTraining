var http = require('http'); // the server
var url = require('url'); // use url
var fs = require('fs'); // use file system

http.createServer(function (req, res) {
  var q = url.parse(req.url, true); // get the object url
  var filename = "." + q.pathname; // get the filename in url
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);