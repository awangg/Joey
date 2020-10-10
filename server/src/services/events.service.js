const { Event } = require('../models')
const ApiError = require('../utils/error')

const getAll = async () => {
  const documents = await Event.find({})
  return documents
}

const getSpecific = async (id) => {
  const event = await Event.find({ _id: id })
  if(!event) throw new ApiError('Event Not Found', 404)
  return event
}

const create = async (body) => {
  const { value, error } = await Event.validate(body)
  if(error) throw new ApiError(error.details[0].message, 400)
  const event = new Event(value)
  await event.save()
  return event
}

const update = async (id, body) => {
  const { value, error } = await Event.validate(body)
  if(error) throw new ApiError(error.details[0].message, 400)
  
  const updated = await Event.findOneAndReplace({ _id: id }, value)
  if(!updated) throw new ApiError('Event Not Found', 404)
  return updated
}

const remove = async (id) => {
  const deleted = await Event.findOneAndDelete({ _id: id })
  if(!deleted) throw new ApiError('Event Not Found', 404)
  return deleted
}

module.exports = {
  getAll: getAll,
  getSpecific: getSpecific,
  create: create,
  update: update,
  delete: remove
}