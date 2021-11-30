var fs = require('fs');
var readline = require('readline-sync');

var count =0;
stringToFind = readline.question("Enter the string to find: ");

fs.readFile("input.txt",function(err,data){
    var input = data.toString();
    var lines = input.split("\n").join(",").split(" ").join(",").split(",");
    
    for(var i=0;i<lines.length;i++){
        if(stringToFind==lines[i]){
            count++;
        }
    }
    console.log("The number of occurance of the string is: "+count);
});