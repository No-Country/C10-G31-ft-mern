const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;