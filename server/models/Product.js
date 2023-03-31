const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	available: {
		type: String,
		trim: true,
		required: true
	},
	category: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ProductCategory'
		}
	],
	price: {
		type: Number,
		default: false
	},
	seller: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Seller'
		}
	]
}, {
	timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;