const path = require('path');

const express = require('express');

const procuctsController = require('../controllers/products');

const router = express.Router();

router.get('/', procuctsController.getProducts
// (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// }
);

module.exports.routes = router;
