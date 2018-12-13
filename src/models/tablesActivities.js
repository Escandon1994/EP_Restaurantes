const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  dishes: {
    type: [String],
    required: true,
    minlength: 1
  },
  tables: {
    type: [String],
    required: true,
    maxlength: 20,
    minlength: 2
  },
  waiters: {
    type: [String],
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  orders: {
    type: [String],
    required: true,
    maxlength: 20,
    minlength: 2
  },
  numberdinners: {
    type: Number,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  date: {
    type: Date,
    maxlength: 20,
    minlength: 2
  },
  active: {
    type: Boolean,
    maxlength: 20,
    minlength: 2
  },
  totalcount: {
    type: Number,
    maxlength: 20,
    minlength: 2
  },
})

module.exports = { 
  schema,
  model: mongoose.model('TableActivity', schema) 
}