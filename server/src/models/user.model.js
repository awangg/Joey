const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Joi = require('joi')

const schema = new mongoose.Schema({
  name: { type: String, required: 'Name Required' },
  password: { type: String, required: 'Password Required' },
  email: { type: String, unique: true, lowercase: true, required: 'Email Required' },
  room: { type: Number, default: -1 },
  events: { type: [{
    id: { type: String },
    title: { type: String },
    description: { type: String },
    created: { type: Date }
  }], default: [] },
  birthday: { type: Date, required: 'Birthday Required' }
})

schema.pre('save', function (next) {
  let person = this
  if(!person.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(person.password, salt, (err, hash) => {
      person.password = hash
      return next()
    })
  })
})

schema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

schema.statics.validateModel = (model) => {
  const joiSchema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    room: Joi.number(),
    events: Joi.object(),
    birthday: Joi.date().required()
  })
  return joiSchema.validate(model)
}

module.exports = mongoose.model('User', schema)