const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: {
    required: true,
    type: String,
    maxlength: 20,
    minlength: 1
  },
  password:{
      type:String,
      required:True
  }

})

// const model = mongoose.model(schema)

module.exports = {
  model: mongoose.model('Waiter', schema),
  schema 
}