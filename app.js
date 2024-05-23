//imports
const http = require('http');
const routes = require('./routes');

console.log('Starting server...');
const server = http.createServer(routes.handle);

server.listen(3000);
console.log('... server started.');