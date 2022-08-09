const http = require('http');

http.createServer((req, res) => {
    res.end('Hello from backend')
}).listen(3000);

