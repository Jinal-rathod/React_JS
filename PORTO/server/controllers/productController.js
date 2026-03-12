const Product = require("../models/Product");

// get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// featured
exports.featuredProducts = async (req, res) => {
  const products = await Product.find({ type: "featured" });
  res.json(products);
};

// latest
exports.latestProducts = async (req, res) => {
  const products = await Product.find({ type: "latest" });
  res.json(products);
};

// top rated
exports.topProducts = async (req, res) => {
  const products = await Product.find().sort({ rating: -1 }).limit(5);
  res.json(products);
};

// create product
exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};
