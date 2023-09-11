const zmq = require("zeromq");
const dealerFAWSS = zmq.socket("dealer");

// Set an identity for this socket (optional but useful for debugging)
// dealerA.identity = 'DealerA';

// Connect to the other Dealer
dealerFAWSS.bindSync("tcp://127.0.0.1:5555");

// Handle incoming messages
dealerFAWSS.on("message", (message) => {
  console.log("Received message on DealerB:", message.toString());
});

let count = 0;

// Send a message
setInterval(function() {
  count++;
  const json = {
    count: count,
    s: "BTC-INR",
    q: 0.01,
    ot: "market",
  };
  
  console.time(`stringified time`)
  const str = JSON.stringify(json);
  console.timeEnd(`stringified time`)

  console.log(new Date(), new Date().getMilliseconds(), count);
  dealerFAWSS.send(str);
}, 10);
