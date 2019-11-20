const express = require('express');
const path = require('path');
const isAuth = require('../middleware/is-Auth');

const router = express.Router();

const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

router.get('/add-product', isAuth, adminController.getAddProduct);

router.get('/products', isAuth, adminController.getProducts);

router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
