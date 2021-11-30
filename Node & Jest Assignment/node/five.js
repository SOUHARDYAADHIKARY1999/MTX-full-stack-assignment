var fs = require('fs');

fs.readFile('input.txt',function(err,data){
    if(err) throw err;
    else{
        console.log(data.toString());
        console.log("Number of characters",data.toString().length);
        console.log("Number of words",data.toString().split(" ").length);
        console.log("Number of lines",data.toString().split("\n").length)
    }
})