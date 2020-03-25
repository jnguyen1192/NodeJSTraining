// create the server
var http = require('http');

var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

// Print on the console
/*console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

 */