const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct
// (req, res, next) => {
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true
//   });
// }
);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct
//  (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// }
);

exports.routes = router;
