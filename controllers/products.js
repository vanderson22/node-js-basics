

//exportando o middleware

const Product = require("../models/product");

module.exports.getAddProduct = 
(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });

} 

const productsList = [];

module.exports.postAddProduct = 
(req, res, next) => {
    console.log(`add product ${req.body.title}`)
    const product = new Product(req.body.title);
    // products.push({ title: req.body.title });
    product.save()

    res.redirect('/');
}

module.exports.getProducts = 
(req, res, next) => {
      // const products = Product.fetchAll();
      
      // res.render('shop', {
      //   prods: products,
      //   pageTitle: 'Shop',
      //   path: '/',
      //   hasProducts: products.length > 0,
      //   activeShop: true,
      //   productCSS: true
      // });

      //renderizar após o callback terminar, ele substitui o return!
      // Mesmo sem return, a variável é preenchida.
       Product.fetchAll(productsCallback =>{

        res.render('shop', {
          prods: productsCallback,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: productsCallback.length > 0,
          activeShop: true,
          productCSS: true
        });
       });
      

    }
