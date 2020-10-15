const Product = require("../models/productModel.js");

// async because we used promise for good practices
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

module.exports = {
    getProducts,
    
}