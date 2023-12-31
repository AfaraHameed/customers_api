const { Brand, Category, Product } = require("../models/products");

const createBrand = async (brand) => {
  const newBrand = new Brand({
    name: brand.name,
  });
  try {
    const created = await newBrand.save();
    return created;
  } catch (error) {
    return error;
  }
};

const createCategory = async (category) => {
  const newCategory = new Category({
    name: category.name,
  });
  try {
    const created = await newCategory.save();
    return created;
  } catch (error) {
    return error;
  }
};

const createProduct = async (product) => {
  const newproduct = new Product({
    name: product.name,
    category: product.category,
    brand: product.brand,
    price: product.price,
    offerPrice: product.offerPrice,
  });
  try {
    const created = await newproduct.save();
    return created;
  } catch (error) {
    return error;
  }
};

const getProducts =async ()=>{
    try {
        const products =await Product.find().populate(["category","brand"])
        return products
    } catch (error) {
        return error
    }
   
}
module.exports = {
  createBrand,
  createCategory,
  createProduct,
  getProducts
};
