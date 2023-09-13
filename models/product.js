const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
  })

  const Product = mongoose.model('Product', productSchema)

  module.exports = Product

//   const tomato = new Product({name: 'tomato', price: 1.29})
//   const pepper = new Product({name: 'pepper', price: 1.59})
//   console.log(tomato)
//   console.log(pepper)
//   tomato.save()
//   pepper.save()
//   await Product.deleteMany({})

//   const products = await Product.find()
//   console.log(products)