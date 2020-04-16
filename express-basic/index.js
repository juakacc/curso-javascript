const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoute = require("./routes/userRouter");

userRoute(app);

app.get("/", (req, res) => {
  res.send("Olá mundo com express");
});

app.listen(port, () => {
  console.log("Server is running in port " + port);
});
