const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	available: {
		type: String,
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