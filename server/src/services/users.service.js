const { Event, User } = require('../models')
const ApiError = require('../utils/error')

const getAll = async () => {
  let users = await User.find({})
  return users
}

const updateInfo = async (email, data) => {
  let user = await User.findOne({ email: email })
  if(data.name) user.name = data.name
  if(data.password) user.password = data.password
  if(data.room) user.room = data.room
  return user.save()
}

const registerForEvent = async (email, eventId) => {
  let user = await User.findOne({ email: email })
  if(!user) throw new ApiError('User Not Found', 401)

  let event = await Event.findOne({ _id: eventId })
  if(!event) throw new ApiError('Event Not Found', 404)

  user.events.push(event)
  event.registered.push(user._id)
  await event.save()
  return user.save()
}

const cancelOnEvent = async (email, eventId) => {
  let user = await User.findOne({ email: email })
  if(!user) throw new ApiError('User Not Found', 401)

  let event = await Event.findOne({ _id: eventId })
  if(!event) throw new ApiError('Event Not Found', 404)

  event.registered.splice(event.registered.indexOf(user._id), 1)
  await event.save()
  return User.findOneAndUpdate({ email: email }, { $pull: { events: { _id: eventId } } })
}

module.exports = {
  getAll: getAll,
  updateInfo: updateInfo,
  registerForEvent: registerForEvent,
  cancelOnEvent: cancelOnEvent
}