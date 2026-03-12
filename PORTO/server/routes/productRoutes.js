const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);

router.get("/featured", productController.featuredProducts);

router.get("/latest", productController.latestProducts);

router.get("/top", productController.topProducts);

router.post("/add", productController.addProduct);

module.exports = router;
