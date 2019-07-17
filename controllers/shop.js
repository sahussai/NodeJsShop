const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
     Product.fetchAll( (products) => {
        res.render('shop/product-list', {pageTitle: 'All Products', path: '/products', prods: products});
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart'} );
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'})
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll( (products) => {
        res.render('shop/index', {pageTitle: 'All Products', path: '/', prods: products});
    });
};