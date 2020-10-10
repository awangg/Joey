const express = require('express')
const router = express.Router()

const { UserService } = require('../services')
const jwt = require('../utils/jwt')

/**
 * Edits user information
 * PUT /api/v1/users/
 */
router.put('/', jwt.validate, async (req, res) => {
  try {
    let email = jwt.decode(req.headers.authorization.split(' ')[1]).email
    let updated = await UserService.updateInfo(email, req.body)
    res.status(200).json(updated)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Registers user for event
 * PUT /api/v1/user/events/:eventId
 */
router.put('/events/:eventId', jwt.validate, async (req, res) => {
  try {
    let email = jwt.decode(req.headers.authorization.split(' ')[1]).email
    let updated = await UserService.registerForEvent(email, req.params.eventId)
    res.status(200).json(updated)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Unregisters user for event
 * DELETE /api/v1/users/events/:eventId
 */
router.delete('/events/:eventId', jwt.validate, async (req, res) => {
  try {
    let email = jwt.decode(req.headers.authorization.split(' ')[1]).email
    let updated = await UserService.cancelOnEvent(email, req.params.eventId)
    res.status(200).json(updated)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

module.exports = router