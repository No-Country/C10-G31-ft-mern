const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	products: [{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
			required: true
		},
		quantity: {
			type: Number,
			required: true
		},
		price: {
			type: Number,
			required: true
		}
	}],
	client: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	direction: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User.directions',
		required: true
	},
	status: {
		type: String,
		enum: ['pending', 'in_progress', 'delivered'],
		default: 'pending'
	},
	total: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
