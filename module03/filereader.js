const fs = require('fs');

fs.readFile(`${__dirname}/text.txt`, (err, data) => {
    if (err) throw err;
    console.log(`Sucess reading file ${__dirname}/text.js`);
});