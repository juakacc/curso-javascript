const login = require("../../config/auth").login;

module.exports = function (app) {
  const Curso = app.models.curso;

  const controller = {
    index: function (req, res) {
      Curso.find({}, [], {sort: {nome: 1}})
        .exec()
        .then(cursos => {
          res.render("index", {cursos});
        });
    },
    newItem: function (req, res) {
      const c = new Curso(req.body);
      c.save(function (err, curso) {
        if (err) {
          res.status(500).end();
          console.log(err);
        } else {
          res.json(curso);
        }
      });
    },
    remove: function (req, res) {
      Curso.remove({_id: req.params.id}, function (err) {
        if (!err) {
          res.json({message: "success"});
        } else {
          res.status(500).send();
        }
      });
    },
    login: function (req, res) {
      const {name, password} = req.body;

      login(name, password, function (response) {
        if (response) {
          res.json(response);
        } else {
          res.status(401).json({message: "erro de autenticação"});
        }
      });
    },
  };
  return controller;
};
