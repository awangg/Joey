const express = require('express')
const router = express.Router()

const { EventService } = require('../services')
const jwt = require('../utils/jwt')

/**
 * Retrieves all events
 * GET /api/v1/events
 */
router.get('/', jwt.validate, async (req, res) => {
  try {
    const events = await EventService.getAll()
    res.status(200).json(events)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Creates a new event
 * POST /api/v1/events
 */
router.post('/', jwt.validate, async (req, res) => {
  try {
    const event = await EventService.create(req.body)
    res.status(200).json(event)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Retrieves specific event
 * GET /api/v1/events/:id
 */
router.get('/:id', jwt.validate, async (req, res) => {
  try {
    const event = await EventService.getSpecific(req.params.id)
    res.status(200).json(event)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Edits an existing event
 * PUT /api/v1/events/:id
 * 
 * @param {*} id MongoDB document ID
 */
router.put('/:id', jwt.validate, async (req, res) => {
  try {
    const updated = await EventService.update(req.params.id, req.body)
    res.status(200).json(updated)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

/**
 * Removes an event
 * DELETE /api/v1/events/:id
 * 
 * @param {*} id MongoDB document ID
 */
router.delete('/:id', jwt.validate, async (req, res) => {
  try {
    const deleted = await EventService.delete(req.params.id)
    res.status(200).json(deleted)
  } catch (err) {
    res.status(err.status).json(err)
  }
})

module.exports = router