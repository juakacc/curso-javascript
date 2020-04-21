const app = require("./config/express")();
require("./config/database")("mongodb://localhost:27017/treinaweb");

app.listen(app.get("port"), () => {
  console.log("Server is running");
});
