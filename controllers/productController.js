const Product = require("../models/productModel.js");
const { getPostData } = require("../utils.js");

// async because we used promise for good practices

// @desc    GETS All Products
// @route   GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    // Pass to error handler
  }
}

// @desc    GETS Single Products
// @route   GET /api/products:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Product Not Found </h1>");
    }
  } catch (error) {
    console.log(error);
    // Pass to error handler
  }
}

// @desc    Create A Product
// @route   POST /api/products
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);

    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
    // Pass to error handler
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
