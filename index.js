const http = require("node:http");
const fs = require("node:fs");

/* 
  function that extends the event emitter class receives requests and sends responses
  whenever a request is sent to the server, this callback function is executed
  after the request, the callback function builds the response to send back to the client
*/
const server = http.createServer((req, res) => {
  // HTTP response header
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  // End the response
  // res.end(html);
});

// have server listen for requests that takes in a port number => localhost:3000 on browser
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
