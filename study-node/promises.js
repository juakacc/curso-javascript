const fs = require("fs");
const Promise = require("promise");

function read(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) {
        reject("Não foi possível abrir o arquivo");
      } else {
        resolve(data.toString());
      }
    });
  });
}

read("my_file.txt")
  .then(function (data) {
    console.log(data);
    return "Retornando uma promisse";
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
