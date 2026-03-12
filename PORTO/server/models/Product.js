const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
  },

  category: {
    type: String,
  },

  rating: {
    type: Number,
    default: 0,
  },

  type: {
    type: String,
    // featured, latest, top
  },
});

module.exports = mongoose.model("Product", productSchema);
