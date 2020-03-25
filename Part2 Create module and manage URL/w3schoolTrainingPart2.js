// create the server
var http = require('http'); // http module
var url = require('url'); // url module

var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // http header
  var q = url.parse(req.url, true).query; // split query
  var text = q.year + " " + q.month;
  res.write("The date and time are currently: " + dt.myDateTime() + "\nUrl: " + req.url + "\n");
  res.end("year and month: "+ text);
}).listen(8080);

// Print on the console
/*console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

 */