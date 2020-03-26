var fs = require('fs'); // to manage file system
var rs = fs.createReadStream('./demofile.txt'); // create the stream
rs.on('open', function () { // listener on the stream
  console.log('The file is open');
});
rs.on('close', function () {
  console.log('The file is close');
});

var events = require('events'); // manage events
var eventEmitter = new events.EventEmitter(); // create a listener

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a data scientist!');
};

//Assign the event handler to an event:
eventEmitter.on('data scientist', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('data scientist');