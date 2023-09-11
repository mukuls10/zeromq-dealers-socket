// worker.js
var zmq = require("zeromq"),
  sock = zmq.socket("pull");

sock.connect("tcp://127.0.0.1:3100");
console.log("Worker connected to port 3000");

sock.on("message", function(msg) {
    console.log(`current time: ${new Date()} ${new Date().getMilliseconds()}`);
  console.log("work: %s", msg.toString());
});
