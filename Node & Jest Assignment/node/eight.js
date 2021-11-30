var fs = require("fs")
var stream = fs.createWriteStream('eight.txt', {flags: 'a'});
var data = "Hello, World!\n";
stream.write(data, function() {
   console.log("Write complete");
});