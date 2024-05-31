const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const rootDir = require('./util/path')

const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//this is the template engine
app.set('view engine' , 'pug');
//views in views folder
app.set('views' , 'views');

console.log('loading server....');
  

app.use(bodyParser.urlencoded({extended: false}));
//This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes.routes);

app.use("/" , (req, resp, next) =>{
    resp
        .status(404)
        .sendFile( path.join(rootDir, 'views', 'page-not-found.html'));
} );

app.listen(3000);
