var EventEmitter = require("events");

class Cao extends EventEmitter {
  latir() {
    console.log("Au au");
  }
}

var Rex = new Cao();
Rex.once("pessoa_no_portao", Rex.latir);
Rex.on("pessoa_no_portao", () => {
  console.log("Teste 2");
});

Rex.emit("pessoa_no_portao");
// Rex.removeListener("pessoa_no_portao", Rex.latir);
Rex.emit("pessoa_no_portao");
