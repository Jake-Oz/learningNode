const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request Event");
  res.end("Hello World from Server");
});

server.listen(5000, () => {
  console.log("Listening on Port : 5000...");
});
