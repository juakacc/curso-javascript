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
  };
  return controller;
};
