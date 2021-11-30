var fs = require('fs');
var readLine = require('readline-sync');
var stream = fs.createReadStream('/Users/souhardyaadhikary/Desktop/Web_projects/MTX Full stack/Node Assignment/node/input.txt');

//search a string index in file with user input string

var found = false;
var search = readLine.question("Enter the string to search: ");


stream.on('data', function(data){
    var str = data.toString();
    var index = str.indexOf(search);
    if(index != -1){
        console.log("Found at index ", index);
        found = true;
    }
});
