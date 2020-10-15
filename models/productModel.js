const { v4: uuidv4 } = require("uuid");

const products = require("../data/products.json");
const writeToFIle = require("../utils.js");

function findAll() {
  // Promise is just for good practice.
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    resolve(product);
  });
}
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeToFIle("./data/products.json", products);
    resolve(newProduct);
  });
}
module.exports = {
  findAll,
  findById,
  create,
};
