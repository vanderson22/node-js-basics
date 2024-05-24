//imports
const http = require('http');


//imports 3rd party
const express = require('express');

const app = express();

console.log('Starting server...');
const server = http.createServer(app);

server.listen(3000);
console.log('... server started.');