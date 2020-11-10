const { Announcement } = require('../models')
const { create } = require('../models/user.model')
const ApiError = require('../utils/error')

const getAll = async () => {
  const announcements = await Announcement.find({})
  return announcements
}

const getSpecific = async (id) => {
  const announcement = await Announcement.find({ _id: id })
  if(!announcement) throw new ApiError('Announcement Not Found', 404)
  return announcement
}

const createAnnouncement = async (body) => {
  const { value, error } = await Announcement.validate(body)
  if(error) throw new ApiError(error.details[0].message, 400)
  const announcement = new Announcement(value)
  return announcement.save()
}

module.exports = {
  getAll: getAll,
  getSpecific: getSpecific,
  createAnnouncement: createAnnouncement
}