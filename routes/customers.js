const express = require('express')
const router = express.Router()
const Customer = require('../models/customers')
const customerController = require('../controllers/customers')

router.get('/',customerController.getCustomers)
router.get('/:id',customerController.getCustomer)
router.post('/',customerController.createCustomer)
router.patch('/:id',customerController.updateCustomer)
router.delete('/:id',customerController.deleteCustomer)

module.exports = router