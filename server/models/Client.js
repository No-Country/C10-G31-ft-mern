const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const clientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8
	},
	token: { 
    type: String 
  },
	isActive: {
		type: Boolean,
		default: false
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	order: [
		{
			type: mongoose.Schema.Types.OjectId,
			ref: 'Order'
		}
	]
}, {
	timestamps: true
});

clientSchema.pre('save', async function(next) {
	try {
		if (!this.isModified('password')) {
			return next();
		}
		const hashedPassword = await bcrypt.hash(this.password, 10);
		this.password = hashedPassword;
		return next();
	} catch (err) {
		return next(err);
	}
});

clientSchema.methods.comparePassword = async function(candidatePassword) {
	try {
		const isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		return false;
	}
};

const Client = mongoose.model('Client', clientSchema);

module.exports = Client; 