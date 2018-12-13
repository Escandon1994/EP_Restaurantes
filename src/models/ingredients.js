const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 1
  },
  unit:{
      type:Number,
      required:True,
    },
  measure:{
    type:String,
  }
})

// const model = mongoose.model(schema)

module.exports = {
  model: mongoose.model('Ingredient', schema),
  schema 
}