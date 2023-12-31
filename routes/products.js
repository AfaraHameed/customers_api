const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
router.post('/brand',productController.createBrand)
router.post('/category',productController.createCategory)
router.post('/',productController.createProduct)
router.get('/',productController.getProducts)

module.exports = router