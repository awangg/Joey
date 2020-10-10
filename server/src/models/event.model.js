const mongoose = require('mongoose')
const Joi = require('joi')

const eventSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  registered: { type: [String] },
  created: { type: Date, default: Date.now },
  date: { type: Date, default: Date.now }
})

eventSchema.statics.validate = function(obj) {
  let schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    registered: Joi.array().items(Joi.string()).required(),
    created: Joi.date(),
    date: Joi.date().required()
  })
  return schema.validate(obj)
}

module.exports = mongoose.model('Event', eventSchema)