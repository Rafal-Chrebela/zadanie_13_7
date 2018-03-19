var fs = require("fs");
var colors = require("colors");
var StatMode = require("stat-mode");

fs.stat("./cat.jpg", function(err, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString());
});

fs.readFile("./tekst.txt", "utf-8", function(err, data) {
  console.log("Dane przed zapisem!".blue);
  console.log(data);
  fs.appendFile("./tekst.txt", "\ni kolejna próba zapisu...", function(err) {
    if (err) throw err;
    console.log("Zapisano!".blue);
    fs.readFile("./tekst.txt", "utf-8", function(err, data) {
      console.log("Dane po zapisie".blue);
      console.log(data);
    });
  });
});

fs.readdir("./", function(err, files) {
  if (err) throw err;
  console.log(files);
  fs.writeFile("./files.txt", files, function(files) {
    console.log("Zapisano listę plików w files.txt".red);
  });
});
