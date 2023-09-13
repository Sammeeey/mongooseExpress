const mongoose = require('mongoose');
const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

const port = 3000
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('CONNECTED MONGOOSE')
    })
    .catch( err => {
        console.log(err)
    })


app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

app.get('/', (req, res) => {
    console.log('GET /')
    // res.send('GET /')
    res.render('home')
})

app.get('/products', async (req, res) => {
    console.log('GET /products')
    // res.send('GET /products')   

    const products = await Product.find({})
    // console.log(products)

    res.render('products/products', {products})
})

app.get('/products/new', async (req, res) => {
    console.log('GET /products/new')
    // res.send('GET /products/new')
    // console.log(req.params)
    // console.log(req.body)

    const schemaCategories = Product.schema.obj.category.enum

    res.render('products/productNew', {schemaCategories})
})

app.post('/products', async (req, res) => {
    console.log('POST /products')
    // res.send('POST /products')
    console.log(req.params)
    console.log(req.body)

    const {name, price, category} = req.body
    const newProduct = await Product.create({name, price, category})
    console.log(newProduct)

    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    console.log('GET /products/:id')
    // res.send('GET /products/:id')
    // console.log(req.params)
    // console.log(req.body)

    const { id } = req.params
    const product = await Product.findById(id)
    // console.log(product)

    res.render('products/product', {product})
})

app.get('/products/:id/edit', async (req, res) => {
    console.log('GET /products/:id/edit')
    // res.send('GET /products/:id/edit')
    // console.log(req.params)
    // console.log(req.body)

    const { id } = req.params
    const product = await Product.findById(id)
    // console.log(product)

    // console.log(Product.schema.obj.category.enum)
    const schemaCategories = Product.schema.obj.category.enum

    res.render('products/productEdit', {product, schemaCategories})
})

app.patch('/products/:id', async (req, res) => {
    console.log('PATCH /products/:id')
    // res.send('PATCH /products/:id')
    // console.log(req.params)
    // console.log(req.body)
    
    const {name, price, category} = req.body
    // console.log(name, price, category)
    const { id } = req.params
    await Product.findByIdAndUpdate(id, {name, price, category})

    res.redirect(`/products/${id}`)
})

app.delete('/products/:id', async (req, res) => {
    console.log('DELETE /products/:id')
    // res.send('DELETE /products/:id')
    console.log(req.params)
    console.log(req.body)

    const { id } = req.params
    await Product.findByIdAndDelete(id)

    res.redirect(`/products`)
})