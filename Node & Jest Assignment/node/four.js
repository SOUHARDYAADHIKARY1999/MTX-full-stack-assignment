var fs = require('fs');
var filedata = "";
var readerStream =fs.createReadStream('input.txt');

readerStream.on('data',function(readData){
    fileData=readData;
})
readerStream.on('end',function(){
    console.log("Read data:"+fileData);
})
readerStream.on('error',function(err){
    console.error("Error is "+err);
})
