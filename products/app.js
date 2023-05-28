const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const cors = require('cors')
const Product = require('./model/product')

const port = process.env.PORT || 8000

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)

app.post('/addProducts', async (req, res) => {
  const product = new Product(req.body)

  await product.save()
  res.status(201).send('Product Added')
})

app.get('/getProducts', async (req, res) => {
  await Product.find({})
    .then((product) => {
      res.status(200).send(product)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, (req, res) => {
  console.log(`Server is up on the PORT ${port}`)
})
