const mongoose = require("mongoose");
const ProductCategory = require("./ProductCategory")

const variationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
});

const attributeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductCategory",
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    variations: [variationSchema],
    attributes: [attributeSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
