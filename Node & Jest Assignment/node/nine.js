const fs = require('fs');

const txtFile = "input.txt";
const destination = "nine.txt";


fs.copyFile(txtFile, destination, (err) => {
    if (err) throw err;
    console.log('testfile was copied to nine.txt');
}
);