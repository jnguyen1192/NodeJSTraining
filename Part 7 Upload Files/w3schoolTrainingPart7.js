var http = require('http'); // create a server
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); // create the form and button
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); // action will refresh and is the end of the url
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);*/

var formidable = require('formidable'); // get the input of a form
/*
http.createServer(function (req, res) {
  if (req.url == '/fileupload') { // case after the refresh
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) { // action to do after the form
      res.write('File uploaded'); // show file is updated
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'}); // create the form and button
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); // action will refresh and is the end of the url
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);*/

var fs = require('fs'); // manage file system
var path = require('path'); // manage path

http.createServer(function (req, res) {
  if (req.url == '/fileupload') { // case after the refresh
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) { // action to do after the form
      var oldpath = files.filetoupload.path; // get path of the files from the form
      var newpath = path.format({dir:process.cwd(), base:files.filetoupload.name}); // get current path
      res.write(newpath);
      fs.rename(oldpath, newpath, function (err) { // move the file and write a msg
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'}); // create the form and button
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);