const express = require('express')
const router = new express.Router();
const verifyToken =require('../middleware/verifyToken');
const addProductController = require('../controller/add-productConstroller');
const ProductsController = require('../controller/productsControllrer');
const delteProduct = require('../controller/deleteProductController');
const getProductIdController = require('../controller/get-Product-idController');
const UpdatePorductByID = require('../controller/UpdateProductByIDController');
const searchProduct = require('../controller/searchProduct');




router.post('/add-product', verifyToken, addProductController);
router.get('/products', verifyToken, ProductsController);
router.delete('/product/:id', verifyToken,delteProduct);
router.get('/product/:id', verifyToken, getProductIdController)
router.put('/product/:id', verifyToken,UpdatePorductByID)
router.get('/search/:key', verifyToken,searchProduct )




module.exports = router