// seeds.js just meant to run once at beginning of app setup - in order to *seed* some initial entries into the database

const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('CONNECTED MONGOOSE')
    })
    .catch( err => {
        console.log(err)
    })

// const p = new Product({
//     name: 'tomato',
//     price: 1.23,
//     category: 'vegetable'
// })

// p.save()
//     .then((res) => console.log(p))
//     .catch(err => {console.log(err)})

const seedProducts = [
    {
        name: 'tomato',
        price: 1.23,
        category: 'vegetable'
    },
    {
        name: 'pepper',
        price: 1.53,
        category: 'vegetable'
    },
    {
        name: 'apple',
        price: 0.83,
        category: 'fruit'
    }
]

// Product.insertMany(seedProducts)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

