const zmq = require("zeromq");
const dealerB = zmq.socket("dealer");
const dealerB2 = zmq.socket("dealer");

// Set an identity for this socket (optional but useful for debugging)
// dealerB.identity = 'DealerB';

//port 5556 - bind
// dealerB.connect("tcp://127.0.0.1:5556"); //connect first

// Connect to the other Dealer
dealerB.connect("tcp://127.0.0.1:5555");
dealerB2.bindSync("tcp://127.0.0.1:5556");

// Handle incoming messages
dealerB.on("message", (message) => {
  //   console.log("Received message on DealerB:", message.toString());
  //   const result = message.toJSON().data;
  //   console.log({ result });
  console.log(new Date(), new Date().getMilliseconds());
  const data = JSON.parse(message.toString());
  console.log({ data });
  console.log(data.quantity)
  dealerB2.send(data.count);
});

// Send a message
dealerB.send("Hello from DealerB!");
