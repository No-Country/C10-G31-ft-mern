const mongoose = require("mongoose");
const Subcategory = require("./ProductSubcategory")

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    minlength: [3, 'Category name must be at least 3 characters long'],
    maxlength: [50, 'Category name cannot be more than 50 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Category description is required'],
    minlength: [10, 'Category description must be at least 10 characters long'],
    maxlength: [500, 'Category description cannot be more than 500 characters long'],
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory'
  }],
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

const Category = mongoose.model('ProductCategory', categorySchema);

module.exports = Category;


