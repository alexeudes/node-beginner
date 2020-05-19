const http = require('http');

const PORT = process.argv[2] || 8000

http.createServer(getRequest)
     .listen(PORT, getPort);

function getPort() {
    console.log('Up and running server on port: ', PORT);
}

function getRequest(request, response) {
    let body;

    switch (request.url) {
        case '/json':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            body = JSON.stringify({
                id: 1,
                route: 'json'
            });
            break;
        case '/html':
            response.setHeader('Content-Type', 'text/html');
            body = '<h1>HTML</h1>'
            break;
        case '/':
            body = 'HOME';
            break;
        default:
            response.statusCode = 404;
            body = 'Page Not Found';
    }

    response.end(body);
}