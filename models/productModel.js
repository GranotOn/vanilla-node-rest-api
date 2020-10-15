const products = require("../data/products.json");


function findAll() {
    // Promise is just for good practice.
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((product) => product.id === id);
        resolve(product);
    })
}
module.exports = {
    findAll,
    findById,
}