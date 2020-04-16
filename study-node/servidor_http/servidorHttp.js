const http = require("http");
const fs = require("fs");
const url = require("url");

var server = http.createServer(function (req, res) {
  const urlPath = url.parse(req.url);
  const path = urlPath.pathname;
  console.log(__dirname + path);

  fs.readFile(__dirname + path, function (err, data) {
    if (!err) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    } else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("<h1>Arquivo not found</h1>");
      res.end();
    }
  });
});

server.listen(3000);
