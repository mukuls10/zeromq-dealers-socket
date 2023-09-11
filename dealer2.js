const zmq = require("zeromq");
const dealerC = zmq.socket("dealer");

// Set an identity for this socket (optional but useful for debugging)
// dealerA.identity = 'DealerA';

// Connect to the other Dealer
dealerC.connect("tcp://127.0.0.1:6003");

const json = {
  symbol: "BTC-INR",
  quantity: 0.01,
  orderType: "market",
};

const str = JSON.stringify(json);
console.log(str)

// const buffer = Buffer.from(JSON.stringify(json));

// Handle incoming messages
dealerC.on("message", (message) => {
  console.log("Received message on DealerB2:", message.toString());
});

// Send a message
// setInterval(function() {
//   console.log(new Date(), new Date().getMilliseconds());
//   dealerA.send(str, new Date().getMilliseconds());
// }, 0.5);
