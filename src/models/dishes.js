const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
  name: {
    required: true,
    type: String,
    maxlength: 20,
    minlength: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    maxlength: 140
  },
  ingredients:{
    type:[String]
    
  },
  preparationtime:{
      type:String,
      maxlength:20,
      require:true
  },
  available:{
      type:Boolean,
      required:true,
      default:true
  },
  category:{
      type:String,
      required:true,
      enum:[
          'Desayuno',
          'Comida',
          'Cena'
      ]
  }
})

// const model = mongoose.model(schema)

module.exports = {
  model: mongoose.model('Dish', schema),
  schema 
}