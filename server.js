const http = require("http");
const PORT = process.env.PORT || 5000;

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require ("./controllers/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET") {
    let id = req.url.split('/');
    id = id[id.length - 1]; 
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") { 
      createProduct(req, res);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "PUT") {
    let id = req.url.split('/');
    id = id[id.length - 1]; 
    updateProduct(req, res, id);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "DELETE") {
    let id = req.url.split('/');
    id = id[id.length - 1]; 
    deleteProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end('<h1>404 PAGE NOT FOUND </h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
