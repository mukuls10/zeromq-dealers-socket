const zmq = require("zeromq");
const dealerOMS = zmq.socket("dealer");
const dealerOMS2 = zmq.socket("dealer");

// Set an identity for this socket (optional but useful for debugging)
// dealerOMS.identity = 'dealerOMS';

//port 5556 - bind
// dealerOMS.connect("tcp://127.0.0.1:5556"); //connect first

// Connect to the other Dealer
dealerOMS.connect("tcp://127.0.0.1:5555");
dealerOMS2.bindSync("tcp://127.0.0.1:5556");

// Handle incoming messages
dealerOMS.on("message", (message) => {
  //   console.log("Received message on dealerOMS:", message.toString());
  //   const result = message.toJSON().data;
  //   console.log({ result });
  console.log(new Date(), new Date().getMilliseconds());
  const data = JSON.parse(message.toString());
  console.log({ data });
  console.log(data.quantity)
  dealerOMS2.send(data.count);
});

// Send a message
dealerOMS.send("Hello from dealerOMS!");
