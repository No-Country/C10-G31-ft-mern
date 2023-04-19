const mongoose = require('mongoose');

const directionSchema = new mongoose.Schema({
  address: {
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
  postalCode: {
    type: String,
    required: true
  },
  reference: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

const Direction = mongoose.model('Direction', directionSchema);


