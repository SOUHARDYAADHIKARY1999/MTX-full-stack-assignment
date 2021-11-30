var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hi there, I am Gyan!');
    res.end();
}
).listen(8081);

console.log('Server running at http://localhost:8081/index.html');