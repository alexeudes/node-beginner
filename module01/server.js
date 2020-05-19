const http = require('http');

const PORT = process.argv[2] || 8000

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Server!');
    response.end();
}).listen(PORT, getPort);

function getPort() {
    console.log('Up and running server on port: ', PORT);
}