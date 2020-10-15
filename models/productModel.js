const products = require("../data/products.json");


function findAll() {
    // Promise is just for good practice.
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

module.exports = {
    findAll,

}