const users = require('./users');


//imports 3rd party
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//to parse incoming request.
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

console.log('Starting server...');
// const server = http.createServer(app);
// server.listen(3000);

// app.use((request, response, next)=>{

//     next();
// });

app.use('/add-products', (request, response, next)=>{

    response.send(`<html> 
    <h1> Welcome to assignment page! </h1>
     <br /> 
     <label>insert your product: </label> 
     <form action = "/product" method="POST" > 
        <input type="text" name='product' placeholder="product"> 
        <button type="submit">Send</button>
     </form>

  <html>`);
});

app.post('/product',(request, response, next)=>{
    //nesse ponto body é um objeto, não uma string ( tente colocar em uma string para ver o erro.)
    console.log(request.body);
    
    //redirecionamento.
    response.redirect('/');
});

app.use('/',(request, response, next)=>{
    console.log('running middleware first...');
     next();
});


app.use('/',(request, response, next)=>{

    response.send('<h1> Welcome home page.</h1>');
});


app.listen(3000);
console.log('... server started.');