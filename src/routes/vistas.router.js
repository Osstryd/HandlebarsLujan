const express = require("express");
const router = express.Router();
const ProductManager = require("../productManager.js");

const productManager = new ProductManager("products.json");

router.get("/", (req, res) => {
  const products = productManager.getAllProducts();
  res.render("index", { products });
});

router.get("/realtimeproducts", (req, res) => {
  const products = productManager.getAllProducts();
  res.render("realTimeProducts", { products });
});

module.exports = router;
