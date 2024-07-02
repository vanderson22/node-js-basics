const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};


exports.getProductsById = (req, res, next) => {

  //precisa ter o mesmo nome que foi usado no controller.
  const id = req.params.id;

  Product.findById(id, product => {
    console.log(product);

    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Products-Details',
      path: `/products/${id}`
    });
  });

};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const product = req.body.prod;
  // adicionar o produto ao chart.
  const prod = new Product(product.title, product.imageUrl, product.description, product.price)
  const prods = [];

  prods.push(prod);
  console.log(`Product to chart- [${prod.title}]`);

  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    prods: prods
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
