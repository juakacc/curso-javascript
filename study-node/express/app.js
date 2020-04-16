const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();

app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("views", "./views");
app.set("view engine", "jade");

app
  .route("/")
  .get(function (req, res) {
    listarCursos(res);
  })
  .post(function (req, res) {
    const {nome, categoria} = req.body;
    var curso = {nome, categoria};

    inserirCurso(curso, function () {
      listarCursos(res);
    });
  });

app.get("/", (req, res) => {
  res.render("index", {
    nome: "Joaquim da China",
  });
});

// app.get("/abc/:id?", (req, res) => {
//   const {id} = req.params;

//   res.json({hello: "World", id});
// });

app.listen(3000, () => {
  console.log("Servidor executando na porta 3000");
});

function listarCursos(resp) {
  MongoClient.connect("mongodb://localhost:27017/treinaweb", function (
    err,
    db
  ) {
    db.collection("cursos")
      .find()
      .sort({nome: 1})
      .toArray(function (err, result) {
        resp.render("index", {data: result});
      });
  });
}

function inserirCurso(obj, callback) {
  MongoClient.connect("mongodb://localhost:27017/treinaweb", function (
    err,
    db
  ) {
    db.collection("cursos").insertOne(obj, function (err, result) {
      callback();
    });
  });
}
