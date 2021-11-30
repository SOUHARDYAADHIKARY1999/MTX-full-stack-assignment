var http = require('http');

//server with json data
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
        id: 001,
        name: "XYZ",
        dept: "HR",
        designation: "Manager"
    };
    res.end(JSON.stringify(obj));
}
).listen(8081);


console.log('Server running at http://localhost:8081/getdata');