const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');

const directionSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  
  zip: {
    type: String,
  },

  reference: {
    type: String
  },
});

const userSchema = new mongoose.Schema({
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
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    exclude: true,
  },
  phone: {
    type: String,
    unique: true,
    match: /^\+(?:[0-9] ?){6,14}[0-9]$/
  },
  profileImage: {
    type: String,
    default: 'https://res.cloudinary.com/dlmbbgprl/image/upload/v1681533383/usuario_glywj2.png'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    enum: ['admin', 'seller', 'client'],
    default: 'client'
  },
  directions: [directionSchema],

  dateOfBirth: {
    type: Date
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  occupation: {
    type: String
  },
  interests: [{
    type: String
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
  token: {
    type: String
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
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

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return false;
  }
};

userSchema.statics.findByName = function(name) {
  return this.find({
    name: {
      $regex: new RegExp(name, 'i')
    }
  });
};

userSchema.statics.findByRole = function(role) {
  return this.find({
    role: role
  });
};

userSchema.methods.updateToken = async function() {
  const token = await generateToken();
  this.token = token;
  await this.save();
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;

