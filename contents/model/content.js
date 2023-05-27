const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
})

const content = mongoose.model('Content', contentSchema)

module.exports = content
