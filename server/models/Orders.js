import mongoose from "mongoose";

//En plural o singular?
const ordersSchema = mongoose.Schema({
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

const Orders = mongoose.model('Orders', ordersSchema);

export default Orders;