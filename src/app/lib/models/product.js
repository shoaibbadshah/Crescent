// models/product.js

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    category: String,
    images: Array,
    subCategory: String,
    stock: String,
    rating: Number,
    thumbnail: String,
    discountPercentage: Number,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
