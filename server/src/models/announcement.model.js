const mongoose = require('mongoose')
const Joi = require('joi')

const schema = mongoose.Schema({
  title: { type: String, required: 'Title Required' },
  message: { type: String, required: 'Message Required' },
  isUrgent: { type: Boolean, required: 'isUrgent Required' }
})

schema.statics.validate = (obj) => {
  let joiSchema = Joi.object({
    title: Joi.string().required(),
    message: Joi.string().required(),
    isUrgent: Joi.boolean().required()
  })
  return joiSchema.validate(obj)
}

module.exports = mongoose.model('Announcement', schema)