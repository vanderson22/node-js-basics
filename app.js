
//imports 3rd party
const express = require('express');

const app = express();

console.log('Starting server...');
// const server = http.createServer(app);
// server.listen(3000);

// app.use((request, response, next)=>{

//     next();
// });

app.use('/add-product', (request, response, next)=>{

    response.send('<h1> Welcome to product page.</h1>');
});


app.use('/',(request, response, next)=>{

    response.send('<h1> Welcome home page.</h1>');
});


app.listen(3000)
console.log('... server started.');