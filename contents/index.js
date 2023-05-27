const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const cors = require('cors')
const Content = require('../contents/model/content')

const port = process.env.PORT || 8001

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)

app.post('/addContents', async (req, res) => {
  const content = new Content(req.body)

  await content.save()
  res.status(201).send('Content Added')
})

app.get('/getContents', async (req, res) => {
  await Content.find({})
    .then((content) => {
      res.status(200).send(content)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, (req, res) => {
  console.log(`Server is up on the PORT ${port}`)
})
