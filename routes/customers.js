const express = require('express')
const router = express.Router()
const Customer = require('../models/customers')

router.get('/',async (req,res)=>{
    const customers = await Customer.find()
    res.status(200).json(customers)
})
router.get('/:id',async (req,res)=>{
    const id = req.params.id
    const customers = await Customer.findById(id)
    res.status(200).json(customers)
})
router.post('/',async (req,res)=>{
    const newCustomer = new Customer({
        name : req.body.name,
        place:req.body.place
    })
    try {
        const savedData = await newCustomer.save()
        res.status(201).send(savedData)
    } catch (error) {
        console.log(error);
    }
})
router.patch('/:id',async (req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
        const updated = await Customer.findByIdAndUpdate(id,data) 
        const updated_data = await Customer.findById(id)
        res.status(200).json(updated_data)
    } catch (error) {
        res.status(404).json(error)
    }
    
})

module.exports = router