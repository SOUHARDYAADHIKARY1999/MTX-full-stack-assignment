var fs = require("fs");
fs.mkdirSync('NewFolder');
console.log("New Folder is Created");
fs.rmdirSync("NewFolder");
console.log("New Folder is Deleted!");