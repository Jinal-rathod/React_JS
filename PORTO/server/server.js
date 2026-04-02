const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/product", productRoutes);
app.use("/api/categorie", categoryRoutes);

// DB connectionw
mongoose
  .connect(
    "mongodb+srv://jinalrathod594_db_user:jinal_594@cluster1.dei5gdk.mongodb.net/?appName=Cluster1",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
