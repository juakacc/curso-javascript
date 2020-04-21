const cursos = [
  {
    nome: "Unity3D",
    categoria: "Jogos",
  },
  {
    nome: "Express",
    categoria: "JavaScript",
  },
  {
    nome: "React",
    categoria: "FrontEnd",
  },
];

module.exports = function (app) {
  const controller = {
    index: function (req, res) {
      res.render("index", {cursos});
    },
    newItem: function (req, res) {
      cursos.push(req.body);
      res.json(cursos);
    },
  };
  return controller;
};
