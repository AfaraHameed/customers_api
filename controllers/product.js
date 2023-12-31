
const productRepository = require('../repositories/product')
const createCategory = async (req,res)=>{
 const category = req.body
 try {
    const created = await productRepository.createCategory(category)
    res.status(201).json({success:true,data:created})
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}

const createBrand = async (req,res) =>{
    const brand = req.body
    try {
       const created = await productRepository.createBrand(brand)
       res.status(201).json({success:true,data:created})
    } catch (error) {
       res.status(500).json({error:error.message})
    }
}

const createProduct = async (req,res)=>{
    const product = req.body
 try {
    const created = await productRepository.createProduct(product)
    res.status(201).json({success:true,data:created})
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}

const getProducts = async (req,res)=>{
    try {
        const products = await productRepository.getProducts()
        res.status(200).json({success:true,data:{message:products}})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createBrand,
    createCategory,
    createProduct,
    getProducts
}