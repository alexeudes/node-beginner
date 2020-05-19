const express = require('express');
const app = express();
const PORT = process.argv[2] || 8000;

app.get('/', (request, response) => {
    response.send(`Hello World from Express`);
});

app.listen(PORT, getPort);

function getPort() {
    console.log('Up and running server on: ', PORT);
}