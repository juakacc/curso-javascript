var fs = require("fs");

// fs.writeFile("my_file.txt", "Treinamento intensivo", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Arquivo criado");
//   }
// });

// fs.readFile("my_file.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

const data = fs.readFileSync("my_file.txt");
console.log(data.toString());
