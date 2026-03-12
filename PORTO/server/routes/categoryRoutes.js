const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

router.get("/", async (req, res) => {
  const data = await Category.find();
  res.json(data);
});

router.post("/add", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

module.exports = router;
