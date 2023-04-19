const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  Parentcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  products:[{type:mongoose.Schema.Types.ObjectId, ref: "Product"}]
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
