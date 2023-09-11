// producer.js
var zmq = require("zeromq"),
  sock = zmq.socket("dealer");

sock.bindSync("tcp://127.0.0.1:3100");
console.log("Producer bound to port 3000");

setInterval(function() {
  const date = new Date();
  console.log(`sending work at ${date} ${date.getMilliseconds()}`);
  sock.send(`some work at ${date} ${date.getMilliseconds()}`);
}, 5000);
