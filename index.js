const http = require("node:http");
const fs = require("node:fs");

/* 
  function that extends the event emitter class receives requests and sends responses
  whenever a request is sent to the server, this callback function is executed
  after the request, the callback function builds the response to send back to the client
*/
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify({ firstName: "Bruce", lastName: "Wayne" }));
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

// have server listen for requests that takes in a port number => localhost:3000 on browser
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
