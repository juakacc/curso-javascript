const fs = require("fs");
const {join} = require("path");

const filePath = join(__dirname, "users.json");

const getUsers = () => {
  const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

  try {
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveUser = user => {
  fs.writeFileSync(filePath, JSON.stringify(user, null, "\t"));
};

const userRoute = app => {
  app
    .route("/users/:id?")
    .get((req, res) => {
      const user = getUsers();
      res.send(user);
    })
    .post((req, res) => {
      const users = getUsers();
      users.push(req.body);
      saveUser(users);
      res.status(201).send(users);
    })
    .put((req, res) => {
      const id = parseInt(req.params.id);
      const users = getUsers().map(user => {
        if (user.id === id) {
          return {
            ...user,
            ...req.body,
          };
        }
        return user;
      });
      saveUser(users);
      res.status(200).send(users);
    })
    .delete((req, res) => {
      const id = parseInt(req.params.id);
      const users = getUsers().filter(user => {
        return user.id !== id;
      });
      saveUser(users);
      res.status(204).send(users);
    });
};

module.exports = userRoute;
