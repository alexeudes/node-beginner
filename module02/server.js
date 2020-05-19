const express = require('express');
const app = express();
const PORT = process.argv[2] || 8000;

app.get('/', (request, response) => {
    response.end(`HOME`);
});

app.get('/json', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
        id: 1,
        route: 'json'
    }));
});

app.get('/html', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    body = '<h1>HTML</h1>'
});

app.listen(PORT, getPort);

function getPort() {
    console.log('Up and running server on: ', PORT);
}