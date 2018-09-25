const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemCardSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  discription: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: String,
    trim: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: String,
    lowercase: true
  }
});

const Item = mongoose.model('Item', itemCardSchema);

module.exports = Item;
