// create the server
var http = require('http'); // http module
var fs = require('fs'); // fs module

fs.appendFile('mynewfile1.txt', 'Hello Header Data Scientist!', function (err) { // create or update file and write on it
  if (err) throw err;
  console.log('mynewfile1.txt Saved or updated!');
});

fs.open('mynewfile2.txt', 'w', function (err) { // open file to create it
  if (err) throw err;
  console.log('mynewfile2.txt Saved!');
});

fs.writeFile('mynewfile3.txt', 'Hello Data Scientist!', function (err) { // open to create it or update file
  if (err) throw err;
  console.log('mynewfile3.txt Saved or replaced!');
});

fs.unlink('mynewfile2.txt', function (err) { // delete file
  if (err) throw err;
  console.log('mynewfile2.txt File deleted!');
});

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { // rename file
  if (err) throw err;
  console.log('File Renamed!');
});

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