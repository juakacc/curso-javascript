const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url !== "/pokemon.mp4") {
      // requisitando a página em si
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(
        '<video src="http://localhost:3000/pokemon.mp4" controls></video>'
      );
    } else {
      // requisitando o vídeo diretamente
      var file = path.resolve(__dirname, "pokemon.mp4");
      var range = req.headers.range;
      var position = range.replace("bytes=", "").split("-");
      var start = parseInt(position[0], 10);

      fs.stat(file, (err, stats) => {
        var total = stats.size;
        var end = position[1] ? parseInt(position[1], 10) : total - 1;
        var chunksize = end - start + 1;

        res.writeHead(200, {
          "Content-Range": "bytes " + start + "-" + end + "/" + total,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        });

        var stream = fs
          .createReadStream(file, {start: start, end: end})
          .on("open", () => {
            stream.pipe(res);
          })
          .on("error", err => {
            res.end(err);
          });
      });
    }
  })
  .listen(3000);
