const express = require('express')
const products = require('./data/products')

const app = express()

//Get Request en Raiz
app.get('/', (req, res) => {
    res.send('API is running...')
})

//Get Request of Product Catalog
app.get('/api/products', (req, res) => {
    res.json(products)
})

//Get Request of a Product 
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
    console.log(product)
})

app.listen(5000, console.log('Server running on port 5000'))
