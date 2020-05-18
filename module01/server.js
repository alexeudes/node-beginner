const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Server is running!');
    response.end();
}).listen(8000);