const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});
const Category = mongoose.model("Category", categorySchema);

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const Brand = mongoose.model("Brand", brandSchema);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  brand: {
    type: mongoose.Schema.ObjectId,
    ref: "Brand",
  },
  price: {
    required: true,
    type: Number,
  },
  offerPrice: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = {
  Category,
  Brand,
  Product,
};
