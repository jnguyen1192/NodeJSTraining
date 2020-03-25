// create the server
var http = require('http'); // http module
var fs = require('fs'); // fs module


http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    res.write(data);
    res.end();
  });
}).listen(8080);

// Print on the console
/*console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

 */