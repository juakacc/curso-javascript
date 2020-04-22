const express = require("express");
const bodyParser = require("body-parser");
const load = require("express-load");

var auth = require("./auth").auth;

module.exports = function () {
  var app = express();

  app.set("port", 3000);
  // app.use(express.static("./public"));
  app.use(auth.initialize());
  app.use(bodyParser.json());
  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  load("models", {
    cwd: "app",
  })
    .then("controllers")
    .then("routes")
    .into(app);

  return app;
};
