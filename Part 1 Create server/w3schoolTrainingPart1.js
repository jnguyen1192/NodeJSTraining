// create the server
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('I will be a header data scientist !');
}).listen(8080);

// Print on the console
/*console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

 */