
const path = require('path');

const rootDir = require('../util/path')

const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir,   'views' , 'add-product.html'));
 
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  
  products.push( {tittle : req.body.title});
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;